"use client"

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { supabaseBlog } from '@/lib/blog-supabase';
import { BlogPost } from '@/types/blog';
import { motion } from 'framer-motion';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        if (!slug) return;

        const { data, error } = await supabaseBlog
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .eq('published', true)
          .single();

        if (error) {
          throw error;
        }

        setPost(data as BlogPost);
      } catch (error: any) {
        console.error('Erro ao buscar post:', error);
        setError(error.message || 'Erro ao carregar o post');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#F3EDE8]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[#F3EDE8] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4 text-black" style={{ fontFamily: "var(--font-instrument-serif)" }}>
            Post não encontrado
          </h1>
          <p className="text-black mb-8" style={{ fontFamily: "var(--font-instrument-serif)" }}>
            {error || 'O post que você está procurando não existe ou não está disponível.'}
          </p>
          <Link 
            href="/novidadesblog" 
            className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Voltar para o Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-[#F3EDE8] py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <Link 
          href="/novidadesblog" 
          className="inline-flex items-center mb-8 text-black hover:underline"
          style={{ fontFamily: "var(--font-instrument-serif)" }}
        >
          ← Voltar para o Blog
        </Link>

        <article className="bg-white rounded-lg shadow-sm overflow-hidden max-w-4xl mx-auto">
          {post.image_url && (
            <div className="relative h-[400px] w-full">
              <Image
                src={post.image_url}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="p-8">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 text-black text-xs px-2 py-1 rounded"
                    style={{ fontFamily: "var(--font-instrument-serif)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 
                className="text-3xl md:text-4xl font-bold mb-4 text-black"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                {post.title}
              </h1>
              <div className="flex items-center text-black mb-8">
                {post.author && (
                  <span className="mr-4" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                    Por {post.author}
                  </span>
                )}
                <span style={{ fontFamily: "var(--font-instrument-serif)" }}>
                  {new Date(post.created_at).toLocaleDateString('pt-BR')}
                </span>
              </div>
            </div>

            <div className="prose prose-xl max-w-none" style={{ fontFamily: "var(--font-instrument-serif)" }}>
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-black" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-4 text-black" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-5 mb-3 text-black" {...props} />,
                  p: ({node, ...props}) => <p className="text-black mb-5 text-lg" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                  li: ({node, ...props}) => <li className="mb-2 text-black text-lg" {...props} />,
                  a: ({node, ...props}) => <a className="text-black underline hover:text-gray-600 text-lg" {...props} />,
                  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-black text-lg" {...props} />,
                  img: ({node, ...props}) => (
                    <div className="my-6">
                      <img className="w-full rounded-lg" {...props} />
                    </div>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
    </motion.div>
  );
} 