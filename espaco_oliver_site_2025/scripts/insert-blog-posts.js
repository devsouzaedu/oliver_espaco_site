// Script para inserir automaticamente os 9 posts no Supabase
const { createClient } = require('@supabase/supabase-js');
const blogPosts = require('./blog-posts-data');

const supabaseUrl = "https://vhyuzjqwsbhuilbgadik.supabase.co";
const supabaseServiceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoeXV6anF3c2JodWlsYmdhZGlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDM4MzExMCwiZXhwIjoyMDU5OTU5MTEwfQ.DhRHZjsbns_Mtgw3PusKQnIS6PwWuFFD2vrRjI-m9do";

const supabase = createClient(supabaseUrl, supabaseServiceKey);

(async () => {
  for (const post of blogPosts) {
    // Gera datas automáticas se necessário
    const now = new Date().toISOString();
    const postData = {
      ...post,
      created_at: now,
      updated_at: now,
    };

    const { data, error } = await supabase
      .from('blog_posts')
      .insert([postData]);

    if (error) {
      console.error(`Erro ao inserir post '${post.title}':`, error.message);
    } else {
      console.log(`Post '${post.title}' inserido com sucesso!`);
    }
  }

  console.log('Processo finalizado.');
  process.exit(0);
})();
