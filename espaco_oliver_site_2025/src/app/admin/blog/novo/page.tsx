"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseBlog } from '@/lib/blog-supabase';
import { BlogPostForm } from '@/types/blog';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function NewBlogPost() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<BlogPostForm>({
    title: '',
    content: '',
    image_url: '',
    tags: [],
    published: false,
    excerpt: '',
    author: '',
  });
  const [tagInput, setTagInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'published' ? value === 'true' : value
    }));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      // Verificar se o título foi fornecido
      if (!formData.title.trim()) {
        throw new Error('Título é obrigatório');
      }

      // Verificar se o conteúdo foi fornecido
      if (!formData.content.trim()) {
        throw new Error('Conteúdo é obrigatório');
      }

      // Gerar slug a partir do título
      const slug = createSlug(formData.title);

      // Verificar se o slug já existe
      const { data: existingPost } = await supabaseBlog
        .from('blog_posts')
        .select('id')
        .eq('slug', slug)
        .single();

      if (existingPost) {
        throw new Error('Já existe um post com título similar. Por favor, escolha um título diferente.');
      }

      // Criar o post
      const now = new Date().toISOString();
      const { error } = await supabaseBlog
        .from('blog_posts')
        .insert({
          title: formData.title,
          slug,
          content: formData.content,
          image_url: formData.image_url || null,
          tags: formData.tags,
          published: formData.published,
          excerpt: formData.excerpt || null,
          author: formData.author || null,
          created_at: now,
          updated_at: now,
        });

      if (error) {
        throw error;
      }

      router.push('/admin/blog');
    } catch (error: any) {
      console.error('Erro ao criar post:', error);
      setError(error.message || 'Erro ao criar o post');
      setSaving(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-8">
      <div className="mb-4 md:mb-6 flex items-center">
        <Link 
          href="/admin/blog" 
          className="text-gray-600 hover:text-black flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Voltar para a lista
        </Link>
      </div>

      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-black">Novo Post</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 md:mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 md:p-6">
        <div className="space-y-4 md:space-y-6">
          <div>
            <label htmlFor="title" className="block text-black font-medium mb-2">
              Título*
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="author" className="block text-black font-medium mb-2">
              Autor
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
            />
          </div>

          <div>
            <label htmlFor="image_url" className="block text-black font-medium mb-2">
              URL da Imagem
            </label>
            <input
              type="url"
              id="image_url"
              name="image_url"
              value={formData.image_url || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
              placeholder="https://exemplo.com/imagem.jpg"
            />
            <p className="text-sm text-gray-500 mt-1">
              Deixe em branco para não usar imagem ou insira URL de uma imagem pública
            </p>
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-black font-medium mb-2">
              Resumo (Excerpt)
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt || ''}
              onChange={handleChange}
              rows={2}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
              placeholder="Breve resumo do post (opcional)"
            ></textarea>
          </div>

          <div>
            <label className="block text-black font-medium mb-2">
              Tags
            </label>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-black text-black"
                placeholder="Adicionar tag"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="bg-black text-white px-4 py-2 rounded-md sm:rounded-l-none hover:bg-gray-800 w-full sm:w-auto"
              >
                Adicionar
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.tags.map((tag, index) => (
                <div key={index} className="bg-gray-100 px-3 py-1 rounded-full flex items-center">
                  <span className="text-gray-800">{tag}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="content" className="block text-black font-medium mb-2">
              Conteúdo*
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={12}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black font-mono"
              required
              placeholder="Conteúdo em formato Markdown..."
            ></textarea>
            <p className="text-sm text-gray-500 mt-1">
              Você pode usar formatação Markdown para estilizar seu texto
            </p>
          </div>

          <div>
            <label htmlFor="published" className="block text-black font-medium mb-2">
              Status
            </label>
            <select
              id="published"
              name="published"
              value={formData.published.toString()}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
            >
              <option value="true">Publicado</option>
              <option value="false">Rascunho</option>
            </select>
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:justify-end space-y-2 space-y-reverse sm:space-y-0 sm:space-x-4 pt-4">
            <Link
              href="/admin/blog"
              className="w-full sm:w-auto text-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-black"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 disabled:opacity-50"
              disabled={saving}
            >
              {saving ? 'Salvando...' : 'Criar Post'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
} 