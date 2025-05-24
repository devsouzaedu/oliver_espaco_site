// Script para atualizar os posts do blog no Supabase usando o slug como chave
const { createClient } = require('@supabase/supabase-js');
const blogPosts = require('./blog-posts-data');

const supabaseUrl = "https://vhyuzjqwsbhuilbgadik.supabase.co";
const supabaseServiceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoeXV6anF3c2JodWlsYmdhZGlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDM4MzExMCwiZXhwIjoyMDU5OTU5MTEwfQ.DhRHZjsbns_Mtgw3PusKQnIS6PwWuFFD2vrRjI-m9do";
const supabase = createClient(supabaseUrl, supabaseServiceKey);

(async () => {
  for (const post of blogPosts) {
    const { slug, ...fields } = post;
    const { data, error } = await supabase
      .from('blog_posts')
      .update(fields)
      .eq('slug', slug);
    if (error) {
      console.error(`Erro ao atualizar post '${post.title}':`, error.message);
    } else {
      console.log(`Post '${post.title}' atualizado com sucesso!`);
    }
  }
  console.log('Processo de atualização finalizado.');
  process.exit(0);
})();
