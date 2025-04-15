import os
from PIL import Image

# Caminhos
pasta_origem = r"C:\Users\Eduardo\projetosdev\oliver_7\espaco_oliver_site_2025\public\images"
pasta_destino = r"C:\Users\Eduardo\projetosdev\oliver_7\espaco_oliver_site_2025\public\images\convertedwebp"

# Cria a pasta de destino se não existir
os.makedirs(pasta_destino, exist_ok=True)

# Extensões suportadas
extensoes = (".jpg", ".jpeg", ".png", ".ico")

# Loop pelos arquivos
for nome_arquivo in os.listdir(pasta_origem):
    if nome_arquivo.lower().endswith(extensoes):
        caminho_arquivo = os.path.join(pasta_origem, nome_arquivo)

        try:
            with Image.open(caminho_arquivo) as img:
                nome_base = os.path.splitext(nome_arquivo)[0]
                
                # Salva em WebP
                caminho_webp = os.path.join(pasta_destino, f"{nome_base}.webp")
                img.save(caminho_webp, "WEBP")
                print(f"Convertido: {nome_arquivo} -> {nome_base}.webp")
                
                # Também mantém uma cópia em JPG para compatibilidade
                caminho_jpg = os.path.join(pasta_destino, f"{nome_base}.jpg")
                # Converte para RGB se necessário (para JPG)
                if img.mode in ('RGBA', 'LA'):
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    background.paste(img, mask=img.split()[3] if len(img.split()) > 3 else None)
                    background.save(caminho_jpg, "JPEG", quality=90)
                else:
                    rgb_img = img.convert('RGB') if img.mode != 'RGB' else img
                    rgb_img.save(caminho_jpg, "JPEG", quality=90)
                print(f"Mantido: {nome_arquivo} -> {nome_base}.jpg")
        except Exception as e:
            print(f"Erro ao converter {nome_arquivo}: {e}")

print("Processo de conversão concluído com sucesso!")
