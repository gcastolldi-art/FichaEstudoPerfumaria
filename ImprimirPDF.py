import os
import re
import time
import base64

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options


URL = "https://gcastolldi-art.github.io/FichaEstudoPerfumaria/"

PASTA_SAIDA = "pdfs"


def limpar_nome(nome):
    nome = re.sub(r'[\\/*?:"<>|]', "", nome)
    nome = nome.strip()
    return nome


os.makedirs(PASTA_SAIDA, exist_ok=True)

chrome_options = Options()

# Opcional
chrome_options.add_argument("--start-maximized")

driver = webdriver.Chrome(options=chrome_options)

try:

    driver.get(URL)

    time.sleep(3)

    notas_salvas = set()

    while True:

        nome_nota = driver.find_element(
            By.ID,
            "nome"
        ).text.strip()

        nome_arquivo = limpar_nome(nome_nota)

        if nome_arquivo not in notas_salvas:

            print(f"Gerando PDF: {nome_arquivo}")

            pdf = driver.execute_cdp_cmd(
                "Page.printToPDF",
                {
                    "printBackground": True,
                    "paperWidth": 8.27,
                    "paperHeight": 11.69,
                    "marginTop": 0,
                    "marginBottom": 0,
                    "marginLeft": 0,
                    "marginRight": 0,
                    "preferCSSPageSize": True
                }
            )

            caminho = os.path.join(
                PASTA_SAIDA,
                f"{nome_arquivo}.pdf"
            )

            with open(caminho, "wb") as f:
                f.write(
                    base64.b64decode(pdf["data"])
                )

            notas_salvas.add(nome_arquivo)

        btn_next = driver.find_element(
            By.ID,
            "btnNext"
        )

        if not btn_next.is_enabled():

            print("Última nota alcançada.")
            break

        btn_next.click()

        time.sleep(1)

finally:

    driver.quit()

print(
    f"Total de PDFs gerados: {len(notas_salvas)}"
)
