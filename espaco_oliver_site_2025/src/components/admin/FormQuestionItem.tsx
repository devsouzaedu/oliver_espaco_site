"use client"

import React, { useState } from 'react';
import { FormQuestion, QuestionType } from '@/types/form';

interface FormQuestionItemProps {
  question: FormQuestion;
  index: number;
  onUpdate: (question: FormQuestion) => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function FormQuestionItem({
  question,
  index,
  onUpdate,
  onDelete,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast
}: FormQuestionItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Update question type
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as QuestionType;
    
    // Create updated question based on type
    let updatedQuestion: FormQuestion;
    
    if (newType === QuestionType.CHECKBOX) {
      updatedQuestion = {
        ...question,
        type: newType,
        options: question.options || ['Opção 1', 'Opção 2', 'Opção 3']
      };
    } else if (newType === QuestionType.SELECT) {
      updatedQuestion = {
        ...question,
        type: newType,
        options: question.options || ['Opção 1', 'Opção 2', 'Opção 3']
      };
    } else {
      // For TEXT type, remove options if they exist
      const { options, ...rest } = question;
      updatedQuestion = {
        ...rest,
        type: newType
      };
    }
    
    onUpdate(updatedQuestion);
  };

  // Update question label
  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({
      ...question,
      label: e.target.value
    });
  };

  // Update question required status
  const handleRequiredChange = () => {
    onUpdate({
      ...question,
      required: !question.required
    });
  };

  // Add a new option to multiple choice questions
  const handleAddOption = () => {
    if (!question.options) return;
    
    onUpdate({
      ...question,
      options: [...question.options, `Opção ${question.options.length + 1}`]
    });
  };

  // Update an option text
  const handleUpdateOption = (index: number, value: string) => {
    if (!question.options) return;
    
    const updatedOptions = [...question.options];
    updatedOptions[index] = value;
    
    onUpdate({
      ...question,
      options: updatedOptions
    });
  };

  // Remove an option
  const handleDeleteOption = (index: number) => {
    if (!question.options) return;
    
    onUpdate({
      ...question,
      options: question.options.filter((_, i) => i !== index)
    });
  };

  return (
    <div 
      className={`mb-4 border rounded-md overflow-hidden ${
        isExpanded ? 'border-gray-400' : 'border-gray-200'
      }`}
    >
      <div 
        className={`p-4 flex justify-between items-center cursor-pointer ${
          isExpanded ? 'bg-gray-50' : 'bg-white'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <span 
            className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-3"
            style={{ fontFamily: "var(--font-funnel-sans)" }}
          >
            {index + 1}
          </span>
          <span style={{ fontFamily: "var(--font-funnel-sans)" }}>
            {question.label || 'Sem título'}
            {question.required && <span className="text-red-500 ml-1">*</span>}
          </span>
        </div>
        
        <div className="flex items-center">
          <span 
            className="text-xs px-2 py-1 bg-gray-100 rounded-full mr-3"
            style={{ fontFamily: "var(--font-funnel-sans)" }}
          >
            {question.type === QuestionType.TEXT && 'Texto'}
            {question.type === QuestionType.CHECKBOX && 'Caixas de seleção'}
            {question.type === QuestionType.SELECT && 'Seleção única'}
          </span>
          <button 
            type="button" 
            className="text-gray-500"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4 border-t border-gray-200">
          <div className="space-y-4">
            <div>
              <label 
                htmlFor={`question-${question.id}-label`} 
                className="block text-sm font-medium text-gray-700 mb-1"
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              >
                Texto da pergunta
              </label>
              <input
                type="text"
                id={`question-${question.id}-label`}
                value={question.label}
                onChange={handleLabelChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                style={{ fontFamily: "var(--font-funnel-sans)" }}
              />
            </div>
            
            <div className="flex gap-4">
              <div className="flex-1">
                <label 
                  htmlFor={`question-${question.id}-type`} 
                  className="block text-sm font-medium text-gray-700 mb-1"
                  style={{ fontFamily: "var(--font-funnel-sans)" }}
                >
                  Tipo de pergunta
                </label>
                <select
                  id={`question-${question.id}-type`}
                  value={question.type}
                  onChange={handleTypeChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                  style={{ fontFamily: "var(--font-funnel-sans)" }}
                >
                  <option value={QuestionType.TEXT}>Texto</option>
                  <option value={QuestionType.CHECKBOX}>Caixas de seleção (múltipla escolha)</option>
                  <option value={QuestionType.SELECT}>Seleção única</option>
                </select>
              </div>
              
              <div className="flex items-end">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={question.required}
                    onChange={handleRequiredChange}
                    className="w-4 h-4 text-black focus:ring-black border-gray-300 rounded"
                  />
                  <span 
                    className="ml-2 text-sm text-gray-700"
                    style={{ fontFamily: "var(--font-funnel-sans)" }}
                  >
                    Obrigatório
                  </span>
                </label>
              </div>
            </div>
            
            {(question.type === QuestionType.CHECKBOX || question.type === QuestionType.SELECT) && (
              <div>
                <label 
                  className="block text-sm font-medium text-gray-700 mb-1"
                  style={{ fontFamily: "var(--font-funnel-sans)" }}
                >
                  Opções
                </label>
                
                <div className="space-y-2">
                  {question.options?.map((option, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-6 mr-2 text-center">
                        {question.type === QuestionType.CHECKBOX && (
                          <div className="w-4 h-4 border border-gray-300 rounded"></div>
                        )}
                        {question.type === QuestionType.SELECT && (
                          <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                        )}
                      </div>
                      
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => handleUpdateOption(i, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                        style={{ fontFamily: "var(--font-funnel-sans)" }}
                      />
                      
                      <button
                        type="button"
                        onClick={() => handleDeleteOption(i)}
                        disabled={question.options!.length <= 1}
                        className={`ml-2 p-1 rounded-md ${
                          question.options!.length <= 1
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-red-500 hover:bg-red-50'
                        }`}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                
                <button
                  type="button"
                  onClick={handleAddOption}
                  className="mt-2 text-sm text-gray-600 hover:text-gray-900 flex items-center"
                  style={{ fontFamily: "var(--font-funnel-sans)" }}
                >
                  + Adicionar opção
                </button>
              </div>
            )}
            
            <div className="flex justify-between pt-4 border-t">
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                  }}
                  className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded-md hover:bg-red-50"
                  style={{ fontFamily: "var(--font-funnel-sans)" }}
                >
                  Excluir
                </button>
              </div>
              
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onMoveUp();
                  }}
                  disabled={isFirst}
                  className={`px-3 py-1 text-sm border rounded-md ${
                    isFirst
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                      : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                  style={{ fontFamily: "var(--font-funnel-sans)" }}
                >
                  ↑ Mover para cima
                </button>
                
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onMoveDown();
                  }}
                  disabled={isLast}
                  className={`px-3 py-1 text-sm border rounded-md ${
                    isLast
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                      : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                  style={{ fontFamily: "var(--font-funnel-sans)" }}
                >
                  ↓ Mover para baixo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 