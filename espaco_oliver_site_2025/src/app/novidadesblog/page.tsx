"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabaseBlog } from '@/lib/blog-supabase';
import { BlogPost } from '@/types/blog';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabaseBlog
          .from('blog_posts')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        setPosts(data as BlogPost[]);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="bg-[#F3EDE8] min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}>
            Novidades & Blog
          </h1>
          <p className="text-black max-w-2xl mx-auto" 
             style={{ fontFamily: "var(--font-funnel-sans)" }}>
            Acompanhe as últimas novidades, tendências e dicas do Espaço Oliver Beauty
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black"></div>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/novidadesblog/${post.slug}`}>
                  <div className="relative h-60 w-full">
                    <Image
                      src={post.image_url || '/images/blog-placeholder.jpg'}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 text-black text-xs px-2 py-1 rounded"
                          style={{ fontFamily: "var(--font-funnel-sans)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 
                      className="text-xl font-bold mb-2 text-black"
                      style={{ fontFamily: "var(--font-instrument-serif)" }}
                    >
                      {post.title}
                    </h2>
                    <p 
                      className="text-black text-sm mb-4" 
                      style={{ fontFamily: "var(--font-funnel-sans)" }}
                    >
                      {new Date(post.created_at).toLocaleDateString('pt-BR')}
                    </p>
                    <p 
                      className="text-black line-clamp-3" 
                      style={{ fontFamily: "var(--font-funnel-sans)" }}
                    >
                      {post.excerpt || post.content.substring(0, 150)}...
                    </p>
                    <div className="mt-4">
                      <span 
                        className="text-black font-medium hover:underline" 
                        style={{ fontFamily: "var(--font-instrument-serif)" }}
                      >
                        Ler mais →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 
              className="text-2xl mb-4 text-black" 
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Nenhum post disponível no momento
            </h2>
            <p 
              className="text-black" 
              style={{ fontFamily: "var(--font-funnel-sans)" }}
            >
              Em breve teremos novidades. Volte mais tarde!
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 