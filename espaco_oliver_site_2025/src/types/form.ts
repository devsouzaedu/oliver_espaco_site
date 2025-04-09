export enum QuestionType {
  TEXT = 'TEXT',
  CHECKBOX = 'CHECKBOX',
  SELECT = 'SELECT'
}

export interface FormQuestion {
  id: string;
  label: string;
  type: QuestionType;
  required: boolean;
  options?: string[];
  order: number;
} 