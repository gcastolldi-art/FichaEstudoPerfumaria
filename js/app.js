let indiceAtual = 0;

const selector = document.getElementById("notaSelector");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");

/*LISTA ORDENADA APENAS PARA O SELECT*/
const notasOrdenadas = [...notas].sort((a, b) =>
    a.nome.localeCompare(
        b.nome,
        "pt-BR",
        { sensitivity: "base" }
    )
);

/*PREENCHE O SELECT*/
selector.innerHTML = "";

notasOrdenadas.forEach((nota) => {
    const option = document.createElement("option");
    option.value = nota.id;
    option.textContent = nota.nome;
    selector.appendChild(option);
});

/*CONTROLE DOS BOTÕES*/
function atualizarBotoes(){
    btnPrev.disabled = indiceAtual === 0;
    btnNext.disabled =
        indiceAtual === notas.length - 1;
}

/*BOTÃO PRÓXIMA*/
btnNext.addEventListener("click", () => {
    if(indiceAtual < notas.length - 1){
        indiceAtual++;
        carregarNota(indiceAtual);
    }
});

/*BOTÃO ANTERIOR*/
btnPrev.addEventListener("click", () => {
    if(indiceAtual > 0){
        indiceAtual--;
        carregarNota(indiceAtual);
    }
});

/*SELETOR*/
selector.addEventListener("change", (e) => {
    const idSelecionado = e.target.value;
    indiceAtual =
        notasOrdenadas.findIndex(
            nota => nota.id === idSelecionado
        );
    carregarNota(indiceAtual);
});

/*CARREGA UMA FICHA*/
function carregarNota(index){

    const nota = notasOrdenadas[index];

    document.getElementById("nome").innerHTML =
        `${nota.nome}`;

    document.getElementById("subtitulo").innerHTML =
        `${nota.subtitulo}`;

    document.getElementById("cientifico").innerHTML =
        `Nome Científico: ${nota.nomeCientifico}`;

    document.getElementById("identificacao").innerHTML = `
        <p>
            <strong>Tipo de Matéria-Prima:</strong>
            ${nota.identificacao.tipoMateriaPrima}
        </p>

        <p>
            <strong>Família Olfativa Principal:</strong>
            ${nota.identificacao.familiaOlfativa}
        </p>

        <p>
            <strong>Aparência Visual:</strong>
            ${nota.identificacao.aparencia}
        </p>
    `;

    document.getElementById("comportamento").innerHTML = `
        <p>
            <strong>Volatilidade / Posição na Pirâmide:</strong>
            ${nota.comportamento.volatilidade}
        </p>

        <p>
            <strong>Tenacidade na Fita Olfativa:</strong>
            ${nota.comportamento.tenacidade}
        </p>

        <p>
            <strong>Poder de Impacto / Intensidade:</strong>
            ${nota.comportamento.intensidade}
        </p>

        <p>
            <strong>Diluição de Trabalho Recomendada:</strong>
            ${nota.comportamento.diluicao}
        </p>
    `;

    document.getElementById("perfil").innerHTML = `
        <p>
            <strong>Descritores Principais:</strong>
            ${nota.perfil.descritores}
        </p>

        <p>
            <strong>Facetas Secundárias / Nuances:</strong>
            ${nota.perfil.nuances}
        </p>
    `;

    document.getElementById("timeline").innerHTML =
        nota.evolucao.map(item => `
            <div class="timeline-item">

                <span class="time-badge">
                    ${item.tempo}
                </span>

                ${item.descricao}

            </div>
        `).join("");

    document.getElementById("aplicacao").innerHTML = `
        <p>
            <strong>Função Principal:</strong>
            ${nota.aplicacao.funcao}
        </p>

        <p>
            <strong>Sinergias Clássicas:</strong>
            ${nota.aplicacao.sinergias}
        </p>

        <p>
            <strong>Riscos de Formulação:</strong>
            ${nota.aplicacao.riscos}
        </p>
    `;

    document.getElementById("seguranca").innerHTML = `
        <div class="critical-warning">
            ATENÇÃO CRÍTICA DE BANCADA
        </div>

        <p>
            ${nota.seguranca.alerta}
        </p>

        <p>
            <strong>
                Restrição IFRA (Categoria 4 - Perfumaria Fina):
            </strong>
            ${nota.seguranca.restricao}
        </p>

        <p>
            <strong>
                Solução de Bancada:
            </strong>
            ${nota.seguranca.solucao}
        </p>
    `;

    selector.value = nota.id;

    atualizarBotoes();
}

/*INICIALIZAÇÃO*/
carregarNota(0);