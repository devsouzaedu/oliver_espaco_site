'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../supabase';
import { Form } from '@/types/forms';

interface Submission {
  id: string;
  form_id: string;
  created_at: string;
  data: Record<string, any>;
  forms: Form;
}

export default function SubmissionDetailsPage({ params }: { params: { id: string } }) {
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchSubmission = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('form_submissions')
          .select('*, forms(id, title, description)')
          .eq('id', params.id)
          .single();

        if (error) throw error;
        if (!data) throw new Error('Submissão não encontrada');

        setSubmission(data);
      } catch (error: any) {
        console.error('Erro ao buscar submissão:', error);
        setError(error.message || 'Erro ao buscar dados da submissão');
      } finally {
        setLoading(false);
      }
    };

    fetchSubmission();
  }, [params.id]);

  const handleDelete = async () => {
    if (!confirm('Tem certeza que deseja excluir esta submissão? Esta ação não pode ser desfeita.')) {
      return;
    }

    try {
      setDeleting(true);
      const { error } = await supabase
        .from('form_submissions')
        .delete()
        .eq('id', params.id);

      if (error) throw error;

      router.push('/admin/submissions');
    } catch (error: any) {
      console.error('Erro ao excluir submissão:', error);
      alert('Erro ao excluir submissão: ' + error.message);
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
        <p className="mt-2 text-black">Carregando dados da submissão...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Erro</h2>
          <p className="text-black">{error}</p>
          <Link
            href="/admin/submissions"
            className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Voltar para Submissões
          </Link>
        </div>
      </div>
    );
  }

  if (!submission) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-black mb-2">Submissão não encontrada</h2>
          <Link
            href="/admin/submissions"
            className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Voltar para Submissões
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link
            href="/admin/submissions"
            className="text-indigo-600 hover:text-indigo-800 mb-2 inline-block"
          >
            ← Voltar para lista de submissões
          </Link>
          <h1 className="text-2xl font-semibold text-black">Detalhes da Submissão</h1>
        </div>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className={`px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 ${
            deleting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {deleting ? 'Excluindo...' : 'Excluir Submissão'}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-medium text-black mb-4">{submission.forms.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-black">
                <span className="font-medium">ID da Submissão:</span> {submission.id}
              </p>
            </div>
            <div>
              <p className="text-sm text-black">
                <span className="font-medium">Data de Submissão:</span>{' '}
                {new Date(submission.created_at).toLocaleString('pt-BR')}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium text-black mb-4">Dados Submetidos</h3>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <dl className="space-y-4">
              {Object.entries(submission.data).map(([key, value]) => (
                <div key={key} className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <dt className="text-sm font-medium text-black md:col-span-1">
                    {key}:
                  </dt>
                  <dd className="text-sm text-black md:col-span-2 break-words">
                    {typeof value === 'boolean'
                      ? value
                        ? 'Sim'
                        : 'Não'
                      : value === null || value === ''
                      ? '(não preenchido)'
                      : String(value)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 