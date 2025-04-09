export interface Form {
  id: string;
  title: string;
  cover_image_url?: string;
  created_at: string;
  updated_at: string;
  description?: string;
  is_active: boolean;
}

export interface FormField {
  id: string;
  form_id: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'date' | 'textarea' | 'select' | 'checkbox';
  required: boolean;
  options?: string[]; // Para campos de seleção
  order: number;
}

export interface FormSubmission {
  id: string;
  form_id: string;
  created_at: string;
  data: Record<string, any>;
} 