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
                caminho_novo = os.path.join(pasta_destino, f"{nome_base}.webp")
                img.save(caminho_novo, "WEBP")
                print(f"Convertido: {nome_arquivo} -> {nome_base}.webp")
        except Exception as e:
            print(f"Erro ao converter {nome_arquivo}: {e}")
