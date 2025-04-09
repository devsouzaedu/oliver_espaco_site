-- Habilita a extensão UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabela de administradores
CREATE TABLE IF NOT EXISTS admins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de formulários
CREATE TABLE IF NOT EXISTS forms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  cover_image_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de campos de formulário
CREATE TABLE IF NOT EXISTS form_fields (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  form_id UUID REFERENCES forms(id) ON DELETE CASCADE,
  label TEXT NOT NULL,
  type TEXT NOT NULL CHECK (
    type IN ('text', 'email', 'number', 'date', 'textarea', 'select', 'checkbox')
  ),
  required BOOLEAN DEFAULT FALSE,
  options JSONB, -- Para campos de seleção (armazena um array)
  "order" INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela para submissões de formulário
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  form_id UUID REFERENCES forms(id) ON DELETE CASCADE,
  data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Políticas de segurança do RLS (Row Level Security)

-- Habilita RLS para todas as tabelas
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_fields ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Políticas para admins (apenas usuários autenticados podem ver)
CREATE POLICY "Admins are viewable by authenticated users only" 
ON admins FOR SELECT 
TO authenticated 
USING (true);

-- Políticas para formulários (apenas usuários autenticados podem modificar, todos podem ver)
CREATE POLICY "Forms are viewable by everyone" 
ON forms FOR SELECT 
TO anon, authenticated 
USING (true);

CREATE POLICY "Forms are insertable by authenticated users only" 
ON forms FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Forms are updatable by authenticated users only" 
ON forms FOR UPDATE 
TO authenticated 
USING (true);

CREATE POLICY "Forms are deletable by authenticated users only" 
ON forms FOR DELETE 
TO authenticated 
USING (true);

-- Políticas para campos de formulário (apenas usuários autenticados podem modificar, todos podem ver)
CREATE POLICY "Form fields are viewable by everyone" 
ON form_fields FOR SELECT 
TO anon, authenticated 
USING (true);

CREATE POLICY "Form fields are insertable by authenticated users only" 
ON form_fields FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Form fields are updatable by authenticated users only" 
ON form_fields FOR UPDATE 
TO authenticated 
USING (true);

CREATE POLICY "Form fields are deletable by authenticated users only" 
ON form_fields FOR DELETE 
TO authenticated 
USING (true);

-- Políticas para submissões de formulário (apenas usuários autenticados podem ver, todos podem inserir)
CREATE POLICY "Form submissions are viewable by authenticated users only" 
ON form_submissions FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Form submissions are insertable by everyone" 
ON form_submissions FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Trigger para atualizar o updated_at nos formulários
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_forms_modified
BEFORE UPDATE ON forms
FOR EACH ROW
EXECUTE FUNCTION update_modified_column(); 