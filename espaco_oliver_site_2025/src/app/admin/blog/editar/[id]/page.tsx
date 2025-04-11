"use client"

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabaseBlog } from '@/lib/blog-supabase';
import { BlogPost, BlogPostForm } from '@/types/blog';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function EditBlogPost() {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    async function fetchPost() {
      try {
        if (!id) return;

        const { data, error } = await supabaseBlog
          .from('blog_posts')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          throw error;
        }

        const post = data as BlogPost;
        setFormData({
          title: post.title,
          content: post.content,
          image_url: post.image_url || '',
          tags: post.tags || [],
          published: post.published,
          excerpt: post.excerpt || '',
          author: post.author || '',
        });
      } catch (error: any) {
        console.error('Erro ao buscar post:', error);
        setError(error.message || 'Erro ao carregar o post');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      if (!id) return;

      // Verificar se o título foi fornecido
      if (!formData.title.trim()) {
        throw new Error('Título é obrigatório');
      }

      // Verificar se o conteúdo foi fornecido
      if (!formData.content.trim()) {
        throw new Error('Conteúdo é obrigatório');
      }

      const { error } = await supabaseBlog
        .from('blog_posts')
        .update({
          title: formData.title,
          content: formData.content,
          image_url: formData.image_url || null,
          tags: formData.tags,
          published: formData.published,
          excerpt: formData.excerpt || null,
          author: formData.author || null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id);

      if (error) {
        throw error;
      }

      router.push('/admin/blog');
    } catch (error: any) {
      console.error('Erro ao salvar post:', error);
      setError(error.message || 'Erro ao salvar o post');
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-center">
        <Link 
          href="/admin/blog" 
          className="text-gray-600 hover:text-black flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Voltar para a lista
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-6 text-black">Editar Post</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
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

        <div className="mb-4">
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

        <div className="mb-4">
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

        <div className="mb-4">
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

        <div className="mb-4">
          <label className="block text-black font-medium mb-2">
            Tags
          </label>
          <div className="flex items-center">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black text-black"
              placeholder="Adicionar tag"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800"
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

        <div className="mb-4">
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

        <div className="mb-6">
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

        <div className="flex justify-end space-x-4">
          <Link
            href="/admin/blog"
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-black"
          >
            Cancelar
          </Link>
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 disabled:opacity-50"
            disabled={saving}
          >
            {saving ? 'Salvando...' : 'Salvar Alterações'}
          </button>
        </div>
      </form>
    </div>
  );
} 