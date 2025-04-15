import os
import re
from PIL import Image

# Pasta onde as imagens otimizadas serão salvas
pasta_destino = os.path.dirname(os.path.abspath(__file__))
pasta_imagens = os.path.dirname(pasta_destino)
pasta_convertedwebp = os.path.join(pasta_imagens, "convertedwebp")

# Tamanho desejado para as imagens do hero (mantendo proporção)
max_size = (1200, 800)

# Lista de imagens do Hero (extraída do componente)
imagens_hero = [
    {
        "original_webp": os.path.join(pasta_convertedwebp, "espaco_oliver_beauty_foco_interno (1).webp"),
        "original_jpg": os.path.join(pasta_convertedwebp, "espaco_oliver_beauty_foco_interno (1).jpg"),
        "output_webp": os.path.join(pasta_destino, "hero-slide-1.webp"),
        "output_jpg": os.path.join(pasta_destino, "hero-slide-1.jpg")
    },
    {
        "original_webp": os.path.join(pasta_convertedwebp, "espaco_oliver_beauty_interno_cadeiras (1).webp"),
        "original_jpg": os.path.join(pasta_convertedwebp, "espaco_oliver_beauty_interno_cadeiras (1).jpg"),
        "output_webp": os.path.join(pasta_destino, "hero-slide-2.webp"),
        "output_jpg": os.path.join(pasta_destino, "hero-slide-2.jpg")
    },
    {
        "original_webp": os.path.join(pasta_convertedwebp, "espaco_oliver_beauty_interno_cadeiras (2).webp"),
        "original_jpg": os.path.join(pasta_convertedwebp, "espaco_oliver_beauty_interno_cadeiras (2).jpg"),
        "output_webp": os.path.join(pasta_destino, "hero-slide-3.webp"),
        "output_jpg": os.path.join(pasta_destino, "hero-slide-3.jpg")
    },
    {
        "original_webp": os.path.join(pasta_convertedwebp, "espaco_oliver_beauty_interno_cadeiras (3).webp"),
        "original_jpg": os.path.join(pasta_convertedwebp, "espaco_oliver_beauty_interno_cadeiras (3).jpg"),
        "output_webp": os.path.join(pasta_destino, "hero-slide-4.webp"),
        "output_jpg": os.path.join(pasta_destino, "hero-slide-4.jpg")
    },
    {
        "original_webp": os.path.join(pasta_convertedwebp, "espaco_oliver_beauty_interno_cadeiras (4).webp"),
        "original_jpg": os.path.join(pasta_convertedwebp, "espaco_oliver_beauty_interno_cadeiras (4).jpg"),
        "output_webp": os.path.join(pasta_destino, "hero-slide-5.webp"),
        "output_jpg": os.path.join(pasta_destino, "hero-slide-5.jpg")
    },
    {
        "original_webp": os.path.join(pasta_convertedwebp, "espaco_oliver_beauty_interno_cadeiras (6).webp"),
        "original_jpg": os.path.join(pasta_convertedwebp, "espaco_oliver_beauty_interno_cadeiras (6).jpg"),
        "output_webp": os.path.join(pasta_destino, "hero-slide-6.webp"),
        "output_jpg": os.path.join(pasta_destino, "hero-slide-6.jpg")
    },
    {
        "original_webp": os.path.join(pasta_convertedwebp, "espaco_oliver_beauty_time_todas_juntas (2).webp"),
        "original_jpg": os.path.join(pasta_convertedwebp, "espaco_oliver_beauty_time_todas_juntas (2).jpg"),
        "output_webp": os.path.join(pasta_destino, "hero-slide-7.webp"),
        "output_jpg": os.path.join(pasta_destino, "hero-slide-7.jpg")
    },
    {
        "original_webp": os.path.join(pasta_convertedwebp, "espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_unhas (3).webp"),
        "original_jpg": os.path.join(pasta_convertedwebp, "espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_unhas (3).jpg"),
        "output_webp": os.path.join(pasta_destino, "hero-slide-8.webp"),
        "output_jpg": os.path.join(pasta_destino, "hero-slide-8.jpg")
    },
    {
        "original_webp": os.path.join(pasta_convertedwebp, "espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé (3).webp"),
        "original_jpg": os.path.join(pasta_convertedwebp, "espaco_oliver_manicure_pedicure_nail_designer_barueri_alphaville_pé (3).jpg"),
        "output_webp": os.path.join(pasta_destino, "hero-slide-9.webp"),
        "output_jpg": os.path.join(pasta_destino, "hero-slide-9.jpg")
    }
]

