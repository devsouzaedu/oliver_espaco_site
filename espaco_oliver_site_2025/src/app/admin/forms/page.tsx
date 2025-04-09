'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from './supabase';
import { Form } from '@/types/forms';

export default function FormsPage() {
  const [forms, setForms] = useState<Form[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('forms')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        setForms(data || []);
      } catch (error: any) {
        setError(error.message || 'Erro ao buscar formulários');
        console.error('Erro ao buscar formulários:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, []);

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('forms')
        .update({ is_active: !currentStatus })
        .eq('id', id);

      if (error) {
        throw error;
      }

      // Atualiza a lista localmente
      setForms(forms.map(form => 
        form.id === id ? { ...form, is_active: !currentStatus } : form
      ));
    } catch (error: any) {
      console.error('Erro ao atualizar status:', error);
      alert('Erro ao atualizar status: ' + error.message);
    }
  };

  const handleDeleteForm = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este formulário? Esta ação não pode ser desfeita.')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('forms')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      // Remove o formulário da lista
      setForms(forms.filter(form => form.id !== id));
    } catch (error: any) {
      console.error('Erro ao excluir formulário:', error);
      alert('Erro ao excluir formulário: ' + error.message);
    }
  };

  const copyFormLink = (id: string) => {
    const url = `${window.location.origin}/form/${id}`;
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 3000); // Reset após 3 segundos
      })
      .catch(err => {
        console.error('Erro ao copiar link:', err);
        alert('Erro ao copiar link: ' + err.message);
      });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-black">Gerenciar Formulários</h1>
        <Link
          href="/admin/forms/new"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Novo Formulário
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-10">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
          <p className="mt-2 text-black">Carregando formulários...</p>
        </div>
      ) : forms.length === 0 ? (
        <div className="text-center py-10 bg-white rounded-lg shadow-md">
          <p className="text-black mb-4">Nenhum formulário encontrado</p>
          <Link
            href="/admin/forms/new"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Criar seu primeiro formulário
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Título
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Data de criação
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-black uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {forms.map((form) => (
                <tr key={form.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-black">
                      {form.title}
                    </div>
                    {form.description && (
                      <div className="text-xs text-black truncate max-w-xs">
                        {form.description}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                    {new Date(form.created_at).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleToggleStatus(form.id, form.is_active)}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        form.is_active
                          ? 'bg-green-100 text-green-800 hover:bg-green-200'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {form.is_active ? 'Ativo' : 'Inativo'}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Link
                        href={`/admin/forms/${form.id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Editar
                      </Link>
                      <Link
                        href={`/form/${form.id}`}
                        target="_blank" 
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Ver
                      </Link>
                      <button
                        onClick={() => copyFormLink(form.id)}
                        className="text-green-600 hover:text-green-900 relative"
                        aria-label="Copiar link"
                      >
                        {copiedId === form.id ? (
                          <span className="text-green-700">Copiado!</span>
                        ) : (
                          <span>Copiar Link</span>
                        )}
                      </button>
                      <button
                        onClick={() => handleDeleteForm(form.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 