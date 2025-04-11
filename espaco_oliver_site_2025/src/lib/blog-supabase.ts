import { createClient } from '@supabase/supabase-js';

const supabaseBlogUrl = process.env.NEXT_PUBLIC_SUPABASE_BLOG_URL || "https://vhyuzjqwsbhuilbgadik.supabase.co";
const supabaseBlogAnonKey = process.env.NEXT_PUBLIC_SUPABASE_BLOG_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoeXV6anF3c2JodWlsYmdhZGlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzODMxMTAsImV4cCI6MjA1OTk1OTExMH0.dMOJWRbC2QgqsfhcpErXCCFxsCVlSZM3CMYDXLWtFqU";

export const supabaseBlog = createClient(supabaseBlogUrl, supabaseBlogAnonKey);

// Cliente com permissões de serviço (apenas para uso em rotas de API server-side)
export const createBlogServiceClient = () => {
  const supabaseBlogServiceKey = process.env.SUPABASE_BLOG_SERVICE_ROLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoeXV6anF3c2JodWlsYmdhZGlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDM4MzExMCwiZXhwIjoyMDU5OTU5MTEwfQ.DhRHZjsbns_Mtgw3PusKQnIS6PwWuFFD2vrRjI-m9do";
  return createClient(supabaseBlogUrl, supabaseBlogServiceKey);
}; 