def otimizar_imagem(caminho_origem, caminho_destino, qualidade=70):
    """Cria uma versão otimizada da imagem com tamanho reduzido e qualidade ajustada"""
    if not os.path.exists(caminho_origem):
        print(f"Arquivo não encontrado: {caminho_origem}")
        return False

    try:
        # Abre a imagem
        img = Image.open(caminho_origem)
        
        # Redimensiona mantendo proporção
        img.thumbnail(max_size, Image.LANCZOS)
        
        # Salva com compressão
        img.save(caminho_destino, quality=qualidade, optimize=True)
        
        tamanho_original = os.path.getsize(caminho_origem) / 1024 / 1024  # em MB
        tamanho_otimizado = os.path.getsize(caminho_destino) / 1024 / 1024  # em MB
        reducao = (1 - tamanho_otimizado / tamanho_original) * 100 if tamanho_original > 0 else 0
        
        print(f"Imagem otimizada: {os.path.basename(caminho_destino)}")
        print(f"  - Tamanho Original: {tamanho_original:.2f} MB")
        print(f"  - Tamanho Otimizado: {tamanho_otimizado:.2f} MB")
        print(f"  - Redução: {reducao:.1f}%")
        return True
        
    except Exception as e:
        print(f"Erro ao otimizar {caminho_origem}: {e}")
        return False

def atualizar_componente_hero(imagens_otimizadas):
    """Atualiza o componente Hero.tsx para usar as imagens otimizadas"""
    hero_path = os.path.join(pasta_imagens, "..", "..", "src", "components", "Hero.tsx")
    
    if not os.path.exists(hero_path):
        print(f"Arquivo do componente Hero não encontrado em: {hero_path}")
        return
    
    try:
        with open(hero_path, 'r', encoding='utf-8') as file:
            conteudo = file.read()
        
        # Novas referências de imagens
        novo_array_imagens = """
  const images = [
    {
      webp: optimizedFirstImage.webp,
      jpg: optimizedFirstImage.jpg
    },"""
        
        for i in range(1, len(imagens_otimizadas) + 1):
            novo_array_imagens += f"""
    {{
      webp: '/images/optimized/hero-slide-{i}.webp',
      jpg: '/images/optimized/hero-slide-{i}.jpg'
    }},"""
        
        # Remove a última vírgula
        novo_array_imagens = novo_array_imagens.rstrip(',') + "\n  ];"
        
        # Encontra o array de imagens atual e o substitui
        padrao = r"const images = \[\s*{[\s\S]*?}\s*\];"
        conteudo_atualizado = re.sub(padrao, novo_array_imagens, conteudo)
        
        # Salva o arquivo atualizado
        with open(hero_path, 'w', encoding='utf-8') as file:
            file.write(conteudo_atualizado)
        
        print(f"Componente Hero atualizado com sucesso!")
        
    except Exception as e:
        print(f"Erro ao atualizar o componente Hero: {e}")

if __name__ == "__main__":
    print("Iniciando otimização das imagens do Hero...\n")
    print(f"Pasta de destino: {pasta_destino}")
    print(f"Pasta convertedwebp: {pasta_convertedwebp}")
    print("")
    
    imagens_otimizadas = []
    
    # Otimiza cada imagem da lista
    for i, imagem in enumerate(imagens_hero):
        print(f"Processando conjunto de imagens {i+1}/{len(imagens_hero)}...")
        
        sucesso_jpg = otimizar_imagem(
            imagem["original_jpg"], 
            imagem["output_jpg"], 
            qualidade=65  # Qualidade reduzida para JPG
        )
        
        sucesso_webp = otimizar_imagem(
            imagem["original_webp"], 
            imagem["output_webp"], 
            qualidade=65  # Qualidade para WebP (já é mais eficiente)
        )
        
        if sucesso_jpg and sucesso_webp:
            imagens_otimizadas.append(imagem)
        
        print("")  # Linha em branco entre cada conjunto
    
    print(f"Otimização concluída! {len(imagens_otimizadas)}/{len(imagens_hero)} imagens processadas com sucesso.")
    
    # Pergunta se deseja atualizar o componente Hero
    resposta = input("Deseja atualizar automaticamente o componente Hero.tsx para usar as imagens otimizadas? (s/n): ")
    if resposta.lower() == 's':
        atualizar_componente_hero(imagens_otimizadas)
    
    print("\nProcesso finalizado!") 