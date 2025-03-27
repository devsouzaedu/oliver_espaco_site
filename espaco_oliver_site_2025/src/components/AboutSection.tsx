"use client"

const AboutSection = () => {
  return (
    <section className="py-24 bg-[#f9f5f2]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl mb-8 font-serif tracking-widest uppercase text-black" style={{ fontFamily: "var(--font-old-standard-tt)", letterSpacing: '0.2em' }}>
              Espaço Oliver
            </h2>
            
            <p className="text-gray-700 text-lg leading-loose text-center font-serif mx-auto" style={{ fontFamily: "var(--font-old-standard-tt)", maxWidth: '80%', lineHeight: '1.8' }}>
              O Espaço Oliver, um estúdio de nail art incrível bem no centro de Barueri, 
              torna a experiência de fazer as unhas algo especial e único para cada cliente. 
              Aqui, você encontra coleções sazonais com designs e cores pensados especialmente 
              para quem quer se sentir cuidada, bonita e cheia de estilo, tudo com um toque bem pessoal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 