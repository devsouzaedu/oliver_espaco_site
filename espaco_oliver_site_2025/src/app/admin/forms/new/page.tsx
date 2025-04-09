'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'date' | 'textarea' | 'select' | 'checkbox';
  required: boolean;
  options?: string[];
  order: number;
}

export default function NewFormPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(null);
  const [fields, setFields] = useState<FormField[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentField, setCurrentField] = useState<FormField>({
    id: '',
    label: '',
    type: 'text',
    required: false,
    options: [],
    order: 0,
  });
  const [showFieldModal, setShowFieldModal] = useState(false);
  const [currentOptions, setCurrentOptions] = useState('');
  const [editingFieldIndex, setEditingFieldIndex] = useState<number | null>(null);

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverImage(file);
      
      // Cria uma URL para preview da imagem
      const reader = new FileReader();
      reader.onload = (event) => {
        setCoverImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFieldModal = (field?: FormField, index?: number) => {
    if (field) {
      setCurrentField({
        ...field,
        options: field.options || []
      });
      setCurrentOptions(field.options?.join('\n') || '');
      setEditingFieldIndex(index !== undefined ? index : null);
    } else {
      setCurrentField({
        id: Math.random().toString(36).substring(2, 9),
        label: '',
        type: 'text',
        required: false,
        options: [],
        order: fields.length,
      });
      setCurrentOptions('');
      setEditingFieldIndex(null);
    }
    setShowFieldModal(true);
  };

  const closeFieldModal = () => {
    setShowFieldModal(false);
  };

  const saveField = () => {
    // Validação básica
    if (!currentField.label.trim()) {
      alert('O campo precisa de um nome');
      return;
    }

    // Se o tipo for select, valida as opções
    if (currentField.type === 'select' && (!currentOptions.trim() || currentOptions.split('\n').filter(Boolean).length < 2)) {
      alert('Campos de seleção precisam de pelo menos duas opções');
      return;
    }

    // Atualiza as opções a partir do texto
    const updatedField = {
      ...currentField,
      options: currentField.type === 'select' ? currentOptions.split('\n').filter(Boolean) : undefined
    };

    if (editingFieldIndex !== null) {
      // Editando um campo existente
      const updatedFields = [...fields];
      updatedFields[editingFieldIndex] = updatedField;
      setFields(updatedFields);
    } else {
      // Adicionando um novo campo
      setFields([...fields, updatedField]);
    }

    closeFieldModal();
  };

  const removeField = (index: number) => {
    if (confirm('Tem certeza que deseja remover este campo?')) {
      const updatedFields = [...fields];
      updatedFields.splice(index, 1);
      
      // Atualiza a ordem dos campos restantes
      const reorderedFields = updatedFields.map((field, idx) => ({
        ...field,
        order: idx
      }));
      
      setFields(reorderedFields);
    }
  };

  const moveField = (index: number, direction: 'up' | 'down') => {
    if ((direction === 'up' && index === 0) || 
        (direction === 'down' && index === fields.length - 1)) {
      return;
    }

    const updatedFields = [...fields];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    // Troca os campos de posição
    [updatedFields[index], updatedFields[targetIndex]] = [updatedFields[targetIndex], updatedFields[index]];
    
    // Atualiza a ordem dos campos
    const reorderedFields = updatedFields.map((field, idx) => ({
      ...field,
      order: idx
    }));
    
    setFields(reorderedFields);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError('O título do formulário é obrigatório');
      return;
    }
    
    if (fields.length === 0) {
      setError('Adicione pelo menos um campo ao formulário');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // Verificar explicitamente a autenticação
      const { data: authData } = await supabase.auth.getUser();
      console.log("Status de autenticação:", authData);
      
      // 1. Criar o formulário
      console.log("Tentando criar formulário:", { title, description });
      const { data: formData, error: formError } = await supabase
        .from('forms')
        .insert([
          { 
            title, 
            description: description || null,
            is_active: true
          }
        ])
        .select();
      
      if (formError) {
        console.error("Erro ao criar formulário:", formError);
        throw formError;
      }
      
      console.log("Formulário criado com sucesso:", formData);
      const formId = formData[0].id;
      
      // 2. Tentar fazer upload da imagem de capa (se existir), mas não impedir o fluxo se falhar
      if (coverImage) {
        try {
          const fileExt = coverImage.name.split('.').pop();
          const fileName = `${formId}.${fileExt}`;
          const filePath = `form-covers/${fileName}`;
          
          console.log("Tentando fazer upload de imagem:", filePath);
          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('forms')
            .upload(filePath, coverImage);
          
          if (uploadError) {
            console.error("Erro no upload da imagem (continuando mesmo assim):", uploadError);
          } else {
            console.log("Upload de imagem bem-sucedido:", uploadData);
            
            // Obter URL pública da imagem
            const { data: urlData } = supabase.storage
              .from('forms')
              .getPublicUrl(filePath);
            
            console.log("URL pública da imagem:", urlData);
            
            // Atualizar o formulário com a URL da imagem
            const { error: updateError } = await supabase
              .from('forms')
              .update({ cover_image_url: urlData.publicUrl })
              .eq('id', formId);
            
            if (updateError) {
              console.error("Erro ao atualizar URL da imagem (continuando mesmo assim):", updateError);
            }
          }
        } catch (imageError) {
          console.error("Erro no processo de upload de imagem (continuando mesmo assim):", imageError);
        }
      }
      
      // 3. Criar os campos do formulário
      const fieldsToInsert = fields.map(field => ({
        form_id: formId,
        label: field.label,
        type: field.type,
        required: field.required,
        options: field.options && field.options.length > 0 ? field.options : null,
        "order": field.order
      }));
      
      console.log("Tentando criar campos do formulário:", fieldsToInsert);
      const { error: fieldsError } = await supabase
        .from('form_fields')
        .insert(fieldsToInsert);
      
      if (fieldsError) {
        console.error("Erro ao criar campos:", fieldsError);
        throw fieldsError;
      }
      
      console.log("Campos criados com sucesso!");
      
      // Redirecionar para a página de listagem de formulários
      router.push('/admin/forms');
      
    } catch (error: any) {
      console.error('Erro ao criar formulário:', error);
      setError(error.message || 'Erro ao criar formulário');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-black">Criar Novo Formulário</h1>
      </div>
      
      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6">
          {error}
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Informações básicas */}
            <div>
              <h2 className="text-lg font-medium text-black mb-4">Informações Básicas</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-black mb-1">
                    Título <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder-black"
                    placeholder="Ex: Cadastro para Evento do Dia das Mães"
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-black mb-1">
                    Descrição (opcional)
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder-black"
                    placeholder="Uma breve descrição sobre o formulário"
                  />
                </div>
                
                <div>
                  <label htmlFor="cover-image" className="block text-sm font-medium text-black mb-1">
                    Imagem de Capa (opcional)
                  </label>
                  <input
                    type="file"
                    id="cover-image"
                    accept="image/*"
                    onChange={handleCoverImageChange}
                    className="block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  />
                  <p className="mt-1 text-xs text-black">
                    Recomendado: PNG, JPG ou GIF com no máximo 2MB
                  </p>
                  
                  {coverImagePreview && (
                    <div className="mt-2">
                      <img 
                        src={coverImagePreview} 
                        alt="Preview" 
                        className="h-40 object-cover rounded-md"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Campos do formulário */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-black">Campos do Formulário</h2>
                <button
                  type="button"
                  onClick={() => openFieldModal()}
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  + Adicionar Campo
                </button>
              </div>
              
              {fields.length === 0 ? (
                <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-md">
                  <p className="text-black">
                    Nenhum campo adicionado. Clique em "Adicionar Campo" para começar.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {fields.map((field, index) => (
                    <div key={field.id} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-md">
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{field.label}</p>
                        <div className="flex items-center mt-1 space-x-3">
                          <span className="text-xs text-gray-500">
                            Tipo: {field.type}
                          </span>
                          {field.required && (
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">
                              Obrigatório
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={() => moveField(index, 'up')}
                          disabled={index === 0}
                          className={`p-1 rounded-md ${index === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-200'}`}
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          onClick={() => moveField(index, 'down')}
                          disabled={index === fields.length - 1}
                          className={`p-1 rounded-md ${index === fields.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-200'}`}
                        >
                          ↓
                        </button>
                        <button
                          type="button"
                          onClick={() => openFieldModal(field, index)}
                          className="p-1 text-indigo-600 hover:bg-indigo-50 rounded-md"
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          onClick={() => removeField(index)}
                          className="p-1 text-red-600 hover:bg-red-50 rounded-md"
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="pt-5 border-t border-gray-200">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => router.push('/admin/forms')}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`ml-3 inline-flex justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Salvando...' : 'Salvar Formulário'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      
      {/* Modal para adicionar/editar campo */}
      {showFieldModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {editingFieldIndex !== null ? 'Editar Campo' : 'Adicionar Campo'}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="field-label" className="block text-sm font-medium text-black mb-1">
                      Nome do Campo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="field-label"
                      value={currentField.label}
                      onChange={(e) => setCurrentField({...currentField, label: e.target.value})}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder-black"
                      placeholder="Ex: Nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="field-type" className="block text-sm font-medium text-black mb-1">
                      Tipo de Campo <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="field-type"
                      value={currentField.type}
                      onChange={(e) => setCurrentField({
                        ...currentField, 
                        type: e.target.value as any,
                        options: e.target.value === 'select' ? [] : undefined
                      })}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                    >
                      <option value="text" className="text-black">Texto</option>
                      <option value="email" className="text-black">Email</option>
                      <option value="number" className="text-black">Número</option>
                      <option value="date" className="text-black">Data</option>
                      <option value="textarea" className="text-black">Área de texto</option>
                      <option value="select" className="text-black">Seleção</option>
                      <option value="checkbox" className="text-black">Checkbox</option>
                    </select>
                  </div>
                  
                  {currentField.type === 'select' && (
                    <div>
                      <label htmlFor="field-options" className="block text-sm font-medium text-black mb-1">
                        Opções <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="field-options"
                        value={currentOptions}
                        onChange={(e) => setCurrentOptions(e.target.value)}
                        rows={4}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder-black"
                        placeholder="Digite uma opção por linha"
                      />
                      <p className="mt-1 text-xs text-black">
                        Adicione uma opção por linha. Ex: Opção 1, Opção 2, etc.
                      </p>
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="field-required"
                      checked={currentField.required}
                      onChange={(e) => setCurrentField({...currentField, required: e.target.checked})}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="field-required" className="ml-2 block text-sm text-black">
                      Campo obrigatório
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={saveField}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Salvar
                </button>
                <button
                  type="button"
                  onClick={closeFieldModal}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 