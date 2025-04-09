'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalForms: 0,
    totalSubmissions: 0,
    recentForms: [] as any[],
    recentSubmissions: [] as any[]
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Obter total de formulários
        const { count: formsCount, error: formsError } = await supabase
          .from('forms')
          .select('*', { count: 'exact', head: true });

        // Obter total de submissões
        const { count: submissionsCount, error: submissionsError } = await supabase
          .from('form_submissions')
          .select('*', { count: 'exact', head: true });

        // Obter formulários recentes
        const { data: recentForms, error: recentFormsError } = await supabase
          .from('forms')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(5);

        // Obter submissões recentes
        const { data: recentSubmissions, error: recentSubmissionsError } = await supabase
          .from('form_submissions')
          .select('*, forms(title)')
          .order('created_at', { ascending: false })
          .limit(5);

        if (formsError || submissionsError || recentFormsError || recentSubmissionsError) {
          throw new Error('Erro ao buscar estatísticas');
        }

        setStats({
          totalForms: formsCount || 0,
          totalSubmissions: submissionsCount || 0,
          recentForms: recentForms || [],
          recentSubmissions: recentSubmissions || []
        });
      } catch (error) {
        console.error('Erro ao buscar estatísticas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard Administrativo</h1>

      {loading ? (
        <div className="text-center py-10">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
          <p className="mt-2 text-gray-500">Carregando...</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Formulários</h2>
              <p className="text-3xl font-bold text-indigo-600">{stats.totalForms}</p>
              <div className="mt-4">
                <Link
                  href="/admin/forms/new"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                >
                  + Criar novo formulário
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Submissões</h2>
              <p className="text-3xl font-bold text-indigo-600">{stats.totalSubmissions}</p>
              <div className="mt-4">
                <Link
                  href="/admin/submissions"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                >
                  Ver todas submissões
                </Link>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Formulários Recentes</h2>
              
              {stats.recentForms.length === 0 ? (
                <p className="text-gray-500 text-sm">Nenhum formulário criado ainda.</p>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {stats.recentForms.map((form) => (
                    <li key={form.id} className="py-3">
                      <Link 
                        href={`/admin/forms/${form.id}`}
                        className="flex justify-between items-center hover:bg-gray-50 p-2 -mx-2 rounded"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">{form.title}</p>
                          <p className="text-xs text-gray-500">
                            Criado em {new Date(form.created_at).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs ${form.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {form.is_active ? 'Ativo' : 'Inativo'}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="mt-4">
                <Link
                  href="/admin/forms"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                >
                  Ver todos
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Submissões Recentes</h2>
              
              {stats.recentSubmissions.length === 0 ? (
                <p className="text-gray-500 text-sm">Nenhuma submissão recebida ainda.</p>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {stats.recentSubmissions.map((submission) => (
                    <li key={submission.id} className="py-3">
                      <Link 
                        href={`/admin/submissions/${submission.id}`}
                        className="flex justify-between items-center hover:bg-gray-50 p-2 -mx-2 rounded"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {submission.forms.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            Recebido em {new Date(submission.created_at).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                        <span className="text-xs text-gray-500">Detalhes →</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="mt-4">
                <Link
                  href="/admin/submissions"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                >
                  Ver todas
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 