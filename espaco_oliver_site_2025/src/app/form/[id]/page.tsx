'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Form, FormField } from '@/types/forms';

interface FormSubmission {
  [key: string]: any;
}

export default function PublicFormPage({ params }: { params: { id: string } }) {
  const [form, setForm] = useState<Form | null>(null);
  const [fields, setFields] = useState<FormField[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormSubmission>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        setLoading(true);
        // Buscar detalhes do formulário
        const { data: formData, error: formError } = await supabase
          .from('forms')
          .select('*')
          .eq('id', params.id)
          .eq('is_active', true)
          .single();

        if (formError) throw formError;
        if (!formData) throw new Error('Formulário não encontrado ou inativo');

        setForm(formData);

        // Buscar campos do formulário
        const { data: fieldsData, error: fieldsError } = await supabase
          .from('form_fields')
          .select('*')
          .eq('form_id', params.id)
          .order('"order"', { ascending: true });

        if (fieldsError) throw fieldsError;
        setFields(fieldsData || []);

        // Inicializar o objeto de dados do formulário
        const initialData: FormSubmission = {};
        fieldsData.forEach((field: FormField) => {
          initialData[field.id] = field.type === 'checkbox' ? false : '';
        });
        setFormData(initialData);
      } catch (error: any) {
        console.error('Erro ao carregar formulário:', error);
        setError(error.message || 'Erro ao carregar o formulário');
      } finally {
        setLoading(false);
      }
    };

    fetchForm();
  }, [params.id]);

  const handleInputChange = (fieldId: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    let hasError = false;
    const requiredFields = fields.filter(field => field.required);
    
    for (const field of requiredFields) {
      const value = formData[field.id];
      if (
        value === '' || 
        value === null || 
        value === undefined || 
        (Array.isArray(value) && value.length === 0)
      ) {
        hasError = true;
        setError(`O campo "${field.label}" é obrigatório`);
        break;
      }
    }
    
    if (hasError) return;
    
    setSubmitting(true);
    setError(null);
    
    try {
      // Formatar os dados para submissão
      const submissionData = fields.reduce((acc, field) => {
        acc[field.label] = formData[field.id];
        return acc;
      }, {} as Record<string, any>);
      
      // Enviar submissão
      const { error: submissionError } = await supabase
        .from('form_submissions')
        .insert([
          {
            form_id: params.id,
            data: submissionData
          }
        ]);
      
      if (submissionError) throw submissionError;
      
      // Limpar formulário e exibir mensagem de sucesso
      setFormData({});
      setSubmitted(true);
    } catch (error: any) {
      console.error('Erro ao enviar formulário:', error);
      setError(error.message || 'Erro ao enviar o formulário');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
          <p className="mt-2 text-black">Carregando formulário...</p>
        </div>
      </div>
    );
  }

  if (error && !submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-black mb-2">Erro</h2>
            <p className="text-black">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="mt-2 text-xl font-semibold text-black">Formulário enviado com sucesso!</h2>
            <p className="mt-2 text-black">Obrigado por preencher o formulário.</p>
            <button
              onClick={() => {
                setSubmitted(false);
                window.location.reload();
              }}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Preencher novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {form?.cover_image_url && (
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={form.cover_image_url} 
              alt={form.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-black">{form?.title}</h1>
          
          {form?.description && (
            <p className="mt-2 text-black">{form.description}</p>
          )}
          
          {error && (
            <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {fields.length === 0 ? (
              <p className="text-black text-center py-4">Este formulário não possui campos.</p>
            ) : (
              fields.map((field) => (
                <div key={field.id} className="space-y-1">
                  <label 
                    htmlFor={field.id} 
                    className="block text-sm font-medium text-black"
                  >
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  
                  {field.type === 'text' && (
                    <input
                      type="text"
                      id={field.id}
                      value={formData[field.id] || ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      required={field.required}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder-black"
                    />
                  )}
                  
                  {field.type === 'email' && (
                    <input
                      type="email"
                      id={field.id}
                      value={formData[field.id] || ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      required={field.required}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder-black"
                    />
                  )}
                  
                  {field.type === 'number' && (
                    <input
                      type="number"
                      id={field.id}
                      value={formData[field.id] || ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      required={field.required}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder-black"
                    />
                  )}
                  
                  {field.type === 'date' && (
                    <input
                      type="date"
                      id={field.id}
                      value={formData[field.id] || ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      required={field.required}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder-black"
                    />
                  )}
                  
                  {field.type === 'textarea' && (
                    <textarea
                      id={field.id}
                      value={formData[field.id] || ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      required={field.required}
                      rows={4}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder-black"
                    />
                  )}
                  
                  {field.type === 'select' && field.options && (
                    <select
                      id={field.id}
                      value={formData[field.id] || ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      required={field.required}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                    >
                      <option value="" className="text-black">Selecione uma opção</option>
                      {field.options.map((option, i) => (
                        <option key={i} value={option} className="text-black">
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                  
                  {field.type === 'checkbox' && (
                    <div className="mt-1 flex items-center">
                      <input
                        type="checkbox"
                        id={field.id}
                        checked={!!formData[field.id]}
                        onChange={(e) => handleInputChange(field.id, e.target.checked)}
                        required={field.required}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor={field.id} className="ml-2 block text-sm text-black">
                        Sim
                      </label>
                    </div>
                  )}
                </div>
              ))
            )}
            
            <div className="pt-5">
              <button
                type="submit"
                disabled={submitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  submitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {submitting ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </form>
        </div>
        
        <div className="bg-gray-50 px-6 py-4 sm:px-8">
          <p className="text-xs text-black text-center">
            Espaço Oliver - Formulário gerado automaticamente
          </p>
        </div>
      </div>
    </div>
  );
} 