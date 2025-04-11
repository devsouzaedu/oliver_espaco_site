"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabaseBlog } from '@/lib/blog-supabase';
import { BlogPost } from '@/types/blog';
import { FaPlus, FaEdit, FaTrash, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabaseBlog
          .from('blog_posts')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        setPosts(data as BlogPost[]);
      } catch (error: any) {
        console.error('Erro ao buscar posts:', error);
        setError(error.message || 'Erro ao carregar os posts');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const handleDeletePost = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este post?')) {
      return;
    }

    try {
      const { error } = await supabaseBlog
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      setPosts(posts.filter(post => post.id !== id));
    } catch (error: any) {
      console.error('Erro ao excluir post:', error);
      alert(`Erro ao excluir post: ${error.message}`);
    }
  };

  const handleTogglePublish = async (post: BlogPost) => {
    try {
      const { error } = await supabaseBlog
        .from('blog_posts')
        .update({ published: !post.published })
        .eq('id', post.id);

      if (error) {
        throw error;
      }

      setPosts(posts.map(p => 
        p.id === post.id ? { ...p, published: !p.published } : p
      ));
    } catch (error: any) {
      console.error('Erro ao atualizar post:', error);
      alert(`Erro ao atualizar post: ${error.message}`);
    }
  };

  return (
    <div className="px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-black">Gerenciar Blog</h1>
        <Link 
          href="/admin/blog/novo" 
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center"
        >
          <FaPlus className="mr-2" /> Novo Post
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-black"></div>
        </div>
      ) : posts.length > 0 ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Título
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{post.title}</div>
                    <div className="text-sm text-gray-500">{post.slug}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {new Date(post.created_at).toLocaleDateString('pt-BR')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      post.published 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.published ? 'Publicado' : 'Rascunho'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Link 
                        href={`/admin/blog/editar/${post.id}`}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <FaEdit className="h-5 w-5" />
                      </Link>
                      <button
                        onClick={() => handleTogglePublish(post)}
                        className={`${
                          post.published ? 'text-yellow-600 hover:text-yellow-900' : 'text-green-600 hover:text-green-900'
                        }`}
                      >
                        {post.published ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-8 bg-white rounded-lg shadow">
          <p className="text-gray-500 mb-4">Nenhum post encontrado.</p>
          <Link 
            href="/admin/blog/novo" 
            className="text-black hover:underline font-medium"
          >
            Criar seu primeiro post
          </Link>
        </div>
      )}
    </div>
  );
} 