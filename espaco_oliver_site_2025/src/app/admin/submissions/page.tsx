'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../supabase';
import { Form } from '@/types/forms';

interface Submission {
  id: string;
  form_id: string;
  created_at: string;
  data: Record<string, any>;
  forms: Form;
}

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [forms, setForms] = useState<Form[]>([]);
  const [selectedFormId, setSelectedFormId] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [exportLoading, setExportLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Buscar todos os formulários
        const { data: formsData, error: formsError } = await supabase
          .from('forms')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (formsError) throw formsError;
        setForms(formsData || []);
        
        // Buscar todas as submissões ou filtradas por formulário
        let query = supabase
          .from('form_submissions')
          .select('*, forms(id, title)')
          .order('created_at', { ascending: false });
        
        if (selectedFormId) {
          query = query.eq('form_id', selectedFormId);
        }
        
        const { data: submissionsData, error: submissionsError } = await query;
        
        if (submissionsError) throw submissionsError;
        setSubmissions(submissionsData || []);
      } catch (error: any) {
        console.error('Erro ao buscar dados:', error);
        setError(error.message || 'Erro ao buscar dados');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [selectedFormId]);

  const handleFormChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFormId(e.target.value);
  };

  const exportToCSV = async () => {
    if (submissions.length === 0) {
      alert('Não há dados para exportar');
      return;
    }
    
    try {
      setExportLoading(true);
      
      // Coletar informações sobre campos a partir da primeira submissão
      const firstSubmission = submissions[0];
      const headers = ['ID da Submissão', 'Formulário', 'Data de Submissão', ...Object.keys(firstSubmission.data)];
      
      // Montar linhas de dados
      const rows = submissions.map(submission => {
        const basicInfo = [
          submission.id,
          submission.forms.title,
          new Date(submission.created_at).toLocaleString('pt-BR')
        ];
        
        const fieldValues = Object.keys(firstSubmission.data).map(key => {
          return submission.data[key] !== undefined ? submission.data[key] : '';
        });
        
        return [...basicInfo, ...fieldValues];
      });
      
      // Converter para formato CSV
      const csvContent = [
        headers.join(','),
        ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      ].join('\n');
      
      // Criar e baixar arquivo
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `submissoes-${selectedFormId || 'todos'}-${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error: any) {
      console.error('Erro ao exportar dados:', error);
      alert(`Erro ao exportar dados: ${error.message}`);
    } finally {
      setExportLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-black">Submissões de Formulários</h1>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-grow">
            <label htmlFor="form-filter" className="block text-sm font-medium text-black mb-1">
              Filtrar por Formulário
            </label>
            <select
              id="form-filter"
              value={selectedFormId}
              onChange={handleFormChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
            >
              <option value="" className="text-black">Todos os formulários</option>
              {forms.map(form => (
                <option key={form.id} value={form.id} className="text-black">
                  {form.title}
                </option>
              ))}
            </select>
          </div>
          
          <div className="self-end">
            <button
              onClick={exportToCSV}
              disabled={loading || exportLoading || submissions.length === 0}
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                (loading || exportLoading || submissions.length === 0) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {exportLoading ? 'Exportando...' : 'Exportar para CSV'}
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-10">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
          <p className="mt-2 text-black">Carregando submissões...</p>
        </div>
      ) : submissions.length === 0 ? (
        <div className="text-center py-10 bg-white rounded-lg shadow-md">
          <p className="text-black mb-4">
            {selectedFormId
              ? 'Nenhuma submissão encontrada para este formulário'
              : 'Nenhuma submissão encontrada'}
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Formulário
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Data de submissão
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Dados Principais
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-black uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {submissions.map((submission) => {
                // Pegar as primeiras 2-3 entradas de dados para exibir na tabela
                const mainData = Object.entries(submission.data).slice(0, 3);
                
                return (
                  <tr key={submission.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-black">
                        {submission.forms.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                      {new Date(submission.created_at).toLocaleString('pt-BR')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-black">
                        {mainData.map(([key, value], index) => (
                          <div key={index} className="truncate max-w-md">
                            <span className="font-medium">{key}:</span> {String(value)}
                          </div>
                        ))}
                        {Object.keys(submission.data).length > 3 && (
                          <div className="text-xs text-indigo-600">
                            +{Object.keys(submission.data).length - 3} mais campos
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href={`/admin/submissions/${submission.id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Ver Detalhes
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 