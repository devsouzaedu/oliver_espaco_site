import os
import shutil
from PIL import Image

# Caminho para imagens
source_image_jpg = os.path.join("..", "convertedwebp", "espaco_oliver_beauty_foco_interno (1).jpg")
source_image_webp = os.path.join("..", "convertedwebp", "espaco_oliver_beauty_foco_interno (1).webp")

output_jpg = "hero-first-slide.jpg"
output_webp = "hero-first-slide.webp"

# Tamanho desejado (mantendo proporção mas menor que o original)
max_size = (1200, 800)

def optimize_image(source_path, output_path, quality=80):
    """Cria uma versão otimizada da imagem com tamanho reduzido e qualidade ajustada"""
    if not os.path.exists(source_path):
        print(f"Arquivo não encontrado: {source_path}")
        return

    try:
        # Abre a imagem
        img = Image.open(source_path)
        
        # Redimensiona mantendo proporção
        img.thumbnail(max_size, Image.LANCZOS)
        
        # Salva com compressão
        img.save(output_path, quality=quality, optimize=True)
        
        print(f"Imagem otimizada criada: {output_path}")
        print(f"  - Tamanho Original: {os.path.getsize(source_path) / 1024:.1f} KB")
        print(f"  - Tamanho Otimizado: {os.path.getsize(output_path) / 1024:.1f} KB")
        
    except Exception as e:
        print(f"Erro ao otimizar {source_path}: {e}")

if __name__ == "__main__":
    # Verifica se as imagens existem
    if os.path.exists(source_image_jpg):
        optimize_image(source_image_jpg, output_jpg, quality=70)
    else:
        print(f"Erro: Arquivo não encontrado - {source_image_jpg}")
    
    if os.path.exists(source_image_webp):
        optimize_image(source_image_webp, output_webp, quality=70)
    else:
        print(f"Erro: Arquivo não encontrado - {source_image_webp}")
        
    print("Processo concluído. Execute o script do diretório optimized/") 