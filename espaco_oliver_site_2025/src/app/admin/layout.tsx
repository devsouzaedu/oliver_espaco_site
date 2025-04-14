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
  FaBlog,
  FaBars,
  FaTimes
} from 'react-icons/fa';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Links do menu de navegação
  const navLinks = [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Formulários', href: '/admin/forms' },
    { name: 'Submissões', href: '/admin/submissions' },
    { name: 'Blog', href: '/admin/blog' },
  ];
  
  // Se tiver usuário, renderiza o layout administrativo
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-indigo-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo e navegação desktop */}
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/admin/dashboard" className="font-bold text-xl">
                  Espaço Oliver Admin
                </Link>
              </div>
              {/* Links de navegação para desktop */}
              <div className="hidden md:flex ml-6 items-center space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname.startsWith(link.href)
                        ? 'bg-indigo-700'
                        : 'hover:bg-indigo-500'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Informações do usuário e botão de saída */}
            <div className="flex items-center">
              {/* Menu para dispositivos móveis */}
              <button 
                className="md:hidden mr-2 p-2 rounded-md hover:bg-indigo-500 focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>

              <div className="hidden md:flex ml-3 items-center">
                <span className="mr-2 truncate max-w-[150px]">{user.email}</span>
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

        {/* Menu mobile expandido */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-indigo-700 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname.startsWith(link.href)
                      ? 'bg-indigo-800'
                      : 'hover:bg-indigo-600'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="truncate max-w-[200px] text-sm">{user.email}</span>
                <button
                  onClick={async () => {
                    await supabase.auth.signOut();
                    router.push('/admin/login');
                  }}
                  className="px-3 py-1 bg-indigo-800 hover:bg-indigo-900 rounded-md text-sm"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  );
} 