'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { supabase } from './supabase';
import Image from 'next/image';
import { 
  FaHome, 
  FaWpforms, 
  FaRegListAlt, 
  FaUsers, 
  FaSignOutAlt, 
  FaChevronRight,
  FaBlog
} from 'react-icons/fa';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();
  
  // Verificar se o usuário está logado na montagem do componente
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      
      // Se não houver sessão e não estiver na página de login, redireciona
      if (!data.session && pathname !== '/admin/login') {
        router.push('/admin/login');
      } else if (data.session) {
        setUser(data.session.user);
      }
      
      setLoading(false);
    };
    
    checkUser();
    
    // Configurar listener para mudanças de autenticação
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        router.push('/admin/login');
      } else if (session && pathname === '/admin/login') {
        router.push('/admin/dashboard');
      }
      
      setUser(session?.user || null);
    });
    
    return () => {
      // Limpar listener ao desmontar
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, [pathname, router]);
  
  // Se estiver carregando ou se for a página de login, apenas renderiza o conteúdo
  if (loading || pathname === '/admin/login') {
    return <>{children}</>;
  }
  
  // Se não tiver usuário, não renderiza nada (será redirecionado)
  if (!user) {
    return null;
  }
  
  // Se tiver usuário, renderiza o layout administrativo
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-indigo-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/admin/dashboard" className="font-bold text-xl">
                  Espaço Oliver Admin
                </Link>
              </div>
              <div className="ml-6 flex items-center space-x-4">
                <Link
                  href="/admin/dashboard"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === '/admin/dashboard'
                      ? 'bg-indigo-700'
                      : 'hover:bg-indigo-500'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/forms"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname.startsWith('/admin/forms')
                      ? 'bg-indigo-700'
                      : 'hover:bg-indigo-500'
                  }`}
                >
                  Formulários
                </Link>
                <Link
                  href="/admin/submissions"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname.startsWith('/admin/submissions')
                      ? 'bg-indigo-700'
                      : 'hover:bg-indigo-500'
                  }`}
                >
                  Submissões
                </Link>
                <Link
                  href="/admin/blog"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname.startsWith('/admin/blog')
                      ? 'bg-indigo-700'
                      : 'hover:bg-indigo-500'
                  }`}
                >
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <div className="ml-3 relative">
                <div className="flex items-center">
                  <span className="mr-2">{user.email}</span>
                  <button
                    onClick={async () => {
                      await supabase.auth.signOut();
                      router.push('/admin/login');
                    }}
                    className="px-3 py-1 bg-indigo-800 hover:bg-indigo-700 rounded-md text-sm"
                  >
                    Sair
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  );
} 