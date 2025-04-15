import os
import glob
from PIL import Image

def ensure_fallbacks():
    """
    Verifica todas as imagens WebP e garante que exista uma versão JPG correspondente.
    Se uma imagem WebP não tiver um correspondente JPG, cria um a partir do WebP.
    """
    # Diretório das imagens WebP
    webp_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Encontra todos os arquivos WebP
    webp_files = glob.glob(os.path.join(webp_dir, "*.webp"))
    
    print(f"Encontrados {len(webp_files)} arquivos WebP")
    
    for webp_file in webp_files:
        # Determina o nome do arquivo JPG correspondente
        jpg_file = webp_file.replace(".webp", ".jpg")
        
        # Verifica se o arquivo JPG existe
        if not os.path.exists(jpg_file):
            try:
                print(f"Criando versão JPG para {os.path.basename(webp_file)}")
                # Abre a imagem WebP
                with Image.open(webp_file) as img:
                    # Converte para RGB (necessário para salvar como JPG)
                    if img.mode in ('RGBA', 'LA'):
                        background = Image.new('RGB', img.size, (255, 255, 255))
                        background.paste(img, mask=img.split()[3])  # 3 é o canal alfa
                        img = background
                    elif img.mode != 'RGB':
                        img = img.convert('RGB')
                    
                    # Salva como JPG com qualidade 90
                    img.save(jpg_file, "JPEG", quality=90)
                    print(f"  ✓ Criado: {os.path.basename(jpg_file)}")
            except Exception as e:
                print(f"  ✗ Erro ao processar {os.path.basename(webp_file)}: {e}")

if __name__ == "__main__":
    ensure_fallbacks()
    print("Processo concluído. Todas as imagens WebP agora têm versões JPG correspondentes.") 