# Espaço Oliver - Sistema de Formulários

Este projeto é um sistema de formulários para o Espaço Oliver, permitindo a criação e gerenciamento de formulários personalizados, bem como a visualização das submissões recebidas.

## Funcionalidades

- Área administrativa protegida com login
- Criação de formulários com campos personalizáveis
- Upload de imagem de capa para formulários
- Compartilhamento de formulários via link
- Visualização e exportação das submissões de formulários
- Interface intuitiva e responsiva

## Tecnologias Utilizadas

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Supabase (autenticação, banco de dados e armazenamento)

## Configuração para Deploy na Vercel

1. Faça fork/clone deste repositório
2. Acesse [vercel.com](https://vercel.com) e crie uma nova conta ou faça login
3. Clique em "Add New" → "Project"
4. Importe o repositório do GitHub
5. Na tela de configuração do projeto, vá para a seção "Environment Variables" e adicione as seguintes variáveis:

```
NEXT_PUBLIC_SUPABASE_URL=https://lpfgkqcswyjsclmmctty.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwZmdrcWNzd3lqc2NsbW1jdHR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMjMyOTEsImV4cCI6MjA1OTc5OTI5MX0.vv3cEKMK89gSna4w6Aj_PjMssBsnVdf-i1mzhytjIHw
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwZmdrcWNzd3lqc2NsbW1jdHR5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDIyMzI5MSwiZXhwIjoyMDU5Nzk5MjkxfQ.9ZjfkvUzoIFoC-SfY26KDqSU3PU55VCRuOa2bo6igVo
NEXT_PUBLIC_SITE_URL=https://seu-dominio-vercel.vercel.app
```

6. Em "Build & Development Settings", certifique-se de que:
   - Framework Preset: Next.js
   - Build Command: `npm install && npm run build`
   - Output Directory: .next

7. Clique em "Deploy"
8. Após o deploy, vá para a aba "Settings" → "Environment Variables" e atualize a variável `NEXT_PUBLIC_SITE_URL` com o domínio correto fornecido pela Vercel

> **Nota importante**: Se você encontrar erros relacionados a dependências durante o build (como "Can't resolve '@supabase/supabase-js'"), verifique se o Vercel está instalando todas as dependências corretamente. Você pode tentar forçar uma nova implantação clicando em "Redeploy" e marcar a opção "Clear build cache and deploy".

## Configuração do Supabase

1. Crie um bucket chamado "forms" no Storage do Supabase
2. Configure as políticas de segurança para permitir uploads (veja abaixo)
3. Desabilite temporariamente o RLS (Row Level Security) nas tabelas:

```sql
ALTER TABLE forms DISABLE ROW LEVEL SECURITY;
ALTER TABLE form_fields DISABLE ROW LEVEL SECURITY;
ALTER TABLE form_submissions DISABLE ROW LEVEL SECURITY;
```

4. Execute o script SQL de criação das tabelas (disponível em `scripts/supabase-schema.sql`)
5. Crie um usuário administrador no painel de Authentication do Supabase

## Política de Storage para o Bucket "forms"

Execute o seguinte SQL no Editor SQL do Supabase:

```sql
-- Permitir uploads para usuários autenticados
CREATE POLICY "Allow uploads for authenticated users"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'forms');

-- Permitir acesso público para visualização
CREATE POLICY "Allow public access to forms files"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'forms');
```

## Acessando a Área Administrativa

1. Acesse `/admin/login` para fazer login com o usuário criado no Supabase
2. Após o login, você será redirecionado para o dashboard administrativo

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação.

## Créditos

Desenvolvido por [Seu Nome/Equipe]
Design inspirado nas melhores práticas de estúdios de nail art

## Licença

[Inclua informações sobre a licença aqui]
