const notas = [

    {
        id: "bergamota",
        nome: "BERGAMOTA",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Citrus aurantium var. bergamia",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por prensagem a frio da casca do fruto).",
            familiaOlfativa:
                "Cítrica.",
            aparencia:
                "Líquido fluido de cor verde-amarelada a verde-oliva intensa (quando não descolorido/furocoumarin-free)."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça).",
            tenacidade:
                "Baixa. Permanece perceptível na fita por cerca de 4 a 8 horas. É uma molécula de escape rápido.",
            intensidade:
                "Alto (Escala: 7/10). Abre a fragrância com um brilho imediato e expansivo.",
            diluicao:
                "Pura (100%) para a construção do bloco de saída."
        },
        perfil: {
            descritores:
                "Cítrico fresco, Radiante, Frutado, Ligeiramente Floral.",
            nuances:
                "Ao contrário de outros cítricos, a bergamota possui uma rica nuance de chá preto (Earl Grey), toques herbáceos sutis, uma faceta picante e o calor do acetato de linalila (que remete à lavanda)."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Uma explosão cítrica efervescente, zesty (casca espremida), amarga e revigorante."
            },

            {
                tempo: "30 min",
                descricao:
                    "O aspecto agudo diminui, revelando um corpo aromático e floral/chá altamente elegante."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Resta um eco suave, limpo e levemente amadeirado-cítrico antes de desaparecer."
            }

        ],
        aplicacao: {
            funcao:
                "O 'sol' da perfumaria. É o topo mais versátil que existe, responsável por dar o 'boas-vindas' e o brilho inicial à fragrância. Indispensável em Colônias Clássicas, Chypres e Fougères.",
            sinergias:
                "Cria um link perfeito com o Ambroxan (que ajuda a segurar o frescor cítrico por mais tempo) e com a Lavanda/Gerânio para a estrutura Fougère. Combina lindamente com o Hedione para saídas florais luminosas.",
            riscos:
                "Por ser muito volátil, se não for ancorada por notas de base corretas (como musks e fixadores), ela evapora rápido demais, deixando a abertura do perfume vazia após alguns minutos."
        },
        seguranca: {
            alerta:
                "O óleo essencial de Bergamota prensado a frio bruto é altamente fototóxico devido à presença de bergapteno (furocoumarinas).",
            restricao:
                "Limitado a no máximo 0,4% de óleo essencial bruto no produto final na pele.",
            solucao:
                "Para uso livre em perfumaria fina sem restrições severas de dosagem, utiliza-se a Bergamota FCF (Furocoumarin-Free) ou destilada, onde o agente fototóxico é removido por destilação a vácuo."
        }
    },

    {
        id: "lavanda",
        nome: "LAVANDA",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Lavandula angustifolia / Lavandula officinalis",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor das sumidades floridas).",
            familiaOlfativa:
                "Aromática / Herbácea.",
            aparencia:
                "Líquido fluido, límpido, de coloração variando de incolor a amarelo-esverdeado pálido."
        },
        comportamento: {
            volatilidade:
                "Meio / Topo (Nota de Transição Corpo-Saída).",
            tenacidade:
                "Média-Baixa. Permanece perceptível na fita por cerca de 12 a 24 horas. Age como uma ponte volátil que une o frescor inicial ao coração do perfume.",
            intensidade:
                "Médio-Alto (Escala: 6/10). Possui uma abertura marcante e expansiva, mas acalma-se rapidamente na evolução.",
            diluicao:
                "Pura (100%) para a estruturação clássica de acordes aromáticos e fougères."
        },
        perfil: {
            descritores:
                "Herbáceo fresco, Floral, Canforado, Ligeiramente Doce.",
            nuances:
                "Apresenta um topo nitidamente limpo e medicinal, evoluindo para um corpo floral-macio refinado que remete a feno seco, nuances balsâmicas sutis e um fundo discretamente amadeirado e frutado (devido à alta presença natural de acetato de linalila e linalol)."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Impacto rústico e efervescente, aromático-canforado pronunciado e altamente revigorante."
            },

            {
                tempo: "30 min",
                descricao:
                    "A rusticidade canforada diminui drasticamente, emergindo o lado floral-limpo, reconfortante e relaxante."
            },

            {
                tempo: "2 horas+",
                descricao:
                    "Um eco suave, adocicado, balsâmico e herbáceo-seco que se funde suavemente com as notas de fundo."
            }
        ],
        aplicacao: {
            funcao:
                "Arquitetura e frescor dinâmico. É a espinha dorsal indispensável da histórica família Fougère e componente vital em águas de colônia tradicionais e construções aromáticas masculinas e compartilháveis.",
            sinergias:
                "Forma a tríade lendária do acorde Fougère junto ao Musgo de Carvalho (ou Evernyl) e à Cumarina. Harmoniza com maestria com a Bergamota e o Gerânio, além de conferir naturalidade a bases de Musk sintético e notas de Pinheiro.",
            riscos:
                "O excesso de lavanda natural pode sobressair o aspecto medicinal e canforado, tornando a saída da fragrância áspera, datada ou com aspecto que remete a produtos de limpeza doméstica se não for devidamente equilibrada com citrinos e resinas."
        },
        seguranca: {
            alerta:
                "Exige atenção ao controle de oxidação. O linalol presente na lavanda pode formar hidroperóxidos quando exposto ao ar e à luz por longos períodos, aumentando o potencial de sensibilização cutânea.",
            restricao:
                "O óleo essencial puro de Lavandula angustifolia não possui uma restrição quantitativa direta pela IFRA por si só. No entanto, é regulado indiretamente devido aos seus constituintes naturais alergênicos (como o Linalol).",
            solucao:
                "Recomenda-se adicionar antioxidantes (como o BHT ou Tocopherol) na carga de essência e manter o frasco bem vedado."
        }
    },
    {
        id: "ebanol",
        nome: "EBANOL",
        subtitulo: "Aromaquímico Sintético",
        nomeCientifico: "3-Methyl-5-(2,2,3-trimethyl-3-cyclopenten-1-yl)-4-penten-2-ol",
        identificacao: {
            tipoMateriaPrima:
                "Sintético (Molécula isolada desenvolvida e patenteada pela Givaudan).",
            familiaOlfativa:
                "Amadeirada / Sândalo.",
            aparencia:
                "Líquido viscoso, límpido, de coloração incolor a pálida amarelada."
        },
        comportamento: {
            volatilidade:
                "Fundo (Nota de Base).",
            tenacidade:
                "Altíssima. Permanece perceptível na fita olfativa por 400 horas (mais de 16 dias). Confere uma fixação linear e de longa duração.",
            intensidade:
                "Alto (Escala: 8/10). Possui um excepcional poder de difusão e excelente rendimento mesmo em dosagens muito baixas.",
            diluicao:
                "Pura (100%) ou a 10% em DPG para melhor manipulação de bancada devido à sua viscosidade."
        },
        perfil: {
            descritores:
                "Amadeirado sândalo, Rico, Substancial, Cremoso, Ligeiramente Adocicado.",
            nuances:
                "Apresenta uma faceta muito natural que emula o óleo essencial de sândalo de alta qualidade, com nuances cremosas, quentes, toques discretamente florais/moscado e um aspecto levemente resinoso que lembra incenso."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura amadeirada rica, densa e com um aspecto cremoso imediato, sem o topo áspero ou picante de outros amadeirados."
            },

            {
                tempo: "4 horas",
                descricao:
                    "Desenvolve máxima radiância e corpo, envelopando o coração da fragrância com um calor suntuoso e macio de sândalo."
            },

            {
                tempo: "48 horas+",
                descricao:
                    "Fixação linear extrema, retendo o perfil de madeira cremosa, limpa, confortável e altamente sofisticada na pele ou tecidos."
            }
        ],
        aplicacao: {
            funcao:
                "Fixador, volumizador e doador de corpo. É amplamente utilizado para conferir uma rica e moderna assinatura de sândalo, além de gerar volume e textura aveludada em acordes florais e orientais.",
            sinergias:
                "Combina magnificamente com outras notas de sândalo (como Javanol e Sandalore) para criar complexidade. Funciona em perfeita sinergia com notas florais (especialmente Rosa e Jasmim) e Musks sintéticos.",
            riscos:
                "Devido ao seu alto poder de impacto e difusão, o excesso pode 'engolir' notas mais delicadas de topo e coração, sobrecarregando a fórmula com um aspecto excessivamente denso, oleoso ou ceroso."
        },
        seguranca: {
            alerta:
                "Considerado um ingrediente seguro de bancada. No entanto, deve ser monitorado por ser uma substância concentrada que pode causar irritação se manipulada pura sem os cuidados adequados de laboratório.",
            restricao:
                "Não possui restrições quantitativas severas nas diretrizes atuais da IFRA para a Categoria 4 (Perfumaria Fina), sendo limitado apenas pelo bom senso e equilíbrio olfativo do perfumista.",
            solucao:
                "Pode ser utilizado puramente na carga de essência respeitando os limites usuais de aplicação (geralmente empregado entre 0,5% a 5% do concentrado da fragrância)."
        }
    },
    {
        id: "alecrim",
        nome: "ALECRIM",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Salvia rosmarinus / Rosmarinus officinalis",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor das sumidades floridas e folhas).",
            familiaOlfativa:
                "Aromática / Herbácea (Canforada).",
            aparencia:
                "Líquido fluido, límpido, de coloração incolor a amarelo-pálido."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça).",
            tenacidade:
                "Baixa-Média. Permanece perceptível na fita por cerca de 8 a 12 horas. Fornece uma efervescência verde e herbal imediata.",
            intensidade:
                "Alto (Escala: 7/10). Possui um odor fortemente canforado e penetrante que corta a fórmula.",
            diluicao:
                "Pura (100%) ou a 10% para melhor equilíbrio em acordes de topo refinados."
        },
        perfil: {
            descritores:
                "Herbáceo, Canforado, Fresco, Pináceo, Ligeiramente Amadeirado.",
            nuances:
                "Apresenta um caráter intensamente fresco, medicinal e limpo, com nuances marcantes que remetem a pinheiro, eucalipto e folhas esmagadas, evoluindo para um fundo sutilmente amadeirado-seco e picante."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Explosão herbácea, rústica, intensamente canforada, refrescante e pungente."
            },

            {
                tempo: "30 min",
                descricao:
                    "O aspecto medicinal mais agressivo suaviza, revelando um corpo herbal seco, limpo, aromático e revigorante."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Resta um resíduo amadeirado-herbáceo morno, pináceo e muito confortável antes de sumir da fita."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de energia e tônico de topo. É um componente histórico e fundamental em Águas de Colônia clássicas, fragrâncias terapêuticas e na espinha dorsal aromática de Fougères masculinos.",
            sinergias:
                "Trabalha em perfeita harmonia com outros herbáceos (Lavanda, Tomilho, Menta), Cítricos (Limão Siciliano, Petitgrain) e notas de Pinheiro ou Incenso (Olíbano).",
            riscos:
                "Por conter alto teor de cânfora e cineol, o excesso pode deixar a fragrância excessivamente farmacêutica, áspera ou agressiva, remetendo a pomadas medicinais."
        },
        seguranca: {
            alerta:
                "Como a maioria dos óleos essenciais ricos em monoterpenos, requer cuidados contra a oxidação para evitar potencial sensibilização da pele.",
            restricao:
                "Não possui restrições quantitativas diretas estabelecidas pela IFRA. No entanto, seus componentes naturais isolados (como Limoneno e Linalol) devem ter suas concentrações somadas no cálculo de alergênicos.",
            solucao:
                "Controlar o estoque mantendo o produto sob refrigeração e protegido da luz, e utilizar antioxidantes na formulação final se necessário."
        }
    },
    {
        id: "metilpamplemousse",
        nome: "METILPAMPLEMOUSSE",
        subtitulo: "Aromaquímico Sintético",
        nomeCientifico: "1,1-dimethoxy-2,2,5-trimethyl-4-hexene (Amarocite)",
        identificacao: {
            tipoMateriaPrima:
                "Sintético (Molécula isolada desenvolvida e comercializada pela Givaudan).",
            familiaOlfativa:
                "Cítrica / Frutada (Toranja).",
            aparencia:
                "Líquido fluido, límpido e incolor."
        },
        comportamento: {
            volatilidade:
                "Topo / Meio (Nota de Saída com excelente sustentação).",
            tenacidade:
                "Média. Permanece perceptível na fita por cerca de 16 a 24 horas, estendendo o frescor cítrico muito além dos óleos naturais.",
            intensidade:
                "Alto (Escala: 7.5/10). Tem um caráter muito radiante e difusivo.",
            diluicao:
                "Pura (100%) ou a 10% para dosagem precisa em laboratório."
        },
        perfil: {
            descritores:
                "Cítrico toranja, Amargo, Fresco, Zesty, Ligeiramente Ruibarbo.",
            nuances:
                "Captura perfeitamente o aspecto seco, amargo e sulfuroso da casca fresca de toranja (Grapefruit). Possui uma faceta verde-picante que lembra ruibarbo e um fundo limpo, levemente floral-frutado."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura cítrica cortante, amarga e extremamente realista de toranja com excelente brilho."
            },

            {
                tempo: "1 hora",
                descricao:
                    "Mantém o frescor cítrico vívido, mas se funde ao coração revelando uma faceta verde, exótica e refrescante."
            },

            {
                tempo: "6 horas",
                descricao:
                    "A intensidade diminui, deixando um eco cítrico limpo, seco e frutado que ancora suavemente o bloco de topo."
            }
        ],
        aplicacao: {
            funcao:
                "Modificador de topo e extensor de frescor. É amplamente utilizado para criar ou reforçar notas modernas de toranja e dar sustentação a acordes cítricos voláteis.",
            sinergias:
                "Excelente com notas florais modernas (Hedione), acordes marinhos (Calone) e outros cítricos (Bergamota, Mandarina). Combina muito bem com Vetiver para criar o clássico contraste cítrico-terroso.",
            riscos:
                "O uso excessivo pode tornar a fragrância metálica, excessivamente amarga ou artificial, gerando um aspecto cortante incômodo."
        },
        seguranca: {
            alerta:
                "Matéria-prima estável e segura para manipulação rotineira de bancada sob boas práticas laboratoriais.",
            restricao:
                "Não apresenta restrições de dosagem máxima pela IFRA na Categoria 4 (Perfumaria Fina), sendo limitada pelas restrições olfativas da própria composição.",
            solucao:
                "Pode ser empregado diretamente na fórmula, sendo comum o uso em concentrações de 0.2% a 5% do concentrado da fragrância."
        }
    },
    {
        id: "linalol",
        nome: "LINALOL",
        subtitulo: "Aromaquímico Isolado / Sintético",
        nomeCientifico: "3,7-dimethyl-1,6-octadien-3-ol",
        identificacao: {
            tipoMateriaPrima:
                "Sintético (Isolado idêntico ao natural, presente em centenas de óleos essenciais como Lavanda e Pau-Rosa).",
            familiaOlfativa:
                "Floral / Aromática.",
            aparencia:
                "Líquido fluido, incolor e límpido."
        },
        comportamento: {
            volatilidade:
                "Topo / Meio (Nota de Saída / Transição para o Corpo).",
            tenacidade:
                "Baixa-Média. Permanece na fita por cerca de 4 a 8 horas (Dados TGSC). É uma molécula de transição rápida e fluida.",
            intensidade:
                "Médio (Escala: 5/10). É suave quando isolado, mas atua como um poderoso agente de harmonização na fórmula.",
            diluicao:
                "Pura (100%) para uso geral, dado o seu papel estrutural de grande volume."
        },
        perfil: {
            descritores:
                "Floral macio, Cítrico doce, Amadeirado leve, Herbáceo, Remete a Lavanda.",
            nuances:
                "Possui um perfil extremamente limpo e versátil, apresentando nuances que transitam entre o frescor da lavanda, a doçura da bergamota, um toque sutil de coentro e uma textura cremosa amadeirada-floral de petitgrain."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura floral-aromática suave, refrescante, limpa, levemente adocicada e muito agradável."
            },

            {
                tempo: "30 min",
                descricao:
                    "Mescla-se totalmente ao bloco central, trazendo uma sensação de maciez, ar e homogeneidade entre as notas de topo e coração."
            },

            {
                tempo: "3 horas",
                descricao:
                    "Resta um resíduo floral-amadeirado muito leve, macio e limpo antes de evaporar completamente."
            }
        ],
        aplicacao: {
            funcao:
                "Agente de coesão, volume e naturalidade. É um dos aromaquímicos mais consumidos no mundo por sua capacidade única de 'unir' pontas soltas na fórmula, suavizar arestas ásperas e conferir um aspecto natural e floral a misturas sintéticas.",
            sinergias:
                "Indispensável em praticamente qualquer acorde floral (Rosa, Jasmim, Lírio-do-vale) e aromático (Lavanda, Gerânio). Forma o par perfeito com o Acetato de Linalila para reconstruir bases cítricas e florais.",
            riscos:
                "Embora seja difícil de arruinar uma fórmula, o uso exagerado sem contrapartes de fundo estruturadas pode deixar o perfume excessivamente volátil, 'lavado', sem personalidade e com aspecto genérico de sabonete comum."
        },
        seguranca: {
            alerta:
                "O Linalol puro em si possui baixo potencial alergênico, porém torna-se um forte sensibilizante cutâneo se sofrer autooxidação ao ficar exposto ao ar e à luz por longos períodos.",
            restricao:
                "Não possui limite quantitativo de dosagem máxima pela IFRA por razões de toxicidade direta. No entanto, é listado como Alérgeno de Declaração Obrigatória na rotulagem de cosméticos (especialmente na UE e Brasil) se ultrapassar 0,001% em produtos sem enxágue.",
            solucao:
                "Deve-se obrigatoriamente adicionar um antioxidante (como BHT ou Tocopherol a 0,1%) ao composto e estocar em frascos âmbar bem cheios, protegidos do oxigênio."
        }
    },
    {
        id: "manjericao",
        nome: "MANJERICÃO",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Ocimum basilicum (Tipo Linalol / Francês)",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor das folhas e sumidades floridas).",
            familiaOlfativa:
                "Aromática / Herbácea / Anisada.",
            aparencia:
                "Líquido fluido, límpido, de coloração incolor a amarelo-pálido."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça).",
            tenacidade:
                "Baixa. Permanece perceptível na fita olfativa por cerca de 4 a 8 horas (Dados TGSC). Fornece um impacto herbal imediato.",
            intensidade:
                "Alto (Escala: 7.5/10). Possui uma assinatura aromática penetrante e muito difusiva.",
            diluicao:
                "Pura (100%) ou a 10% para melhor calibração de nuances verdes delicadas em bancada."
        },
        perfil: {
            descritores:
                "Herbáceo doce, Anisado, Verde fresco, Ligeiramente Especiado (Cravinho).",
            nuances:
                "Combina o frescor rústico de folhas verdes esmagadas com uma marcante faceta doce e licorosa que remete ao anis e ao alcaçuz (devido ao estragol ou nuances combinadas), evoluindo para um corpo floral-aromático macio de linalol com um sutil toque picante de eugenol."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Explosão verde-herbácea úmida, intensamente aromática, picante e com um marcante dulçor anisado radiante."
            },

            {
                tempo: "30 min",
                descricao:
                    "O caráter picante inicial acalma, desabrochando um coração herbal refinado, limpo, macio e sutilmente floralizado."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Resta um resíduo vegetal seco, limpo e levemente amadeirado-doce antes de sumir por completo da fita."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de naturalidade vegetal, efervescência verde e originalidade. É amplamente utilizado para modernizar o bloco de topo de fragrâncias cítricas, infundir um aspecto 'crocante' em acordes florais ou enriquecer a saída de Fougères contemporâneos.",
            sinergias:
                "Excelente com cítricos brilhantes (Bergamota, Limão Siciliano), notas de Tomate, Hortelã, e acordes florais transparentes como o Jasmim e o Néroli.",
            riscos:
                "Em doses elevadas, seu perfil intensamente anisado e culinário pode dominar a fórmula, fazendo o perfume remeter diretamente a molhos salgados, temperos de cozinha ou xaropes doces medicinais."
        },
        seguranca: {
            alerta:
                "Dependendo do quimiotipo do óleo (como o tipo exótico rico em estragol/metil chavicol), pode conter substâncias monitoradas quanto ao potencial carcinogênico e sensibilizante.",
            restricao:
                "Regulado e limitado pelas diretrizes da IFRA (Categoria 4 - Perfumaria Fina) se contiver altos teores de Estragol ou Metileugenol, estabelecendo tetos rígidos para o produto final na pele.",
            solucao:
                "Utilizar preferencialmente o Quimiotipo Linalol (Manjericão Francês), que possui excelente perfil de segurança e menor restrição regulatória, controlando rigorosamente as somas de alérgenos."
        }
    },
    {
        id: "ladano",
        nome: "LÁDANO",
        subtitulo: "Resinoide / Absoluto",
        nomeCientifico: "Cistus ladanifer",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Resinoide ou absoluto obtido por extração por solvente da goma-resina das folhas e galhos).",
            familiaOlfativa:
                "Ambarada / Balsâmica / Resinosa.",
            aparencia:
                "Massa sólida ou líquido extremamente viscoso e denso, de coloração castanho-escura a negra."
        },
        comportamento: {
            volatilidade:
                "Fundo (Nota de Base pesada / Fixador de cauda longa).",
            tenacidade:
                "Altíssima. Permanece na fita olfativa por mais de 400 horas (mais de 16 dias, dados TGSC). Ancora magistralmente as notas voláteis.",
            intensidade:
                "Médio-Alto (Escala: 6.5/10). É profundo, suntuoso, opaco e preenche o espaço de forma gradual.",
            diluicao:
                "Obrigatório a 50% ou 10% em DPG para manuseio laboratorial viável, devido à sua consistência resinosa espessa."
        },
        perfil: {
            descritores:
                "Ambarado doce, Couro rico, Balsâmico, Incensado, Animálico quente.",
            nuances:
                "É o pilar fundamental do acorde de âmbar clássico. Mescla um dulçor balsâmico denso e resinoso com nuances marcantes de couro envelhecido, fumaça de incenso fria, facetas de ameixa seca e um fundo animálico quente, seco e sensual que emula o âmbar-cinzento."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura tímida, resinosa, sutilmente canforada e medicinal, com um fundo denso e escuro de difícil desprendimento."
            },

            {
                tempo: "4 horas",
                descricao:
                    "Revela toda a sua opulência calorosa, exalando um aroma ambarado magnífico, adocicado, incensado e com uma rica textura de couro macio."
            },

            {
                tempo: "48 horas+",
                descricao:
                    "Fixação indestrutível na fita. Deixa um rastro ambarado-animálico doce, nobre, empoeirado e sumamente sofisticado."
            }
        ],
        aplicacao: {
            funcao:
                "Fixador master, doador de calor oriental e espessura. É a matéria-prima insubstituível para criar a base de perfumes Orientais, acordes de Âmbar e para dar o clássico fundo musgoso-resinoso de Chypres tradicionais.",
            sinergias:
                "Forma sinergia absoluta com a Baunilha e o Benjoim (acorde de Âmbar), com o Patchouli (acorde Chypre) e com óleos amadeirados ricos como o Sândalo e o Vetiver.",
            riscos:
                "O uso excessivo pode soterrar a radiância e a transparência do perfume, tornando a composição excessivamente pesada, abafada, pegajosa ou excessivamente vintage e linear."
        },
        seguranca: {
            alerta:
                "Matéria-prima de altíssima estabilidade química na fórmula e muito segura contra degradações oxidativas aceleradas.",
            restricao:
                "O absoluto e o resinoide de Ládano bruto purificado não possuem restrição quantitativa severa direta pela IFRA na perfumaria fina, contanto que o processo de extração elimine resíduos indesejados.",
            solucao:
                "Pode ser usado com excelente liberdade criativa (comumente entre 0.5% a 5% do concentrado) para criar assinaturas ricas, orientais e densas de longa duração."
        }
    },
    {
        id: "jasmin_grandiflorum",
        nome: "JASMIM GRANDIFLORUM",
        subtitulo: "Absoluto",
        nomeCientifico: "Jasminum grandiflorum",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Absoluto obtido por extração por solvente do concreto das flores frescas colhidas antes do amanhecer).",
            familiaOlfativa:
                "Floral / Floral Branca.",
            aparencia:
                "Líquido viscoso, de coloração castanho-alaranjada a avermelhada escura."
        },
        comportamento: {
            volatilidade:
                "Meio (Nota de Corpo Floral de imenso volume).",
            tenacidade:
                "Alta. Permanece perceptível na fita por mais de 100 horas (cerca de 4 dias, dados TGSC). Irradia do coração até o fundo.",
            intensidade:
                "Extremo (Escala: 9/10). Possui uma força difusiva monumental e um poder de fixação floral único.",
            diluicao:
                "Recomendado a 10% ou 1% para manipulação inicial e para não saturar as vias olfativas do avaliador."
        },
        perfil: {
            descritores:
                "Floral rico, Indólico, Doce frutado, Carnal, Ligeiramente Chá/Verde.",
            nuances:
                "Captura a opulência máxima das flores brancas. Entrelaça uma doçura floral inebriante com nuances frutadas que lembram banana e geleia de damasco, facetas indólicas quentes e carnais (remetendo a pele), e um fundo sutil de chá verde e tabaco doce."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Impacto floral avassalador, intensamente doce, radiante, com um toque frutado denso e nuances indólicas aquecidas imediatas."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Evolui para o coração floral mais glorioso e aveludado da perfumaria, exibindo um caráter narcótico, acetinado e sumamente natural."
            },

            {
                tempo: "24 horas+",
                descricao:
                    "Resta um fundo floral macio, morno, levemente amandorrado, limpo e de altíssima elegância sensual."
            }
        ],
        aplicacao: {
            funcao:
                "O rei dos florais. Confere volume, riqueza indescritível, naturalidade e um aspecto 'caro' a qualquer composição. É indispensável na perfumaria fina feminina clássica e de nicho, agindo como um poderoso harmonizador de arestas sintéticas.",
            sinergias:
                "Combina perfeitamente com a Rosa (o dueto mais famoso da perfumaria), Ylang-Ylang, Tuberosa, aromaquímicos como o Hedione e bases cremosas de Sândalo e Baunilha.",
            riscos:
                "Devido ao seu alto teor de indol, o uso excessivo ou sem o devido equilíbrio pode deixar a fragrância excessivamente pesada, fecal, animalizada ou com um aspecto sufocante e enjoativo."
        },
        seguranca: {
            alerta:
                "Contém naturalmente componentes alergênicos de declaração obrigatória como o Álcool Benzílico, Benzoato de Benzila, Eugenol e Linalol.",
            restricao:
                "Regulado e limitado pela IFRA (Categoria 4 - Perfumaria Fina). O absoluto de Jasmim Grandiflorum possui uma concentração máxima permitida no produto final aplicado na pele para evitar sensibilização.",
            solucao:
                "Calcular rigorosamente o percentual de uso no composto concentrado (geralmente empregado entre 0.1% a 2% da fórmula) para garantir que, após a diluição final em álcool, o limite seguro da IFRA seja estritamente respeitado."
        }
    },
    {
        id: "geranio",
        nome: "GERÂNIO",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Pelargonium graveolens (Gerânio Bourbon / Egito)",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor das folhas e hastes).",
            familiaOlfativa:
                "Floral / Rosada / Verde.",
            aparencia:
                "Líquido fluido, límpido, de cor amarela a amarelo-esverdeada clara."
        },
        comportamento: {
            volatilidade:
                "Meio / Topo (Nota de Corpo com excelente impacto e difusão na saída).",
            tenacidade:
                "Média. Permanece perceptível na fita por cerca de 24 a 48 horas (Dados TGSC). Funciona como uma excelente ponte floral.",
            intensidade:
                "Alto (Escala: 7.5/10). Possui uma assinatura penetrante, pungente e muito radiante.",
            diluicao:
                "Pura (100%) para estruturação de acordes Fougère ou a 10% para calibração de florais delicados."
        },
        perfil: {
            descritores:
                "Floral rosado, Verde mentolado, Metálico, Citronelal, Ligeiramente Herbáceo.",
            nuances:
                "Frequentemente chamado de 'a rosa masculina'. Exibe um perfil floral muito rico dominado por geraniol e citronelol, mas com uma marcante faceta verde, fria e mentolada no topo, nuances ligeiramente metálicas e um fundo herbáceo limpo e seco."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura impactante, verde-mentolada, cortante e efervescente, com o caráter floral rosado latente por baixo."
            },

            {
                tempo: "30 min",
                descricao:
                    "O lado mentolado ríspido diminui, revelando um corpo floral rosado magnífico, limpo, robusto, unissex e muito revigorante."
            },

            {
                tempo: "6 horas",
                descricao:
                    "Resta um resíduo floral-herbáceo seco, limpo e sutilmente amadeirado-verde de excelente frescor."
            }
        ],
        aplicacao: {
            funcao:
                "Agente de união, doador de brilho floral e frescor verde. É o ingrediente floral definitivo da família Fougère masculina (trazendo o lado limpo de barbearia), além de ser crucial para estender e robustecer acordes de Rosa na perfumaria feminina.",
            sinergias:
                "Sinergia master com a Lavanda, Alecrim, Patchouli, e óleos cítricos (como a Bergamota). Combina perfeitamente com o Óleo de Rosa e com o Citronelol.",
            riscos:
                "O uso excessivo pode tornar a fragrância excessivamente ríspida, estridente, metálica ou remeter de forma caricata a repelentes de insetos citronelados ou produtos de limpeza aromáticos comuns."
        },
        seguranca: {
            alerta:
                "Naturalmente rico em geraniol, citronelol e linalol, exigindo inclusão detalhada na listagem de alérgenos cosméticos.",
            restricao:
                "O óleo essencial de Gerânio puro não possui restrição quantitativa direta severa imposta pela IFRA, sendo limitado indiretamente pelas cotas máximas de seus alérgenos individuais constituintes.",
            solucao:
                "Utilizar a versão 'Gerânio Bourbon' para projetos que exigem maior refinamento e doçura floralizada, ou o 'Gerânio Egito' para uma pegada mais verde, seca e nitidamente masculina."
        }
    },
    {
        id: "cipreste",
        nome: "CIPRESTE",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Cupressus sempervirens",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor das folhas/agulhas e ramos frescos).",
            familiaOlfativa:
                "Amadeirada / Pinácea / Aromática.",
            aparencia:
                "Líquido fluido, límpido, de coloração incolor a amarelo-clara pálida."
        },
        comportamento: {
            volatilidade:
                "Topo / Meio (Nota de Saída com excelente corpo amadeirado inicial).",
            tenacidade:
                "Baixa-Média. Permanece perceptível na fita por cerca de 8 a 16 horas (Dados TGSC). Evapora de forma limpa.",
            intensidade:
                "Médio-Alto (Escala: 6/10). Confere uma efervescência lenhosa fresca e muito retilínea.",
            diluicao:
                "Pura (100%) para a construção de esqueletos amadeirados e aromáticos vibrantes."
        },
        perfil: {
            descritores:
                "Pináceo, Amadeirado seco, Conífero, Resinoso fresco, Ligeiramente Defumado.",
            nuances:
                "Evoca o aroma nítido de florestas temperadas e agulhas de pinheiro esmagadas. Une um topo terpênico e cítrico (alfa-pineno) com um corpo lenhoso seco, resinoso, purificador, com discretas facetas herbáceas e um fundo sutilmente defumado/incensado."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Explosão conífera refrescante, intensamente pinácea, limpa, resinosa e com um aspecto balsâmico agudo."
            },

            {
                tempo: "30 min",
                descricao:
                    "A efervescência terpênica acalma, assentando-se em um amadeirado seco, sóbrio, austero, aristocrático e muito elegante."
            },

            {
                tempo: "4 horas",
                descricao:
                    "Resta um resíduo lenhoso-seco limpo, reconfortante e sutilmente resinoso antes de dissipar-se da fita."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de sobriedade, frescor lenhoso e elegância atemporal. Excelente para estruturar colônias masculinas esportivas, fragrâncias amadeiradas secas de nicho e para conferir um aspecto 'árido e limpo' que equilibra notas doces ou florais pesadas.",
            sinergias:
                "Harmoniza maravilhosamente bem com o Cedro Virgínia, Vetiver, Olíbano, Alecrim, Lavanda e cítricos secos como a Toranja e a Bergamota.",
            riscos:
                "Se dosado de maneira exagerada ou sem o devido envelopamento, pode deixar o perfume excessivamente ríspido, frio, medicinal ou com cheiro linear de desinfetante de pinho barato."
        },
        seguranca: {
            alerta:
                "Muito rico em monoterpenos voláteis, o que o torna altamente suscetível à autooxidação se exposto ao ar e à luz.",
            restricao:
                "Não apresenta restrições quantitativas diretas impostas pelas diretrizes da IFRA para perfumaria fina (Categoria 4).",
            solucao:
                "Adicionar obrigatoriamente um antioxidante (como o BHT) à formulação e manter o estoque sob refrigeração rigorosa em frascos cheios para evitar a formação de peróxidos irritantes."
        }
    },
    {
        id: "mandarina",
        nome: "MANDARINA",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Citrus reticulata (Mandarina Verde / Amarela / Vermelha)",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por expressão/prensagem a frio da casca fresca do fruto).",
            familiaOlfativa:
                "Cítrica / Frutada.",
            aparencia:
                "Líquido fluido, de coloração que varia de verde-escura (Mandarina Verde) a alaranjada intensa (Mandarina Vermelha)."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça).",
            tenacidade:
                "Muito Baixa. Permanece perceptível na fita por cerca de 2 a 4 horas (Dados TGSC). É uma nota cítrica de escape rápido.",
            intensidade:
                "Alto (Escala: 7/10). Traz uma radiância cítrica sumamente alegre, expansiva e reconfortante.",
            diluicao:
                "Pura (100%) para dar o volume e a assinatura efervescente inicial no bloco de saída."
        },
        perfil: {
            descritores:
                "Cítrico doce, Frutado zesty, Casca esmagada, Suculento, Ligeiramente Floral.",
            nuances:
                "Apresenta um perfil cítrico único e complexo: une o aroma efervescente e levemente amargo da casca expressa com uma doçura suculenta e frutada profunda, carregando nuances exóticas e sutilmente florais/animálicas (devido à presença natural de antranilato de metila)."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Explosão cítrica extremamente realista, efervescente, doce e suculenta, recriando perfeitamente o ato de descascar a fruta."
            },

            {
                tempo: "15 min",
                descricao:
                    "O impacto pungente inicial suaviza, mantendo um dulçor cítrico-frutado muito limpo, alegre, sofisticado e reconfortante."
            },

            {
                tempo: "1 hora",
                descricao:
                    "Dissipa-se gradualmente da fita olfativa, deixando um eco sutil, limpo e levemente adocicado antes de sumir."
            }
        ],
        aplicacao: {
            funcao:
                "Doadora de suculência, brilho e refinamento cítrico. É considerada uma das notas cítricas mais elegantes da perfumaria fina, amplamente usada para quebrar a monotonia de saídas cítricas comuns e para introduzir um dulçor frutado natural a perfumes unissex, colônias de luxo e criações infantis.",
            sinergias:
                "Forma casamentos espetaculares com o Neroli, Petitgrain, Bergamota, especiarias frias (como o Gengibre) e acordes de Chá Verde.",
            riscos:
                "Por sua altíssima volatilidade, se não for amarrada por fixadores eficientes ou por notas amadeiradas/musks na base, ela desaparece em minutos, deixando um vazio na transição da fragrância."
        },
        seguranca: {
            alerta:
                "O óleo essencial bruto expresso a frio de mandarina (especialmente de mandarina vermelha) possui potencial fototóxico desprezível ou nulo, mas requer cuidados laboratoriais contra oxidação.",
            restricao:
                "Não possui limite quantitativo severo direto estabelecido pela IFRA para a Categoria 4 (Perfumaria Fina), atuando de forma livre sob o controle de seus componentes alérgenos comuns (como o Limoneno).",
            solucao:
                "Garantir o uso de antioxidantes (BHT ou Alfatocoferol) no composto final para proteger o d-limoneno contra a autooxidação, que gera fortes sensibilizantes cutâneos."
        }
    },
    {
        id: "salvia_esclareia",
        nome: "SÁLVIA ESCLAREIA",
        subtitulo: "Óleo Essencial / Absoluto",
        nomeCientifico: "Salvia sclarea",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor das folhas e sumidades floridas).",
            familiaOlfativa:
                "Aromática / Herbácea / Ambarada.",
            aparencia:
                "Líquido fluido, límpido, incolor a amarelo-pálido esverdeado."
        },
        comportamento: {
            volatilidade:
                "Meio / Topo (Nota de Transição com excelente corpo aromático persistente).",
            tenacidade:
                "Média-Alta. Permanece perceptível na fita olfativa por cerca de 36 a 72 horas (Dados TGSC). Excelente agente de fixação interna.",
            intensidade:
                "Alto (Escala: 7/10). Confere uma presença robusta, aveludada, difusiva e muito envolvente.",
            diluicao:
                "Pura (100%) para estruturar o esqueleto aromático ou a 10% para dosar nuances mais suaves de bancada."
        },
        perfil: {
            descritores:
                "Herbáceo doce, Ambarado, Chá seco, Ligeiramente Tabaco, Almiscarado sutil.",
            nuances:
                "Diferente da Sálvia Comum (medicinal/canforada), a Esclareia é sumamente sofisticada e macia. Mescla um topo herbáceo e fresco que remete a lavanda e chá verde com um corpo quente, aveludado e ambarado (rico em esclareol), trazendo facetas de tabaco seco e um fundo almiscarado sensual."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura aromática fresca, herbácea e limpa, lembrando lavanda, com uma marcante textura aveludada doce-seca."
            },

            {
                tempo: "1 hora",
                descricao:
                    "Evolui para um corpo magnífico de chá seco e tabaco loiro, desabrochando sua famosa faceta ambarada natural e reconfortante."
            },

            {
                tempo: "24 horas+",
                descricao:
                    "Resta um fundo ambarado macio, almiscarado, muito limpo, quente e extremamente elegante de longa persistência."
            }
        ],
        aplicacao: {
            funcao:
                "Agente de coesão, fixador natural e doador de textura aveludada. É o ingrediente aromático mais luxuoso da perfumaria Fougère e Chypres modernos, agindo como uma ponte perfeita para estender acordes cítricos/herbitas rumo a bases ambaradas e almiscaradas pesadas.",
            sinergias:
                "Sinergia absoluta com a Lavanda, Bergamota, Gerânio, Cedro, e com aromaquímicos ambarados como o Ambroxan (com o qual compartilha identidade química).",
            riscos:
                "Se hiperdosada na fórmula, seu caráter aveludado denso e a faceta de chá seco podem deixar a fragrância excessivamente opaca, suada, empoeirada ou com um aspecto herbáceo pesado e sufocante."
        },
        seguranca: {
            alerta:
                "Matéria-prima de excelente estabilidade laboratorial, segura contra oxidações rápidas e com baixíssimo índice de irritação.",
            restricao:
                "Não possui restrições quantitativas diretas e severas pela IFRA para uso em perfumaria fina (Categoria 4), sendo limitada apenas pela estética da criação.",
            solucao:
                "Manipular normalmente na bancada respeitando o equilíbrio olfativo e quantificar seus alérgenos naturais intrínsecos (como o Linalol) na planilha final de regulatórios."
        }
    },
    {
        id: "capim_limao",
        nome: "CAPIM LIMÃO",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Cymbopogon citratus / Cymbopogon flexuosus",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor das folhas frescas ou parcialmente secas).",
            familiaOlfativa:
                "Cítrica / Verde / Herbácea.",
            aparencia:
                "Líquido fluido, de coloração amarelo-clara a amarelo-acastanhada."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça de altíssimo impacto).",
            tenacidade:
                "Baixa. Permanece perceptível na fita olfativa por cerca de 4 a 8 horas (Dados TGSC). Evapora rapidamente devido ao alto teor de citral.",
            intensidade:
                "Extremo (Escala: 9/10). Possui um poder de impacto inicial avassalador que corta toda a fórmula.",
            diluicao:
                "Pura (100%) ou a 10% para melhor calibração e harmonia em acordes cítricos delicados."
        },
        perfil: {
            descritores:
                "Cítrico pungente, Citral, Verde folha, Agudo, Ligeiramente Adocicado.",
            nuances:
                "Apresenta um aroma cítrico intensamente focado que remete à casca de limão e ao capim esmagado, carregando nuances herbáceas rústicas, uma textura cortante e um fundo sutilmente doce-gourmand."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Explosão cítrico-verde cortante, elétrica, intensamente dominada pelo aroma de citral e folhas frescas."
            },

            {
                tempo: "30 min",
                descricao:
                    "A agressividade inicial agudizada diminui, revelando um corpo herbáceo mais limpo, reconfortante e levemente adocicado."
            },

            {
                tempo: "3 horas",
                descricao:
                    "Resta um resíduo suave, levemente terroso e cítrico-seco antes de esvair-se por completo da fita."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de impacto e energia imediata no topo. É muito utilizado em perfumaria funcional, colônias compartilháveis revigorantes, águas de banho e criações conceituais focadas em frescor natural e aromaterapêutico.",
            sinergias:
                "Harmoniza perfeitamente com notas de Menta, Gengibre, Verbena e outros cítricos secos (como a Toranja). Cria um contraste interessante com bases amadeiradas limpas como o Vetiver.",
            riscos:
                "O uso excessivo ou sem o devido amaciamento remete imediatamente a produtos de limpeza, desinfetantes domésticos ou inseticidas, arruinando qualquer sofisticação olfativa."
        },
        seguranca: {
            alerta:
                "O óleo essencial de capim limão possui alto potencial de sensibilização cutânea devido à imensa presença natural de citral (geraniol e neral).",
            restricao:
                "Regulado e estritamente limitado pelas diretrizes da IFRA (Categoria 4 - Perfumaria Fina). O citral total contido no produto final na pele deve respeitar o limite máximo seguro estabelecido pela organização.",
            solucao:
                "Adicionar antioxidantes (como BHT) para conter a degradação dos aldeídos e calibrar a dosagem na essência em concentrações baixas (geralmente abaixo de 0.5% do concentrado) para não estourar a cota da IFRA."
        }
    },
    {
        id: "ylang_ylang",
        nome: "YLANG YLANG",
        subtitulo: "Óleo Essencial / Absoluto",
        nomeCientifico: "Cananga odorata",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor das flores frescas, fracionado em diferentes graus: Extra, I, II, III ou Completo).",
            familiaOlfativa:
                "Floral Exótica / Narcótica.",
            aparencia:
                "Líquido fluido a ligeiramente denso, límpido, de coloração amarela a amarelo-escura."
        },
        comportamento: {
            volatilidade:
                "Meio / Fundo (Nota de Corpo Floral com excelente tenacidade).",
            tenacidade:
                "Alta. Permanece perceptível na fita olfativa por mais de 120 horas (cerca de 5 dias, dados TGSC). Exibe grande fixação floral.",
            intensidade:
                "Alto (Escala: 8.5/10). Possui um perfil expansivo, penetrante, pesado e doce.",
            diluicao:
                "Pura (100%) ou a 10% para suavizar a potência medicinal e focar nas nuances florais ricas."
        },
        perfil: {
            descritores:
                "Floral doce, Narcótico, Tropical, Especiado quente, Ligeiramente Medicinal.",
            nuances:
                "Apresenta uma abertura floral exuberante e intoxicante, combinando nuances de jasmim selvagem e banana madura com uma faceta picante que lembra o cravo-da-índia, um topo medicinal que remete a salicilato de metila e um fundo cremoso, balsâmico e carnal."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura floral intensa, densa, adocicada e com uma forte nota picante e medicinal (efeito 'esmalte' ou canforado)."
            },

            {
                tempo: "1 hora",
                descricao:
                    "O lado medicinal se dissipa, desabrochando um coração floral cremoso, exótico, suntuoso, intensamente tropical e sensual."
            },

            {
                tempo: "24 horas+",
                descricao:
                    "Fundo de fixação floral macia, ligeiramente balsâmica, abaunilhada, aconchegante e atalcada."
            }
        ],
        aplicacao: {
            funcao:
                "Modificador floral, doador de opulência, calor e sensualidade. É o pilar fundamental em florais abstratos luxuosos (como o Chanel Nº 5), perfumes solares modernos e criações orientais densas.",
            sinergias:
                "Trabalha em perfeita simbiose com o Jasmim, Rosa, Flor de Laranjeira, além de notas doces como a Baunilha e resinas como o Benjoim e o Sândalo.",
            riscos:
                "Se dosado em excesso, seu aspecto medicinal-indólico e o dulçor sufocante podem desequilibrar a fragrância, deixando-a enjoativa, datada, pesada ou gerando dores de cabeça."
        },
        seguranca: {
            alerta:
                "Contém compostos químicos naturais altamente alergênicos e sensibilizantes, como o benzoato de benzila, salicilato de benzila, eugenol e geraniol.",
            restricao:
                "Regulado e severamente limitado pelas diretrizes da IFRA (Categoria 4 - Perfumaria Fina). O uso do óleo essencial bruto é restrito a uma porcentagem máxima segura no produto final na pele devido ao risco de sensibilização cutânea.",
            solucao:
                "Utilizar a fração 'Ylang Ylang Extra' para obter a máxima delicadeza olfativa de bancada, ou calibrar rigorosamente o teor de alérgenos totais dentro das planilhas de cálculo regulatório."
        }
    },
    {
        id: "canela",
        nome: "CANELA (CASCA)",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Cinnamomum verum / Cinnamomum zeylanicum",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor da casca interna seca).",
            familiaOlfativa:
                "Especiada (Especiaria Quente).",
            aparencia:
                "Líquido ligeiramente fluido a viscoso, de coloração amarelo-clara a castanho-avermelhada."
        },
        comportamento: {
            volatilidade:
                "Meio / Fundo (Nota de Corpo Especiada de alta fixação).",
            tenacidade:
                "Alta. Permanece na fita olfativa por mais de 100 horas (cerca de 4 dias, dados TGSC). Estende o calor na evolução.",
            intensidade:
                "Extremo (Escala: 9/10). Tem uma assinatura intensamente penetrante, picante e doce.",
            diluicao:
                "Obrigatório a 10% ou 1% em DPG para ensaios laboratoriais devido ao seu extremo poder de cobertura e perigo dermatológico."
        },
        perfil: {
            descritores:
                "Especiado quente, Picante, Doce, Amadeirado, Pulverulento/Poeirento.",
            nuances:
                "Evoca o aroma característico e realista da especiaria em pó, unindo o calor ardente do aldeído cinâmico com facetas doces e secas, nuances amadeiradas profundas e toques resinosos sutis de fundo."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura extremamente picante, doce e ardente, com um impacto caloroso que domina imediatamente o ambiente."
            },

            {
                tempo: "1 hora",
                descricao:
                    "O caráter abrasivo suaviza, assentando-se em uma textura especiada rica, aveludada, amadeirada e aconchegante."
            },

            {
                tempo: "24 horas+",
                descricao:
                    "Resta um fundo morno, empoeirado, seco e sutilmente doce-balsâmico de excelente fixação estrutural."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de calor, sensualidade e vibração Gourmand. É vital na estruturação de acordes Orientais clássicos, criações especiadas masculinas, perfumes festivos de outono/inverno e toques exóticos e picantes.",
            sinergias:
                "Forma sinergias lendárias com a Baunilha, Cravo, Benjoim, Lábdano, e notas amadeiradas pesadas como o Patchouli. Funciona bem para aquecer cítricos como a Laranja Doce.",
            riscos:
                "O uso excessivo sufoca a fórmula inteira, soterrando notas cítricas e florais transparentes sob uma névoa doce-picante que remete a chicletes de canela ou aromatizadores de ambiente genéricos."
        },
        seguranca: {
            alerta:
                "⚠️ ATENÇÃO CRÍTICA DE BANCADA: O óleo essencial de casca de canela é um dos irritantes dérmicos e sensibilizantes mais potentes da perfumaria devido ao altíssimo teor natural de aldeído cinâmico.",
            restricao:
                "Severamente limitado pelas diretrizes da IFRA (Categoria 4 - Perfumaria Fina) a uma concentração máxima extremamente baixa e rigorosa no produto final sobre a pele.",
            solucao:
                "Dosar de forma estritamente milimétrica na bancada (usando diluições a 1% ou menos) ou substituir pelo uso isolado de Eugenol/Arisotonis se o objetivo for apenas a faceta especiada limpa, respeitando sempre as cotas regulatórias."
        }
    },
    {
        id: "olibano",
        nome: "OLÍBANO (INCENTO)",
        subtitulo: "Óleo Essencial / Resinoide",
        nomeCientifico: "Boswellia carterii / Boswellia serrata",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor da resina de goma exsudada do tronco).",
            familiaOlfativa:
                "Resinosa / Incenso / Balsâmica.",
            aparencia:
                "Líquido fluido, límpido, de coloração amarelo-pálido a âmbar-claro."
        },
        comportamento: {
            volatilidade:
                "Fundo / Meio (Nota de Base com um topo surpreendentemente difusivo).",
            tenacidade:
                "Alta. Permanece perceptível na fita por cerca de 168 horas (7 dias, dados TGSC). Excelente retardador de evaporação.",
            intensidade:
                "Médio-Alto (Escala: 6.5/10). Confere uma presença mística, limpa, etérea e muito elegante.",
            diluicao:
                "Pura (100%) ou a 10% para estruturar as transições resinosas e os blocos verticais do perfume."
        },
        perfil: {
            descritores:
                "Incenso, Resinoso, Cítrico terpênico, Especiado frio, Amadeirado seco.",
            nuances:
                "Combina o aroma sacro de incenso de igreja queimando com uma marcante abertura cítrica que lembra casca de limão/pinheiro (devido aos alfa-pinenos), facetas especiadas frias, nuances místicas e um fundo amadeirado-seco austero."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Impacto inicial surpreendentemente fresco, cítrico-terpênico, pináceo e cortante, com o incenso latente ao fundo."
            },

            {
                tempo: "2 horas",
                descricao:
                    "O lado cítrico agudo esvazia, revelando um corpo totalmente resinoso, místico, purificador, com aroma de fumaça fria e madeira nobre."
            },

            {
                tempo: "24 horas+",
                descricao:
                    "Fixação balsâmica-seca de altíssima classe, deixando uma assinatura atalcada, limpa, resinosa e confortavelmente austera."
            }
        ],
        aplicacao: {
            funcao:
                "Fixador estético e doador de 'verticalidade' espiritual. É a nota mestre absoluta em perfumes focados em incensos de nicho, orientais amadeirados modernos e criações que necessitam de uma ponte entre o frescor cítrico e resinas de fundo.",
            sinergias:
                "Forma acordes imponentes com o Cedro, Vetiver, Patchouli, Mirra e Lábdano. Combina lindamente com a Bergamota e a Pimenta Preta no topo.",
            riscos:
                "Em excesso, seu aspecto eclesiástico marcante pode deixar a fragrância excessivamente fúnebre, melancólica, austera ou com cheiro datado de rituais religiosos rígidos."
        },
        seguranca: {
            alerta:
                "Rico em monoterpenos (como pineno e limoneno), exigindo monitoramento rigoroso contra a autooxidação quando estocado por longos períodos.",
            restricao:
                "Não possui restrições quantitativas diretas e severas pela IFRA para a Categoria 4 (Perfumaria Fina), operando de forma livre sob os limites de segurança dos alérgenos constituintes.",
            solucao:
                "Armazenar sob refrigeração e adicionar antioxidantes (como o Alfatocoferol) para garantir que os componentes químicos não gerem hidroperóxidos sensibilizantes."
        }
    },
    {
        id: "mirra",
        nome: "MIRRA",
        subtitulo: "Óleo Essencial / Resinoide",
        nomeCientifico: "Commiphora myrrha",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor da resina de goma exsudada).",
            familiaOlfativa:
                "Resinosa / Balsâmica.",
            aparencia:
                "Líquido viscoso, límpido, de coloração amarela a âmbar-escura intensa."
        },
        comportamento: {
            volatilidade:
                "Fundo (Nota de Base pesada).",
            tenacidade:
                "Altíssima. Permanece perceptível na fita olfativa por mais de 250 horas (mais de 10 dias, dados TGSC). Agente fixador extraordinário.",
            intensidade:
                "Médio (Escala: 5.5/10). É profunda, sutil no início, mas ganha imenso corpo e espaço na evolução morna.",
            diluicao:
                "Pura (100%) ou a 10% para facilitar a pipetagem em laboratório devido à natureza viscosa do óleo."
        },
        perfil: {
            descritores:
                "Balsâmico, Amargo, Medicinal/Farmacêutico, Terroso quente, Empoeirado.",
            nuances:
                "Diferente do Benjoim ou do Olíbano, a mirra possui um caráter nitidamente amargo e sombrio. Mescla nuances medicinais que lembram antissépticos bucais antigos com um corpo terroso aquecido, facetas de cogumelos, alcaçuz seco e um fundo de borracha nobre."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura discreta, levemente áspera, amarga e com um toque nitidamente medicinal-farmacêutico."
            },

            {
                tempo: "4 horas",
                descricao:
                    "Desabrocha um calor balsâmico enigmático, exótico, com textura empoeirada de resina antiga e mistério terroso."
            },

            {
                tempo: "48 horas+",
                descricao:
                    "Fixação linear profunda, restando um eco lenhoso, resinoso-seco, quente, amargo e infinitamente sofisticado na fita."
            }
        ],
        aplicacao: {
            funcao:
                "Fixador pesado e doador de mistério e contraste amargo. Perfeita para ancorar composições, criar texturas orientais maduras e quebrar o excesso de doçura de flores e baunilhas com seu contrapeso amargo e sombrio.",
            sinergias:
                "Forma a icônica dupla sagrada com o Olíbano. Funciona magnificamente com o Patchouli, Benjoim, Lábdano e notas amadeiradas secas, além de enriquecer a opulência da Rosa e do Jasmim.",
            riscos:
                "O uso excessivo pode soterrar a fragrância sob um caráter excessivamente fúnebre, amargo e medicinal, deixando o perfume com aspecto de xarope antigo ou unguento de embalsamamento."
        },
        seguranca: {
            alerta:
                "Matéria-prima quimicamente muito estável, segura contra oxidações rápidas na mistura aromática.",
            restricao:
                "Não apresenta restrições quantitativas diretas impostas pelas diretrizes da IFRA na Categoria 4 (Perfumaria Fina).",
            solucao:
                "Empregar em dosagens moderadas (entre 0.5% a 4% do concentrado) combinada com notas doces de fundo para amaciar seu amargor rústico intrínseco."
        }
    },
    {
        id: "pimenta_rosa",
        nome: "PIMENTA ROSA",
        subtitulo: "Óleo Essencial / Extrato CO2",
        nomeCientifico: "Schinus terebinthifolius / Schinus molle",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor ou extração por CO2 supercrítico das bagas vermelhas secas).",
            familiaOlfativa:
                "Especiada (Especiaria Fria) / Frutada.",
            aparencia:
                "Líquido fluido, límpido, incolor a amarelo-pálido esverdeado."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça de alta radiância).",
            tenacidade:
                "Baixa-Média. Permanece perceptível na fita olfativa por cerca de 6 a 12 horas (Dados TGSC). É uma nota de abertura expansiva.",
            intensidade:
                "Alto (Escala: 7.5/10). Abre a fragrância com uma explosão alegre, elétrica e difusiva.",
            diluicao:
                "Pura (100%) para dar brilho e texturas efervescentes imediatas no bloco de topo."
        },
        perfil: {
            descritores:
                "Picante fresco, Frutado bagas, Terpênico pináceo, Radiante, Seco.",
            nuances:
                "Captura com perfeição a casca crocante da pimenta rosa. Une o frescor picante e frio (canforado sutil) com uma deliciosa faceta frutada de frutas vermelhas translúcidas e nuances amadeiradas/pináceas limpas."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Explosão picante gélida e efervescente, unida a um sopro frutado muito alegre, moderno e expansivo."
            },

            {
                tempo: "30 min",
                descricao:
                    "A efervescência inicial assenta, revelando um corpo especiado seco altamente elegante, limpo e sutilmente amadeirado."
            },

            {
                tempo: "4 horas",
                descricao:
                    "Resta um resíduo seco e sutilmente resinoso-frutado antes de dissipar-se suavemente da fita."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de modernidade, vibração e brilho texturizado. É a especiaria fria mais cultuada da perfumaria contemporânea, largamente utilizada em florais modernos, fragrâncias amadeiradas limpas e na perfumaria fina masculina e feminina de prestígio.",
            sinergias:
                "Cria sinergias espetaculares com o Iso E Super, Hedione, Bergamota, e notas florais transparentes como a Rosa e a Magnólia. Combina perfeitamente com o Cardamomo.",
            riscos:
                "Embora seja uma nota versátil e de fácil aceitação, o excesso pode tornar o topo excessivamente terpênico, pináceo ou metálico, roubando o espaço e a naturalidade de notas centrais delicadas."
        },
        seguranca: {
            alerta:
                "Assim como outros óleos ricos em monoterpenos, requer cuidados laboratoriais padrão para mitigar a oxidação e preservar o frescor.",
            restricao:
                "Não possui restrições quantitativas diretas e severas instituídas pela IFRA na Categoria 4, atuando com excelente margem de segurança de bancada.",
            solucao:
                "Recomenda-se utilizar preferencialmente o extrato de Pimenta Rosa CO2 para obter um perfil olfativo muito mais fiel, frutado, crocante e livre das facetas excessivamente terpênicas/industriais da destilação comum."
        }
    },
    {
        id: "menta",
        nome: "MENTA (HORTELÃ-VERDE)",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Mentha spicata (Spearmint)",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor das folhas e sumidades floridas).",
            familiaOlfativa:
                "Aromática / Mentolada (Carvona).",
            aparencia:
                "Líquido fluido, límpido, incolor a amarelo-esverdeado muito pálido."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça de escape veloz).",
            tenacidade:
                "Muito Baixa. Permanece perceptível na fita por cerca de 2 a 4 horas (Dados TGSC). Evapora rapidamente devido ao seu perfil volátil leve.",
            intensidade:
                "Alto (Escala: 8/10). Possui um impacto inicial penetrante, doce, refrescante e altamente expansivo.",
            diluicao:
                "Pura (100%) ou a 10% para dosagem calibrada, garantindo um topo refrescante sem dominar o perfume."
        },
        perfil: {
            descritores:
                "Mentolado doce, Carvona, Herbáceo limpo, Refrescante, Verde chiclete.",
            nuances:
                "Diferente da Hortelã-Pimenta (Pepperita), a Menta Verde (Spearmint) é dominada pela carvona em vez do mentol. Apresenta um frescor muito mais doce, arredondado, herbáceo e dócil, lembrando folhas frescas de horta ou gomas de mascar clássicas, sem o efeito gélido-medicinal agressivo."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Explosão aromática intensamente fresca, doce, verde e mentolada, trazendo imediata sensação de ar e leveza límpida."
            },

            {
                tempo: "15 min",
                descricao:
                    "O impacto doce-mentolado ríspido amacia, transformando-se em uma faceta de folha verde-horta muito natural, limpa e confortavelmente relaxante."
            },

            {
                tempo: "1 hora",
                descricao:
                    "Esvaece gradualmente, deixando apenas um eco suave, herbáceo e sutilmente limpo antes de sumir por completo da fita."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de ar, naturalidade verde e otimismo. Excelente para abrir fragrâncias florais brancas, dar um toque contemporâneo e suculento a acordes cítricos ou infundir uma efervescência limpa e natural em criações unissex.",
            sinergias:
                "Combina lindamente com o Capim Limão, Gengibre, Chá Verde, Linalol e cítricos brilhantes como a Bergamota e o Limão Siciliano. Harmoniza com o Jasmim trazendo uma faceta translúcida.",
            riscos:
                "Se mal equilibrada ou hiperdosada, remete de forma instantânea a chicletes infantis, balas mastigáveis ou enxaguantes bucais de menta comum, desprovendo o perfume de qualquer elegância sofisticada."
        },
        seguranca: {
            alerta:
                "Contém alto teor de carvona, monoterpeno ativo que exige manipulação rotineira adequada, porém com menor índice de irritação ocular que o mentol puro.",
            restricao:
                "Não possui limites restritivos quantitativos severos diretos no manual padrão da IFRA para perfumaria fina (Categoria 4), operando sob controle de seus alérgenos naturais combinados.",
            solucao:
                "Dosar em pequenas frações (0.1% a 1% da fórmula do concentrado) para atuar como um modificador secreto de topo, iluminando a saída sem deixar rastros caricatos de goma de mascar."
        }
    },
    {
        id: "hortela",
        nome: "HORTELÃ",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Mentha piperita / Mentha arvensis",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor das folhas e sumidades floridas).",
            familiaOlfativa:
                "Aromática / Mentolada.",
            aparencia:
                "Líquido fluido, límpido, de coloração incolor a amarelo-esverdeado pálido."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça de altíssimo escape).",
            tenacidade:
                "Muito Baixa. Permanece perceptível na fita olfativa por cerca de 2 a 4 horas (Dados TGSC). Evapora em uma taxa muito veloz devido ao mentol.",
            intensidade:
                "Extremo (Escala: 9/10). Possui um altíssimo poder de impacto inicial que gela as vias nasais.",
            diluicao:
                "Pura (100%) ou a 10% ou 1% para dosagem cuidadosa, evitando que domine completamente a fórmula."
        },
        perfil: {
            descritores:
                "Mentolado, Gélido, Refrescante, Herbáceo pungente, Ligeiramente Adocicado.",
            nuances:
                "Apresenta um efeito tátil frio (refrigerante) imediato, acompanhado por nuances de folhas verdes rústicas picantes e um fundo sutilmente doce-herbáceo e limpo."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Explosão gélida avassaladora, intensamente mentolada, refrescante e penetrante, limpando os canais olfativos."
            },

            {
                tempo: "15 min",
                descricao:
                    "O impacto refrigerante ríspido começa a ceder espaço para uma faceta verde-folha mais suave, dócil e aromática."
            },

            {
                tempo: "1 hora",
                descricao:
                    "Resta um resíduo herbal-doce muito leve e limpo antes de desaparecer completamente da fita."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de impacto gelado, efervescência e ar atmosférico. É excelente para abrir fórmulas, trazer aspectos esportivos modernos e conferir um contraste dinâmico de 'choque térmico' com notas de base quentes.",
            sinergias:
                "Excelente com outros herbáceos (Alecrim, Lavanda), cítricos cortantes (Limão Siciliano, Toranja) e notas amadeiradas secas como o Vetiver, criando efeitos aromáticos vigorosos.",
            riscos:
                "O uso excessivo ou sem moderação remete instantaneamente a produtos de higiene bucal (pasta de dente), gomas de mascar ou pomadas farmacêuticas esportivas, arruinando a sofisticação do perfume."
        },
        seguranca: {
            alerta:
                "O óleo essencial bruto de hortelã contém alto teor de mentol e mentona, que podem provocar sensação de queimação ou irritação ocular e dermatológica se manipulado incorretamente.",
            restricao:
                "Não possui uma restrição quantitativa drástica padrão estabelecida pela IFRA para a Categoria 4 (Perfumaria Fina), sendo o uso limitado pelo equilíbrio sensorial extremo. Seus alérgenos intrínsecos (como Limoneno e Linalol) devem constar no balanço final.",
            solucao:
                "Utilizar em proporções milimétricas (frações de 0,05% a 0,5% na carga de fragrância costumam ser suficientes para iluminar e refrescar sem evocar o aspecto de pasta dental)."
        }
    },
    {
        id: "patchouli",
        nome: "PATCHOULI",
        subtitulo: "Óleo Essencial / Fracionado",
        nomeCientifico: "Pogostemon cablin",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor das folhas secas e fermentadas).",
            familiaOlfativa:
                "Amadeirada / Terrosa.",
            aparencia:
                "Líquido viscoso, de coloração castanho-escura a âmbar-profundo (ou incolor na versão Iron-Free/MD)."
        },
        comportamento: {
            volatilidade:
                "Fundo (Nota de Base com imenso corpo).",
            tenacidade:
                "Altíssima. Permanece perceptível na fita olfativa por 400 horas (mais de 16 dias, dados TGSC). É um fixador natural histórico.",
            intensidade:
                "Alto (Escala: 8/10). Possui uma assinatura robusta, densa, pesada e inconfundível.",
            diluicao:
                "Pura (100%) para estruturação pesada de acordes ou a 10% para melhor manuseio de bancada devido à sua densidade."
        },
        perfil: {
            descritores:
                "Terroso, Canforado, Amadeirado escuro, Mofado, Doce-Balsâmico.",
            nuances:
                "Combina facetas ricas de terra molhada, subsolo e adega antiga com nuances exóticas de chocolate amargo, tabaco envelhecido e um topo ligeiramente canforado, medicinal e vinícola."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura pesada, densa, marcadamente canforada e terrosa, exibindo um caráter rústico e sombrio."
            },

            {
                tempo: "4 horas",
                descricao:
                    "Suaviza o topo medicinal, revelando um corpo amadeirado glorioso, suntuoso, aveludado e com nuances adocicadas de cacau e folhas secas."
            },

            {
                tempo: "48 horas+",
                descricao:
                    "Fixação linear tenaz, deixando um fundo amadeirado morno, terroso-limpo, exótico e extremamente sensual que persiste por semanas."
            }
        ],
        aplicacao: {
            funcao:
                "Fixador, volumizador estrutural e doador de textura 'escura'. É a espinha dorsal indispensável da família Chypre tradicional e moderna, de acordes Orientais e de perfumes amadeirados marcantes.",
            sinergias:
                "Possui sinergia perfeita com a Rosa (criando o clássico e luxuoso acorde Rosa-Patchouli), com a Baunilha/Lábdano (acordes Orientais/Gourmands) e com a Bergamota.",
            riscos:
                "Em excesso, seu aspecto mofado e úmido pode 'envelhecer' a fragrância, sufocar a radiância do perfume ou remeter a porões esquecidos e ao movimento hippie datado de forma caricata."
        },
        seguranca: {
            alerta:
                "Matéria-prima de alta estabilidade química na fórmula e muito segura contra oxidações drásticas.",
            restricao:
                "O óleo essencial de Patchouli puro não possui restrição quantitativa direta pela IFRA para uso em perfumaria fina, sendo o limite puramente ditado pela estética e harmonia da criação.",
            solucao:
                "Se o aspecto terroso/mofado for inconveniente na bancada, pode-se substituir por versões fracionadas (como Patchouli MD ou Light), que removem as frações de ferro e os toques rústicos pesados, mantendo apenas o coração amadeirado limpo."
        }
    },
    {
        id: "cedro_virginia",
        nome: "CEDRO VIRGÍNIA",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Juniperus virginiana",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor da madeira moída - tecnicamente um junípero).",
            familiaOlfativa:
                "Amadeirada.",
            aparencia:
                "Líquido fluido, límpido, de coloração incolor a amarelo-pálido."
        },
        comportamento: {
            volatilidade:
                "Fundo / Meio (Nota de Base com transição clara para o Corpo).",
            tenacidade:
                "Alta. Permanece na fita olfativa por cerca de 168 horas (7 dias, dados TGSC). Confere sustentação seca e linear.",
            intensidade:
                "Médio-Alto (Escala: 6/10). Tem uma presença limpa, mas não agressiva.",
            diluicao:
                "Pura (100%) para dar corpo e volume estrutural às notas amadeiradas da fórmula."
        },
        perfil: {
            descritores:
                "Amadeirado seco, Lápis de cor, Austero, Limpo, Sutilmente Balsâmico.",
            nuances:
                "Apresenta o aroma clássico, seco e reconfortante de raspas de lápis de madeira ou serraria. Carrega nuances discretamente resinosas, limpas e levemente oleosas que trazem sobriedade imediata."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura amadeirada direta, limpa e seca, com uma leve nuance oleosa-resinosa que abre as portas do bloco de madeira."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Assenta-se em uma textura extremamente familiar de lápis de cor e madeira seca de marcenaria, trazendo foco e estrutura."
            },

            {
                tempo: "24 horas+",
                descricao:
                    "Fundo amadeirado persistente, seco, sóbrio, muito confortável e linear, sem doçura."
            }
        ],
        aplicacao: {
            funcao:
                "Agente estrutural, secante e doador de sobriedade. É largamente utilizado para retirar o excesso de doçura de bases florais/orientais, estruturar fragrâncias masculinas e fornecer um esqueleto seco e linear.",
            sinergias:
                "Forma a base amadeirada perfeita em combinação com o Iso E Super, Vetiver e Sândalo. Harmoniza lindamente com notas de topo cítricas secas (como a Toranja) e especiarias como a Pimenta Preta.",
            riscos:
                "Se dosado em excesso, pode desidratar sensorialmente a fragrância, deixando-a excessivamente austera, plana, áspera ou com um aspecto monocórdio e sem vida que lembra marcenaria crua."
        },
        seguranca: {
            alerta:
                "Excelente estabilidade química e um óleo muito seguro de manusear na bancada cotidiana.",
            restricao:
                "Não possui restrições quantitativas diretas impostas pelas diretrizes atuais da IFRA para a perfumaria fina.",
            solucao:
                "Pode ser usado livremente na composição da carga odorífera (comumente empregado entre 1% a 10% da fórmula) de acordo com o direcionamento criativo do perfumista."
        }
    },
    {
        id: "cedro_atlas",
        nome: "CEDRO ATLAS",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Cedrus atlantica",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor da madeira - este é um cedro verdadeiro).",
            familiaOlfativa:
                "Amadeirada / Animálica.",
            aparencia:
                "Líquido ligeiramente viscoso, de coloração amarelo-escura a âmbar-claro."
        },
        comportamento: {
            volatilidade:
                "Fundo (Nota de Base quente).",
            tenacidade:
                "Alta. Permanece perceptível na fita olfativa por mais de 150 horas (cerca de 6 dias, dados TGSC).",
            intensidade:
                "Alto (Escala: 7/10). Possui um aroma mais denso e invasivo que o Cedro Virgínia.",
            diluicao:
                "Pura (100%) ou a 10% para mitigar e calibrar as suas potentes facetas urinosas/animálicas iniciais."
        },
        perfil: {
            descritores:
                "Amadeirado quente, Medicinal, Urinoso/Animálico, Balsâmico, Couro sutil.",
            nuances:
                "Diferente da versão Virgínia, o Atlas é muito mais quente e exótico. Possui um topo canforado-medicinal que evolui para uma madeira resinosa rica com nuances animálicas profundas que lembram levemente suor limpo ou urina de felino, suavizando para um fundo de couro e bálsamo."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura picante, resinosa, marcadamente medicinal e com uma forte nuance animálica exótica e desafiadora."
            },

            {
                tempo: "1 hora",
                descricao:
                    "A faceta áspera diminui, abrindo espaço para um amadeirado balsâmico, denso, sensual, quente e muito rico."
            },

            {
                tempo: "24 horas+",
                descricao:
                    "Resta um fundo morno e confortável de madeira resinada e nuances sutis de couro macio e pele humana."
            }
        ],
        aplicacao: {
            funcao:
                "Fixador, doador de calor oriental, sensualidade e complexidade animálica. É muito usado em perfumes masculinos orientais e criações de nicho para trazer mistério, profundidade e uma textura rica e carnal.",
            sinergias:
                "Funciona em perfeita harmonia com notas de Incenso, Lábdano, Musks densos e especiarias quentes (Canela, Cravo). Combina bem com cítricos encorpados como a Mandarina.",
            riscos:
                "Se usado sem o devido cuidado, a sua nuance animálica/urinosa inicial pode se sobressair de forma desagradável na pele, conferindo um odor residual que lembra falta de higiene ou suor excessivo."
        },
        seguranca: {
            alerta:
                "Considerado seguro e quimicamente estável, embora sua viscosidade exija atenção na homogeneização da essência.",
            restricao:
                "Não possui restrições quantitativas diretas pela IFRA na perfumaria fina (Categoria 4), operando sob critérios de bom senso e equilíbrio do formulador.",
            solucao:
                "Deve ser equilibrado com notas florais transparentes ou cítricos brilhantes no topo para disfarçar e suavizar a saída medicinal e animálica chocante da matéria-prima pura."
        }
    },
    {
        id: "benjoim_siao",
        nome: "BENJOIM DO SIÃO",
        subtitulo: "Resinoide / Absoluto",
        nomeCientifico: "Styrax tonkinensis",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Resinoide ou absoluto obtido por extração por solvente da resina exsudada do tronco).",
            familiaOlfativa:
                "Balsâmica / Oriental (Gourmand).",
            aparencia:
                "Massa sólida ou líquido extremamente viscoso e pegajoso, de coloração âmbar-escura a castanho-avermelhada."
        },
        comportamento: {
            volatilidade:
                "Fundo (Nota de Base pesada / Fixador de cauda longa).",
            tenacidade:
                "Altíssima. Permanece na fita por mais de 400 horas (mais de 16 dias, dados TGSC). Reduz dramaticamente a velocidade de evaporação das notas de topo.",
            intensidade:
                "Médio-Alto (Escala: 6.5/10). É macio, envolvente e cremoso, sem agressividade pungente.",
            diluicao:
                "Obrigatório a 50% ou 10% em DPG ou Álcool. Puro é praticamente impossível de pipetar devido à sua consistência resinosa vítrea."
        },
        perfil: {
            descritores:
                "Doce, Baunilha resinosa, Quente, Amendoado, Remete a Chocolate/Caramelo.",
            nuances:
                "Apresenta um perfil sumamente reconfortante e doce que emula a baunilha natural enriquecida por facetas balsâmicas, nuances cremosas de amêndoas torradas, coco, cacau e um sutil toque empoeirado de canela."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura sutil, resinosa e morna. Demora a se desprender da fita olfativa devido ao alto peso molecular."
            },

            {
                tempo: "4 horas",
                descricao:
                    "Revela toda a sua suntuosidade doce e balsâmica, exalando um aroma rico de baunilha leitosa, resinas nobres e caramelo reconfortante."
            },

            {
                tempo: "48 horas+",
                descricao:
                    "Fixação eterna na fita. Mantém um perfil cremoso, doce, limpo e aconchegante, agindo como uma verdadeira manta olfativa."
            }
        ],
        aplicacao: {
            funcao:
                "Fixador por excelência e doador de dulçor balsâmico. Reduz a volatilidade da fórmula toda através do aprisionamento molecular. É o alicerce crucial de acordes Orientais, Ambarados e criações doces/Gourmands.",
            sinergias:
                "Sinergia master com a Baunilha, Lábdano (formando o clássico acorde de Âmbar), Sândalo, Patchouli e notas florais exóticas como o Ylang-Ylang e o Jasmim.",
            riscos:
                "Por ser altamente edulcorante, se for dosado de forma exagerada pode deixar o perfume meloso, xaroposo, excessivamente infantil ou pesado, eliminando toda a transparência e o frescor da composição."
        },
        seguranca: {
            alerta:
                "O resinoide bruto de Benjoim possui potencial de induzir sensibilização cutânea ou reações alérgicas devido à presença natural de ácidos livres (como o ácido benzóico).",
            restricao:
                "Regulado e limitado pelas diretrizes da IFRA (Categoria 4 - Perfumaria Fina) a uma concentração máxima de até 0,6% do total do produto final acabado aplicado sobre a pele.",
            solucao:
                "Calcular rigorosamente a dosagem na carga de essência para respeitar o teto de 0,6% no perfume diluído e utilizar solventes adequados como o DPG para garantir a perfeita homogeneização na mistura final."
        }
    },
    {
        id: "vetiver",
        nome: "VETIVER",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Chrysopogon zizanioides / Vetiveria zizanioides",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor das raízes lavadas e secas).",
            familiaOlfativa:
                "Amadeirada / Terrosa.",
            aparencia:
                "Líquido viscoso, límpido, de coloração âmbar-clara a castanho-escura profunda."
        },
        comportamento: {
            volatilidade:
                "Fundo (Nota de Base com imenso caráter estrutural).",
            tenacidade:
                "Altíssima. Permanece na fita por mais de 300 horas (mais de 12 dias, dados TGSC). É um fixador natural magnífico.",
            intensidade:
                "Alto (Escala: 7.5/10). Possui uma força de ancoragem e uma identidade olfativa extremamente marcantes.",
            diluicao:
                "Pura (100%) para perfumaria amadeirada masculina clássica ou a 10% para maior controle em formulações unissex e femininas sutis."
        },
        perfil: {
            descritores:
                "Terroso, Defumado, Amadeirado seco, Raiz, Sutilmente Cítrico/Salgado.",
            nuances:
                "Apresenta um perfil multifacetado fascinante: evoca terra seca, poeira e raízes profundas, entrelaçado com nuances defumadas marcantes (remetendo a fumaça de fogueira ou cinzas), facetas verdes-amargas e um exótico topo sutilmente cítrico/salgado de toranja seca."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura potente, rústica, intensamente terrosa e defumada, com um choque característico de raiz seca e um eco cítrico-amargo."
            },

            {
                tempo: "3 horas",
                descricao:
                    "O aspecto excessivamente fumacento se dissipa, dando lugar a uma madeira seca, imponente, elegante, máscula e ricamente texturizada."
            },

            {
                tempo: "48 horas+",
                descricao:
                    "Fixação linear fantástica, restando um rastro amadeirado-seco limpo, nobre, terroso e confortável de altíssima classe."
            }
        ],
        aplicacao: {
            funcao:
                "Espinha dorsal amadeirada, fixador e doador de textura texturizada e viril. É a nota mestre indispensável em clássicos da perfumaria masculina (como Vetiver Guerlain, Encre Noire, Terre d'Hermès) e produções conceituais de nicho.",
            sinergias:
                "Possui sinergia perfeita com notas cítricas amargas (Toranja, Bergamota), com o Iso E Super, Cedro Virgínia e especiarias frias como a Pimenta Preta e o Cardamomo.",
            riscos:
                "Se usado de forma desequilibrada, a sua faceta de fumaça e terra pode dominar a composição inteira, tornando a fragrância excessivamente pesada, sombria, áspera, 'suja' ou com cheiro de cinzeiro queimado."
        },
        seguranca: {
            alerta:
                "Óleo essencial de excelente estabilidade na fórmula, resistente à oxidação precoce e muito seguro na manipulação.",
            restricao:
                "O óleo essencial de Vetiver puro não possui restrição quantitativa direta imposta pelas diretrizes da IFRA, sendo seu limite ditado apenas pela harmonia e dosagem estética do perfumista.",
            solucao:
                "Caso a faceta defumada crua seja indesejada para um projeto específico, pode-se optar pelo Vetiver Bourbon (mais refinado e floralizado) ou pelo Acetato de Vetiverila (aromaquímico derivado que isola apenas a madeira seca e limpa, eliminando a fumaça)."
        }
    },
    {
        id: "limao_siciliano",
        nome: "LIMÃO SICILIANO",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Citrus limon",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por expressão/prensagem a frio da casca fresca do fruto).",
            familiaOlfativa:
                "Cítrica.",
            aparencia:
                "Líquido fluido, límpido, de coloração amarelo-clara a amarelo-esverdeada."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça).",
            tenacidade:
                "Muito Baixa. Permanece perceptível na fita olfativa por cerca de 2 a 4 horas (Dados TGSC). É uma nota de escape extremamente rápido.",
            intensidade:
                "Alto (Escala: 7.5/10). Confere um impacto cortante, efervescente e imediato.",
            diluicao:
                "Pura (100%) para a estruturação de blocos de abertura brilhantes e revigorantes."
        },
        perfil: {
            descritores:
                "Cítrico, Ácido, Zesty, Fresco, Confeitaria Limpa.",
            nuances:
                "Apresenta o aroma realista da fruta espremida na hora, com nuances cortantes de citral, facetas sutilmente amargas da casca e uma textura translúcida, limpa e quase fria."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Impacto ultra-refrescante, efervescente, agudo e azedinho realista, com grande poder de difusão."
            },

            {
                tempo: "15 min",
                descricao:
                    "O caráter ácido pungente diminui, revelando uma faceta cítrica limpa, ensolarada e levemente adocicada."
            },

            {
                tempo: "1 hora",
                descricao:
                    "Resta um resíduo suave e limpo que se dissipa rapidamente da fita se não houver fixadores estruturados."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de brilho e frescor efervescente. É o pilar fundamental de Águas de Colônia tradicionais e um excelente agente para abrir e 'limpar' a saída de acordes florais pesados ou orientais densos.",
            sinergias:
                "Combina com perfeição absoluta com acordes aromáticos (Alecrim, Menta, Lavanda) e outras notas cítricas (Bergamota, Mandarina). Encontra uma excelente sinergia moderna com o Litsea Cubeba e o Hedione.",
            riscos:
                "Por ser extremamente volátil e instável, se não for devidamente ancorado por fixadores eficientes na base, ele desaparece por completo em poucos minutos, deixando a evolução inicial sem preenchimento."
        },
        seguranca: {
            alerta:
                "O óleo essencial bruto prensado a frio de limão siciliano é fototóxico na pele quando exposto ao sol direto (devido ao teor natural de furocoumarinas).",
            restricao:
                "Regulado e limitado pelas diretrizes da IFRA (Categoria 4 - Perfumaria Fina) a uma concentração máxima de até 2% no produto final aplicado sobre a pele.",
            solucao:
                "Utilizar versões destiladas (onde as furocoumarinas são removidas) ou óleos expressos do tipo FCF (Furocoumarin-Free) para formulações que exigem altas dosagens cítricas livres."
        }
    },
    {
        id: "cardamomo",
        nome: "CARDAMOMO",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Elettaria cardamomum",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor das sementes secas).",
            familiaOlfativa:
                "Especiada (Especiaria Fria).",
            aparencia:
                "Líquido fluido, incolor a amarelo-pálido."
        },
        comportamento: {
            volatilidade:
                "Topo / Meio (Nota de Saída de alta difusão com transição para o Corpo).",
            tenacidade:
                "Média. Permanece perceptível na fita olfativa por cerca de 16 a 28 horas (Dados TGSC).",
            intensidade:
                "Alto (Escala: 7/10). É uma nota de impacto imediato e muito expansiva na abertura.",
            diluicao:
                "Pura (100%) ou a 10% em DPG para dosar nuances mais sutis e delicadas de bancada."
        },
        perfil: {
            descritores:
                "Especiado fresco, Canforado, Aromático, Ligeiramente Cítrico, Verde-Resinoso.",
            nuances:
                "Possui um perfil único classificado como 'especiaria fria'. Entrelaça um topo intensamente efervescente com nuances que lembram eucalipto, hortelã e casca de limão, sobre um corpo morno, elegante e sutilmente amadeirado."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Uma explosão especiada fria, canforada e pungente, dotada de um brilho cítrico natural surpreendente."
            },

            {
                tempo: "30 min",
                descricao:
                    "A efervescência inicial acalma, evoluindo para um acorde aromático altamente sofisticado, resinoso e levemente doce."
            },

            {
                tempo: "4 horas",
                descricao:
                    "Resta uma textura amadeirada-especiada limpa, refinada, seca e muito confortável na fita."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de luxo, modernidade e sofisticação. É a nota responsável pelo frescor exótico e assinatura marcante de fragrâncias masculinas modernas de prestígio (como La Nuit de L'Homme) e composições compartilháveis de nicho.",
            sinergias:
                "Combina esplendidamente com a Bergamota (estendendo seu aspecto zesty), com a Lavanda (enriquecendo o lado aromático) e com madeiras nobres como o Sândalo e o Cedro.",
            riscos:
                "O uso excessivo ou desequilibrado pode ressaltar demasiadamente o lado canforado e medicinal do cineol natural, lembrando remédios para tosse ou pastilhas de hortelã."
        },
        seguranca: {
            alerta:
                "Matéria-prima segura em condições adequadas, mas sujeita à oxidação dos seus terpenos naturais com o tempo.",
            restricao:
                "O óleo essencial de cardamomo puro não possui uma restrição quantitativa direta severa pela IFRA por si só, sendo regulado pelo controle indireto de seus componentes alérgenos (como Limoneno e Linalol).",
            solucao:
                "Armazenar em recipientes âmbar perfeitamente vedados sob refrigeração e utilizar antioxidantes (como o BHT) para preservar a fórmula composta contra oxidações."
        }
    },
    {
        id: "gengibre",
        nome: "GENGIBRE",
        subtitulo: "Óleo Essencial / Extrato CO2",
        nomeCientifico: "Zingiber officinale",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor ou extrato por CO2 supercrítico do rizoma seco).",
            familiaOlfativa:
                "Especiada (Especiaria Quente/Fria).",
            aparencia:
                "Líquido fluido, amarelo-claro a âmbar pálido."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça).",
            tenacidade:
                "Baixa-Média. Permanece na fita olfativa por cerca de 8 a 16 horas (Dados TGSC, variando se for óleo essencial ou extrato CO2).",
            intensidade:
                "Alto (Escala: 8/10). Possui uma assinatura vibrante, penetrante e picante.",
            diluicao:
                "Pura (100%) ou a 10% para suavizar o impacto inicial picante em ensaios menores."
        },
        perfil: {
            descritores:
                "Picante, Cítrico agudo, Quente, Terroso, Efervescente.",
            nuances:
                "Combina o frescor agudo e cortante de uma nota cítrica (remetendo ao limão/gengibre fresco) com o calor pungente e levemente terroso da especiaria, apresentando facetas amadeiradas secas no fundo."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Impacto elétrico, picante e efervescente, com um aspecto cítrico-zesty extremamente energizante."
            },

            {
                tempo: "30 min",
                descricao:
                    "O caráter excessivamente ardente diminui, assentando-se em uma textura especiada morna, sofisticada e sutilmente terrosa."
            },

            {
                tempo: "3 horas",
                descricao:
                    "Restam nuances amadeiradas secas, limpas e levemente picantes antes de desaparecer por completo."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de dinamismo, vibração e textura 'picante'. Excelente para injetar modernidade e uma sensação 'crocante' e efervescente na saída de fragrâncias masculinas, femininas esportivas e colônias exóticas.",
            sinergias:
                "Forma sinergias marcantes com cítricos (Mandarina, Limão), especiarias complementares (Cardamomo, Pimenta Preta) e notas amadeiradas secas (Vetiver, Cedro).",
            riscos:
                "Em excesso, seu perfil picante e terroso pode se tornar excessivamente pungente e irritante ao nariz, desequilibrando o acorde de topo e sufocando notas florais delicadas."
        },
        seguranca: {
            alerta:
                "Pode causar leve irritação dérmica se aplicado em concentrações massivas quando puro devido aos seus componentes químicos altamente ativos.",
            restricao:
                "Não possui restrições quantitativas diretas e severas na biblioteca padrão da IFRA para perfumaria fina, contanto que se monitore o teor total de constituintes alérgenos individuais.",
            solucao:
                "Utilizar preferencialmente o extrato de Gengibre CO2 se o objetivo for obter a máxima fidelidade olfativa do rizoma fresco com excelente estabilidade de bancada."
        }
    },
    {
        id: "petitgrain",
        nome: "PETITGRAIN",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Citrus aurantium var. amara (Petitgrain Paraguay)",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor das folhas e pequenos ramos da laranjeira amarga).",
            familiaOlfativa:
                "Cítrica / Verde / Floral.",
            aparencia:
                "Líquido fluido, límpido, de coloração amarelo-clara a âmbar pálido."
        },
        comportamento: {
            volatilidade:
                "Topo / Meio (Nota de Saída com excelente corpo e transição).",
            tenacidade:
                "Média. Permanece perceptível na fita por cerca de 12 a 24 horas (Dados TGSC). Fornece excelente sustentação para a saída.",
            intensidade:
                "Alto (Escala: 7.5/10). Possui um perfil robusto, penetrante e rústico.",
            diluicao:
                "Pura (100%) para estruturar o esqueleto verde-cítrico de colônias e acordes unissex."
        },
        perfil: {
            descritores:
                "Verde folha, Amargo, Cítrico seco, Floral (Nerol/Linalol), Ligeiramente Amadeirado.",
            nuances:
                "Entrelaça o amargor característico dos cítricos com o frescor de folhas esmagadas. Carrega um coração floral sutil que remete à flor de laranjeira (Neroli), porém muito mais rústico, seco e amadeirado."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Impacto verde, amargo, cortante e intensamente revigorante, evocando folhas de laranjeira esmagadas."
            },

            {
                tempo: "30 min",
                descricao:
                    "O aspecto amargo suaviza, revelando um corpo floral-limpo, elegante e compartilhável com textura ensolarada."
            },

            {
                tempo: "4 horas",
                descricao:
                    "Funde-se suavemente ao fundo, deixando um eco amadeirado-seco, limpo e sutilmente herbáceo."
            }
        ],
        aplicacao: {
            funcao:
                "Espinha dorsal de colônias e doador de textura verde-natural. É indispensável para estender a percepção cítrica da fórmula e para atuar como uma ponte perfeita entre o topo cítrico e o coração floral/aromático.",
            sinergias:
                "A sinergia mais clássica da perfumaria é com a Flor de Laranjeira, Neroli e Bergamota. Também harmoniza perfeitamente com Lavanda, Gerânio e aromaquímicos como o Linalol e Acetato de Linalila.",
            riscos:
                "Se dosado em excesso, seu caráter verde e intensamente amargo pode deixar a fragrância com aspecto excessivamente rústico, ríspido, áspero ou com nuances que lembram folhas passadas."
        },
        seguranca: {
            alerta:
                "O óleo de Petitgrain obtido de Citrus aurantium por destilação a vapor é geralmente seguro e não-fototóxico (diferente dos óleos expressos das cascas dos frutos cítricos).",
            restricao:
                "Não possui limite quantitativo restrito direto pela IFRA, exigindo atenção apenas para a quantificação de seus constituintes alérgenos naturais (como Linalol, Limoneno e Geraniol).",
            solucao:
                "Manipular normalmente na bancada respeitando o equilíbrio olfativo e garantir a adição de antioxidantes para proteger os componentes contra a degradação por luz e oxigênio."
        }
    },
    {
        id: "laranja_doce",
        nome: "LARANJA DOCE",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Citrus sinensis",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por expressão/prensagem a frio da casca fresca do fruto).",
            familiaOlfativa:
                "Cítrica / Frutada.",
            aparencia:
                "Líquido fluido, de coloração amarela, alaranjada ou avermelhada intensa."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça).",
            tenacidade:
                "Muito Baixa. Permanece perceptível na fita por cerca de 2 a 4 horas (Dados TGSC). Molécula de escape veloz dominada por d-limoneno.",
            intensidade:
                "Médio-Alto (Escala: 6.5/10). Traz um impacto alegre, radiante, suculento e muito aceitável ao olfato.",
            diluicao:
                "Pura (100%) para formar o volume inicial e o dulçor natural do bloco de saída."
        },
        perfil: {
            descritores:
                "Cítrico doce, Suculento, Frutado, Radiante, Aldeídico leve.",
            nuances:
                "Diferente do limão ou da bergamota, a laranja doce é caracterizada por sua textura sumarenta, frutada e doce. Evoca o cheiro exato da casca de laranja descascada manualmente, com nuances ensolaradas e otimistas."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Explosão cítrica frutada, suculenta, doce e borbulhante. Transmite sensação imediata de calor, energia e alegria."
            },

            {
                tempo: "15 min",
                descricao:
                    "O impacto inicial diminui, mantendo um dulçor frutado muito limpo que arredonda as arestas de outras notas de topo.",
            },

            {
                tempo: "1 hora",
                descricao:
                    "Esvaece gradualmente, deixando apenas um eco sutil, limpo e levemente açucarado antes de desaparecer da fita."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de suculência, calor cítrico e arredondamento. É fantástica para quebrar a frieza de acordes excessivamente aromáticos e para conferir um aspecto 'comestível' ou de frutas naturais a perfumes juvenis e colônias alegres.",
            sinergias:
                "Funciona perfeitamente com todas as notas cítricas (especialmente Mandarina e Toranja). Combina lindamente com notas de especiarias quentes (Canela, Cravo) para acordes festivos/orientais e com baunilha.",
            riscos:
                "Por conter uma alta porcentagem de monoterpenos voláteis, ela evapora com extrema rapidez. Se usada sem um bom esqueleto de base, deixa o perfume sem projeção logo após a abertura."
        },
        seguranca: {
            alerta:
                "O óleo essencial de laranja doce prensado a frio, embora seja cítrico, apresenta um potencial fototóxico desprezível ou nulo quando comparado à bergamota ou ao limão siciliano.",
            restricao:
                "Não possui uma restrição quantitativa direta restrita estabelecida pela IFRA para a Categoria 4 (Perfumaria Fina). No entanto, é altamente regulado quanto ao seu teor de Limoneno oxidado.",
            solucao:
                "A principal regra de bancada para a Laranja Doce é evitar sua oxidação. O d-limoneno oxidado gera fortes alérgenos cutâneos. Deve-se obrigatoriamente adicionar antioxidantes (BHT ou Alfatocoferol) à essência e estocar o óleo sob refrigeração rigorosa."
        }
    },
    {
        id: "sandalo_amyris",
        nome: "SÂNDALO AMYRIS",
        subtitulo: "Óleo Essencial",
        nomeCientifico: "Amyris balsamifera (Frequentemente chamado de Sândalo das Índias Ocidentais)",
        identificacao: {
            tipoMateriaPrima:
                "Natural (Óleo essencial obtido por destilação a vapor da madeira e galhos secos e envelhecidos).",
            familiaOlfativa:
                "Amadeirada / Balsâmica.",
            aparencia:
                "Líquido viscoso, límpido, de coloração amarelo-clara a âmbar-pálido."
        },
        comportamento: {
            volatilidade:
                "Fundo (Nota de Base pesada / Fixador estrutural).",
            tenacidade:
                "Altíssima. Permanece perceptível na fita olfativa por mais de 300 hours (cerca de 12 a 14 dias, dados TGSC). Retarda excelentemente a evaporação de notas mais leves.",
            intensidade:
                "Baixo-Médio (Escala: 4/10). É uma nota suave, sutil na saída, que atua de forma discreta mas persistente na evolução.",
            diluicao:
                "Pura (100%) para a construção de acordes amadeirados ou a 50% em DPG para reduzir a viscosidade e facilitar a pipetagem em bancada."
        },
        perfil: {
            descritores:
                "Amadeirado suave, Balsâmico, Leitoso/Cremoso sutil, Ligeiramente Picante, Especiado seco.",
            nuances:
                "Embora botanicamente diferente do Sândalo Indiano (Santalum album), o Amyris emula perfeitamente seu caráter amadeirado e reconfortante. Mescla um topo ligeiramente picante e oleoso com um corpo lenhoso seco, evoluindo para nuances balsâmicas mornas, toques que remetem a guaiaco e um fundo suavemente leitoso e adocicado."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura discreta, levemente oleosa, resinosa e com uma faceta de madeira recém-cortada e sutilmente picante."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Desabrocha seu coração amadeirado mais rico, aveludado e balsâmico, trazendo um calor lenhoso confortável, seco e limpo."
            },

            {
                tempo: "48 horas+",
                descricao:
                    "Excelente fixação na fita olfativa, restando um rastro amadeirado muito macio, sutilmente atalcado, cremoso e aconchegante."
            }
        ],
        aplicacao: {
            funcao:
                "Fixador excelente e modificador amadeirado de excelente custo-benefício. É amplamente utilizado na perfumaria comercial e fina como um substituto ou extensor do sândalo tradicional, agindo como um agente de coesão que suaviza transições ríspidas entre o coração e o fundo do perfume.",
            sinergias:
                "Trabalha em perfeita harmonia com o Cedro Virgínia, Patchouli, Vetiver, Guaiaco, e notas resinosas como o Benjoim e o Ládano. Funciona muito bem para dar corpo e base a acordes florais ricos como o Jasmim e a Rosa.",
            riscos:
                "Devido à sua baixa intensidade/impacto inicial, o risco de superdosagem por ansiedade do perfumista é alto. Se usado em excesso sem critério, pode abafar a radiância do topo, tornando a fragrância excessivamente opaca, linear ou pesada."
        },
        seguranca: {
            alerta:
                "Matéria-prima quimicamente muito estável, segura contra oxidações rápidas na mistura aromática e com baixíssimo potencial de irritação cutânea.",
            restricao:
                "Não possui restrições quantitativas diretas impostas pelas diretrizes da IFRA na Categoria 4 (Perfumaria Fina). Opera de forma livre e segura dentro dos limites estéticos da fórmula.",
            solucao:
                "Pode ser usado livremente na bancada (comumente entre 2% a 10% do composto concentrado) para conferir peso, cremosidade natural e excelente fixação a fragrâncias orientais e amadeiradas."
        }
    },
    {
        id: "acetato_cis_3_hexenila",
        nome: "ACETATO CIS 3 HEXENILA",
        subtitulo: "Molécula Isolada (Éster)",
        nomeCientifico: "cis-3-Hexenyl acetate (Verde de Folha / Acetato de Folha)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética ou Natural (Éster Alifático linear amplamente utilizado como aromaquímico isolado).",
            familiaOlfativa:
                "Verde / Frutada.",
            aparencia:
                "Líquido fluido, totalmente límpido e incolor."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça de altíssima volatilidade).",
            tenacidade:
                "Muito Baixa. Permanece na fita olfativa por apenas 1 a 2 horas (Dados TGSC). Evapora com extrema rapidez, gerando o 'sopro' inicial.",
            intensidade:
                "Extremo (Escala: 9/10). Possui um poder de impacto inicial avassalador que corta e eleva toda a saída da fórmula.",
            diluicao:
                "Altamente recomendado trabalhar a 10% ou 1% em DPG para evitar que ele cegue o olfato ou domine totalmente os ensaios de bancada."
        },
        perfil: {
            descritores:
                "Verde grama cortada, Frutado maçã verde, Penetrante, Agudo, Fresco aquoso.",
            nuances:
                "Diferente do Álcool Cis-3-Hexenílico (que é mais cru e amargo), o Acetato traz o aroma realista e crocante de grama recém-aparada e folhas verdes esmagadas, mas envelopado por uma deliciosa faceta frutada doce e suculenta que remete à casca de maçã verde, pera madura e banana verde."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Impacto verde agudo, elétrico e intensamente fresco, evocando instantaneamente grama cortada sob o orvalho com toques de frutas ácidas."
            },

            {
                tempo: "15 min",
                descricao:
                    "A pungência ríspida diminui, revelando um aspecto frutado aquoso muito limpo, natural, texturizado e suculento."
            },

            {
                tempo: "1 hora",
                descricao:
                    "Esvaece quase por completo da fita olfativa, deixando apenas um vestígio vegetal limpo e transparente antes de sumir."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de impacto, frescor natural e efeito 'orvalho'. É o aromaquímico definitivo para introduzir naturalidade botânica a florais modernos, conferir efervescência a saídas cítricas e criar o acorde crocante de frutas verdes e frescas.",
            sinergias:
                "Funciona em perfeita simbiose com o Salicilato de Amila, Triplal, Linalol, e notas florais transparentes como o Hedione e o Álcool Feniletílico.",
            riscos:
                "O uso excessivo ou sem diluição adequada destrói a elegância da fragrância, deixando-a ríspida, estridente, puramente química ou com cheiro linear de solvente de tinta e cosméticos industriais baratos."
        },
        seguranca: {
            alerta:
                "Molécula muito estável na maioria dos meios, mas que pode sofrer hidrólise parcial em pHs extremos, liberando o álcool correspondente.",
            restricao:
                "Não possui restrições quantitativas severas ou limites proibitivos diretos estabelecidos pela IFRA para a Categoria 4 (Perfumaria Fina). Opera livremente sob as Boas Práticas de Fabricação.",
            solucao:
                "Dosar em frações milimétricas (geralmente entre 0.1% a 1.5% do concentrado puro) para atuar puramente como um modificador de topo que ilumina e abre as notas florais e cítricas."
        }
    },
    {
        id: "acetato_de_benzila",
        nome: "ACETATO DE BENZILA",
        subtitulo: "Molécula Isolada (Éster)",
        nomeCientifico: "Benzyl acetate",
        identificacao: {
            tipoMateriaPrima:
                "Sintética ou Natural (Éster aromático, constituinte majoritário natural do absoluto de jasmim e extrato de ilangue-ilangue).",
            familiaOlfativa:
                "Floral Branca / Floral Frutada.",
            aparencia:
                "Líquido móvel, fluido, límpido e totalmente incolor."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça de alto espalhamento).",
            tenacidade:
                "Baixa. Permanece perceptível na fita olfativa por cerca de 4 a 8 horas (Dados TGSC). Age impulsionando o bloco floral para fora da pele.",
            intensidade:
                "Alto (Escala: 7.5/10). É muito difusivo, aberto, penetrante e um tanto volúvel.",
            diluicao:
                "Pura (100%) para a construção de bases florais robustas ou a 10% para calibração de acordes aéreos finos."
        },
        perfil: {
            descritores:
                "Floral Jasmim, Frutado doce, Banana/Pera, Penetrante, Ligeiramente Medicinal.",
            nuances:
                "Representa a clássica saída expansiva e adocicada do jasmim. Combina um aroma floral branco pungente com nuances frutadas intensas que lembram chiclete de tutti-frutti, banana madura e pera doce, apresentando um leve topo químico-medicinal quando cheirado puro."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Explosão floral-frutada intensa, adocicada e muito penetrante, com um aspecto marcante de jasmim expansivo e banana."
            },

            {
                tempo: "1 hora",
                descricao:
                    "O caráter químico pungente se dissipa, assentando em um floral branco macio, limpo, leve e muito radiante."
            },

            {
                tempo: "4 horas",
                descricao:
                    "Resta um resíduo floral aerado muito sutil antes de esvair-se totalmente da fita de testes."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de difusão e pilar de construção de florais brancos. É um dos ingredientes mais consumidos no mundo para montar acordes artificiais de Jasmim, Gardênia, Tuberosa e Jacinto, servindo para dar 'vôo' e rastro imediato ao perfume.",
            sinergias:
                "Indispensável com o Amyl Cinnamic Aldehyde (ACA), Indol, Hedione, Linalol, Salicilato de Benzila e o Álcool Feniletílico.",
            riscos:
                "Se mal envelopado ou usado em doses exageradas, desaba a sofisticação da fragrância para um aspecto puramente funcional, remetendo a desinfetantes sanitários de jasmim, sabonetes baratos ou chiclete artificial enjoativo."
        },
        seguranca: {
            alerta:
                "Molécula segura e estável na perfumaria alcoólica, mas que exige atenção a possíveis vestígios residuais de álcool benzílico livre.",
            restricao:
                "Não possui limite restritivo quantitativo direto imposto pela IFRA na Categoria 4 (Perfumaria Fina). No entanto, o seu produto de degradação ou impureza (Álcool Benzílico) é um alérgeno regulado de declaração obrigatória.",
            solucao:
                "Utilizar matérias-primas de grau de pureza 'Perfume Grade' de fornecedores confiáveis e dosar com inteligência para balancear o corpo estrutural floral (comumente entre 2% a 10% da fórmula do concentrado)."
        }
    },
    {
        id: "acetato_de_hexila",
        nome: "ACETATO DE HEXILA",
        subtitulo: "Molécula Isolada (Éster)",
        nomeCientifico: "Hexyl acetate",
        identificacao: {
            tipoMateriaPrima:
                "Sintética (Éster alifático linear utilizado para conferir efeitos frutados realistas).",
            familiaOlfativa:
                "Frutada / Verde.",
            aparencia:
                "Líquido fluido, límpido e incolor."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça de grande impacto inicial).",
            tenacidade:
                "Muito Baixa. Permanece na fita por cerca de 2 a 4 horas (Dados TGSC). Evapora rapidamente trazendo efervescência à fragrância.",
            intensidade:
                "Alto (Escala: 7.5/10). Possui perfil muito radiante, nítido e de dispersão instantânea.",
            diluicao:
                "Pura (100%) ou a 10% em DPG para dosagens mais finas e controladas em acordes florais-frutados."
        },
        perfil: {
            descritores:
                "Frutado Pera, Maçã, Doce, Verde sutil, Zesty/Fresco.",
            nuances:
                "Captura a essência frutada e suculenta das polpas de frutas brancas. Exibe um aroma marcante e realista de pera madura e maçã vermelha, com nuances doces e licorosas, uma leve textura cerosa e um fundo verde limpo que corta o dulçor excessivo."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura intensamente frutada, doce e suculenta, recriando com perfeição a textura fresca de uma pera cortada."
            },

            {
                tempo: "30 min",
                descricao:
                    "O impacto doce pungente acalma, deixando um rastro frutado macio, aquoso, limpo e muito convidativo."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Dissipa-se suavemente, deixando a fita livre para a emersão das notas de coração sem deixar resíduos pesados."
            }
        ],
        aplicacao: {
            funcao:
                "Modificador frutado de topo. É amplamente utilizado para conferir suculência e uma assinatura 'moderna e comercial' a fragrâncias femininas, para suavizar saídas cítricas ásperas e para estruturar acordes de frutas tropicais e de xampus finos (efeito 'shampoo chique').",
            sinergias:
                "Harmoniza perfeitamente com o Acetato de Cis-3-Hexenila (para um efeito pera verde), Damascenone, Iononas e cítricos como a Mandarina.",
            riscos:
                "Se dosado em excesso, o perfume perde totalmente o caráter sofisticado e se transforma em um aroma infantil, lembrando caldas de doces, chicletes de pera artificiais ou sprays de ambiente genéricos."
        },
        seguranca: {
            alerta:
                "Molécula quimicamente estável em formulações alcoólicas finas de perfumaria, com excelente perfil de manuseio.",
            restricao:
                "Não possui restrições quantitativas ou limites estritos determinados pela IFRA para a Categoria 4. Opera sob parâmetros de segurança padrão industriais.",
            solucao:
                "Empregar em dosagens moderadas (geralmente entre 0.2% a 3% do concentrado total) para injetar um brilho frutado natural na saída do perfume, sem carregar a evolução."
        }
    },
    {
        id: "acetato_de_linalila",
        nome: "ACETATO DE LINALILA",
        subtitulo: "Molécula Isolada (Éster)",
        nomeCientifico: "Linalyl acetate",
        identificacao: {
            tipoMateriaPrima:
                "Sintética ou Natural (Éster terpênico, principal constituinte natural dos óleos de Bergamota, Lavanda e Petitgrain).",
            familiaOlfativa:
                "Cítrica / Aromática / Floralizada.",
            aparencia:
                "Líquido fluido, totalmente límpido e incolor."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça crucial para o volume de abertura).",
            tenacidade:
                "Baixa. Permanece na fita olfativa por cerca de 4 a 12 horas (Dados TGSC). Cria uma transição suave entre o topo e o corpo.",
            intensidade:
                "Médio-Alto (Escala: 6/10). Confere uma presença macia, refrescante, limpa e muito elegante.",
            diluicao:
                "Pura (100%) por ser um dos principais solventes estéticos e blocos de construção de volume na perfumaria."
        },
        perfil: {
            descritores:
                "Cítrico bergamota, Aromático lavanda, Floral fresco, Amadeirado sutil, Limpo.",
            nuances:
                "Representa o lado macio, refinado e não-ácido dos cítricos. Apresenta uma rica nuance de casca de bergamota expressa, fundida com facetas herbáceas e relaxantes de lavanda, um aspecto floralizado transparente e um sutil toque amadeirado-seco de fundo."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura cítrica aveludada, extremamente limpa, aromática e refrescante, sem a agressividade ácida de outros cítricos."
            },

            {
                tempo: "1 hora",
                descricao:
                    "Evolui de forma magnífica para um coração floral-aromático macio, transmitindo sensação de sofisticação, ar e limpeza luxuosa."
            },

            {
                tempo: "6 horas",
                descricao:
                    "Resta um resíduo amadeirado-floral muito suave e seco na fita de teste antes de apagar-se por completo."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de volume, refinamento cítrico e coesão. É uma das moléculas mais fundamentais da história da perfumaria, indispensável para construir a saída de Colônias clássicas, Chypres luxuosos, Fougères de prestígio e para estender o frescor de óleos cítricos naturais.",
            sinergias:
                "Sinergia absoluta e indissociável com o Linalol. Combina perfeitamente com a Bergamota, Lavanda, Gerânio, Iso E Super e Hedione.",
            riscos:
                "Por ter um perfil olfativo muito bem aceito e macio, o principal risco é a monotonia ou a perda de identidade da fragrância se usado de forma excessiva e sem notas de contraste bem definidas."
        },
        seguranca: {
            alerta:
                "⚠️ ALERTA DE BANCADA IMPORTANTE: O Acetato de Linalila puro é seguro, mas é altamente suscetível à autooxidação quando exposto ao ar por muito tempo, gerando hidroperóxidos que são fortes sensibilizantes cutâneos.",
            restricao:
                "Não possui limite quantitativo severo direto pela IFRA na Categoria 4. Contudo, devido ao risco de oxidação, a IFRA exige que os produtos que o contenham mantenham um nível de peróxido extremamente baixo.",
            solucao:
                "Adicionar obrigatoriamente um antioxidante (como 0.1% de BHT ou Alfatocoferol) ao lote e armazenar o aromaquímico em frascos de vidro âmbar completamente cheios e mantidos sob refrigeração."
        }
    },
    {
        id: "alcool_feniletilico",
        nome: "ÁLCOOL FENILETÍLICO",
        subtitulo: "Molécula Isolada (Álcool Aromático)",
        nomeCientifico: "Phenylethyl alcohol (PEA)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética ou Natural (Álcool aromático, pilar absoluto e componente majoritário natural da água e do absoluto de Rosas).",
            familiaOlfativa:
                "Floral / Rosada.",
            aparencia:
                "Líquido fluido, límpido, incolor e ligeiramente denso/viscoso quando frio."
        },
        comportamento: {
            volatilidade:
                "Meio (Nota de Corpo Floral de imenso volume e estabilidade).",
            tenacidade:
                "Média. Permanece perceptível na fita por cerca de 24 a 60 horas (Dados TGSC). Atua de forma persistente desde a saída até o drydown.",
            intensidade:
                "Médio (Escala: 5.5/10). É uma nota macia, arredondada e envolvente, que não agride o olfato.",
            diluicao:
                "Pura (100%) por ser uma matéria-prima estrutural de grande volume ou a 10% para estudos delicados de acordes."
        },
        perfil: {
            descritores:
                "Floral rosa, Pétalas úmidas, Mel doce, Verde sutil, Ligeiramente Alcoólico/Abafado.",
            nuances:
                "Representa o aroma clássico, limpo e aveludado de pétalas de rosa brancas e cor-de-rosa. Carrega nuances doces que remetem a mel de abelha, facetas verdes que lembram hastes de flores cortadas e um sutil caráter seco, levemente reminiscente de levedura ou vinho branco."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura floral rosada suave, limpa, levemente adocicada e aquosa, com um desprendimento sutil e aveludado."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Instala-se como um coração floral magnífico e volumoso de rosa pura, trazendo grande naturalidade, maciez e aconchego à fórmula."
            },

            {
                tempo: "24 horas",
                descricao:
                    "Fundo floral limpo, discretamente adocicado e atalcado que se funde perfeitamente com os musks de base."
            }
        ],
        aplicacao: {
            funcao:
                "Pilar de construção floral e amaciador de arestas. É um dos aromaquímicos mais vitais da perfumaria mundial, servindo como base insubstituível para acordes de Rosa, Jasmim, Jacinto, Peônia e Lilás, além de agir como um excelente harmonizador que une notas ríspidas de topo a bases pesadas.",
            sinergias:
                "Casamento perfeito com o Citronelol, Geraniol (tríade clássica da rosa), Hidroxicitronelal, Linalol e Benzyl Acetate.",
            riscos:
                "Em doses massivas e sem o devido equilíbrio de notas amadeiradas ou especiadas, pode deixar a fragrância excessivamente datada, atalcada ao estilo 'vovó', ou com um aspecto que lembra loções cosméticas antigas e baratas."
        },
        seguranca: {
            alerta:
                "Molécula quimicamente extremamente estável, resistente à descoloração e amplamente versátil em todos os tipos de bases cosméticas (alcoólicas e sabões).",
            restricao:
                "Não possui restrições quantitativas severas ou limites proibitivos diretos aplicados pela IFRA para uso na Categoria 4 (Perfumaria Fina).",
            solucao:
                "Manipular livremente na bancada com excelente margem de segurança estética e regulatória, sendo comumente utilizado em concentrações que variam de 1% a até 20% do concentrado total da fragrância."
        }
    },
    {
        id: "aldeido_anisico",
        nome: "ALDEÍDO ANÍSICO",
        subtitulo: "Molécula Isolada (Aldeído Aromático)",
        nomeCientifico: "Anisic aldehyde (Anisaldehyde / 4-Methoxybenzaldehyde)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética ou Natural (Aldeído aromático funcional, encontrado na semente de anis e na baunilha).",
            familiaOlfativa:
                "Floral / Especiada / Anisada.",
            aparencia:
                "Líquido ligeiramente denso e viscoso, de coloração incolor a amarelo-pálida."
        },
        comportamento: {
            volatilidade:
                "Meio / Fundo (Nota de Corpo Floral com excelente persistência de base).",
            tenacidade:
                "Alta. Permanece perceptível na fita olfativa por mais de 120 horas (cerca de 5 dias, dados TGSC). Exibe excelente fixação linear.",
            intensidade:
                "Alto (Escala: 7/10). Possui um perfil penetrante, intensamente adocicado e texturizado.",
            diluicao:
                "Recomendado a 10% em DPG para melhor controle de dosagem, pois seu dulçor poeirento pode cobrir notas delicadas rapidamente."
        },
        perfil: {
            descritores:
                "Floral espinheiro (Hawthorn), Anisado doce, Amandorrado/Cumarínico, Poeirento/Atalcado.",
            nuances:
                "Evoca o aroma de florais brancos exóticos e campos de feno. Une uma doçura balsâmica que remete diretamente ao alcaçuz e sementes de anis com uma rica faceta amandorrada (tipo marzipã) e uma textura densa, atalcada e pulverulenta que lembra heliotropina."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura intensamente doce, com um forte caráter anisado, medicinal-licoroso e toques amendoados marcantes."
            },

            {
                tempo: "2 horas",
                descricao:
                    "O lado licoroso ríspido se transforma em um coração floral denso, aveludado e poeirento, remetendo a flores brancas campestres exóticas."
            },

            {
                tempo: "24 horas+",
                descricao:
                    "Fundo de fixação espetacular, deixando um rastro atalcado doce, abaunilhado, macio, aconchegante e cumarínico."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de textura atalcada, dulçor exótico e fixador floral. É a molécula mestre para criar o acorde floral de Espinheiro (Hawthorn), Lilás, Heliotrópio e Mimosa, sendo crucial para conferir opulência 'powder' a perfumes orientais, gourmands e florais abstratos de nicho.",
            sinergias:
                "Sinergia espetacular com a Cumarina, Heliotropina, Vanilina, Iononas, e florais como o Álcool Feniletílico e o Absoluto de Jasmim.",
            riscos:
                "Se usado de forma desmedida, satura a fórmula com uma textura sufocante, empoeirada e excessivamente doce que lembra talcos infantis antigos, xaropes medicinais de anis ou doces de amêndoas enjoativos."
        },
        seguranca: {
            alerta:
                "Por ser um aldeído aromático, pode sofrer oxidação gradual para o ácido anísico correspondente (que forma cristais no bocal do frasco) se exposto à luz e ao oxigênio.",
            restricao:
                "Regulado e limitado pelas diretrizes oficiais da IFRA (Categoria 4 - Perfumaria Fina). Possui um limite máximo seguro estabelecido para o produto final na pele para mitigar riscos de sensibilização.",
            solucao:
                "Calcular rigorosamente a dosagem na essência (geralmente empregado entre 0.2% a 3% do concentrado) para não ultrapassar a cota segura da IFRA e adicionar antioxidantes para blindar a estabilidade da molécula."
        }
    },
    {
        id: "aldeido_c11_undecilenico",
        nome: "ALDEÍDO C11 UNDECILÊNICO",
        subtitulo: "Molécula Isolada (Aldeído Alifático Insaturado)",
        nomeCientifico: "10-Undecenal (Aldehyde C-11 Undecylenic)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética (Aldeído linear insaturado clássico da perfumaria).",
            familiaOlfativa:
                "Aldeídica / Cera / Floral.",
            aparencia:
                "Líquido fluido, límpido e incolor a levemente amarelado."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça com imenso poder de expansão).",
            tenacidade:
                "Média. Permanece perceptível na fita olfativa por cerca de 24 a 48 horas (Dados TGSC). Modifica o topo com rastro persistente.",
            intensidade:
                "Extremo (Escala: 9.5/10). Possui uma força de impacto monumental, sendo puramente sufocante se cheirado puro.",
            diluicao:
                "Obrigatório o uso a 10% ou 1% em DPG na bancada de trabalho para permitir uma dosagem minimamente controlada."
        },
        perfil: {
            descritores:
                "Metálico agudo, Ceroso gorduroso, Sabão limpo, Casca de tangerina, Floralizado radiante.",
            nuances:
                "É o epítome do efeito 'néon' ou 'ferro de passar roupas quente'. Apresenta uma abertura intensamente limpa, ensaboada e fria, que evolui para nuances cerosas que lembram o toque de velas apagadas e uma faceta cítrica amarga de cascas de frutas ricas em terpenos, conferindo um brilho abstrato indescritível quando diluído."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Impacto elétrico, cortante, ultra-limpo, metálico e com um aspecto gorduroso/ceroso sufocante."
            },

            {
                tempo: "1 hora",
                descricao:
                    "O caráter ríspido químico se transforma em uma aura arejada, ozônica e ensaboada luxuosa, que levanta florais discretos por baixo."
            },

            {
                tempo: "12 horas",
                descricao:
                    "Resta um eco limpo de cera de abelha fina, sabão delicado e resíduos cítricos secos de alta qualidade."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de brilho, efervescência e dispersão. É o pilar estrutural para perfumes florais-aldeídicos clássicos (estilo Chanel Nº 5). Serve para inflar e aerar o topo da fragrância, injetando uma sensação de frescor cintilante, espaço tridimensional e limpeza asséptica.",
            sinergias:
                "Casamento absoluto com outros aldeídos lineares (C10, C11 Undecílico, C12 Láurico) e florais ricos como Ylang-Ylang, Jasmim, Rosa e Néroli.",
            riscos:
                "Se dosado de maneira descuidada ou em frações ligeiramente elevadas, destrói totalmente as nuances naturais da fórmula, deixando o perfume intragável, com cheiro de sabão em pó industrial rústico ou gordura rançosa de gordura animal."
        },
        seguranca: {
            alerta:
                "Por ser um aldeído insaturado alifático, possui reatividade química notável, sendo sujeito a oxidação lenta para o respectivo ácido se exposto continuamente ao oxigênio da bancada.",
            restricao:
                "Regulado e monitorado pelas diretrizes da IFRA (Categoria 4 - Perfumaria Fina), estabelecendo tetos seguros para o produto final de consumo para evitar sensibilização na pele.",
            solucao:
                "Adicionar sempre um estabilizante antioxidante na fórmula final (como o BHT) e trabalhar em microdosagens ou traços milimétricos (geralmente entre 0.05% a 0.5% do composto concentrado puro)."
        }
    },
    {
        id: "aldeido_c11_undecilico",
        nome: "ALDEÍDO C11 UNDECÍLICO",
        subtitulo: "Molécula Isolada (Aldeído Alifático Saturado)",
        nomeCientifico: "Undecanal (Aldehyde C-11 Undecylic)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética (Aldeído linear saturado clássico de cadeia ímpar).",
            familiaOlfativa:
                "Aldeídica / Cítrica / Cerosa.",
            aparencia:
                "Líquido fluido, límpido e incolor."
        },
        comportamento: {
            volatilidade:
                "Topo / Meio (Nota de Saída de grande difusão e persistência inicial).",
            tenacidade:
                "Média. Permanece na fita olfativa por cerca de 24 horas (Dados TGSC). Fornece suporte ao longo de toda a saída rumo ao corpo.",
            intensidade:
                "Extremo (Escala: 9/10). Muito penetrante, agudo e de percepção olfativa imediata.",
            diluicao:
                "Obrigatório o manuseio laboratorial em diluição a 10% ou 1% em DPG para evitar fadiga olfativa instantânea do avaliador."
        },
        perfil: {
            descritores:
                "Ceroso gorduroso, Sebo limpo, Casca de colônia, Frutado grapefruit, Floral sutil.",
            nuances:
                "Ligeiramente mais macio e sutilmente mais frutado do que o correspondente Undecilênico. Mescla o clássico impacto ensaboado com uma faceta nítida que emula a casca amarga de grapefruit (toranja) e cidra, assentando em nuances cerosas ricas, gordurosas limpas e com uma sutil vibração de pétalas brancas de flor de laranjeira."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Pungência aldeídica massiva, cerosa, muito ensaboada, com um caráter cítrico pungente de casca esmagada."
            },

            {
                tempo: "30 min",
                descricao:
                    "A agressividade de topo diminui, abrindo espaço para uma sensação arejada, fresca e cítrica refinada com fundo de lavanderia fina."
            },

            {
                tempo: "8 horas",
                descricao:
                    "Resta uma textura gordurosa de cera limpa e lavada, integrando-se sem ruidos com as notas florais de coração."
            }
        ],
        aplicacao: {
            funcao:
                "Modificador de frescor cítrico e doador de difusão. Utilizado na perfumaria fina para trazer uma vibração refrescante e limpa única, servindo para arredondar, modernizar e conferir rastro cintilante a acordes de colônias cítricas, Fougères e florais transparentes.",
            sinergias:
                "Excelente com o Óleo de Mandarina, Bergamota, Óleo de Rosa, Hidroxicitronelal e com o Aldeído C10.",
            riscos:
                "O excesso pode arruinar o perfume, trazendo uma nota desagradável que remete diretamente a velas de sebo baratas, gordura de fritura fria ou produtos funcionais de limpeza doméstica pesada."
        },
        seguranca: {
            alerta:
                "Molécula suscetível a oxidação em frascos mal fechados com presença de ar, formando ácido undecílico.",
            restricao:
                "Não apresenta restrições proibitivas severas diretas e rígidas pela IFRA na Categoria 4, atuando de acordo com as boas práticas e limites normais de segurança cosmética.",
            solucao:
                "Conservar em ambiente refrigerado, protegido da luz solar direta, e formular mantendo dosagens controladas (comumente de 0.1% a 1% da fórmula final do concentrado)."
        }
    },
    {
        id: "aldeido_c12_laurico",
        nome: "ALDEÍDO C12 LÁURICO",
        subtitulo: "Molécula Isolada (Aldeído Alifático Saturado)",
        nomeCientifico: "Dodecanal (Aldehyde C-12 Lauric)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética (Aldeído linear clássico de cadeia longa par).",
            familiaOlfativa:
                "Aldeídica / Floral / Cerosa.",
            aparencia:
                "Líquido fluido e límpido quando morno, mas que cristaliza ou solidifica em agulhas brancas sob temperaturas frias (abaixo de 12°C)."
        },
        comportamento: {
            volatilidade:
                "Meio / Topo (Nota de Transição com excelente fixação estrutural interna).",
            tenacidade:
                "Alta. Permanece perceptível na fita olfativa por mais de 72 horas (cerca de 3 dias, dados TGSC). Exibe a maior substantividade entre os aldeídos lineares clássicos.",
            intensidade:
                "Extremo (Escala: 9/10). Impacto inicial fortíssimo, denso e envolvente.",
            diluicao:
                "Altamente recomendado trabalhar a 10% ou 1% em DPG para evitar saturação do laboratório e facilitar o manuseio líquido."
        },
        perfil: {
            descritores:
                "Ceroso denso, Floral Violeta/Lilás, Sabão de luxo, Oleoso, Herbáceo sutil.",
            nuances:
                "É o mais floral entre os aldeídos lineares saturados tradicionais. Combina o sopro ensaboado limpo característico com uma belíssima nuance floralizada de violetas frescas e lilases úmidos, evoluindo para um perfil oleoso espesso e ceroso que remete a raspas de casca de limão maduro."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura aldeídica densa, ríspida, intensamente cerosa e ensaboada, com textura nitidamente oleosa."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Revela seu aspecto mais belo e sofisticado: uma rica e fresca aura floralizada que remete a pétalas de violeta envolvidas em sabão de luxo."
            },

            {
                tempo: "24 horas+",
                descricao:
                    "Fundo limpo de fixação tenaz na fita, deixando um aroma ceroso-floral aveludado e purificado."
            }
        ],
        aplicacao: {
            funcao:
                "Fixador e enriquecedor de acordes florais. É essencial para dar o clássico volume abstrato a perfumes Chypres e Florais opulentos. É amplamente utilizado para conferir realismo e fixação a acordes de Violeta, Lilás, Jacinto, além de enriquecer colônias masculinas sofisticadas.",
            sinergias:
                "Excelente com as Iononas (Alfa e Beta), Metil Ionona, Absoluto de Jasmim, Óleo de Cedro e Aldeído C12 MNA.",
            riscos:
                "Em doses elevadas sem o correto envelopamento, deixa o perfume extremamente abafado, rançoso, oleoso-gorduroso ou com um aspecto rústico de sabão em barra artesanal antigo."
        },
        seguranca: {
            alerta:
                "A propriedade física de solidificação em temperaturas amenas exige leve aquecimento em banho-maria (a cerca de 30°C) antes da pipetagem se o composto estiver congelado.",
            restricao:
                "Não possui limite restritivo quantitativo direto restrito pela IFRA na Categoria 4. Controlado pelos parâmetros padrão de segurança na perfumaria fina.",
            solucao:
                "Empregar em dosagens que variam de 0.1% a 2% do concentrado puro, utilizando antioxidantes protetores na fórmula para garantir a estabilidade química de prateleira."
        }
    },
    {
        id: "aldeido_c12_mna",
        nome: "ALDEÍDO C12 MNA",
        subtitulo: "Molécula Isolada (Aldeído Alifático Ramificado)",
        nomeCientifico: "2-Methylundecanal (Methyl Nonyl Acetaldehyde)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética (Aldeído ramificado clássico, famoso por sua assinatura icônica).",
            familiaOlfativa:
                "Aldeídica / Amadeirada / Âmbar.",
            aparencia:
                "Líquido fluido, límpido e incolor."
        },
        comportamento: {
            volatilidade:
                "Topo / Meio (Nota de Saída dotada de grande difusão e rastro vertical).",
            tenacidade:
                "Alta. Permanece perceptível na fita por cerca de 48 a 72 horas (Dados TGSC). Atua estendendo o efeito cintilante até o corpo.",
            intensidade:
                "Extremo (Escala: 9/10). Muito radiante, cortante, difusivo e expansivo.",
            diluicao:
                "Altamente recomendado usar diluído a 10% ou 1% em DPG para evitar erros de superdosagem na bancada."
        },
        perfil: {
            descritores:
                "Cítrico amargo, Amadeirado seco, Âmbar incensado, Ceroso limpo, Ozônico elétrico.",
            nuances:
                "Possui um perfil consideravelmente diferente e mais complexo que os aldeídos lineares. Mescla o impacto ensaboado ultra-limpo com uma rica e proeminente faceta amadeirada seca (que remete a cedro e ferro quente), nuances de casca de laranja amarga e um intrigante fundo seco e resinoso que emula incenso e âmbar cinzento."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Explosão metálica aguda, ozônica e ensaboada elétrica, com um marcante toque cítrico-amargo de cascas de laranja."
            },

            {
                tempo: "1 hora",
                descricao:
                    "O perfume ganha um volume vertical magnífico; surge o caráter amadeirado seco e incensado que sofistica todo o topo."
            },

            {
                tempo: "12 horas",
                descricao:
                    "Resta um resíduo seco amadeirado-resinoso muito elegante, limpo e sutilmente ambarado."
            }
        ],
        aplicacao: {
            funcao:
                "Modificador amadeirado de topo e doador de rastro de luxo. É lendário por sua participação em criações icônicas da alta perfumaria (como o Chanel Nº 5). É ideal para dar brilho e modernidade a perfumes masculinos Amadeirados, Fougères e Chypres, quebrando o peso excessivo de resinas de fundo.",
            sinergias:
                "Sinergia espetacular com o Olíbano, Vetiver, Patchouli, Cedro, Couro e bases florais pesadas de Jasmim e Rosa.",
            riscos:
                "O uso excessivo resulta em uma fragrância excessivamente cortante, química, ríspida ou com cheiro linear que lembra fumaça metálica, fluidos industriais ou desinfetante automotivo forte."
        },
        seguranca: {
            alerta:
                "Mais estável contra oxidação rápida do que os aldeídos estritamente lineares alifáticos, mas ainda sim requer blindagem antioxidante clássica.",
            restricao:
                "Regulado e limitado pela IFRA (Categoria 4 - Perfumaria Fina). Possui um limite máximo seguro estabelecido para o produto cosmético final para evitar riscos de dermatite e sensibilização.",
            solucao:
                "Quantificar com rigor seu peso na fórmula (geralmente mantido entre 0.1% a 1.5% do concentrado total) para assegurar total conformidade com os padrões normativos da IFRA."
        }
    },
    {
        id: "aldeido_c14",
        nome: "ALDEÍDO C14",
        subtitulo: "Molécula Isolada (Gama-Lactona)",
        nomeCientifico: "gamma-Undecalactone (Nome comercial histórico: Aldehyde C-14 Peach)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética (Embora chamado historicamente de aldeído, quimicamente trata-se de uma Lactona cíclica).",
            familiaOlfativa:
                "Frutada / Lactônica.",
            aparencia:
                "Líquido fluido, límpido e incolor a levemente amarelado."
        },
        comportamento: {
            volatilidade:
                "Fundo / Meio (Nota de Base Frutada de excelente retenção na pele).",
            tenacidade:
                "Altíssima. Permanece perceptível na fita olfativa por mais de 400 horas (mais de 16 dias, dados TGSC). Atua ancorando florais voláteis.",
            intensidade:
                "Médio-Alto (Escala: 6.5/10). É aveludado, denso, opaco e preenche o espaço de forma macia e gradual.",
            diluicao:
                "Pura (100%) para a construção estrutural de acordes gourmands/frutados ou a 10% para calibração fina."
        },
        perfil: {
            descritores:
                "Pêssego aveludado, Damasco doce, Cremoso leitoso, Ceroso frutado, Envolvente.",
            nuances:
                "Captura perfeitamente a textura e o aroma da casca aveludada e da polpa suculenta do pêssego maduro. Carrega uma doçura frutada densa e rica, fundida com facetas cremosas e leitosas que lembram coco e manteiga, com um fundo sutilmente ceroso e quente que confere sensação de conforto tátil."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura frutada macia, doce e densa que lembra geleia de pêssego, sem o impacto volátil cortante dos aldeídos verdadeiros."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Instala-se como uma belíssima textura aveludada frutada-cremosa de damasco e pêssego, arredondando todas as arestas da fórmula."
            },

            {
                tempo: "48 horas+",
                descricao:
                    "Fixação indestrutível na fita olfativa, restando uma base frutada-leitosa extremamente macia, sensual, limpa e reconfortante."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de textura aveludada, suculência frutada e excelente fixador de fundo. É uma matéria-prima lendária na história da perfumaria (famosa no clássico Mitsouko). É amplamente utilizada para estruturar florais-frutados modernos, criar acordes de pêssego/damasco realistas e dar densidade e maciez a bases orientais e gourmands.",
            sinergias:
                "Forma sinergia absoluta com o Patchouli, Óleo de Rosa, Jasmin Absoluto, Vanilina, Cumarina e com o Aldeído C18.",
            riscos:
                "Se usado de forma desmedida ou sem o devido envelopamento por notas secas, torna a fragrância excessivamente melosa, infantil, pegajosa ou com cheiro linear de xarope de frutas e iogurte artificial barato."
        },
        seguranca: {
            alerta:
                "Por ser quimicamente uma lactona, apresenta excelente estabilidade química em perfumes alcoólicos e sabões, sendo altamente resistente à descoloração e à oxidação rápida.",
            restricao:
                "Não possui restrições proibitivas severas diretas impostas pelas diretrizes atuais da IFRA na Categoria 4. É um ingrediente altamente seguro de manusear.",
            solucao:
                "Pode ser empregado com excelente liberdade criativa (geralmente entre 0.5% a 5% da fórmula do concentrado) para conferir textura, fixação prolongada e suavidade frutada."
        }
    },
    {
        id: "aldeido_c16",
        nome: "ALDEÍDO C16",
        subtitulo: "Molécula Isolada (Glicidato / Éster Epóxi)",
        nomeCientifico: "Ethyl methylphenylglycidate (Nome comercial histórico: Aldehyde C-16 Strawberry)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética (Historicamente classificado como aldeído, quimicamente trata-se de um éster epóxi aromático).",
            familiaOlfativa:
                "Frutada / Gourmand.",
            aparencia:
                "Líquido viscoso, límpido e incolor a levemente amarelado pálido."
        },
        comportamento: {
            volatilidade:
                "Meio / Fundo (Nota de Corpo Frutada de excelente substantividade de cauda).",
            tenacidade:
                "Alta. Permanece perceptível na fita olfativa por mais de 200 horas (cerca de 8 dias, dados TGSC). Agente fixador frutado muito estável.",
            intensidade:
                "Alto (Escala: 7/10). Possui perfil muito adocicado, penetrante e de preenchimento encorpado.",
            diluicao:
                "Pura (100%) para estruturação de blocos gourmands pesados ou a 10% para calibração fina de florais doces."
        },
        perfil: {
            descritores:
                "Morango doce, Geleia de frutas vermelhas, Caramelo/Gourmand, Ceroso denso, Licoroso.",
            nuances:
                "Representa o aroma clássico, doce e fantasioso de morangos em calda. Exibe uma doçura frutada densa e penetrante que remete a chicletes de frutas vermelhas e geleias caseiras quentes, acompanhada por nuances ligeiramente cerosas, melosas e com uma sutil faceta licorosa de maçã cozida."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Impacto intensamente doce, xaroposo e frutado de morango artificial, com uma textura densa de calda."
            },

            {
                tempo: "2 horas",
                descricao:
                    "O dulçor inicial assenta, mesclando-se de forma atraente em um coração frutado de frutas vermelhas aveludadas e caramelizadas."
            },

            {
                tempo: "24 horas+",
                descricao:
                    "Fundo de fixação marcante, deixando um rastro gourmand doce, macio, abaunilhado e muito convidativo."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de dulçor frutado, efeito morango e modificador gourmand. É a molécula mestre para estruturar acordes de frutas vermelhas (morango, framboesa, amora), sendo essencial para inflar e adocicar fragrâncias femininas adolescentes, criações gourmands modernas e xampus de apelo comercial marcante.",
            sinergias:
                "Excelente sinergia com a Vanilina, Etil Vanilina, Maltol, Maltol de Etila, Iononas e notas florais como o Jasmim e a Rosa.",
            riscos:
                "O uso excessivo ou sem o devido contrapeso de notas amadeiradas ou cítricas ríspidas satura a fórmula rapidamente, deixando o perfume extremamente enjoativo, infantilizado, ou com cheiro linear de bala mastigável barata."
        },
        seguranca: {
            alerta:
                "Molécula quimicamente muito estável, resistente à descoloração em bases cosméticas alcoólicas comuns.",
            restricao:
                "Regulado e monitorado pelas diretrizes da IFRA (Categoria 4 - Perfumaria Fina), que estabelece limites máximos de uso seguros no produto final aplicado na pele para evitar sensibilização.",
            solucao:
                "Calcular rigorosamente a dosagem na essência (geralmente empregado entre 0.2% a 3% do concentrado) para manter a conformidade regulatória e garantir o refinamento estético."
        }
    },
    {
        id: "aldeido_c18",
        nome: "ALDEÍDO C18",
        subtitulo: "Molécula Isolada (Gama-Lactona)",
        nomeCientifico: "gamma-Nonalactone (Nome comercial histórico: Aldehyde C-18 Coconut)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética (Historicamente chamado de aldeído C18, quimicamente trata-se de uma Lactona de cadeia curta).",
            familiaOlfativa:
                "Frutada / Lactônica / Gourmand.",
            aparencia:
                "Líquido fluido, límpido e incolor a levemente amarelado."
        },
        comportamento: {
            volatilidade:
                "Fundo / Meio (Nota de Base Lactônica de altíssima fixação).",
            tenacidade:
                "Altíssima. Permanece perceptível na fita olfativa por mais de 400 horas (mais de 16 dias, dados TGSC). Excelente fixador interno de cauda.",
            intensidade:
                "Alto (Escala: 7/10). Muito denso, cremoso, envolvente e de grande expansão em bases pesadas.",
            diluicao:
                "Pura (100%) para dar corpo e fixação gourmand ou a 10% para dosar nuances cremosas sutis em florais solares."
        },
        perfil: {
            descritores:
                "Coco cremoso, Leitoso amanteigado, Doce balsâmico, Oleoso, Amendoado sutil.",
            nuances:
                "Captura a essência rica e untuosa do coco e do leite de coco concentrado. Une um perfil frutado denso com nuances intensamente leitosas, amanteigadas e cremosas, carregando facetas adocicadas balsâmicas que lembram baunilha, toques de feno seco e uma sutil nuance amendoada de damasco de fundo."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura densa, intensamente adocicada e cremosa com cheiro marcante de coco maduro e polpa amanteigada."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Evolui para uma rica e aveludada textura lactônica-leitosa, envelopando o coração da fragrância em uma atmosfera morna e exótica."
            },

            {
                tempo: "48 horas+",
                descricao:
                    "Fixação indestrutível na fita olfativa. Deixa um eco de coco baunilhado, macio, cremoso e sumamente confortável."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de cremosidade, fixador e pilar de acordes gourmands e solares. É o ingrediente chave para formular acordes de Coco, Bronzeador solar (tipo Monoï) e para introduzir um caráter leitoso rico em perfumes Orientais. Serve também em frações mínimas para dar sensação de 'pétala aveludada' a florais brancos como a Tuberosa e a Gardenia.",
            sinergias:
                "Forma casamentos espetaculares com o Aldeído C14 (acorde de frutas tropicais), Vanilina, Cumarina, Sândalo, Salicilato de Amila e Álcool Benzílico.",
            riscos:
                "Se superdosado na fórmula, domina totalmente a composição de maneira vulgar, transformando o perfume em um aroma de protetor solar de praia barato, doce de coco enjoativo ou velas aromáticas pesadas."
        },
        seguranca: {
            alerta:
                "Por ser uma lactona estável, possui excelente resistência química na formulação fina alcoólica e contra degradações provocadas pela luz.",
            restricao:
                "Não apresenta limites restritivos severos quantitativos diretos estabelecidos pela IFRA para uso na Categoria 4 (Perfumaria Fina). Considerado de uso seguro.",
            solucao:
                "Utilizar na bancada com critério estético (geralmente entre 0.2% a 4% do composto concentrado puro) para atingir os efeitos de cremosidade aveludada e fixação desejados."
        }
    },
    {
        id: "aldeido_c9",
        nome: "ALDEÍDO C9",
        subtitulo: "Molécula Isolada (Aldeído Alifático Saturado)",
        nomeCientifico: "Nonanal (Aldehyde C-9)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética (Aldeído linear saturado de cadeia curta).",
            familiaOlfativa:
                "Aldeídica / Cítrica / Verde.",
            aparencia:
                "Líquido móvel, fluido, totalmente límpido e incolor."
        },
        comportamento: {
            volatilidade:
                "Topo (Nota de Saída / Cabeça de grande expansão).",
            tenacidade:
                "Baixa-Média. Permanece na fita olfativa por cerca de 12 a 24 horas (Dados TGSC). Age de forma intensa no sopro inicial.",
            intensidade:
                "Extremo (Escala: 9/10). Impacto inicial avassalador, puramente sufocante se avaliado sem diluição.",
            diluicao:
                "Obrigatório o uso diluído a 10% ou 1% em DPG para manipulação e avaliação olfativa segura na bancada."
        },
        perfil: {
            descritores:
                "Ceroso gorduroso, Casca de rosa esmagada, Pepino aquoso, Sebo limpo, Cítrico floralizado.",
            nuances:
                "Carrega o clássico aspecto ensaboado e elétrico dos aldeídos lineares, porém dotado de uma faceta verde-aquosa muito nítida que remete a pepino fresco e casca de melão. Possui um fundo ceroso gorduroso que, quando diluído de forma extrema, exibe uma belíssima e delicada nuance de pétalas frescas de rosa e casca de limão."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Pungência química metálica extrema, intensamente cerosa, ensaboada e com um forte aspecto de sebo limpo."
            },

            {
                tempo: "30 min",
                descricao:
                    "A agressividade diminui, revelando um perfil aquoso-vegetal muito limpo e uma sutil e elegante vibração cítrico-rosada."
            },

            {
                tempo: "8 horas",
                descricao:
                    "Restam vestígios cerosos muito suaves e transparentes que se integram de forma limpa ao coração floral."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de radiância, efeito 'orvalho' e modificador cítrico. É essencial para injetar difusão tridimensional e frescor natural a acordes cítricos (especialmente limão e grapefruit) e para conferir uma assinatura floral abstrata e limpa a fragrâncias do tipo Cologne e florais brancos modernos.",
            sinergias:
                "Trabalha em perfeita harmonia com o Linalol, Acetato de Linalila, Aldeído C10, Óleo de Rosa e notas ozônicas/aquosas.",
            riscos:
                "Se dosado em excesso, destrói a sofisticação da fórmula, imprimindo uma nota ríspida, rançosa ou com cheiro linear de sabão em barra rústico, gordura de fritura fria ou cera de assoalho antiga."
        },
        seguranca: {
            alerta:
                "Por ser um aldeído alifático saturado de cadeia curta, é bastante sensível à oxidação ao ar se armazenado de forma incorreta, transformando-se em ácido nonanoico.",
            restricao:
                "Não possui restrições quantitativas proibitivas severas diretas impostas pela IFRA para a Categoria 4 (Perfumaria Fina). Opera sob os limites padrão de segurança e boas práticas.",
            solucao:
                "Adicionar sempre antioxidantes protetores (como 0.1% de BHT) ao lote concentrado e manter o frasco vedado em ambiente refrigerado, dosando-o em frações mínimas (comumente de 0.05% a 1% da fórmula)."
        }
    },
    {
        id: "aldeido_cinamico",
        nome: "ALDEÍDO CINÂMICO",
        subtitulo: "Molécula Isolada (Aldeído Aromático)",
        nomeCientifico: "Cinnamaldehyde (Cinnamic aldehyde)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética ou Natural (Aldeído aromático que constitui até 90% do óleo essencial da casca da Canela).",
            familiaOlfativa:
                "Especiada / Quente.",
            aparencia:
                "Líquido ligeiramente viscoso, de coloração amarelo-clara a amarelo-intensa, que escurece com a exposição à luz."
        },
        comportamento: {
            volatilidade:
                "Meio / Fundo (Nota de Corpo Especiada de grande substantividade).",
            tenacidade:
                "Alta. Permanece perceptível na fita olfativa por mais de 72 horas (cerca de 3 dias, dados TGSC). Deixa um rastro quente e linear.",
            intensidade:
                "Extremo (Escala: 9/10). Possui um poder de tingimento olfativo imenso e pungência picante imediata.",
            diluicao:
                "Altamente recomendado trabalhar diluído a 10% ou mesmo 1% em DPG para evitar saturação sensorial na bancada."
        },
        perfil: {
            descritores:
                "Canela pura, Picante morno, Doce balsâmico, Amadeirado seco, Açucarado/Gourmand.",
            nuances:
                "É o aroma puro, realista, quente e pungente da casca de canela seca. Combina um topo fortemente picante, estimulante e quase ardido com um corpo intensamente adocicado e balsâmico, que evolui para nuances amadeiradas secas e texturas pulverulentas que lembram açúcar mascavo e especiarias de cozinha."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Explosão picante avassaladora, seca, intensamente aromática e medicinal-quente de canela pura."
            },

            {
                tempo: "2 horas",
                descricao:
                    "O aspecto ríspido picante assenta, revelando um corpo especiado doce, balsâmico, extremamente confortável, rico e gourmand."
            },

            {
                tempo: "24 horas+",
                descricao:
                    "Excelente fixação na fita, restando uma base amadeirada-especiada muito macia, sutilmente abaunilhada e adocicada."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de calor, calor especiado e modificador oriental/gourmand. É indispensável para construir acordes de canela realistas, dar vibração e contraste picante a saídas cítricas e conferir opulência e sensualidade a fragrâncias masculinas Fougère, Chypres orientais e criações gourmands pesadas.",
            sinergias:
                "Forma sinergia absoluta com o Eugenol, Isoeugenol, Cumarina, Vanilina, Patchouli e Óleo de Laranja.",
            riscos:
                "Se dosado de forma negligente, domina completamente a evolução do perfume, deixando a composição enjoativa, com cheiro de chiclete de canela artificial, doces natalinos ou aromatizadores residenciais baratos.",
            descoloracao:
                "⚠️ ALERTA DE FORMULAÇÃO: Reage fortemente com compostos nitrogenados (como o Antranilato de Metila), gerando Bases de Schiff que causam intensa coloração vermelho-escura/marrom na fragrância ao longo do tempo."
        },
        seguranca: {
            alerta:
                "O Aldeído Cinâmico é um dos alérgenos mais conhecidos e potentes da perfumaria, capaz de causar forte irritação e sensibilização dérmica se usado incorretamente.",
            restricao:
                "⚠️ RESTRIÇÃO IFRA SEVERA: Possui limites quantitativos estritos e rigorosos ditados pela IFRA para uso na Categoria 4 (Perfumaria Fina). A sua dosagem no produto final deve ser minuciosamente monitorada.",
            solucao:
                "Calcular rigorosamente o percentual final na pele para total conformidade regulatória. Na bancada criativa, seu uso costuma ficar restrito a frações discretas (geralmente entre 0.1% a 2% do concentrado)."
        }
    },
    {
        id: "ambrocenide",
        nome: "AMBROCENIDE",
        subtitulo: "Molécula Isolada (Superâmbar / Amadeirado de Alto Impacto)",
        nomeCientifico: "Ambrocenide (Nome comercial desenvolvido pela Symrise)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética (Ar things de altíssima tecnologia, classificado como um super-amadeirado ambarado de nova geração).",
            familiaOlfativa:
                "Amadeirada / Âmbar Seco.",
            aparencia:
                "Líquido viscoso a sólido cristalino em temperatura ambiente (comumente comercializado diluído pelo próprio fabricante)."
        },
        comportamento: {
            volatilidade:
                "Fundo (Nota de Base de força monumental, com efeito estendido até o topo).",
            tenacidade:
                "Extrema. Permanece perceptível na fita olfativa por mais de 400 horas (várias semanas, dados TGSC). Modifica permanentemente toda a estrutura da fragrância.",
            intensidade:
                "Extremo (Escala: 10/10). Possui um dos maiores poderes de impacto e irradiação conhecidos na perfumaria moderna.",
            diluicao:
                "Obrigatório trabalhar com ele altamente diluído (a 10% ou preferencialmente a 1% em DPG) para evitar a ruína imediata dos ensaios de bancada."
        },
        perfil: {
            descritores:
                "Âmbar seco cortante, Amadeirado radiante, Metálico/Néon, Incensado mineral, Fixador vibrante.",
            nuances:
                "Representa a clássica assinatura dos perfumes masculinos modernos de alta performance ('efeito bombástico'). Une um caráter de madeira seca, limpa e afiada (tipo cedro-cinza) com um aspecto ambarado mineral elétrico, quase metálico, que traz uma sensação de calor incensado, vibração néon e poder penetrante abstrato indestrutível."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Impacto inicial elétrico, cortante, seco e amadeirado-mineral que salta imediatamente da fita, dominando o ambiente."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Instala-se como um motor central vibrante, conferindo uma radiância amadeirada seca surreal e um rastro vertical imenso a todas as notas florais e cítricas da fórmula."
            },

            {
                tempo: "48 horas+",
                descricao:
                    "Fixação indestrutível. Resta um esqueleto amadeirado ambarado seco puríssimo, limpo, mineral e de performance monumental."
            }
        ],
        aplicacao: {
            funcao:
                "Exaltador de performance, doador de rastro vertical e fixador extremo. É amplamente utilizado na perfumaria de nicho e comercial masculina para garantir projeção avassaladora e fixação eterna. Funciona como um amplificador de notas amadeiradas e cítricas, trazendo um aspecto moderno e limpo.",
            sinergias:
                "Excelente sinergia com o Iso E Super, Ambroxan, Cedramber, Vertofix, Norlimbanol e óleos cítricos como a Bergamota.",
            riscos:
                "O risco de superdosagem é crítico. Se usado em excesso (mesmo em frações mínimas descalculadas), cega o olfato do usuário, torna o perfume extremamente ríspido, áspero, puramente químico e causa fadiga olfativa imediata."
        },
        seguranca: {
            alerta:
                "Molécula quimicamente hiper-estável. Resistente a oxidações, descolorações, variações de luz e pH, sobrevivendo intacta em qualquer base aromática.",
            restricao:
                "Não possui restrições proibitivas severas diretas impostas pela IFRA para a Categoria 4 (Perfumaria Fina). No entanto, seu uso é naturalmente limitado pelo bom senso estético devido à sua força descomunal.",
            solucao:
                "Utilizar na bancada em quantidades milimétricas (geralmente entre 0.01% a até 0.5% do concentrado puro) para atuar puramente como um catalisador de performance e brilho amadeirado."
        }
    },
    {
        id: "ambroxan",
        nome: "AMBROXAN",
        subtitulo: "Molécula Isolada (Fixador Ambarado)",
        nomeCientifico: "Ambroxide (Nomes comerciais: Ambroxan, Ambrox, Ambrofix)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética (Isolado cristalino originalmente derivado do esclareol, componente do óleo de Sálvia Esclareia).",
            familiaOlfativa:
                "Âmbar / Amadeirada / Musky.",
            aparencia:
                "Cristais brancos brilhantes em estado puro (geralmente dissolvido a 10% ou 5% em DPG pelo perfumista para uso diário)."
        },
        comportamento: {
            volatilidade:
                "Fundo (Nota de Base/Fixador de altíssima performance e difusão de cauda).",
            tenacidade:
                "Altíssima. Permanece perceptível na fita olfativa por mais de 168 hours (cerca de 7 dias, dados TGSC). Confere substantividade linear única.",
            intensidade:
                "Médio-Alto (Escala: 6/10). Não é ríspido; exibe uma irradiação aveludada contínua que preenche a fragrância por completo.",
            diluicao:
                "Recomendado diluir os cristais a 10% em DPG ou Álcool para facilitar o manuseio líquido exato em laboratório."
        },
        perfil: {
            descritores:
                "Âmbar cinzento natural, Amadeirado aveludado, Pele limpa e quente, Mineral suave, Almiscarado.",
            nuances:
                "Substitui perfeitamente o caráter tridimensional do raríssimo Âmbar Cinzento natural (Ambergris). Combina um aroma amadeirado macio e seco (tipo papel celofane e tabaco fino) com uma nuance incrivelmente sensual que remete à pele limpa aquecida pelo sol, facetas minerais salgadas e um fundo almiscarado sedoso de extrema elegância."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura sutil, transparente, discretamente amadeirada-seca e mineral, que cresce gradualmente com o calor."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Desabrocha um volume ambarado aveludado espetacular, envelopando a fragrância em uma aura radiante de sofisticação e sensualidade limpa."
            },

            {
                tempo: "24 horas+",
                descricao:
                    "Fundo de fixação magnífico na pele e na fita; exala um aroma confortável de pele quente, almíscar cremoso e madeiras nobres."
            }
        ],
        aplicacao: {
            funcao:
                "Fixador master, doador de volume e agente de fusão. É um dos ingredientes mais cruciais e celebrados da perfumaria contemporânea (famoso em criações como Sauvage e Molecule 02). Serve para dar sustentação, 'peso' de luxo, radiância e uma coesão aveludada indescritível que une o topo ao fundo da fórmula.",
            sinergias:
                "Casamento perfeito com o Iso E Super, Hedione, Musks (como Galaxolide e Ethylene Brassylate), notas cítricas e florais transparentes.",
            riscos:
                "Possui excelente aceitação olfativa, mas o uso desmedido pode encarecer a fórmula sem necessidade estética ou deixar o fundo excessivamente linear e reconhecível, obliterando detalhes sutis da composição."
        },
        seguranca: {
            alerta:
                "Molécula quimicamente extremamente estável e inerte. Não sofre degradação rápida por luz, oxigênio ou alterações comuns de pH.",
            restricao:
                "Não possui restrições quantitativas ou limites proibitivos impostos pela IFRA na Categoria 4 (Perfumaria Fina). Considerada extremamente segura para uso cosmético.",
            solucao:
                "Pode ser utilizado com imensa liberdade criativa na bancada, variando comumente de 1% a 5% (da solução pura) para efeitos fixadores padrão, ou até 20% ou mais para criações conceituais hiper-radiantes."
        }
    },
    {
        id: "antranilato_de_metila",
        nome: "ANTRANILATO DE METILA",
        subtitulo: "Molécula Isolada (Éster Aromático Nitrogenado)",
        nomeCientifico: "Methyl anthranilate",
        identificacao: {
            tipoMateriaPrima:
                "Sintética ou Natural (Composto nitrogenado, constituinte natural crucial do óleo de Néroli, Flor de Laranjeira e uvas do tipo Concord).",
            familiaOlfativa:
                "Floral Branca / Frutada / Doce.",
            aparencia:
                "Líquido fluido, límpido, de coloração incolor a amarelo-clara, que exibe uma belíssima fluorescência azulada quando exposto à luz UV."
        },
        comportamento: {
            volatilidade:
                "Meio / Fundo (Nota de Corpo Floral pesado, com excelente substantividade de base).",
            tenacidade:
                "Alta. Permanece perceptível na fita olfativa por mais de 72 horas (cerca de 3 dias, dados TGSC). Deixa um resíduo adocicado denso.",
            intensidade:
                "Alto (Escala: 7.5/10). Possui perfil penetrante, de grande impacto e difusão melosa.",
            diluicao:
                "Pura (100%) para estruturação de bases de flor de laranjeira ou a 10% para melhor calibração de acordes frutados."
        },
        perfil: {
            descritores:
                "Uva Concord, Flor de laranjeira densa, Doce licoroso, Ligeiramente Medicinal, Amandorrado sutil.",
            nuances:
                "Representa a espinha dorsal adocicada de todas as construções de florais brancos opulentos. Combina um aroma intensamente frutado que remete diretamente a suco ou bala de uva roxa e vinho tinto com um caráter floral denso e narcótico de flor de laranjeira e tuberosa, apresentando um leve topo químico-medicinal quando cheirado puro."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Explosão doce, licorosa e penetrante com cheiro marcante de xarope de uva e nuances florais densas."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Evolui de forma exuberante para um coração floral branco profundo, narcótico e meloso, remetendo a flores de laranjeira sob o sol."
            },

            {
                tempo: "24 horas+",
                descricao:
                    "Fundo de fixação muito tenaz, deixando um rastro atalcado doce, balsâmico e levemente amendoado na fita."
            }
        ],
        aplicacao: {
            funcao:
                "Pilar de construção de florais brancos e modificador frutado de uva. É o ingrediente mestre e indispensável para formular acordes de Flor de Laranjeira, Néroli, Gardênia e Tuberosa, servindo também para adocicar e dar uma assinatura comercial moderna a perfumes femininos orientais.",
            sinergias:
                "Sinergia absoluta com o Linalol, Acetato de Linalila, Indol, Hedione e Benzyl Acetate.",
            riscos:
                "Se usado de forma desmedida ou sem balanço, domina completamente a fórmula, reduzindo o perfume a um aroma infantil de chiclete de uva ou xarope medicinal enjoativo.",
            descoloracao:
                "⚠️ CRÍTICO PARA O PERFUMISTA: Por possuir um grupo amina livre (nitrogênio), reage facilmente com qualquer aldeído (C12, Aldeído Cinâmico, Vanilina, etc.) na fórmula, criando as chamadas 'Bases de Schiff'. Esta reação causa uma dramática descoloração do perfume, tornando o líquido marrom-escuro ou quase preto ao longo de poucas semanas."
        },
        seguranca: {
            alerta:
                "Pode causar fotossensibilização discreta na pele se exposto à luz solar direta se usado em concentrações excessivas.",
            restricao:
                "Regulado pelas diretrizes oficiais da IFRA (Categoria 4 - Perfumaria Fina). Possui limites estipulados para evitar reações cutâneas adversas.",
            solucao:
                "Formular com plena atenção às reações de descoloração e limites da IFRA, dosando-o comumente entre 0.5% a 4% do concentrado total da fragrância."
        }
    },
    {
        id: "aurantiol",
        nome: "AURANTIOL",
        subtitulo: "Molécula Isolada (Base de Schiff Estabilizada)",
        nomeCientifico: "Hydroxycitronellal-methyl anthranilate (Aurantiol / Aurantion)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética (Trata-se de uma Base de Schiff pré-reagida e estabilizada industrialmente entre o Hidroxicitronelal e o Antranilato de Metila).",
            familiaOlfativa:
                "Floral Branca / Cítrica.",
            aparencia:
                "Líquido extremamente viscoso, denso, de coloração amarelo-intensa a âmbar, com forte fluorescência sob luz UV."
        },
        comportamento: {
            volatilidade:
                "Fundo (Nota de Base Floral/Fixador de altíssima substantividade).",
            tenacidade:
                "Altíssima. Permanece perceptível na fita olfativa por mais de 400 hours (cerca de 2 semanas, dados TGSC). Atua ancorando florais voláteis de forma espetacular.",
            intensidade:
                "Médio (Escala: 5/10). É suave na saída devido ao seu alto peso molecular, mas sua exalação é constante, linear e persistente.",
            diluicao:
                "Altamente recomendado diluir a 50% ou 20% em DPG, pois o produto puro é excessivamente pegajoso e lento para pipetar em bancada."
        },
        perfil: {
            descritores:
                "Flor de laranjeira melosa, Lírio-do-vale, Ceroso denso, Casca de tangerina, Fixador floral.",
            nuances:
                "Captura o lado mais profundo, ceroso e maduro da flor de laranjeira. Fusona a doçura narcótica do antranilato com o caráter verde-floral limpo e úmido do lírio-do-vale, trazendo uma nuance cítrica amarga que remete a marmelada de laranja e casca de tangerina seca, com um fundo densamente meloso e balsâmico."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura muito discreta, viscosa, sutilmente frutada e floral-cerosa, sem o impacto volátil pungente dos componentes isolados."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Instala-se como um coração/fundo floral magnífico, aveludado, denso e meloso, conferindo um realismo extraordinário de flor de laranjeira natural."
            },

            {
                tempo: "48 horas+",
                descricao:
                    "Fixação espetacular na fita olfativa, restando um rastro floral branco ceroso, limpo, doce e sumamente sofisticado."
            }
        ],
        aplicacao: {
            funcao:
                "Fixador floral de excelência e pilar de florais brancos. É o ingrediente definitivo para conferir tenacidade indestrutível a acordes de Néroli, Flor de Laranjeira, Tuberosa e Jasmim, agindo como um excelente amaciador que retém notas voláteis de topo cítrico na pele.",
            sinergias:
                "Excelente sinergia com o Linalol, Hedione, Salicilato de Benzila, Álcool Feniletílico e óleos cítricos naturais.",
            riscos:
                "O principal risco é o abafamento do topo se usado em excesso. Por ser uma molécula pesada, se superdosada sem critério, pode 'puxar' a fragrância para baixo, tornando a saída opaca, pesada ou excessivamente linear e atalcada-cerosa.",
            descoloracao:
                "⚠️ NOTA DE COR: Por já ser uma Base de Schiff amarela, ela naturalmente tinge o líquido do perfume final de amarelo ou âmbar, o que deve ser considerado no design visual do produto."
        },
        seguranca: {
            alerta:
                "Molécula quimicamente muito estável, resistente à hidrólise rápida em formulações alcoólicas finas de perfumaria.",
            restricao:
                "Regulado pelas diretrizes da IFRA (Categoria 4 - Perfumaria Fina). Seus limites máximos de uso seguro devem ser calculados com base nas restrições de seus componentes de origem (especialmente o hidroxicitronelal).",
            solucao:
                "Utilizar com inteligência na bancada (comumente entre 1% a 5% do composto concentrado puro) para atingir fixação floral de alta sofisticação técnica e estética."
        }
    },
    {
        id: "base_cassis",
        nome: "BASE CASSIS",
        subtitulo: "Coquetel de Aromaquímicos (Base Reconstituída / Specialty)",
        nomeCientifico: "Cassis Base (Exemplos comerciais clássicos: Cassis 345 B desenvolvido pela Firmenich)",
        identificacao: {
            tipoMateriaPrima:
                "Sintética / Reconstituída (Base ou 'Specialty' composta por uma mistura equilibrada de aromaquímicos e isolados naturais para emular o absoluto de cassis).",
            familiaOlfativa:
                "Frutada / Verde / Sulfúrica.",
            aparencia:
                "Líquido fluido, límpido, de coloração incolor a amarelo-clara pálida."
        },
        comportamento: {
            volatilidade:
                "Meio / Topo (Nota de Transição Frutada dotada de imenso impacto e expansão inicial).",
            tenacidade:
                "Média-Alta. Permanece perceptível na fita olfativa por cerca de 48 a 72 horas (Dados TGSC para bases tipo 345B). Mantém o caráter frutado vibrante ao longo da evolução.",
            intensidade:
                "Alto-Extremo (Escala: 8.5/10). Possui perfil intensamente difusivo, agudo, penetrante e cortante.",
            diluicao:
                "Recomendado trabalhar a 10% em DPG na bancada de criação, pois seu perfil sulfúrico/verde pode dominar ensaios facilmente."
        },
        perfil: {
            descritores:
                "Groselha preta (Blackcurrant), Verde folha esmagada, Sulfúrico/Acre, Frutado ácido, Licoroso.",
            nuances:
                "Captura perfeitamente o aroma exótico, sofisticado e multifacetado da groselha preta (cassis). Une uma doçura frutada escura e licorosa com uma poderosa faceta verde ríspida de folhas de tomateiro e brotos de groselha esmagados, trazendo ao fundo uma sutil nuance sulfúrica/acre (característica natural do broto de cassis) que confere realismo botânico extraordinário."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Explosão frutada escura, intensamente ácida, verde aguda e penetrante, com uma nuance sulfúrica marcante e exótica."
            },

            {
                tempo: "1 hora",
                descricao:
                    "O lado sulfúrico áspero diminui drasticamente; instala-se um coração frutado luxuoso, suculento, sofisticado e intensamente moderno."
            },

            {
                tempo: "24 horas",
                descricao:
                    "Resta um fundo frutado-verde limpo, aveludado e macio, perfeitamente integrado às notas florais e amadeiradas de base."
            }
        ],
        aplicacao: {
            funcao:
                "Doador de assinatura frutada de luxo, acidez moderna e efeito botânico natural. É a base definitiva e mais celebrada do mundo para introduzir a nota realista de Groselha Preta / Cassis em perfumes finos masculinos e femininos (famosa em criações de grande prestígio). Serve para quebrar a monotonia de florais doces e para injetar uma vibração frutada ácida tridimensional única.",
            sinergias:
                "Harmoniza magnificamente com o Galaxolide, Iso E Super, Hedione, Iononas, Notas Cítricas e florais como a Rosa e o Jasmim.",
            riscos:
                "Se dosado em excesso ou sem o devido envelopamento, a nuance sulfúrica pode se sobressair de maneira desastrosa na pele do usuário, remetendo diretamente a cheiro acre de urina de gato, suor corporal ou folhas podres."
        },
        seguranca: {
            alerta:
                "Por ser uma mistura/base de várias moléculas desenvolvida por casas de fragrância, sua estabilidade geral em meio alcoólico é excelente, mas exige atenção a possíveis alterações de cor sob luz intensa.",
            restricao:
                "A conformidade com a IFRA é garantida pelo fabricante da base (como a Firmenich), que limita a presença de componentes regulados (como traços de oxatiane ou alérgenos comuns). O perfumista deve seguir o limite máximo de incorporação recomendado na ficha técnica da base para a Categoria 4.",
            solucao:
                "Utilizar de forma controlada na bancada (geralmente entre 0.2% a 3% do concentrado puro) para conferir um brilho frutado elegante, exótico e sumamente moderno à composição."
        }
    },
    {
        id: "base_oud",
        nome: "BASE OUD",
        subtitulo: "Coquetel de Aromaquímicos (Base Reconstituída / Specialty)",
        nomeCientifico: "Oud Base / Agarwood Specialty (Ex: Black Agar, Oud Synthetic)",
        identificacao: {
            tipoMateriaPrima: "Sintética / Reconstituída (Mistura complexa de aromaquímicos, isolados e resinas para emular a raríssima madeira resinosa de Agarwood).",
            familiaOlfativa: "Amadeirada / Balsâmica / Animalica.",
            aparencia: "Líquido viscoso, de coloração castanho-escura a âmbar profunda."
        },
        comportamento: {
            volatilidade: "Fundo (Nota de Base de altíssima fixação e peso estrutural).",
            tenacidade: "Altíssima. Permanece na fita olfativa por mais de 400 horas (várias semanas, dados TGSC para bases comerciais). Confere rastro denso de longa duração.",
            intensidade: "Alto-Extremo (Escala: 8.5/10). Muito opaco, penetrante, preenche o espaço com calor e peso.",
            diluicao: "Pura (100%) para dar corpo e fixação à base amadeirada ou a 10% em DPG para calibração de acordes florais."
        },
        perfil: {
            descritores: "Madeira escura podre, Couro curtido, Defumado incensado, Balsâmico medicinal, Animalico profundo.",
            nuances: "Emula com fidelidade o perfil exótico do óleo de Oud natural. Combina um topo amadeirado rústico e agudamente medicinal com um corpo resinoso denso, defumado (remetendo a madeira queimada e incenso de igreja) e um fundo fortemente animalico e coriáceo que evoca mistério, opulência oriental e calor tátil."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Abertura densa, pesada, nitidamente medicinal e com um forte aspecto defumado-químico."
            },
            {
                tempo: "2 horas",
                descricao: "O caráter medicinal suaviza; desabrocha uma rica textura de madeira escura, resinas balsâmicas e um couro animalico ultra-sofisticado."
            },
            {
                tempo: "48 horas+",
                descricao: "Fixação espetacular e indestrutível, deixando um eco amadeirado-balsâmico resinado, quente e profundamente sensual."
            }
        ],
        aplicacao: {
            funcao: "Ancorador de fundo, doador de opulência e assinatura oriental. É a espinha dorsal para perfumes da família Oud e criações orientais de luxo. Serve para dar peso, mistério e complexidade tridimensional a composições amadeiradas, masculinas e florais opulentos (como acordes de Rosa-Oud).",
            sinergias: "Sinergia absoluta com o Absoluto de Rosa, Óleo de Patchouli, Castóreo, Vanilina, Cipreste e Ambroxan.",
            riscos: "O uso descuidado abafa totalmente a saída da fragrância, soterrando notas cítricas e florais leves, deixando o perfume excessivamente pesado, escuro, rústico ou com cheiro linear de asfalto quente e couro rançoso."
        },
        seguranca: {
            alerta: "Por ser uma base industrialmente reconstituída, possui excelente estabilidade química geral contra oxidação, mas exige atenção ao escurecimento natural que causa no líquido do perfume final.",
            restricao: "Regulado pelas diretrizes da IFRA de acordo com as restrições individuais dos aromaquímicos presentes na composição da base (como vestígios de alérgenos comuns). Seguir as recomendações de limite do fabricante para a Categoria 4.",
            solucao: "Utilizar com rigor e moderação na bancada (geralmente entre 0.5% a 5% do composto concentrado puro) para estruturar a cauda da fragrância com elegância."
        }
    },
    {
        id: "benzoato_de_benzila",
        nome: "BENZOATO DE BENZILA",
        subtitulo: "Molécula Isolada (Éster Aromático / Solvente Fixador)",
        nomeCientifico: "Benzyl benzoate",
        identificacao: {
            tipoMateriaPrima: "Sintética ou Natural (Encontrado naturalmente em bálsamos como o de Peru e de Tolu, além de óleos de jasmim e ylang-ylang).",
            familiaOlfativa: "Balsâmica Fina / Praticamente Inodora (Atua como fixador).",
            aparencia: "Líquido límpido, incolor, viscoso e pesado em temperatura ambiente."
        },
        comportamento: {
            volatilidade: "Fundo (Nota de Base/Fixador inerte de baixíssima volatilidade).",
            tenacidade: "Altíssima. Permanece na fita olfativa por mais de 300 horas (dados TGSC). Atua retardando a evaporação de moléculas mais leves.",
            intensidade: "Muito Baixa (Escala: 1/10). Praticamente imperceptível ao olfato quando puro; possui um odor balsâmico-adocicado extremamente sutil e tênue.",
            diluicao: "Uso puro (100%) como solvente diluente na bancada de trabalho para dissolver matérias-primas sólidas ou cristais."
        },
        perfil: {
            descritores: "Balsâmico sutil, Adocicado tênue, Oleoso inerte, Fixador neutro, Plastificante suave.",
            nuances: "Não é utilizado pelo seu perfil de odor, mas sim pelas suas propriedades físicas. Apresenta uma nota balsâmica residual levíssima, quase imperceptível, que atua como uma barreira física na pele, aprisionando moléculas voláteis e promovendo uma liberação gradual e homogênea do perfume."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Quase totalmente inodoro, com uma leve sensação oleosa e plastificante neutra."
            },
            {
                tempo: "12 horas",
                descricao: "Mantém-se estável e fixo na fita, sem alteração olfativa, agindo puramente na retenção física do acorde."
            },
            {
                tempo: "100 horas+",
                descricao: "Resta um eco balsâmico residual sumamente discreto e adocicado."
            }
        ],
        aplicacao: {
            funcao: "Solvente de excelente performance, diluente de cristais e fixador físico. É indispensável na bancada para dissolver matérias-primas sólidas (como os Musks macrocíclicos, Cumarina ou Vanilina) e para reter e prolongar a vida útil de acordes cítricos e florais voláteis na pele.",
            sinergias: "Excelente para diluir e fixar Musks em pó, Nitromusks, Cumarina, Heliotropina e resinas densas.",
            riscos: "O uso excessivo como solvente principal de toda a fórmula reduz drasticamente a projeção e o impacto inicial do perfume (efeito 'aprisionamento'), deixando a fragrância opaca, sem difusão de topo e excessivamente rente à pele."
        },
        seguranca: {
            alerta: "Líquido muito seguro e estável, altamente resistente à luz e oxidação. Não causa descoloração em bases cosméticas.",
            restricao: "Regulado pela IFRA (Categoria 4) e listado como um dos alérgenos cosméticos oficiais que devem ter sua concentração monitorada e declarada se ultrapassar os limites normativos.",
            solucao: "Utilizar como solvente carreador ou fixador em concentrações que variam comumente de 2% a até 15% da fórmula final do concentrado, dependendo da necessidade de solubilização de cristais."
        }
    },
    {
        id: "calone",
        nome: "CALONE",
        subtitulo: "Molécula Isolada (Cetona Aromática / Nota Ozônica)",
        nomeCientifico: "Methylbenzodioxepinone (Nome comercial histórico: Calone 1951)",
        identificacao: {
            tipoMateriaPrima: "Sintética (Molécula desenvolvida pela Pfizer em 1966, pilar da perfumaria aquática dos anos 90).",
            familiaOlfativa: "Aquática / Ozônica / Marinha.",
            aparencia: "Pó cristalino branco em estado puro (comercializado quase universalmente diluído a 10% ou 1% em DPG pelo perfumista devido à sua força)."
        },
        comportamento: {
            volatilidade: "Meio / Topo (Nota de Corpo Aquática com extraordinária expansão e projeção inicial).",
            tenacidade: "Alta. Permanece perceptível na fita olfativa por mais de 200 horas (cerca de 8 dias, dados TGSC). Irradia do início ao fim.",
            intensidade: "Extremo (Escala: 9/10). Possui um poder de tingimento olfativo avassalador e imediato.",
            diluicao: "Obrigatório trabalhar com ele diluído a 10% ou preferencialmente a 1% em DPG na bancada para evitar contaminação do ambiente."
        },
        perfil: {
            descritores: "Brisa marinha, Melancia aquosa, Ozônio elétrico, Algas frescas, Metálico limpo.",
            nuances: "É o aroma definitivo do mar e do ar oceânico carregado de maresia. Combina uma sensação intensamente arejada e ozônica com uma faceta frutada e aquosa muito nítida que emula a polpa da melancia e da casca do melão, evoluindo para um fundo sutilmente metálico, salino e limpo que remete a praias e iodo."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Explosão ozônica penetrante, aquosa e metálica, com um cheiro cortante de melancia verde artificial."
            },
            {
                tempo: "1 hora",
                descricao: "Abre-se em uma sensação magnífica de brisa marinha arejada e transparente, insuflando frescor e expansão tridimensional na fórmula."
            },
            {
                tempo: "48 horas+",
                descricao: "Resta uma fixação limpa, salina, puramente aquática e linear de grande substantividade."
            }
        ],
        aplicacao: {
            funcao: "Doador de efeito aquático, efervescência ozônica e frescor marinho. É o ingrediente icônico responsável pela revolução dos perfumes marinhos e esportivos (como L'Eau d'Issey e Acqua di Giò). Serve para aerar, expandir e injetar um sopro de ar fresco e úmido em acordes cítricos, florais transparentes e Fougères modernos.",
            sinergias: "Excelente sinergia com o Dihidromercenol, Helional, Linalol, Notas Cítricas e florais limpos como o Hedione.",
            riscos: "O risco de superdosagem é severo. Se usado além do limite estético correto, torna o perfume extremamente sintético, enjoativo, com cheiro rústico de clara de ovo crua, melão passado ou água sanitária diluída."
        },
        seguranca: {
            alerta: "Molécula cristalina muito estável, resistente à oxidação de bancada e que não sofre descoloração rápida.",
            restricao: "Não possui restrições quantitativas proibitivas severas diretas impostas pela IFRA na Categoria 4. Controlado pelo bom senso estético devido ao seu impacto monumental.",
            solucao: "Formular mantendo a dosagem em níveis milimétricos (geralmente entre 0.05% a 1% da solução pura concentrada na fórmula) para garantir refinamento e frescor natural."
        }
    },
    {
        id: "cashmeran",
        nome: "CASHMERAN",
        subtitulo: "Molécula Isolada (Almíscar Policíclico Difusivo / Madeira de Caxemira)",
        nomeCientifico: "Dihydromyrcene derivative / Indenopyran (Nome químico: 1,2,3,5,6,7-Hexahydro-1,1,2,3,3-pentamethyl-4H-inden-4-one)",
        identificacao: {
            tipoMateriaPrima: "Sintética (Molécula icônica desenvolvida pela IFF, classificada entre as madeiras e os musks).",
            familiaOlfativa: "Amadeirada / Almiscarada / Especiada.",
            aparencia: "Sólido cristalino ou massa cerosa branca que liquefaz a cerca de 27°C (comumente mantido morno ou diluído em DPG na bancada)."
        },
        comportamento: {
            volatilidade: "Fundo / Meio (Nota de Base com extraordinário poder de difusão vertical, saltando até a saída).",
            tenacidade: "Alta. Permanece perceptível na fita olfativa por mais de 100 horas (cerca de 4 dias, dados TGSC). Deixa um acabamento aveludado linear.",
            intensidade: "Alto (Escala: 7.5/10). É extremamente radiante, texturizado e expansivo na fita.",
            diluicao: "Recomendado diluir a 10% em DPG para facilitar a pipetagem exata e evitar o congelamento constante da matéria-prima."
        },
        perfil: {
            descritores: "Madeira aveludada, Conforto tátil, Almíscar sensual, Especiado pino/conífera, Concreto molhado sutil.",
            nuances: "Ponte olfativa perfeita entre madeiras e almíscares. Exibe um caráter amadeirado macio, seco e rico que evoca a textura reconfortante e tátil da lã de caxemira (cashmere). Traz nuances especiadas picantes e resinosas que lembram pinho, facetas florais atalcadas e um intrigante fundo mineral cinzento que remete a concreto molhado pela chuva."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Explosão amadeirada radiante, difusiva, intensamente texturizada, seca e discretamente especiada-picante."
            },
            {
                tempo: "2 horas",
                descricao: "Instala-se como uma belíssima e sensual névoa almiscarada amadeirada, trazendo maciez, calor e um conforto tátil luxuoso a toda a fórmula."
            },
            {
                tempo: "48 horas+",
                descricao: "Fundo atalcado-amadeirado muito limpo, macio, aveludado e com excelente retenção na pele."
            }
        ],
        aplicacao: {
            funcao: "Doador de textura aveludada, agente de difusão e fixador de cauda. É amplamente utilizado na alta perfumaria comercial e de nicho para dar volume tridimensional e uma assinatura rica de 'madeiras nobres e limpas'. Funciona de forma espetacular para envelopar acordes florais pesados e para sofisticar bases amadeiradas e orientais.",
            sinergias: "Combinação master com o Iso E Super, Ambroxan, Hedione, Galaxolide e óleos de Patchouli e Vetiver.",
            riscos: "Se usado de forma desmedida, domina a fragrância com uma textura excessivamente áspera, seca, puramente química, ou deixa o perfume com cheiro linear que lembra fumaça industrial resinosa ou desinfetante de pinho de luxo."
        },
        seguranca: {
            alerta: "Sua propriedade física de solidificação em temperaturas abaixo de 27°C exige um leve aquecimento em banho-maria morno se o frasco cristalizar na bancada.",
            restricao: "Regulado e monitorado pelas diretrizes da IFRA (Categoria 4 - Perfumaria Fina). Possui limites máximos estabelecidos para o produto final de consumo seguro na pele.",
            solucao: "Dosar com precisão estética e regulatória (geralmente mantido entre 0.5% a 4% do composto concentrado total) para extrair seu máximo poder aveludado."
        }
    },
    {
        id: "cedramber",
        nome: "CEDRAMBER",
        subtitulo: "Molécula Isolada (Derivado de Cedro / Âmbar Amadeirado)",
        nomeCientifico: "Cedryl methyl ether (Cedramber desenvolvido pela IFF)",
        identificacao: {
            tipoMateriaPrima: "Sintética (Semi-sintético derivado do isolamento do cedrol presente no óleo essencial de Cedro).",
            familiaOlfativa: "Amadeirada / Âmbar Seco.",
            aparencia: "Líquido fluido, límpido e incolor a levemente amarelado pálido."
        },
        comportamento: {
            volatilidade: "Fundo (Nota de Base amadeirada de grande fixação e suporte estrutural).",
            tenacidade: "Altíssima. Permanece perceptível na fita olfativa por mais de 300 horas (dados TGSC). Atua estendendo notas amadeiradas na pele.",
            intensidade: "Médio-Alto (Escala: 6/10). Não é agressivo na saída, mas constrói uma exalação constante, seca e envelopante.",
            diluicao: "Pura (100%) para estruturação de blocos de fundo amadeirados ou a 10% para calibração de nuances secas."
        },
        perfil: {
            descritores: "Cedro seco puro, Lápis de madeira, Âmbar cinzento mineral, Urinoso sutil/animalico, Seco texturizado.",
            nuances: "Combina o caráter amadeirado clássico e limpo das raspas de madeira de cedro (cheiro de lápis apontado) com uma rica e proeminente faceta ambarada seca e mineral que remete ao âmbar cinzento. Exibe um fundo discretamente animalico/urinoso fino (característico de madeiras nobres e secas) que traz calor, profundidade e excelente fixação."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Abertura amadeirada sóbria, muito seca, limpa e texturizada que lembra madeira de cedro pura."
            },
            {
                tempo: "2 horas",
                descricao: "Ganha corpo revelando seu lado ambarado mineral, trazendo volume seco, calor discreto e uma rica sensação de fixação aveludada."
            },
            {
                tempo: "48 horas+",
                descricao: "Excelente substantividade na fita, restando uma base de madeira nobre polida, purificada, seca e mineral."
            }
        ],
        aplicacao: {
            funcao: "Fixador amadeirado, doador de secura e agente de união. É amplamente utilizado em perfumes masculinos, Fougères, Chypres e fragrâncias compartilhadas de nicho para secar e estruturar o fundo, quebrando o dulçor excessivo de notas baunilhadas ou florais frutadas pesadas.",
            sinergias: "Sinergia espetacular com o Iso E Super, Vertofix Coeur, Cedrol, Ambroxan, Patchouli e óleos cítricos.",
            riscos: "Em doses excessivas ou sem o devido contrapeso de notas cremosas ou macrocíclicas, deixa a fragrância excessivamente poeirenta, áspera, ríspida, com cheiro linear de serragem industrial velha ou urina desidratada rústica."
        },
        seguranca: {
            alerta: "Molécula quimicamente muito estável, com excelente resistência a luz, oxidação e descoloração em bases alcoólicas comuns.",
            restricao: "Não possui restrições proibitivas severas diretas impostas pela IFRA para a Categoria 4. Opera dentro dos limites padrão de segurança e boas práticas.",
            solucao: "Pode ser utilizado com excelente liberdade criativa (geralmente entre 1% a 5% da fórmula do concentrado) para conferir elegância, secura e fixação prolongada."
        }
    },
    {
        id: "ciclogalbanato",
        nome: "CICLOGALBANATO",
        subtitulo: "Molécula Isolada (Éster Alifático / Nota Verde de Alto Impacto)",
        nomeCientifico: "Cyclogalbanate (Nome comercial desenvolvido pela Symrise / Dragoco)",
        identificacao: {
            tipoMateriaPrima: "Sintética (Molécula projetada para capturar o lado verde e cortante da resina natural de Gálbano).",
            familiaOlfativa: "Verde / Frutada / Galbanada.",
            aparencia: "Líquido fluido, totalmente límpido e incolor."
        },
        comportamento: {
            volatilidade: "Topo / Meio (Nota de Saída de imensa potência, difusão e rastro verde inicial).",
            tenacidade: "Média. Permanece perceptível na fita olfativa por cerca de 24 a 48 horas (Dados TGSC). Mantém o frescor verde agudo por bastante tempo.",
            intensidade: "Extremo (Escala: 9/10). Possui uma força de impacto monumental, sendo puramente ríspido se cheirado puro.",
            diluicao: "Altamente recomendado o uso diluído a 10% ou 1% em DPG na bancada para permitir uma dosagem controlada e sofisticada."
        },
        perfil: {
            descritores: "Folha esmagada cortante, Verde gálbano rústico, Casca de maçã verde ácida, Ligeiramente Metálico, Ozônico.",
            nuances: "Captura o aspecto mais moderno, limpo e efervescente da nota verde. Mescla o impacto picante e ríspido de folhas e galhos verdes esmagados (típico do Gálbano) com uma belíssima e suculenta nuance frutada que remete a cascas de maçã verde ácida e abacaxi verde, assentando em um fundo ozônico e metálico ultra-limpo."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Explosão verde avassaladora, cortante, ríspida, nitidamente herbácea e com forte acidez frutada de maçã."
            },
            {
                tempo: "30 min",
                descricao: "A agressividade química inicial diminui, abrindo espaço para uma aura verde-folha arejada, fresca, cintilante e intensamente moderna."
            },
            {
                tempo: "12 horas",
                descricao: "Resta um eco verde residual muito limpo, transparente e purificado que levanta notas florais de coração."
            }
        ],
        aplicacao: {
            funcao: "Doador de brilho verde, efervescência herbácea e modernizador de topo. É essencial para injetar um caráter de folhas naturais frescas e natureza viva em perfumes florais brancos (como Jacinto e Lírio-do-vale), além de trazer contraste ácido e frescor moderno a colônias cítricas e Fougères.",
            sinergias: "Excelente com o Triplal, Stemone, Linalol, Acetato de Linalila, Hedione e notas de Maçã Verde.",
            riscos: "Se usado de maneira descuidada ou em frações ligeiramente elevadas, destrói as nuances macias da fórmula, deixando o perfume extremamente ríspido, químico, com cheiro de mato amargo macerado ou produtos funcionais de limpeza pesada."
        },
        seguranca: {
            alerta: "Mais estável quimicamente e menos sujeito à descoloração rápida do que o gálbano natural ou o alisal, facilitando a manipulação fina.",
            restricao: "Não apresenta restrições proibitivas severas diretas e rígidas pela IFRA na Categoria 4, atuando de acordo com as boas práticas e limites normais de segurança cosmética.",
            solucao: "Trabalhar em microdosagens ou traços controlados (geralmente de 0.05% a 0.5% do composto concentrado puro) para garantir sofisticação, brilho e equilíbrio estético."
        }
    },
    {
        id: "cis_3_hexenol",
        nome: "CIS 3 HEXENOL",
        subtitulo: "Molécula Isolada (Álcool Alifático Linear / Álcool da Grama)",
        nomeCientifico: "cis-3-Hexen-1-ol (Nome comercial: Galbano Alcohol / Grama Alcohol)",
        identificacao: {
            tipoMateriaPrima: "Sintética ou Natural (Constituinte natural crucial responsável pelo cheiro de grama cortada de quase todas as plantas verdes).",
            familiaOlfativa: "Verde / Herbácea Natural.",
            aparencia: "Líquido móvel, ultra-fluido, totalmente límpido e incolor."
        },
        comportamento: {
            volatilidade: "Topo (Nota de Saída / Cabeça ultra-volátil de impacto imediato).",
            tenacidade: "Muito Baixa. Permanece na fita olfativa por apenas 1 a 2 horas (dados TGSC). Desaparece rapidamente deixando o topo aberto.",
            intensidade: "Extremo (Escala: 9.5/10). Força de impacto monumental, puramente sufocante e lacrimejante se cheirado puro.",
            diluicao: "Obrigatório o manuseio laboratorial em diluição a 10% ou preferencialmente a 1% em DPG para permitir avaliações equilibradas."
        },
        perfil: {
            descritores: "Grama cortada pura, Folha verde úmida, Casca de melão verde, Suco de vegetais, Agudo natural.",
            nuances: "É o realismo absoluto da natureza viva. Captura perfeitamente o aroma exato de um gramado que acaba de ser cortado ou de folhas verdes esmagadas cobertas de orvalho. Exibe um perfil agudo, penetrante, vegetal e refrescante que carrega nuances discretas de casca de melão verde e polpa de pepino fresco."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Impacto verde avassalador, cortante, úmido e vegetal de grama fresca macerada pura."
            },
            {
                tempo: "15 min",
                descricao: "O caráter ríspido químico assenta, revelando a mais pura e refrescante sensação de natureza viva e orvalho matinal."
            },
            {
                tempo: "1 hora",
                descricao: "Evapora quase por completo da fita olfativa, deixando o caminho totalmente livre e arejado para as notas de coração."
            }
        ],
        aplicacao: {
            funcao: "Doador de realismo botânico, frescor verde natural e efervescência de topo. É utilizado em quase todas as criações da perfumaria fina para quebrar o aspecto 'químico' de saídas sintéticas e injetar uma lufada de ar natural e naturalidade viva em colônias cítricas, acordes florais transparentes e florais brancos.",
            sinergias: "Sinergia perfeita com o Acetato de Cis-3-Hexenila, Triplal, Linalol, Notas Cítricas e óleos de Lavanda.",
            riscos: "O excesso arruína o perfume instantaneamente, trazendo uma nota ríspida, amarga, química e desequilibrada que remete a suco de couve puro, folhas podres ou mato esmagado sufocante."
        },
        seguranca: {
            alerta: "Molécula altamente volátil; os frascos de trabalho devem ser mantidos hermeticamente fechados e em refrigeração para evitar perdas por evaporação crônica.",
            restricao: "Não apresenta restrições severas ou tetos proibitivos rígidos pela IFRA na Categoria 4, operando de acordo com as boas práticas laboratoriais.",
            solucao: "Empregar em dosagens muito controladas e traços milimétricos (comumente de 0.05% a 0.5% da fórmula final do concentrado) para capturar puramente seu frescor botânico espetacular."
        }
    },
    {
        id: "citronelol",
        nome: "CITRONELOL",
        subtitulo: "Molécula Isolada (Álcool Monoterpênico / Pilar da Rosa)",
        nomeCientifico: "Citronellol",
        identificacao: {
            tipoMateriaPrima: "Sintética ou Natural (Constituinte maior e indispensável encontrado abundantemente nos óleos de Rosa, Gerânio e Citronela).",
            familiaOlfativa: "Floral Rosa / Cítrica / Verde.",
            aparencia: "Líquido fluido, totalmente límpido e incolor."
        },
        comportamento: {
            volatilidade: "Meio (Nota de Corpo / Coração Floral de excelente difusão média).",
            tenacidade: "Média. Permanece perceptível na fita olfativa por cerca de 24 a 48 horas (dados TGSC). Constrói o corpo da fragrância.",
            intensidade: "Médio-Alto (Escala: 5.5/10). Possui exalação floral macia, limpa e contínua.",
            diluicao: "Pura (100%) para estruturação de grandes blocos florais ou a 10% para testes finos e calibração."
        },
        perfil: {
            descritores: "Rosa fresca, Gerânio ceroso, Cítrico capim, Verde limpo, Ligeiramente Ceroso.",
            nuances: "É um dos pilares fundamentais para a construção de qualquer acorde de Rosa na perfumaria. Combina um aroma floral-rosado clássico, limpo e arejado com uma marcada nuance cítrica que remete a capim-limão e casca de limão, evoluindo para facetas cerosas e verdes que lembram folhas de gerânio e pétalas úmidas."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Abertura floral rosada nítida acompanhada de um sopro cítrico-verde fresco e ligeiramente rústico."
            },
            {
                tempo: "1 hora",
                descricao: "Instala-se como um coração floral limpo, macio, sumamente elegante, emulando com perfeição as pétalas centrais de uma rosa madura."
            },
            {
                tempo: "12 horas",
                descricao: "Resta um resíduo floral-ceroso muito suave, purificado e confortável na fita."
            }
        ],
        aplicacao: {
            funcao: "Pilar estrutural de florais, doador de frescor rosado e modificador. É indispensável para formular acordes de Rosa, Gerânio, Peônia e Lírio-do-vale. Serve também para arredondar saídas cítricas e dar um volume floral limpo, comercial e unificado a perfumes masculinos e femininos.",
            sinergias: "Sinergia absoluta com o Geraniol, Álcool Feniletílico, Iononas, Linalol e óleos de Bergamota.",
            riscos: "Se usado sem o devido envelopamento ou em proporções erradas, deixa a fragrância com um aspecto excessivamente rústico, estridente ou com cheiro linear de desinfetante barato de citronela ou repelente de insetos caseiro."
        },
        seguranca: {
            alerta: "Molécula bastante estável quimicamente em meio alcoólico, resistente à descoloração comum.",
            restricao: "Regulado pela IFRA (Categoria 4) e listado como um dos alérgenos oficiais da perfumaria. Sua concentração final no produto deve respeitar os tetos e ser declarada na rotulagem.",
            solucao: "Utilizar com ampla liberdade criativa respeitando as diretrizes de segurança (geralmente entre 1% a 10% da fórmula do concentrado) para construir florais ricos e harmoniosos."
        }
    },
    {
        id: "civet",
        nome: "CIVET",
        subtitulo: "Matéria-Prima Natural ou Reconstituída (Nota Animalica de Luxo)",
        nomeCientifico: "Civet Absolute / Civet Synthetic (Nota de Algália)",
        identificacao: {
            tipoMateriaPrima: "Sintética / Reconstituída (Historicamente natural, extraído de glândulas do gato-de-algália; hoje substituído por bases sintéticas idênticas de alta perfumaria por razões éticas).",
            familiaOlfativa: "Animalica / Fecal / Almiscarada.",
            aparencia: "Líquido viscoso a massa pastosa de coloração amarelo-escura a castanho-âmbar."
        },
        comportamento: {
            volatilidade: "Fundo (Nota de Base/Fixador de extrema substantividade e profundidade).",
            tenacidade: "Altíssima. Permanece perceptível na fita olfativa por mais de 400 horas (várias semanas, dados TGSC). Irradia fixação na pele.",
            intensidade: "Extremo (Escala: 10/10). Puro possui um odor fecal e repulsivo avassalador.",
            diluicao: "Obrigatório o uso altamente diluído a 1% ou 0.1% em DPG na bancada de criação para poder ser apreciado de forma artística."
        },
        perfil: {
            descritores: "Fecal pungente, Almíscar quente, Urinoso meloso, Couro sujo, Aveludado erótico.",
            nuances: "O grande paradoxo da perfumaria. Puro ou concentrado é intensamente repulsivo, amoniacal e fecal. No entanto, quando diluído a traços milimétricos, transforma-se milagrosamente: exibe um aroma almiscarado ultra-aquecido, aveludado, carnal e discretamente meloso que remete à pele nua e ao calor erótico, conferindo uma sofisticação indescritível."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Impacto inicial chocante, áspero, agudamente urinoso, amoniacal e fecal sufocante."
            },
            {
                tempo: "4 horas",
                descricao: "O aspecto fecal desaparece por completo; desabrocha um calor almiscarado aveludado espetacular que funde todas as notas florais em uma aura de luxo sensual."
            },
            {
                tempo: "72 horas+",
                descricao: "Fixação eterna na fita, restando uma base almiscarada carnal profunda, quente, limpa e magnética."
            }
        ],
        aplicacao: {
            funcao: "Exaltador floral, doador de calor carnal e fixador de cauda de extremo luxo. É crucial para criar perfumes Chypres clássicos, Orientais opulentos e florais narcóticos (estilo Chanel Nº 5 ou Joy). Serve como um 'catalisador' que arredonda arestas químicas e faz os florais (como jasmim e rosa) parecerem vivos e tridimensionais.",
            sinergias: "Casamento master com o Absoluto de Jasmim, Óleo de Rosa, Ylang-Ylang, Cumarina, Nitromusks e Notas Aldeídicas.",
            riscos: "O erro de dosagem é fatal. Se usado além de traços milimétricos, arruína o perfume instantaneamente, deixando a composição com cheiro literal de banheiro sujo, urina de animal ou falta de higiene corporal."
        },
        seguranca: {
            alerta: "As bases sintéticas modernas possuem excelente estabilidade química e não sofrem oxidação rápida como o material bruto natural antigo.",
            restricao: "Regulado pelas normas da IFRA (Categoria 4) para garantir que os componentes químicos das bases de reconstituição operem sob limites seguros de sensibilização cutânea.",
            solucao: "Trabalhar exclusivamente com a solução diluída a 1% ou 0.1% na bancada, adicionando frações mínimas (geralmente de 0.01% a 0.5% da solução na fórmula do concentrado) para obter o efeito aveludado sem o risco fecal."
        }
    },
    {
        id: "cumarina",
        nome: "CUMARINA",
        subtitulo: "Molécula Isolada (Lactona Aromática / Pilar do Fougère)",
        nomeCientifico: "Coumarin",
        identificacao: {
            tipoMateriaPrima: "Sintética ou Natural (Primeira molécula sintética usada na história da perfumaria em 1882; constituinte maior e isolado natural da Fava Tonka).",
            familiaOlfativa: "Balsâmica / Amendoada / Atalcada.",
            aparencia: "Cristais prismáticos brancos brilhantes em estado puro (geralmente dissolvido a 10% em DPG ou álcool para manipulação fluida)."
        },
        comportamento: {
            volatilidade: "Fundo (Nota de Base/Ancorador de altíssima fixação e substantividade).",
            tenacidade: "Altíssima. Permanece perceptível na fita olfativa por mais de 400 horas (mais de 16 dias, dados TGSC). Deixa um fundo doce linear.",
            intensidade: "Médio-Alto (Escala: 6/10). Não possui impacto cortante, mas preenche o fundo de forma densa, opaca e aveludada.",
            diluicao: "Recomendado diluir os cristais a 10% em DPG para facilitar a medição líquida exata nas fórmulas de bancada."
        },
        perfil: {
            descritores: "Feno cortado seco, Fava tonka doce, Amêndoa/Marzipã, Tabaco aromático, Atalcado denso.",
            nuances: "É a espinha dorsal da perfumaria clássica masculina. Une o aroma característico e rústico de feno seco aquecido pelo sol com uma rica faceta amendoada e açucarada que remete a marzipã, baunilha e folhas de tabaco aromático, assentando em uma textura densamente atalcada, quente e balsâmica."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Abertura atalcada discreta, discretamente amendoada e seca, que cresce à medida que o solvente evapora."
            },
            {
                tempo: "2 horas",
                descricao: "Instala-se como um fundo balsâmico rico, doce, robusto e cremoso, trazendo um volume amendoado sofisticado e reconfortante."
            },
            {
                tempo: "48 horas+",
                descricao: "Fixação indestrutível na fita, restando um eco doce, atalcado e limpo que lembra Fava Tonka pura."
            }
        ],
        aplicacao: {
            funcao: "Pilar estrutural da família Fougère, fixador e doador de textura atalcada. É indispensável para construir a estrutura Fougère clássica (Lavanda-Carvalho-Cumarina). Serve para dar peso, robustez masculina e doçura balsâmica a perfumes orientais, Chypres, acordes de tabaco e criações gourmands de luxo.",
            sinergias: "Sinergia absoluta com o Óleo de Lavanda, Musgo de Carvalho, Vanilina, Salicilato de Amila, Patchouli e Gerânio.",
            riscos: "Se superdosado sem o devido balanço de madeiras secas ou cítricos ríspidos, torna o perfume extremamente meloso, abafado, enjoativo ou com cheiro linear de xarope infantil ou confeitaria barata."
        },
        seguranca: {
            alerta: "Os cristais puros devem ser totalmente dissolvidos no solvente antes da incorporação para evitar a recristalização do perfume no frasco.",
            restricao: "⚠️ REGULADO PELA IFRA: Possui limites quantitativos máximos restritos estabelecidos pela IFRA para uso na Categoria 4 (Perfumaria Fina) devido ao seu potencial de sensibilização na pele.",
            solucao: "Calcular com rigor a dosagem final (geralmente empregado entre 1% a 6% do concentrado puro) para garantir total conformidade regulatória e refinamento estético."
        }
    },
    {
        id: "damascone_alfa",
        nome: "DAMASCONE ALFA",
        subtitulo: "Molécula Isolada (Rosa Cetona de Alto Impacto)",
        nomeCientifico: "alpha-Damascone",
        identificacao: {
            tipoMateriaPrima: "Sintética (Família das cetonas da rosa, estruturalmente relacionada às iononas, de altíssimo valor estético).",
            familiaOlfativa: "Frutada / Floral Rosa / Verde.",
            aparencia: "Líquido fluido, límpido e incolor a levemente amarelado pálido."
        },
        comportamento: {
            volatilidade: "Meio / Topo (Nota de Corpo Floral-Frutada dotada de imensa difusão e rastro vertical).",
            tenacidade: "Alta. Permanece perceptível na fita olfativa por cerca de 72 a 96 horas (3 a 4 dias, dados TGSC). Irradia com grande vivacidade.",
            intensidade: "Extremo (Escala: 9/10). Possui força de impacto monumental; puramente sufocante se avaliado puro.",
            diluicao: "Obrigatório o manuseio laboratorial em diluição a 10% ou 1% em DPG para evitar fadiga olfativa instantânea."
        },
        perfil: {
            descritores: "Maçã verde ácida, Geleia de frutas, Rosa frutada, Licoroso/Vinho, Verde herbáceo.",
            nuances: "Uma das moléculas mais belas e complexas da perfumaria. Combina um impacto inicial intensamente frutado que remete a casca de maçã verde e suco de uva com um corpo floral rico e aveludado de rosas maduras. Carrega nuances licorosas de vinho frutado e uma sutil faceta verde e herbácea que traz frescor extraordinário."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Explosão frutada penetrante, ácida, licorosa, lembrando geleia de maçã e uvas com forte pungência floral."
            },
            {
                tempo: "1 hora",
                descricao: "Desabrocha um coração floral frutado magnífico, injetando um volume tridimensional suculento e um brilho luxuoso incomparável em toda a fórmula."
            },
            {
                tempo: "24 horas+",
                descricao: "Resta uma fixação frutada-rosada muito macia, limpa, aveludada e sofisticada na fita."
            }
        ],
        aplicacao: {
            funcao: "Doador de radiância frutada, complexidade de rosa e modificador de alta performance. É amplamente utilizado na perfumaria fina para inflar florais transparentes, conferir realismo frutado a acordes de rosa e peônia, e dar uma assinatura rica, moderna e sumamente comercial a fragrâncias femininas de prestígio.",
            sinergias: "Sinergia espetacular com o Álcool Feniletílico, Citronelol, Hedione, Iononas, Salicilatos e Notas Cítricas.",
            riscos: "O excesso é perigoso: domina completamente a evolução do perfume, deixando a composição extremamente enjoativa, sintética, com cheiro de xarope de frutas artificiais ou doces industriais pesados."
        },
        seguranca: {
            alerta: "Molécula sensível à luz direta contínua; deve ser armazenada em frascos âmbar bem vedados e protegidos do calor de bancada.",
            restricao: "⚠️ RESTRIÇÃO IFRA SEVERA: Devido ao seu alto potencial de sensibilização cutânea, possui tetos quantitativos estritos e rigorosos ditados pela IFRA para a Categoria 4. Sua dosagem deve ser calculada minuciosamente.",
            solucao: "Trabalhar em microdosagens ou traços milimétricos (geralmente entre 0.05% a 0.5% do composto concentrado puro) para garantir total segurança e refinamento estético."
        }
    },
    {
        id: "damascone_beta",
        nome: "DAMASCONE BETA",
        subtitulo: "Molécula Isolada (Rosa Cetona de Alto Impacto / Frutas Escuras)",
        nomeCientifico: "beta-Damascone",
        identificacao: {
            tipoMateriaPrima: "Sintética (Isômero estrutural do Damascone Alfa, crucial na reconstituição de florais escuros e realistas).",
            familiaOlfativa: "Frutada / Tabaco / Floral Rosa.",
            aparencia: "Líquido fluido, totalmente límpido e incolor a levemente amarelado."
        },
        comportamento: {
            volatilidade: "Meio / Topo (Nota de Corpo/Coração de imensa difusão, irradiação e rastro vertical).",
            tenacidade: "Alta. Permanece na fita olfativa por cerca de 72 horas (dados TGSC). Atua injetando volume desde a saída.",
            intensidade: "Extremo (Escala: 9/10). Impacto inicial avassalador, puramente sufocante se cheirado concentrado.",
            diluicao: "Obrigatório o uso diluído a 10% ou 1% em DPG na bancada de trabalho para permitir uma dosagem minimamente controlada."
        },
        perfil: {
            descritores: "Frutas vermelhas escuras, Licor de ameixa, Geleia de framboesa, Folha de tabaco, Rosa opulenta.",
            nuances: "Ligeiramente mais escura, densa e menos verde que o isômero Alfa. Captura o aroma rico de frutas vermelhas e escuras em calda, remetendo a geleia de framboesa, ameixas secas e licor de cassis. Traz uma proeminente e sofisticada nuance de folhas de tabaco aromático e um corpo de rosa opulenta e aveludada."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Explosão licorosa densa, intensamente doce-frutada de ameixas e framboesas com caráter químico pungente."
            },
            {
                tempo: "1 hora",
                descricao: "A agressividade assenta, revelando um coração frutado-licoroso espetacular, aveludado e quente, que confere um volume tridimensional riquíssimo à fórmula."
            },
            {
                tempo: "24 horas",
                descricao: "Fundo macio de fixação tenaz, com um aroma atalcado fino de frutas escuras e tabaco elegante."
            }
        ],
        aplicacao: {
            funcao: "Modificador frutado de luxo, doador de radiância e complexidade oriental. É a molécula chave para criar o famoso efeito de 'rosas escuras e sangrentas' ou florais opulentos de mistério. É amplamente utilizada para estruturar acordes de tabaco fino, dar suculência a bases gourmands e conferir rastro sofisticado a fragrâncias Chypres modernas.",
            sinergias: "Combinação espetacular com o Óleo de Patchouli, Vanilina, Iso E Super, Geraniol, Iononas e bases Oud.",
            riscos: "Se dosado de maneira descuidada ou em frações ligeiramente elevadas, destrói totalmente as nuances naturais da fórmula, deixando o perfume intragável, com cheiro de xarope de tosse artificial ou doces melosos saturados.",
            descoloracao: "⚠️ NOTA: Pode sofrer leve alteração de cor (amarelamento) ao longo do tempo se exposto à luz intensa, sem alterar o odor."
        },
        seguranca: {
            alerta: "Molécula sujeita a oxidação lenta se exposta continuamente ao oxigênio da bancada em frascos mal fechados.",
            restricao: "⚠️ RESTRIÇÃO IFRA SEVERA: Altamente monitorado e limitado pelas diretrizes da IFRA para uso na Categoria 4 devido ao seu potencial de sensibilização cutânea. Exige cálculo rigoroso do percentual final na pele.",
            solucao: "Utilizar na bancada em traços estritos (geralmente entre 0.02% a 0.3% do concentrado total da fragrância) para atingir alta conformidade regulatória e sofisticação artística."
        }
    },
    {
        id: "dihidromercenol",
        nome: "DIHIDROMERCENOL",
        subtitulo: "Molécula Isolada (Álcool Terpênico Alifático / Sopro Cítrico Metálico)",
        nomeCientifico: "Dihidromyrcenol",
        identificacao: {
            tipoMateriaPrima: "Sintética (A molécula mais revolucionária e copiada da perfumaria masculina moderna a partir do final dos anos 80).",
            familiaOlfativa: "Cítrica / Verde / Lavanda Metálica.",
            aparencia: "Líquido móvel, ultra-fluido, totalmente límpido e incolor."
        },
        comportamento: {
            volatilidade: "Topo (Nota de Saída / Cabeça dotada de imenso poder de difusão e projeção inicial).",
            tenacidade: "Baixa-Média. Permanece perceptível na fita por cerca de 8 a 16 horas (dados TGSC). Atua como um motor de explosão inicial.",
            intensidade: "Alto-Extremo (Escala: 8.5/10). Possui força de impacto monumental, sendo puramente elétrico e ríspido se cheirado puro.",
            diluicao: "Pura (100%) para a construção em massa de estruturas masculinas ou a 10% para calibração fina de topos unissex."
        },
        perfil: {
            descritores: "Lima/Limão elétrico, Lavanda metálica, Sabão de lavanderia, Ozônico ultra-limpo, Efervescente.",
            nuances: "É o epítome do frescor industrial e da limpeza asséptica masculina. Combina uma abertura cítrica hiper-vibrante de lima amarga e bergamota sintética com um caráter herbáceo-limpo que remete a folhas de lavanda esmagadas, evoluindo para nuances ozônicas e metálicas brilhantes que lembram ferro quente e sabão de luxo."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Explosão cítrica cortante, ultra-limpa, elétrica, ríspida e intensamente ensaboada-metálica."
            },
            {
                tempo: "30 min",
                descricao: "O caráter agressivo químico se transforma em uma aura arejada, refrescante, sumamente esportiva e limpa de lavanda futurista."
            },
            {
                tempo: "4 horas",
                descricao: "Evapora gradualmente da fita, deixando um rastro de lavanderia limpa perfeitamente integrado às notas de coração."
            }
        ],
        aplicacao: {
            funcao: "Doador de explosão cítrica, efervescência de topo e sensação de limpeza indestrutível. É o ingrediente pilar responsável pelo sucesso de clássicos revolucionários como Cool Water e Drakkar Noir. Serve para inflar, aerar e dar projeção massiva a perfumes masculinos esportivos, Fougères modernos e fragrâncias funcionais.",
            sinergias: "Casamento absoluto com o Linalol, Acetato de Linalila, Ambroxan, Calone, Allyl Amyl Glycolate e óleos cítricos.",
            riscos: "Se dosado de maneira descuidada ou em frações excessivas sem o envelopamento de madeiras nobres, reduz o perfume a um aroma vulgar, puramente químico, que lembra diretamente desinfetante automotivo forte ou sabão em pó industrial rústico."
        },
        seguranca: {
            alerta: "Molécula quimicamente hiper-estável. Altamente resistente a oxidações, luz e variações severas de pH, sobrevivendo intacta em sabões e xampus.",
            restricao: "Não apresenta restrições quantitativas proibitivas ou limites severos impostos pela IFRA na Categoria 4. Considerada extremamente segura de manusear.",
            solucao: "Pode ser empregado com excelente liberdade criativa, variando de 2% a 10% para efeitos refrescantes padrão, ou até 20% ou mais do concentrado puro para a criação de Fougères metálicos de altíssima performance."
        }
    },
    {
        id: "etil_maltol",
        nome: "ETIL MALTOL",
        subtitulo: "Molécula Isolada (Pilar Gourmand / Cetona Cíclica)",
        nomeCientifico: "Ethyl maltol (Nome comercial comum: Veltol Plus)",
        identificacao: {
            tipoMateriaPrima: "Sintética (Aromaquímico ultra-potente e pilar absoluto da perfumaria adocicada moderna).",
            familiaOlfativa: "Gourmand / Doce / Açucarada.",
            aparencia: "Pó cristalino branco de alta pureza (geralmente mantido diluído em DPG na bancada)."
        },
        comportamento: {
            volatilidade: "Fundo (Nota de Base de altíssima fixação e expansão vertical).",
            tenacidade: "Altíssima. Permanece na fita olfativa por mais de 400 horas (dados TGSC). Possui uma substantividade e retenção térmica espetaculares.",
            intensidade: "Extremo (Escala: 10/10). Odor adocicado avassalador que satura o laboratório se manipulado incorretamente.",
            diluicao: "Obrigatório o manuseio laboratorial em diluição a 10% ou preferencialmente a 1% em DPG para evitar a perda de controle estético."
        },
        perfil: {
            descritores: "Açúcar queimado, Algodão doce, Geleia de morango quente, Caramelo frutado, Maltado tostado.",
            nuances: "É o cheiro definitivo de parques de diversão e confeitarias de luxo. Entrega uma nota densa de açúcar refinado derretido e algodão doce, combinada com facetas frutadas ricas que emulam geleia de morango cozida, evoluindo para nuances tostadas e maltadas de caramelo quente que conferem conforto e vício olfativo imediato."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Explosão adocicada penetrante, cortante e hiper-açucarada com forte aspecto de algodão doce sintético."
            },
            {
                tempo: "2 horas",
                descricao: "A fragrância assenta em um caramelo aveludado e maltado rico, que infla o corpo do perfume com um volume reconfortante e extremamente comercial."
            },
            {
                tempo: "48 horas+",
                descricao: "Resta uma fixação doce linear, purificada e indestrutível de açúcar queimado com excelente rastro na pele."
            }
        ],
        aplicacao: {
            funcao: "Doador de efeito gourmand, agente de volume adocicado e modificador de alta performance. É o ingrediente icônico responsável por inaugurar e consolidar a era dos perfumes adocicados (como Angel e Angel Muse). Serve para aquecer composições masculinas e femininas, arredondar florais opulentos e conferir um acabamento sedutor a bases de patchouli e musks.",
            sinergias: "Sinergia espetacular com a Vanilina, Coumarina, Maltol, Hedione, Iso E Super e óleos de Patchouli.",
            riscos: "O uso descuidado ou excessivo soterra completamente o frescor de topo e as nuances florais delicadas, deixando o perfume infantilizado, extremamente meloso, enjoativo, com cheiro linear de calda de pudim queimada ou pirulito barato."
        },
        seguranca: {
            alerta: "Os cristais puros exigem dissolução completa em solventes adequados antes da incorporação na fórmula final para evitar recristalização no frasco.",
            restricao: "Não possui restrições proibitivas severas de limite máximo pela IFRA na Categoria 4, sendo controlado estritamente pelo bom senso estético do perfumista.",
            solucao: "Utilizar com máxima cautela matemática (geralmente entre 0.05% a 1% da solução pura concentrada na fórmula) para garantir uma doçura fina, moderna e sofisticada."
        }
    },
    {
        id: "eugenol",
        nome: "EUGENOL",
        subtitulo: "Molécula Isolada (Fenol Aromático / Essência de Cravo)",
        nomeCientifico: "Eugenol",
        identificacao: {
            tipoMateriaPrima: "Sintética ou Natural (Constituinte maior e indispensável isolado do Óleo Essencial de Cravo-da-Índia, presente também na canela e manjericão).",
            familiaOlfativa: "Especiada / Quente / Fenólica.",
            aparencia: "Líquido fluido, transparente a amarelo-claro (tende a escurecer se exposto ao ar e à luz)."
        },
        comportamento: {
            volatilidade: "Meio / Fundo (Nota de Corpo Especiada de excelente difusão e peso estrutural).",
            tenacidade: "Alta. Permanece perceptível na fita olfativa por mais de 200 horas (dados TGSC). Garante corpo e fixação prolongada.",
            intensidade: "Alto (Escala: 8/10). Odor agudamente picante, medicinal e penetrante.",
            diluicao: "Pura (100%) para grandes blocos de acordes orientais ou a 10% para calibração fina e teste de nuances."
        },
        perfil: {
            descritores: "Cravo-da-índia puro, Picante quente, Fenólico medicinal, Madeira defumada sutil, Especiado doce.",
            nuances: "É o aroma definitivo do cravo e das especiarias quentes de culinária. Exibe uma saída agudamente picante, vigorosa e pungente com uma marcada faceta medicinal/dentária, que rapidamente evolui para um coração amadeirado seco, aquecido, balsâmico e exótico, carregando nuances sutis que remetem ao fumo de tabaco e ao calor de panificação."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Abertura intensamente picante, cortante, áspera e nitidamente medicinal que preenche o nariz."
            },
            {
                tempo: "1 hora",
                descricao: "O aspecto medicinal suaviza; abre-se um coração exótico, sumamente aquecido, rico e balsâmico de cravo e madeiras orientais."
            },
            {
                tempo: "24 horas+",
                descricao: "Fundo residual seco, amadeirado-especiado muito elegante, limpo e com excelente substantividade."
            }
        ],
        aplicacao: {
            funcao: "Espinha dorsal de acordes de Cravo e Cravo-da-Índia, modificador e doador de calor exótico. É amplamente utilizado na perfumaria clássica e oriental (como Opium e Youth-Dew) para estruturar blocos especiados ricos, aquecer florais narcóticos (especialmente o Jasmim e a Rosa) e trazer contraste picante a Fougères masculinos e Chypres.",
            sinergias: "Sinergia absoluta com o Isoeugenol, Salicilato de Benzila, Álcool Feniletílico, Vanilina e óleo de Canela.",
            riscos: "Se superdosado, soterra o frescor da fragrância com uma faceta excessivamente medicinal e agressiva, deixando o perfume com cheiro linear de consultório odontológico antigo, pomada anestésica ou tempero de cozinha desequilibrado."
        },
        seguranca: {
            alerta: "⚠️ SENSÍVEL À OXIDAÇÃO: Tende a sofrer descoloração marcante (amarelamento ou escurecimento para castanho) ao longo do tempo se exposto à luz e ao oxigênio de bancada.",
            restricao: "⚠️ RESTRIÇÃO IFRA MANDATÓRIA: Devido ao seu potencial demonstrado de sensibilização cutânea, possui limites quantitativos máximos estritos e rigorosos pela IFRA para uso na Categoria 4. Exige cálculo preciso.",
            solucao: "Formular com total rigor normativo (geralmente mantido entre 0.2% a 2% da fórmula do concentrado), contrapesando com antioxidantes para mitigar o escurecimento do líquido do perfume final."
        }
    },
    {
        id: "floraozone",
        nome: "FLORAOZONE",
        subtitulo: "Molécula Isolada (Aldeído Cíclico / Ozônico Floral)",
        nomeCientifico: "Florozone / Floralozone (Nome químico: 3-(4-Ethylphenyl)-2,2-dimethylpropanal)",
        identificacao: {
            tipoMateriaPrima: "Sintética (Desenvolvida pela IFF, é uma das moléculas mais eficazes para fundir frescor aquático com o corpo floral).",
            familiaOlfativa: "Ozônica / Marinha / Floral Transparente.",
            aparencia: "Líquido fluido, totalmente límpido e incolor."
        },
        comportamento: {
            volatilidade: "Topo / Meio (Nota de Saída e Corpo de altíssimo poder de difusão e expansão vertical).",
            tenacidade: "Média-Alta. Permanece perceptível na fita por cerca de 48 a 72 horas (dados TGSC). Mantém o frescor úmido por toda a evolução inicial.",
            intensidade: "Alto (Escala: 7.5/10). Muito radiante e penetrante, cortando misturas pesadas com facilidade.",
            diluicao: "Recomendado diluir a 10% em DPG na bancada para permitir uma dosagem harmoniosa e evitar dominação excessiva."
        },
        perfil: {
            descritores: "Ar da montanha, Brisa marinha úmida, Pétalas de lírio transparentes, Melão verde aquoso, Limpo aldeídico.",
            nuances: "Combina o frescor elétrico e arejado do ozônio purificado (ar puro de montanha ou cheiro antes da chuva) com uma belíssima nuance floral transparente que remete a pétalas úmidas de lírio-do-vale e ciclame. Exibe um fundo sutilmente frutado que lembra casca de melão verde e um aspecto aldeídico limpo de lavanderia moderna."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Explosão arejada ultra-fresca, aquosa, picante-ozônica e nitidamente floral-transparente."
            },
            {
                tempo: "1 hora",
                descricao: "Instala-se como uma belíssima lufada de vento úmido sobre pétalas florais, conferindo uma expansão tridimensional e leveza extraordinárias à fórmula."
            },
            {
                tempo: "12 horas",
                descricao: "Resta uma assinatura limpa, aquática, purificada e linear de grande substantividade."
            }
        ],
        aplicacao: {
            funcao: "Doador de efervescência ozônica, agente de transparência floral e modernizador de topo. É essencial para aerar, expandir e injetar um sopro de ar fresco e úmido em acordes cítricos, florais brancos pesados e Fougères esportivos. Ajuda a 'levantar' notas florais de coração e a mascarar o aspecto abafado de bases densas amadeiradas.",
            sinergias: "Sinergia espetacular com o Hedione, Linalol, Calone, Helional, Dihidromercenol e notas cítricas.",
            riscos: "Se usado de maneira desmedida, deixa a fragrância com um aspecto extremamente sintético, ríspido, com cheiro linear que lembra produto de passar roupa químico, desinfetante funcional marinho ou clara de ovo crua."
        },
        seguranca: {
            alerta: "Molécula cristalina estável na bancada de trabalho, demonstrando excelente resistência contra descoloração rápida.",
            restricao: "Não possui restrições proibitivas severas diretas de teto pela IFRA na Categoria 4, operando dentro dos limites normais de segurança.",
            solucao: "Dosar com precisão estética (geralmente entre 0.1% a 2% da fórmula final do concentrado puro) para garantir sofisticação, brilho e equilíbrio natural."
        }
    },
    {
        id: "florol",
        nome: "FLOROL",
        subtitulo: "Molécula Isolada (Éter Piraínico / Pilar do Lírio-do-Vale)",
        nomeCientifico: "Florosa / Florol / Pyranol (Nome químico: Tetrahydro-4-methyl-2-(2-methylpropyl)-2H-pyran-4-ol)",
        identificacao: {
            tipoMateriaPrima: "Sintética (Molécula icônica desenvolvida pela Firmenich, pilar indispensável da perfumaria floral limpa moderna).",
            familiaOlfativa: "Floral Branca / Muguet (Lírio-do-Vale).",
            aparencia: "Líquido viscoso, límpido e totalmente incolor."
        },
        comportamento: {
            volatilidade: "Meio (Nota de Corpo / Coração Floral de excelente difusão contínua).",
            tenacidade: "Alta. Permanece perceptível na fita olfativa por mais de 100 horas (dados TGSC). Excelente substantividade e linearidade na pele.",
            intensidade: "Média (Escala: 5/10). Não possui impacto cortante, mas constrói um corpo floral incrivelmente sólido, opaco e macio.",
            diluicao: "Pura (100%) para dar corpo à estrutura floral da fórmula ou a 10% para calibração e testes de bancada."
        },
        perfil: {
            descritores: "Lírio-do-vale (Muguet), Pétalas de rosa branca, Verde suave limpo, Ceroso fino, Conforto cremoso.",
            nuances: "É a personificação da pureza floral e da sensação de limpeza de luxo. Entrega um aroma floral refinado, delicado e macio que emula perfeitamente o Lírio-do-Vale (Muguet) fresco e pétalas de rosas brancas colhidas pela manhã. Carrega nuances discretamente verdes e cerosas que evoluem para um fundo cremoso, aveludado e sumamente confortável."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Abertura floral branca macia, transparente, muito limpa e com uma leve nuance verde-orvalho."
            },
            {
                tempo: "2 horas",
                descricao: "Instala-se como um coração floral belíssimo, denso e linear, que envelopa toda a fórmula em uma aura de sabão de luxo e hidratação cutânea."
            },
            {
                tempo: "24 horas+",
                descricao: "Resta uma fixação floral-branca purificada, extremamente macia, estável e confortável na fita."
            }
        ],
        aplicacao: {
            funcao: "Pilar estrutural de florais brancos, doador de cremosidade limpa e excelente agente de ligação. É indispensável para formular acordes de Lírio-do-Vale, Jasmim, Peônia, Rosa e Magnólia. Serve para dar corpo substancial e volume comercial a perfumes femininos e masculinos, amaciando arestas químicas de outras moléculas.",
            sinergias: "Sinergia absoluta com o Hedione, Linalol, Citronelol, Mayol, Hydroxycitronellal e Musks macrocíclicos.",
            riscos: "Se usado de maneira exagerada ou sem o devido contrapeso de notas secas ou especiadas, deixa a fragrância excessivamente linear, monótona, com cheiro de amaciante de roupas de luxo ou creme hidratante funcional."
        },
        seguranca: {
            alerta: "Molécula altamente estável na bancada de trabalho, altamente resistente à oxidação e que não causa descoloração em bases cosméticas.",
            restricao: "Não possui restrições severas diretas de teto ou proibições estritas pela IFRA na Categoria 4, tornando-se um substituto seguro e moderno para aldeídos florais restritos.",
            solucao: "Pode ser utilizado com excelente liberdade criativa (geralmente entre 1% a 15% da fórmula do concentrado) para construir florais ricos, cremosos e de grande performance."
        }
    },
    {
        id: "galaxolide",
        nome: "GALAXOLIDE",
        subtitulo: "Molécula Isolada (Almíscar Policíclico / O Rei do Algodão Limpo)",
        nomeCientifico: "Galaxolide (Nome químico: 1,3,4,6,7,8-Hexahydro-4,6,6,7,8,8-hexamethylcyclopenta-g-2-benzopyran)",
        identificacao: {
            tipoMateriaPrima: "Sintética (Desenvolvido pela IFF em 1965, é o almíscar mais utilizado e bem-sucedido da história da perfumaria mundial).",
            familiaOlfativa: "Almiscarada (Musk) / Floral Branca.",
            aparencia: "Líquido extremamente viscoso, denso e incolor (comercializado quase universalmente diluído a 50% em IPM ou DPG para permitir a fluidez e a pipetagem na bancada)."
        },
        comportamento: {
            volatilidade: "Fundo (Nota de Base/Ancorador definitivo de altíssima fixação e linearidade).",
            tenacidade: "Altíssima. Permanece na fita olfativa por mais de 400 horas (várias semanas, dados TGSC). Deixa uma cauda indestrutível na pele.",
            intensidade: "Média (Escala: 4.5/10). Odor macio, aveludado e difusivo de fundo; sujeito a causar fadiga olfativa transitória se cheirado puro.",
            diluicao: "Geralmente adquirido e trabalhado na forma de solução a 50% em DPG ou IPM devido à viscosidade extrema do material puro em estado de mel."
        },
        perfil: {
            descritores: "Almíscar limpo, Roupa lavada, Conforto aveludado, Floral sutil, Pele limpa.",
            nuances: "É o aroma definitivo do conforto e da pureza de lavanderia. Entrega uma nota almiscarada sumamente limpa, macia, doce e aveludada que remete a toalhas brancas lavadas e secas ao sol. Carrega uma discreta e sofisticada nuance floral-branca que amacia e engrandece qualquer acorde de coração, fundindo-se perfeitamente com o calor natural da pele."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Abertura sutil, oleosa e macia de almíscar limpo, crescendo à medida que a fragrância aquece."
            },
            {
                tempo: "4 horas",
                descricao: "Instala-se como uma belíssima e indestrutível névoa de conforto e maciez, envelopando toda a evolução em uma aura aveludada purificada."
            },
            {
                tempo: "100 horas+",
                descricao: "Excelente substantividade, restando uma base puramente limpa, macia e reconfortante na fita."
            }
        ],
        aplicacao: {
            funcao: "Ancorador de fundo, doador de textura aveludada, fixador e agente de volume. É amplamente utilizado na perfumaria fina comercial (como Tresor e Glow) e em produtos funcionais para conferir a clássica e viciante assinatura de 'roupa limpa'. Serve para dar peso tridimensional a acordes florais, amolecer saídas cítricas ríspidas e prolongar a vida útil de notas voláteis.",
            sinergias: "Sinergia absoluta com o Iso E Super, Hedione, Lilial, Florol, Linalol e outros Musks macrocíclicos (como Habanolide).",
            riscos: "O uso descuidado em proporções gigantescas pode engolir a projeção inicial da fragrância (efeito 'abafamento'), deixando o perfume excessivamente linear, opaco ou com cheiro comum de amaciante de roupas comercial doméstico."
        },
        seguranca: {
            alerta: "Sua viscosidade extrema em estado puro exige diluição prévia em DPG ou IPM para viabilizar a manipulação e evitar o entupimento de pipetas.",
            restricao: "Regulado e monitorado pelas diretrizes da IFRA (Categoria 4 - Perfumaria Fina). Possui limites estabelecidos para garantir o uso seguro na pele, além de considerações de monitoramento ambiental.",
            solucao: "Utilizar com inteligência estrutural (geralmente entre 2% a 20% do concentrado puro, dependendo do impacto almiscarado desejado) para conferir elegância, volume e fixação indestrutível."
        }
    },
    {
        id: "geraniol",
        nome: "GERANIOL",
        subtitulo: "Molécula Isolada (Álcool Monoterpênico / Pilar do Corpo Floral)",
        nomeCientifico: "Geraniol",
        identificacao: {
            tipoMateriaPrima: "Sintética ou Natural (Encontrado abundantemente na natureza nos óleos essenciais de Palmarosa, Gerânio, Rosa e Citronela).",
            familiaOlfativa: "Floral Rosa / Verde Herbácea / Ceroso.",
            aparencia: "Líquido fluido, totalmente límpido e incolor."
        },
        comportamento: {
            volatilidade: "Meio (Nota de Corpo / Coração Floral de excelente difusão contínua).",
            tenacidade: "Média. Permanece perceptível na fita olfativa por cerca de 24 a 36 horas (dados TGSC). Constrói a sustentação central floral.",
            intensidade: "Médio-Alto (Escala: 6/10). Exalação floral rica, viva e discretamente picante.",
            diluicao: "Pura (100%) para estruturação de grandes blocos florais ou a 10% para calibração de nuances finas."
        },
        perfil: {
            descritores: "Rosa doce rica, Gerânio herbáceo, Ceroso espesso, Frutado pêssego sutil, Amadeirado seco residual.",
            nuances: "É um dos três pilares clássicos indispensáveis para a reconstituição artística do acorde de Rosa. Entrega um aroma floral-rosado denso, doce e encorpado, mais quente e menos cítrico que o Citronelol. Carrega facetas herbáceas marcadas que remetem a folhas de gerânio, nuances cerosas de pétalas e um sutil fundo frutado que lembra casca de pêssego."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Abertura floral rosada rica, viva, acompanhada de um sopro herbáceo-verde picante marcante."
            },
            {
                tempo: "1 hora",
                descricao: "Instala-se como um coração floral robusto, denso, sumamente clássico, trazendo um volume ceroso e realista de pétalas de rosa maduras."
            },
            {
                tempo: "12 horas",
                descricao: "Resta um resíduo floral-ceroso amadeirado muito suave, limpo e confortável na fita."
            }
        ],
        aplicacao: {
            funcao: "Pilar estrutural de florais, doador de corpo rosado e modificador. É fundamental para formular acordes de Rosa, Gerânio, Peônia, Citrinos e Néroli. Serve para trazer volume substancial, naturalidade botânica e uma assinatura floral clássica e unificada a perfumes masculinos e femininos.",
            sinergias: "Sinergia absoluta com o Citronelol, Álcool Feniletílico, Linalol, Acetato de Geranila e Iononas.",
            riscos: "Se usado sem o devido envelopamento ou em proporções erradas, deixa a fragrância com um aspecto excessivamente rústico, estridente, ou com cheiro linear de repelente de insetos caseiro ou sabonete barato de lavanderia rústica."
        },
        seguranca: {
            alerta: "Molécula bastante estável quimicamente em meio alcoólico, resistente à oxidação de bancada e descoloração comum.",
            restricao: "⚠️ REGULADO PELA IFRA: Listado oficialmente como um dos alérgenos da perfumaria. Sua concentração final no produto acabado deve respeitar estritamente os tetos e ser declarada na rotulagem.",
            solucao: "Utilizar com ampla liberdade criativa respeitando as diretrizes de segurança (geralmente entre 1% a 8% da fórmula do concentrado) para construir florais ricos, densos e harmoniosos."
        }
    },
    {
        id: "glicolato_de_amil_alila",
        nome: "GLICOLATO DE AMIL ALILA",
        subtitulo: "Allyl Amyl Glycolate / Isoamyl Allyl Glycolate",
        nomeCientifico: "Sintético (Molécula isolada)",
        identificacao: {
            tipoMateriaPrima:
                "Sintético (Aromaquímico puro).",
            familiaOlfativa:
                "Verde / Frutada / Tropical.",
            aparencia:
                "Líquido límpido e incolor."
        },
        comportamento: {
            volatilidade:
                "Topo a Meio (Nota de Saída / Cabeça a Coração).",
            tenacidade:
                "Média. Permanece perceptível na fita por cerca de 24 a 36 horas. Possui excelente substantividade intermediária.",
            intensidade:
                "Muito Alto (Escala: 8/10). Extremamente cortante, penetrante e radiante desde o primeiro segundo.",
            diluicao:
                "Recomendado usar a 10% ou 1% na bancada de trabalho para melhor controle, devido ao seu altíssimo impacto olfativo."
        },
        perfil: {
            descritores:
                "Abacaxi metálico, Verde galbano, Frutado pungente, Tropical, Moderno.",
            nuances:
                "Famoso pelo seu caráter de 'abacaxi moderno ou metálico'. Combina o frescor verde e picante das folhas esmagadas de gálbano com a doçura exótica de frutas tropicais (abacaxi e kiwi), evoluindo para uma faceta limpa que lembra casca de maçã verde."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Uma explosão cortante e fria de abacaxi industrial, com um lado verde acentuado e um caráter quase puramente metálico."
            },

            {
                tempo: "30 min",
                descricao:
                    "O aspecto metálico agressivo suaviza, dando lugar a uma nota frutada tropical suculenta, verde, arejada e muito limpa."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Resta uma vibração frutada residual muito nítida e moderna, que mantém o coração floral ou cítrico da fragrância prolongado."
            }
        ],
        aplicacao: {
            funcao:
                "O 'gatilho moderno' da perfumaria. É responsável por dar um efeito efervescente, futurista e intensamente limpo. Indispensável para revigorar saídas cítricas e dar a assinatura marcante em perfumes das famílias Fougère Aromático moderno, Cítrico e Frutado.",
            sinergias:
                "Cria uma sinergia lendária com o Ambroxan e a Isoraldeína para evocar a atmosfera de perfumes masculinos modernos e magnéticos (como a famosa estrutura de Creed Aventus e Sauvage). Potencializa o brilho do Limoneno e do Verdox.",
            riscos:
                "Uma overdose (passando de traços ou pequenas frações na fórmula) transforma instantaneamente a composição num aroma estridente e agressivo, remetendo a inseticidas ou produtos de limpeza pesada."
        },
        seguranca: {
            alerta:
                "O Allyl Amyl Glycolate possui restrições estabelecidas pela IFRA devido ao potencial de causar sensibilização dérmica.",
            restricao:
                "Sujeito a limites máximos de concentração no produto final na pele, variando conforme a categoria do produto (frequentemente limitado a cerca de 0,5% a 1% na perfumaria fina).",
            solucao:
                "Utilizar pesagens milimétricas através de diluições geométricas prévias (como soluções a 10%) para garantir que a dosagem do lote respeite rigorosamente as diretrizes da biblioteca de padrões da IFRA."
        }
    },
    {
        id: "hediona",
        nome: "HEDIONA",
        subtitulo: "Molécula Isolada (Éster Cíclico / Luminosidade Floral Absoluta)",
        nomeCientifico: "Hedione / Methyl dihydrojasmonate (Desenvolvido pela Firmenich)",
        identificacao: {
            tipoMateriaPrima: "Sintética (A molécula mais revolucionária, utilizada e indispensável de toda a perfumaria moderna mundial).",
            familiaOlfativa: "Floral Transparente / Jasmim Macio / Cítrico Sutil.",
            aparencia: "Líquido fluido, totalmente límpido e incolor."
        },
        comportamento: {
            volatilidade: "Meio (Nota de Corpo / Coração Floral dotada de uma extraordinária capacidade de difusão vertical).",
            tenacidade: "Alta. Permanece perceptível na fita por mais de 100 horas (dados TGSC). Atua como um motor de liberação gradual.",
            intensidade: "Média-Baixa (Escala: 3.5/10). Suave e delicada quando pura; seu verdadeiro poder revela-se ao misturar-se com outras notas.",
            diluicao: "Pura (100%) devido ao seu papel estrutural de grande volume na fórmula alcoólica."
        },
        perfil: {
            descritores: "Jasmim transparente, Luminosidade arejada, Limão sutil orvalhado, Frescor radiante, Fixador difusivo.",
            nuances: "Não traz o odor pesado ou indólico do jasmim natural, mas sim a sua aura luminosa, fresca e arejada. Entrega uma nota floral sumamente delicada, limpa e transparente que remete a pétalas úmidas de jasmim sob o orvalho matinal, acompanhada de uma sutil e refrescante nuance cítrica de limão pálido e uma textura aquosa magnífica."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Abertura floral sumamente discreta, arejada, transparente e com um frescor aquoso-cítrico sutil."
            },
            {
                tempo: "2 horas",
                descricao: "Revela sua magia: infunde um brilho monumental, expande a projeção inicial e organiza harmoniosamente todas as moléculas da fragrância."
            },
            {
                tempo: "48 horas+",
                descricao: "Fundo residual de fixação limpa, linear, sumamente confortável e aveludada na pele."
            }
        ],
        aplicacao: {
            funcao: "Doador de radiância floral, agente de difusão, fixador e harmonizador universal. É o ingrediente pilar usado em quase todas as criações da perfumaria fina (como Eau Sauvage e CK One). Serve para clarear acordes abafados, aerar florais pesados, projetar notas cítricas e dar um acabamento tridimensional, limpo e altamente comercial a qualquer estrutura.",
            sinergias: "Sinergia absoluta com o Iso E Super, Linalol, Acetato de Linalila, Galaxolide, Ambroxan e Notas Cítricas.",
            riscos: "Quase inexistentes devido à sua extrema maciez olfativa. No entanto, se usado em doses colossais desnecessárias sem o contrapeso de notas densas, pode deixar a fragrância excessivamente diluída, aquosa ou sem uma assinatura de fundo marcante."
        },
        seguranca: {
            alerta: "Molécula quimicamente hiper-estável, altamente resistente à oxidação de bancada e que não sofre nenhuma descoloração.",
            restricao: "Não possui restrições proibitivas ou tetos severos impostos pela IFRA na Categoria 4, sendo considerada uma das matérias-primas mais seguras da perfumaria.",
            solucao: "Utilizar com total liberdade criativa (variando comumente de 5% a até 40% da fórmula final do concentrado puro) para conferir brilho, projeção e sofisticação incomparáveis."
        }
    },
    {
        id: "helional",
        nome: "HELIONAL",
        subtitulo: "Molécula Isolada (Aldeído Aromático / Floral Aquoso)",
        nomeCientifico: "Helional (Nome químico: alpha-Methyl-1,3-benzodioxole-5-propanal)",
        identificacao: {
            tipoMateriaPrima: "Sintética (Desenvolvido pela IFF, é uma das moléculas mais eficazes para fundir frescor aquático com o corpo floral).",
            familiaOlfativa: "Floral Branca / Aquosa / Ozônica.",
            aparencia: "Líquido fluido, totalmente límpido e incolor."
        },
        comportamento: {
            volatilidade: "Meio / Topo (Nota de Corpo e Saída de altíssimo poder de difusão e expansão vertical).",
            tenacidade: "Alta. Permanece perceptível na fita por cerca de 72 a 96 horas (dados TGSC). Mantém o frescor úmido por toda a evolução inicial.",
            intensidade: "Alto (Escala: 7/10). Muito radiante e penetrante, cortando misturas pesadas com facilidade.",
            diluicao: "Pura (100%) para estruturação de acordes florais transparentes ou a 10% para calibração fina e teste de nuances."
        },
        perfil: {
            descritores: "Ciclamen floral, Melão aquoso, Brisa úmida salina, Ozônio limpo, Ligeiramente Metálico.",
            nuances: "Combina o frescor elétrico e arejado do ozônio purificado com uma belíssima nuance floral transparente que remete a pétalas úmidas de ciclame e lírio-do-vale. Exibe um fundo suculento e frutado que lembra polpa de melão verde e melancia aquosa, evoluindo para facetas discretamente salinas e metálicas limpas."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Explosão arejada ultra-fresca, aquosa, picante-ozônica e nitidamente floral-frutada de melão."
            },
            {
                tempo: "1 hora",
                descricao: "Instala-se como uma belíssima lufada de vento úmido sobre pétalas florais, conferindo uma expansão tridimensional e leveza extraordinárias à fórmula."
            },
            {
                tempo: "24 horas+",
                descricao: "Resta uma assinatura limpa, aquática, purificada e linear de grande substantividade."
            }
        ],
        aplicacao: {
            funcao: "Doador de efervescência ozônica, agente de transparência floral e modernizador de topo. Es essencial para aerar, expandir e injetar um sopro de ar fresco e úmido em acordes cítricos, florais brancos pesados e Fougères esportivos. Ajuda a 'levantar' notas florais de coração e a mascarar o aspecto abafado de bases densas amadeiradas.",
            sinergias: "Sinergia espetacular com o Hedione, Linalol, Calone, Floraozone, Dihidromercenol e notas cítricas.",
            riscos: "Se usado de maneira desmedida, deixa a fragrância com um aspecto extremamente sintético, ríspido, com cheiro linear que lembra produto de passar roupa químico, desinfetante funcional marinho ou clara de ovo crua."
        },
        seguranca: {
            alerta: "Molécula cristalina estável na bancada de trabalho, demonstrando excelente resistência contra descoloração rápida.",
            restricao: "⚠️ REGULADO PELA IFRA: Possui limites quantitativos máximos restritos estabelecidos pela IFRA para uso na Categoria 4 (Perfumaria Fina) devido ao seu potencial de sensibilização na pele.",
            solucao: "Dosar com precisão estética e regulatória (geralmente entre 0.5% a 5% da fórmula final do concentrado puro) para garantir sofisticação, brilho e equilíbrio natural."
        }
    },
    {
        id: "heliotropex",
        nome: "HELIOTROPEX",
        subtitulo: "Coquetel de Aromaquímicos (Base Reconstituída / Specialty)",
        nomeCientifico: "Heliotropex Specialty Base (Substituto seguro da Heliotropina / Piperonal)",
        identificacao: {
            tipoMateriaPrima: "Sintética / Reconstituída (Mistura complexa de aromaquímicos desenvolvida por casas de fragrância para emular e substituir a Heliotropina clássica, contornando restrições).",
            familiaOlfativa: "Floral Atalcada / Balsâmica / Doce.",
            aparencia: "Líquido fluido, límpido e incolor a levemente amarelado pálido."
        },
        comportamento: {
            volatilidade: "Fundo / Meio (Nota de Base com excelente difusão atalcada e peso estrutural).",
            tenacidade: "Alta. Permanece perceptível na fita olfativa por mais de 200 horas (dados comerciais comuns). Confere textura densa de longa duração.",
            intensidade: "Médio-Alto (Escala: 6.5/10). Muito opaco, reconfortante e envelopante, preenche o espaço com calor macio.",
            diluicao: "Pura (100%) para dar corpo e fixação à base atalcada ou a 10% em DPG para calibração de acordes florais finos."
        },
        perfil: {
            descritores: "Flor de heliotrópio, Amêndoa doce, Baunilha atalcada, Cereja licorosa pálida, Conforto cosmético.",
            nuances: "Emula com fidelidade o perfil exótico e nostálgico da heliotropina natural. Combina um topo floral macio e atalcado (que lembra a flor de heliotrópio e mimosa) com um corpo denso de amêndoa doce e marzipã, evoluindo para nuances de baunilha cremosa e um sutil toque frutado que remete a xarope de cereja pálido e maquiagem antiga de luxo."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Abertura floral atalcada discreta, nitidamente amendoada e com um sopro doce de baunilha."
            },
            {
                tempo: "2 horas",
                descricao: "Instala-se como um coração/fundo cosmético magnífico, trazendo uma textura densa, cremosa, aveludada e um conforto tátil luxuoso."
            },
            {
                tempo: "48 horas+",
                descricao: "Fixação excelente, deixando um eco doce, atalcado-amendoado resinado, quente e profundamente sensual."
            }
        ],
        aplicacao: {
            funcao: "Ancorador de fundo, doador de textura atalcada e agente de doçura balsâmica. É a espinha dorsal para perfumes orientais macios, florais atalcados (como acordes de Íris e Violeta) e criações gourmands sofisticadas. Serve para dar peso, calor e complexidade tridimensional a composições femininas e florais opulentos.",
            sinergias: "Sinergia absoluta com a Vanilina, Coumarina, Iononas, Anisic Aldehyde, Hedione e Musks macrocíclicos.",
            riscos: "O uso descuidado abafa totalmente a saída da fragrância, deixando o perfume excessivamente pesado, sufocante, opaco ou com cheiro linear de talco infantil barato ou maquiagem antiga passada."
        },
        seguranca: {
            alerta: "Por ser uma base industrialmente reconstituída, possui excelente estabilidade química geral contra oxidação, sendo muito mais fácil de trabalhar do que os cristais puros de heliotropina.",
            restricao: "Regulado pelas diretrizes da IFRA de acordo com as restrições individuais dos aromaquímicos presentes na composição da base. Seguir as recomendações de limite do fabricante para a Categoria 4.",
            solucao: "Utilizar com equilíbrio na bancada (geralmente entre 1% a 8% do composto concentrado puro) para estruturar a cauda da fragrância com elegância e conforto cosmético."
        }
    },
    {
        id: "helvetolide",
        nome: "HELVETOLIDE",
        subtitulo: "Molécula Isolada (Almíscar Macrocíclico Alifático / Musk de Topo)",
        nomeCientifico: "Helvetolide (Nome químico: 2-(1-(3,3-Dimethylcyclohexyl)ethoxy)-2-methylpropyl propanoate)",
        identificacao: {
            tipoMateriaPrima: "Sintética (Almíscar de última geração patenteado pela Firmenich, famoso por romper a barreira clássica da volatilidade dos musks).",
            familiaOlfativa: "Almiscarada (Musk) / Frutada Pêra.",
            aparencia: "Líquido extremamente viscoso, denso e totalmente incolor."
        },
        comportamento: {
            volatilidade: "Fundo / Topo (Nota de Base com a propriedade extraordinária de saltar imediatamente na saída da fragrância).",
            tenacidade: "Altíssima. Permanece na fita olfativa por mais de 400 horas (várias semanas, dados TGSC). Deixa uma cauda indestrutível e limpa.",
            intensidade: "Médio-Alto (Escala: 6/10). Muito radiante, expansivo e perceptível desde os primeiros segundos na fita.",
            diluicao: "Pura (100%) devido ao seu papel estrutural moderno ou a 50% em DPG se necessário para facilitar a manipulação fluida."
        },
        perfil: {
            descritores: "Almíscar fluido límpido, Pêra suculenta fresca, Conforto tátil, Ambreta mineral, Limpeza de luxo.",
            nuances: "É a evolução moderna da família dos almíscares. Combina uma belíssima, limpa e aveludada nota almiscarada de fundo com uma proeminente e suculenta nuance frutada que remete a polpa de pêra fresca e maçã amolecida na saída. Entrega uma textura sumamente fluida, arejada e mineral que lembra sementes de ambreta, fundindo-se com luxo na pele."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Explosão almiscarada imediata acompanhada de um toque frutado espetacular e limpo de pêra madura."
            },
            {
                tempo: "2 horas",
                descricao: "A faceta frutada abranda; instala-se como um manto de conforto, maciez e brilho monumental, infundindo um volume moderno e arejado."
            },
            {
                tempo: "100 horas+",
                descricao: "Fixação espetacular e linear na fita, restando uma base almiscarada puramente limpa, macia e luxuosa."
            }
        ],
        aplicacao: {
            funcao: "Fixador de topo e fundo, doador de radiância frutada e agente de volume tridimensional modernos. É amplamente utilizado na alta perfumaria de nicho e comercial de prestígio para conferir um impacto almiscarado imediato desde a primeira borrifada. Funciona perfeitamente para envelopar acordes florais transparentes e para sofisticar bases amadeiradas secas.",
            sinergias: "Excelente sinergia com o Iso E Super, Hedione, Ambroxan, Romandolide, Linalol e notas cítricas.",
            riscos: "O risco de superdosagem é baixo devido à sua maciez inerente. No entanto, em doses colossais desmedidas, pode deixar o perfume excessivamente linear, adocicado-frutado pálido ou abafar a projeção de notas cítricas ríspidas de topo."
        },
        seguranca: {
            alerta: "Sua viscosidade exige atenção na pipetagem fina; manter o frasco em temperatura ambiente estável para garantir a fluidez do material puro.",
            restricao: "Não possui restrições quantitativas proibitivas severas diretas impostas pela IFRA na Categoria 4. Considerado sumamente seguro de formular.",
            solucao: "Utilizar com excelente liberdade criativa (geralmente variando de 1% a 12% da fórmula do concentrado puro) para construir fragrâncias modernas de grande rastro."
        }
    },
    {
        id: "hidroxicitronelal",
        nome: "HIDROXICITRONELAL",
        subtitulo: "Molécula Isolada (Aldeído Alifático / Clássico do Lírio-do-Vale)",
        nomeCientifico: "Hydroxycitronellal (Nome comercial comum: Laurine)",
        identificacao: {
            tipoMateriaPrima: "Sintética (Um dos aldeídos florais mais clássicos, históricos e importantes de toda a história da perfumaria).",
            familiaOlfativa: "Floral Branca / Muguet (Lírio-do-Vale) / Verde.",
            aparencia: "Líquido viscoso, límpido e totalmente incolor."
        },
        comportamento: {
            volatilidade: "Meio (Nota de Corpo / Coração Floral de excelente difusão contínua).",
            tenacidade: "Alta. Permanece perceptível na fita olfativa por mais de 100 horas (dados TGSC). Excelente substantividade e linearidade na pele.",
            intensidade: "Média (Escala: 4.5/10). Não possui impacto cortante, mas constrói um corpo floral incrivelmente sólido, opaco e macio.",
            diluicao: "Pura (100%) para dar corpo à estrutura floral da fórmula ou a 10% para calibração e testes de bancada."
        },
        perfil: {
            descritores: "Lírio-do-vale (Muguet), Tília floral doce, Mel orvalhado sutil, Verde suave limpo, Conforto ceroso.",
            nuances: "É a personificação histórica da pureza floral e da sensação de limpeza clássica. Entrega um aroma floral refinado, delicado e macio que emula perfeitamente o Lírio-do-Vale (Muguet) fresco e flores de tília colhidas pela manhã. Carrega nuances discretamente verdes e cerosas que evoluem para um fundo adocicado que lembra sutilmente mel orvalhado e creme cosmético."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Abertura floral branca macia, transparente, muito limpa e com uma leve nuance verde-orvalho."
            },
            {
                tempo: "2 horas",
                descricao: "Instala-se como um coração floral belíssimo, denso e linear, que envelopa toda a fórmula em uma aura de sabão clássico de luxo e hidratação cutânea."
            },
            {
                tempo: "24 horas+",
                descricao: "Resta uma fixação floral-branca purificada, extremamente macia, estável e confortável na fita."
            }
        ],
        aplicacao: {
            funcao: "Pilar estrutural de florais brancos, doador de cremosidade limpa e excelente agente de ligação. É indispensável para formular acordes de Lírio-do-Vale, Jasmim, Lilás, Rosa e Magnólia. Serve para dar corpo substancial e volume comercial a perfumes femininos clássicos, amaciando arestas químicas de outras moléculas.",
            sinergias: "Sinergia absoluta com o Hedione, Linalol, Citronelol, Geraniol, Lilial e Musks policíclicos.",
            riscos: "Se usado de maneira exagerada ou fora das normas, deixa a fragrância excessivamente linear, monótona, com cheiro de talco antigo passado ou sabonete funcional de lavanderia rústica."
        },
        seguranca: {
            alerta: "Molécula estável na bancada de trabalho se protegida da luz direta, altamente resistente à oxidação comum.",
            restricao: "⚠️ RESTRIÇÃO IFRA SEVERA: Devido ao seu alto potencial comprovado de sensibilização cutânea ao longo de décadas, possui tetos quantitativos estritos e rigorosos ditados pela IFRA para a Categoria 4. Exige cálculo minucioso.",
            solucao: "Calcular com rigor a dosagem final (geralmente empregado entre 0.5% a 3% da fórmula do concentrado puro) para garantir total conformidade regulatória e refinamento estético."
        }
    },
    {
        id: "indol",
        nome: "INDOL",
        subtitulo: "Molécula Isolada (Composto Heterocíclico / Animalico Floral)",
        nomeCientifico: "Indole",
        identificacao: {
            tipoMateriaPrima: "Sintética ou Natural (Constituinte natural crucial e indispensável responsável pelo caráter narcótico de florais brancos como Jasmim, Néroli e Tuberosa).",
            familiaOlfativa: "Animalica / Floral Narcótica / Fecal.",
            aparencia: "Cristais em placas ou pó cristalino branco a levemente rosado/castanho (sofre forte escurecimento natural por ação da luz e ar)."
        },
        comportamento: {
            volatilidade: "Fundo / Meio (Nota de Base com extraordinário poder de tingimento e difusão vertical).",
            tenacidade: "Altísima. Permanece perceptível na fita olfativa por mais de 200 horas (dados TGSC). Irradia fixação profunda na pele.",
            intensidade: "Extremo (Escala: 10/10). Puro possui um odor fecal, naftalínico e repulsivo avassalador.",
            diluicao: "Obrigatório o uso altamente diluído a 1% ou 0.1% em DPG na bancada de criação para poder ser apreciado de forma artística."
        },
        perfil: {
            descritores: "Naftalina pungente, Fecal rústico, Jasmim podre maduro, Tinta da China, Animalico quente carnal.",
            nuances: "O grande mistério dos florais brancos. Puro ou concentrado é intensamente repulsivo, lembrando naftalina pura, gás de carvão e fezes. No entanto, quando diluído a traços milimétricos, transforma-se milagrosamente: entrega o verdadeiro caráter carnal, denso, narcótico e aveludado de pétalas de jasmim maduro expostas ao sol da noite, conferindo uma naturalidade botânica insubstituível."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Impacto inicial chocante, áspero, agudamente naftalínico, medicinal e fecal sufocante."
            },
            {
                tempo: "2 horas",
                descricao: "O aspecto fecal se dissipa; desabrocha uma riqueza floral narcótica espetacular que funde todas as notas brancas em uma aura de vida botânica real e sensual."
            },
            {
                tempo: "48 horas+",
                descricao: "Fixação excelente na fita, restando uma base animalica carnal discreta, limpa e magnética."
            }
        ],
        aplicacao: {
            funcao: "Exaltador floral botânico, doador de calor carnal e modificador de alta performance para florais narcóticos. É crucial para criar acordes realistas de Jasmim, Tuberosa, Gardênia, Flor de Laranjeira e Lírio. Serve como um 'catalisador' que quebra o aspecto 'plástico/sintético' de florais brancos econômicos, fazendo-os parecer vivos.",
            sinergias: "Casamento master com o Antranilato de Metila, Benzyl Acetate, Hedione, Álcool Feniletílico e óleo de Ylang-Ylang.",
            riscos: "O erro de dosagem é fatal. Se usado além de traços milimétricos, arruína o perfume instantaneamente, deixando a composição com cheiro de naftalina velha, flores podres em água parada ou falta de higiene corporal."
        },
        seguranca: {
            alerta: "⚠️ ALTA DESCOLORAÇÃO: Reage intensamente com o Antranilato de Metila formando bases de Schiff que mudam a cor do perfume final para castanho-escuro ou avermelhado com o tempo.",
            restricao: "Não apresenta restrições quantitativas proibitivas severas diretas impostas pela IFRA na Categoria 4, atuando sob os limites padrão de bom senso estético devido ao seu impacto monumental.",
            solucao: "Trabalhar exclusivamente com a solução diluída a 1% ou 0.1% na bancada, adicionando frações mínimas (geralmente de 0.05% a 0.5% da solução na fórmula do concentrado) para obter o efeito vivo sem o risco fecal ou naftalínico."
        }
    },
    {
        id: "iso_e_super",
        nome: "ISO E SUPER",
        subtitulo: "Molécula Isolada (Pilar Amadeirado / Cetonas Policíclicas)",
        nomeCientifico: "Iso E Super (Nome químico: Tetramethyl acetyloctahydronaphthalenes / Patchouli Ethanone)",
        identificacao: {
            tipoMateriaPrima: "Sintética (A molécula mais famosa, utilizada e bem-sucedida desenvolvida pela IFF, pilar absoluto da perfumaria moderna).",
            familiaOlfativa: "Amadeirada / Âmbar Seco / Almiscarada.",
            aparencia: "Líquido límpido, totalmente incolor e de viscosidade muito baixa (totalmente fluido)."
        },
        comportamento: {
            volatilidade: "Fundo (Nota de Base/Ancorador definitivo dotado de imensa capacidade de difusão vertical).",
            tenacidade: "Altíssima. Permanece perceptível na fita olfativa por mais de 172 horas (cerca de 7 dias, dados TGSC). Deixa uma cauda aveludada linear.",
            intensidade: "Média (Escala: 5/10). Não possui impacto agressivo na saída; atua de forma envelopante e aveludada preenchendo os espaços.",
            diluicao: "Pura (100%) devido ao seu papel estrutural de grande volume na fórmula alcoólica."
        },
        perfil: {
            descritores: "Cedro aveludado, Lápis de madeira limpo, Âmbar cinzento sutil, Conforto tátil pele, Efeito holográfico.",
            nuances: "É a personificação do conforto amadeirado moderno. Entrega uma nota rica e limpa de madeira de cedro polida (cheiro de raspas de lápis novas) combinada com uma sofisticada nuance ambarada e mineral que lembra o âmbar cinzento. Exibe um fundo almiscarada suave que mimetiza o calor natural da pele nua, demonstrando um intrigante efeito holográfico de 'aparecer e desaparecer' ao olfato."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Abertura amadeirada sumamente discreta, limpa, seca e sutilmente ambarada."
            },
            {
                tempo: "2 horas",
                descricao: "Desabrocha seu verdadeiro poder: expande a projeção das outras notas, amacia arestas químicas e envelopa toda a evolução em uma névoa aveludada luxuosa."
            },
            {
                tempo: "72 horas+",
                descricao: "Excelente substantividade na fita, restando uma base puramente limpa, macia, seca e confortável na pele."
            }
        ],
        aplicacao: {
            funcao: "Ancorador de fundo, doador de textura aveludada, agente de difusão e harmonizador universal. É o ingrediente icônico responsável por estruturar clássicos comerciais em superdosagem (como Fahrenheit e Declaration) ou usado puro na perfumaria de nicho (Molecule 01). Serve para dar peso tridimensional a acordes florais, secar doces orientais e prolongar a vida útil de notas cítricas voláteis.",
            sinergias: "Sinergia absoluta com o Hedione, Ambroxan, Galaxolide, Linalol, Vertofix Coeur e óleos cítricos.",
            riscos: "Quase inexistentes devido à sua extrema maciez olfativa. No entanto, se usado em doses colossais sem o devido contrapeso de notas de topo ríspidas, pode deixar o perfume excessivamente linear, monótono ou com cheiro puramente químico de marcenaria industrial fina."
        },
        seguranca: {
            alerta: "Molécula quimicamente hiper-estável, altamente resistente à oxidação de bancada e que não sofre nenhuma descoloração.",
            restricao: "⚠️ REGULADO PELA IFRA: Devido ao seu uso massivo na indústria mundial, possui limites quantitativos máximos estabelecidos pela IFRA para uso na Categoria 4 (Perfumaria Fina) para garantir total segurança cutânea.",
            solucao: "Utilizar com total liberdade criativa respeitando as diretrizes (variando comumente de 5% a até 30% da fórmula final do concentrado puro) para conferir elegância, volume e fixação prolongada."
        }
    },
    {
        id: "isobutilquinoleina",
        nome: "ISOBUTILQUINOLEÍNA",
        subtitulo: "Isobutyl Quinoline / 2-(2-methylpropyl)quinoline",
        nomeCientifico: "Sintético (Molécula isolada)",
        identificacao: {
            tipoMateriaPrima: "Sintético (Aromaquímico puro)",
            familiaOlfativa: "Couro / Animálica.",
            aparencia: "Líquido límpido, incolor a amarelo pálido."
        },
        comportamento: {
            volatilidade: "Fundo (Nota de Base).",
            tenacidade: "Altíssima. Permanece perceptível na fita por cerca de 160 a 168 horas (cerca de 7 dias).",
            intensidade: "Muito Alto (Escala: 9/10). Extremamente potente e difusiva.",
            diluicao: "Recomendado diluir a 1% ou 10% em DPG devido à sua altíssima força para não soterrar a fórmula."
        },
        perfil: {
            descritores: "Couro genuíno, Terroso, Animálico, Seco, Tabaco.",
            nuances: "Odor intensamente poderoso e seco de couro envelhecido, com fortes facetas de fumo de tabaco, musgo de carvalho, raízes terrosas e nuances herbáceas amargas."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Uma abertura agressiva, pungente, seca, cortante e quase medicinal, lembrando borracha queimada ou fumo cru."
            },
            {
                tempo: "30 min",
                descricao: "O caráter áspero suaviza, assentando num acorde de couro refinado e luxuoso com nuances de tabaco seco."
            },
            {
                tempo: "2 horas",
                descricao: "Mantém-se estável e proeminente, exibindo facetas amadeiradas e terrosas de vetiver e musgo com grande difusão."
            }
        ],
        aplicacao: {
            funcao: "Crucial para a construção de acordes de couro ('Cuir de Russie'), chipres clássicos e fragrâncias masculinas robustas, conferindo grande difusão e fixação.",
            sinergias: "Combina perfeitamente com o Iso E Super e Vertofix para fundar bases amadeiradas masculinas. Cria links sofisticados com o Castóreo e o Veramoss para notas animais e de musgo.",
            riscos: "Se mal dosada, pode arruinar completamente a fragrância, cobrindo todas as notas florais e cítricas com um odor industrial ou asfáltico."
        },
        seguranca: {
            alerta: "A Isobutyl Quinoline possui restrições na pele devido ao seu potencial de sensibilização cutânea.",
            restricao: "Sujeita a limites quantitativos rígidos baseados nas diretrizes vigentes das categorias da IFRA (geralmente abaixo de 1% no produto final).",
            solucao: "Trabalhar com pesagens milimétricas na bancada e utilizar diluições geométricas a 1% para garantir que os limites de segurança do produto final não sejam ultrapassados."
        }
    },
    {
        id: "isoraldeina",
        nome: "ISORALDEÍNA",
        subtitulo: "Alpha-Isomethyl Ionone / Isoraldeine 70",
        nomeCientifico: "Sintético (Isômero purificado de Ionona)",
        identificacao: {
            tipoMateriaPrima: "Sintético (Molécula isolada).",
            familiaOlfativa: "Floral / Amadeirada.",
            aparencia: "Líquido límpido, incolor a levemente amarelado."
        },
        comportamento: {
            volatilidade: "Fundo / Meio (Nota de Coração a Base).",
            tenacidade: "Alta. Permanece perceptível na fita por cerca de 124 horas (cerca de 5 dias).",
            intensidade: "Médio (Escala: 5/10). Atua por harmonização e envolvimento físico.",
            diluicao: "Pura (100%) ou a 10% na bancada de trabalho."
        },
        perfil: {
            descritores: "Violeta, Íris (Orris), Atalcado, Amadeirado, Aveludado.",
            nuances: "Nota floral fina, rica, seca e aveludada de violeta e raízes de íris (orris), evoluindo para um corpo amadeirado precioso com nuances frutadas sutis de bagas escuras."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Uma saída floral suave, seca, ligeiramente frutada e com um toque atalcado muito limpo."
            },
            {
                tempo: "30 min",
                descricao: "Floresce o coração aveludado e cremoso, trazendo um aspecto denso que lembra cosméticos finos ou maquiagem (orris)."
            },
            {
                tempo: "2 horas",
                descricao: "Fixa-se numa base amadeirada sutil, extremamente macia, reconfortante e com textura de camurça fina."
            }
        ],
        aplicacao: {
            funcao: "Excelente para trazer volume tridimensional, difusão e um efeito reconfortante de 'abraço' ou 'creme' (skin care effect) em acordes florais, amadeirados e orientais.",
            sinergias: "Funciona maravilhosamente com o Musk T e o Salicilato de Amila para criar efeitos aveludados e limpos. Une-se à Rosa Givco para estruturar o clássico acorde cosmético de rosa-violeta.",
            riscos: "Embora macia, em doses excessivas pode achatar a projeção das notas de topo, deixando a fragrância excessivamente pesada, abafada ou com aspecto datado/retrô."
        },
        seguranca: {
            alerta: "A Alpha-Isomethyl Ionone é um alérgeno regulamentado devido ao seu potencial de induzir sensibilização dermatológica.",
            restricao: "Possui limites máximos permitidos por categoria da IFRA e exige menção obrigatória na rotulagem de ingredientes se ultrapassar os limites regulatórios locais.",
            solucao: "Consultar os limites da Categoria 4 (perfumaria fina) e formular respeitando as margens máximas para manter o produto final seguro e em conformidade."
        }
    },
    {
        id: "limoneno",
        nome: "LIMONENO",
        subtitulo: "d-Limonene / (R)-p-mentha-1,8-diene",
        nomeCientifico: "Isolado Natural (Extraído de Citrus sinensis / laranjas)",
        identificacao: {
            tipoMateriaPrima: "Natural / Isolado Natural obtido como subproduto da indústria de sucos cítricos.",
            familiaOlfativa: "Cítrica.",
            aparencia: "Líquido móvel, incolor e altamente volátil."
        },
        comportamento: {
            volatilidade: "Topo (Nota de Saída / Cabeça).",
            tenacidade: "Muito Baixa. Permanece perceptível na fita por menos de 4 a 8 horas. Evapora de forma extremamente rápida.",
            intensidade: "Alto (Escala: 7/10). Impacto imediato, explosivo e radiante.",
            diluicao: "Pura (100%) para constituir os blocos volumosos de saída."
        },
        perfil: {
            descritores: "Cítrico fresco, Laranja, Sparkling (Borbulhante), Limpo, Volátil.",
            nuances: "Odor fresco, cítrico, leve e cortante de casca de laranja fresca espremida na hora. Possui nuances suculentas, limpas e levemente doces, sem o amargor pesado da bergamota."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Uma explosão cítrica ultraluminosa, fresca, doce e revigorante de sumo de laranja e mandarinas."
            },
            {
                tempo: "30 min",
                descricao: "A efervescência inicial dissipa-se rapidamente, restando um tom cítrico suave e limpo que se funde ao coração."
            },
            {
                tempo: "2 horas",
                descricao: "Resta apenas um eco sutil, quase imperceptível, adicionando transparência antes de sumir por completo."
            }
        ],
        aplicacao: {
            funcao: "Utilizado amplamente para conferir a saída fresca, natural e radiante de colônias, perfumes cítricos, florais leves e fragrâncias masculinas dinâmicas.",
            sinergias: "Injeta brilho imediato na Bergamota e no Melonal. Funciona em perfeita sinergia com fixadores como o Ambroxan para ajudar a reter a perceção cítrica na pele por mais tempo.",
            riscos: "Se usado sozinho na saída sem o amparo de cítricos mais pesados ou notas amadeiradas/musks fixadores, desaparece em poucos minutos, deixando a fragrância 'decapitada'."
        },
        seguranca: {
            alerta: "O d-Limonene puro não é restrito quantitativamente pela IFRA, mas os seus produtos de oxidação são fortes sensibilizantes cutâneos.",
            restricao: "Exige que o nível de peróxidos no lote seja mantido ao mínimo absoluto através da adição obrigatória de antioxidantes.",
            solucao: "Adicionar antioxidantes (como 0,1% de BHT ou Tocopherol) diretamente na matéria-prima ou na fórmula do perfume para evitar a oxidação e garantir a segurança dérmica."
        }
    },
    {
        id: "melonal",
        nome: "MELONAL",
        subtitulo: "Melonal (IFF) / 2,6-Dimethylhept-5-enal",
        nomeCientifico: "Sintético (Molécula isolada desenvolvida pela IFF)",
        identificacao: {
            tipoMateriaPrima: "Sintético (Aromaquímico puro).",
            familiaOlfativa: "Frutada / Verde / Aquática.",
            aparencia: "Líquido incolor a amarelo pálido."
        },
        comportamento: {
            volatilidade: "Topo (Nota de Saída / Cabeça).",
            tenacidade: "Média-Baixa. Permanece perceptível na fita por cerca de 12 a 24 horas.",
            intensidade: "Muito Alto (Escala: 8/10). Extremamente penetrante e cortante.",
            diluicao: "Recomendado usar a 10% ou 1% na bancada de trabalho devido à sua alta potência."
        },
        perfil: {
            descritores: "Melão, Melancia, Pepino, Verde, Ozónico, Aquoso.",
            nuances: "Odor extremamente potente de polpa de melão maduro, melancia fresca e casca de pepino. Possui facetas verdes, aquáticas, frescas, úmidas e intensamente frutadas."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Uma pancada intensa de melão e melancia madura com uma sensação aquática cortante e quase metálica."
            },
            {
                tempo: "30 min",
                descricao: "O tom frutado inicial assenta, transformando-se num frescor aquoso, ozónico e orvalhado de casca de pepino e grama úmida."
            },
            {
                tempo: "2 horas",
                descricao: "A nota recua para um aspecto limpo, transparente e arejado que clareia o coração floral da fragrância."
            }
        ],
        aplicacao: {
            funcao: "Usado em pequenas quantidades (traços) para dar naturalidade a notas frutadas, frescor aquático moderno e efeitos ozónicos, marinhos e orvalhados.",
            sinergias: "Faz uma excelente sinergia com o Limoneno para dar um caráter suculento a saídas cítricas e com florais transparentes (como o Hedione) para criar um efeito marinho/orvalhado.",
            riscos: "Uma overdose de Melonal transforma o perfume instantaneamente num aroma artificial de chiclete de melancia ou produto de limpeza barato."
        },
        seguranca: {
            alerta: "O Melonal é restrito pela IFRA devido ao seu potencial de causar sensibilização alérgica na pele.",
            restricao: "Possui limites estritos de concentração máxima dependendo da categoria do produto final (perfumaria fina, cosméticos com ou sem enxágue).",
            solucao: "Utilizar diluições precisas na formulação e checar os limites estabelecidos pela IFRA para a categoria específica antes de finalizar a produção em lote."
        }
    },
    {
        id: "musk_t",
        nome: "MUSK T",
        subtitulo: "Ethylene Brassylate / Astrotone",
        nomeCientifico: "Sintético (Almíscar Macrocíclico)",
        identificacao: {
            tipoMateriaPrima: "Sintético (Molécula macrocíclica estável).",
            familiaOlfativa: "Almiscarada (Musk).",
            aparencia: "Líquido incolor, límpido e de consistência viscosa."
        },
        comportamento: {
            volatilidade: "Fundo (Nota de Base / Fixador).",
            tenacidade: "Altíssima. Permanece perceptível na fita por mais de 400 horas (várias semanas).",
            intensidade: "Baixo a Médio (Escala: 4/10). Age por envolvimento físico e retenção molecular.",
            diluicao: "Puro (100%) devido à sua fluidez gerenciável e natureza suave."
        },
        perfil: {
            descritores: "Almiscarado, Macio, Doce, Limpo, Atalcado, Floral.",
            nuances: "Musk macio, doce, limpo, reconfortante e com toque atalcado. Apresenta nuances sutis e elegantes que lembram pétalas de rosa e ambreta."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Quase imperceptível no início devido ao seu alto peso molecular (anosmia temporária de topo é comum)."
            },
            {
                tempo: "30 min",
                descricao: "Começa a emanar uma aura limpa, macia, doce e aveludada, que começa a abraçar e amaciar as outras notas da fórmula."
            },
            {
                tempo: "2 horas",
                descricao: "Irradia um calor de pele limpa, textura de algodão e doçura balsâmica extremamente persistente e confortável."
            }
        ],
        aplicacao: {
            funcao: "Excelente fixador universal. Harmoniza e arredonda arestas da composição, unindo notas de topo e coração com o fundo sem achatar a projeção.",
            sinergias: "Funciona perfeitamente com a Isoraldeína para criar bases atalcadas/cosméticas e com o Iso E Super para dar difusão amadeirada-almiscarada. Potencializa florais como a Rosa Givco.",
            riscos: "Embora muito seguro, o uso em proporções inadequadas pode 'abafar' (muffle) notas cítricas delicadas se a estrutura de topo não for robusta o suficiente."
        },
        seguranca: {
            alerta: "O Ethylene Brassylate é considerado um dos musks mais seguros, biodegradáveis e sustentáveis do mercado atual.",
            restricao: "Permitido pela IFRA sem restrições severas de dosagem nas concentrações usuais de mercado para fragrâncias finas.",
            solucao: "Pode ser utilizado como pilar de fixação em grandes quantidades (frequentemente compondo de 5% a 20% do concentrado de perfume) com total segurança."
        }
    },
    {
        id: "rosa_givco",
        nome: "ROSA GIVCO",
        subtitulo: "Rosa Givco 217 (Base formulada pela Givaudan)",
        nomeCientifico: "Base Sintética / Co-absoluto reconstituído",
        identificacao: {
            tipoMateriaPrima: "Base Composta Sintética / Reconstituição fiel de Rosa de alta performance.",
            familiaOlfativa: "Floral (Rosa).",
            aparencia: "Líquido incolor a levemente amarelado."
        },
        comportamento: {
            volatilidade: "Meio (Nota de Coração).",
            tenacidade: "Alta. Permanece perceptível na fita por cerca de 80 a 120 horas.",
            intensidade: "Médio a Alto (Escala: 6/10). Excelente projeção de corpo floral.",
            diluicao: "Pura (100%) para estruturar o bloco floral central."
        },
        perfil: {
            descritores: "Rosa vermelha, Floral rico, Verde, Melado, Volumoso.",
            nuances: "Representação fiel, rica, volumosa e profunda de uma rosa vermelha natural. Combina facetas florais densas, toques verdes e picantes de pétalas e nuances levemente meladas e cerosas."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Saída floral intensa com facetas verdes nítidas, gerânio e um toque picante de orvalho."
            },
            {
                tempo: "30 min",
                descricao: "Abre-se num bouquet suntuoso de rosas vermelhas maduras, encorpado, natural, doce e aveludado."
            },
            {
                tempo: "2 horas",
                descricao: "Evolui para uma base floral limpa, macia, levemente melada e de grande persistência na pele."
            }
        ],
        aplicacao: {
            funcao: "Desenvolvida para substituir ou estender o óleo absoluto de rosa natural com excelente custo-benefício, servindo de pilar para corações florais clássicos ou modernos.",
            sinergias: "Combina lindamente com a Isoraldeína (efeito retrô de maquiagem), com o Terpineol (florais abertos e frescos) e com o Vanilina para criar corações florais gourmands orientais.",
            riscos: "Se usada sem contraste com notas cítricas ou amadeiradas, pode deixar a fragrância excessivamente pesada, doce-floral ou linear."
        },
        seguranca: {
            alerta: "Como é uma base composta por vários ingredientes, o nível máximo de uso é ditado pelos componentes restritos nela contidos.",
            restricao: "A presença interna de moléculas como Geraniol, Citronelol e Álcool Feniletílico impõe limites acumulados que devem respeitar as diretrizes da IFRA.",
            solucao: "Utilizar os dados do certificado de conformidade fornecido pelo fabricante (Givaudan) para calcular os limites de segurança dentro da fórmula final."
        }
    },
    {
        id: "rum",
        nome: "RUM",
        subtitulo: "Rum Ether / Rum CO2 (Depende do fornecedor)",
        nomeCientifico: "Natural ou Reconstituição Sintética (Éter de Rum)",
        identificacao: {
            tipoMateriaPrima: "Natural (Extrato/CO2) ou Reconstituição Sintética (Éter de Rum).",
            familiaOlfativa: "Gourmand / Alcoólica.",
            aparencia: "Líquido móvel claro a levemente âmbar."
        },
        comportamento: {
            volatilidade: "Topo a Meio (Nota de Saída a Coração).",
            tenacidade: "Baixa a Média. Permanece perceptível na fita por cerca de 12 a 36 horas.",
            intensidade: "Alto (Escala: 7/10). Muito expansivo na abertura da fragrância.",
            diluicao: "A 10% ou puro (100%), dependendo da concentração e do objetivo olfativo."
        },
        perfil: {
            descritores: "Alcoólico, Doce, Caramelizado, Boêmio, Quente, Amadeirado.",
            nuances: "Odor alcoólico quente, pungente e adocicado, com nuances ricas de açúcar caramelizado, melaço, barril de carvalho, notas frutadas escuras e toques especiados de canela e baunilha."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Uma abertura alcoólica marcante, pungente, realista, lembrando um destilado fino de cana com calor imediato."
            },
            {
                tempo: "30 min",
                descricao: "O aspecto etílico agudo evapora, deixando emergir um corpo licoroso, doce, amadeirado de barril e caramelizado."
            },
            {
                tempo: "2 horas",
                descricao: "Resta uma nuance quente de açúcar queimado, baunilha e madeira seca aderida à pele."
            }
        ],
        aplicacao: {
            funcao: "Confere sofisticação moderna, calor e mistério a perfumes orientais, amadeirados e gourmands, simulando a atmosfera rica de bebidas finas de nicho.",
            sinergias: "Cria um link perfeito com a Vanilina (efeito licor de baunilha) e com bases amadeiradas pesadas como o Vertofix e o Trimofix (efeito tabaco e charuto).",
            riscos: "Se usado em excesso, pode deixar a saída do perfume excessivamente agressiva, medicinal ou dar um aspecto de embriaguez barata à fragrância."
        },
        seguranca: {
            alerta: "Caso contenha éteres específicos ou componentes naturais do destilado, deve obedecer aos limites individuais estabelecidos pela IFRA.",
            restricao: "Sujeito a especificações de pureza e restrições de determinados subprodutos voláteis inflamáveis ou sensibilizantes.",
            solucao: "Garantir o uso de qualidades adequadas para a perfumaria fina e controlar a porcentagem para que o aspecto etílico não agrida as mucosas respiratórias do usuário."
        }
    },
    {
        id: "salicilato_de_amila",
        nome: "SALICILATO DE AMILA",
        subtitulo: "Amyl Salicylate / Pentyl ortho-hydroxybenzoate",
        nomeCientifico: "Sintético (Éster salicílico estável)",
        identificacao: {
            tipoMateriaPrima: "Sintético (Aromaquímico puro).",
            familiaOlfativa: "Floral / Herbal / Fougère.",
            aparencia: "Líquido límpido e incolor."
        },
        comportamento: {
            volatilidade: "Meio a Fundo (Nota de Coração a Base).",
            tenacidade: "Alta. Permanece perceptível na fita por cerca de 100 a 140 horas.",
            intensidade: "Médio (Escala: 5/10). Age como um excelente agente de coesão.",
            diluicao: "Puro (100%) devido ao seu comportamento equilibrado."
        },
        perfil: {
            descritores: "Herbal doce, Floral verde, Trevo, Orquídea, Limpo.",
            nuances: "Odor floral-herbal doce, ligeiramente verde e medicinal limpo. Reminiscente de trevo-dos-prados, orquídeas exóticas e folhas verdes esmagadas, com um fundo salicílico que remete a limpeza refinada."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Saída herbal limpa, ligeiramente verde-medicinal e arejada, lembrando sabonetes de luxo."
            },
            {
                tempo: "30 min",
                descricao: "Evolui para um coração floral doce, verde e campestre, trazendo uma sensação de ar livre e ervas aromáticas."
            },
            {
                tempo: "2 horas",
                descricao: "Mantém um fundo doce, balsâmico sutil, limpo e extremamente firme que ancora as notas florais."
            }
        ],
        aplicacao: {
            funcao: "Ingrediente fundamental na estrutura clássica de acordes Fougère e florais exóticos (como o cravo e a orquídea). Excelente para trazer coesão, frescor de ervas e efeito de limpeza.",
            sinergias: "Sinergia histórica com a Lavanda, a Cumarina e o Veramoss para construir a espinha dorsal de Fougères. Combina com o Terpineol para dar difusão herbal-floral.",
            riscos: "Em doses muito elevadas, pode puxar a fragrância para um aspecto excessivamente funcional, lembrando pomadas medicinais, desinfetantes finos ou xampus antigos."
        },
        seguranca: {
            alerta: "O Amyl Salicylate é restrito em virtude de potenciais efeitos de sensibilização cutânea e monitoramento ambiental.",
            restricao: "Classificado com restrições quantitativas pela IFRA devido à toxicidade crônica para o ambiente aquático e potencial alergênico na pele.",
            solucao: "Calcular as porcentagens de uso dentro dos tetos máximos estipulados pela tabela IFRA da categoria cosmética correspondente."
        }
    },
    {
        id: "sandalore",
        nome: "SANDALORE",
        subtitulo: "Sandalore (Givaudan) / Molécula de Sândalo",
        nomeCientifico: "Sintético (Molécula desenvolvida pela Givaudan)",
        identificacao: {
            tipoMateriaPrima: "Sintético (Aromaquímico puro de alta performance).",
            familiaOlfativa: "Amadeirada (Sândalo).",
            aparencia: "Líquido viscoso, incolor a levemente amarelado."
        },
        comportamento: {
            volatilidade: "Fundo (Nota de Base / Fixador).",
            tenacidade: "Altíssima. Permanece perceptível na fita por mais de 300 horas (vários dias).",
            intensidade: "Baixo a Médio (Escala: 4/10). Não agride o olfato; cresce e expande na evolução na pele.",
            diluicao: "Puro (100%) devido à sua natureza macia, porém persistente."
        },
        perfil: {
            descritores: "Sândalo, Cremoso, Quente, Leitoso, Rico, Persistente.",
            nuances: "Odor amadeirado rico de sândalo puro, cremoso, quente e extremamente tenaz. Possui nuances distintamente doces, leitosas, aveludadas e com textura de madeira polida."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Odor muito sutil e tímido na saída, quase imperceptível devido à baixa volatilidade e alto peso."
            },
            {
                tempo: "30 min",
                descricao: "Começa a aquecer na fita/pele, revelando um corpo amadeirado cremoso rico de altíssima elegância."
            },
            {
                tempo: "2 horas",
                descricao: "Domina o fundo com uma cremosidade leitosa amadeirada suntuosa, agindo como um travesseiro para o perfume."
            }
        ],
        aplicacao: {
            funcao: "Utilizado para substituir ou encorpar o sândalo natural (vulnerável e caro), provendo extrema tenacidade, substantividade e uma difusão cremosa única para notas de fundo.",
            sinergias: "Excelente quando combinado com o Iso E Super (dá difusão) e com o Musk T (potencializa a maciez). Liga-se perfeitamente à Vanilina para criar acordes amadeirados doces/orientais.",
            riscos: "Por ter uma percepção olfativa baixa na saída, o perfumista iniciante pode cometer o erro de usar uma overdose, o que vai 'engessar' e abafar a fragrância na evolução tardia."
        },
        seguranca: {
            alerta: "O Sandalore é restrito pela IFRA para prevenir potenciais reações de sensibilização dermatológica crônica.",
            restricao: "Sujeito a limites máximos de segurança estipulados de acordo com a categoria de uso final (perfumaria fina, cremes, etc.).",
            solucao: "Respeitar as dosagens recomendadas (geralmente seguras até cerca de 2% a 5% da fórmula final dependendo do produto) para manter a fragrância segura."
        }
    },
    {
        id: "terpineol",
        nome: "TERPINEOL",
        subtitulo: "Alpha-Terpineol",
        nomeCientifico: "Sintético ou Isolado Natural de óleos de pinho",
        identificacao: {
            tipoMateriaPrima: "Sintético ou Isolado Natural derivado de terpenos de coníferas.",
            familiaOlfativa: "Floral / Herbal / Pinho.",
            aparencia: "Líquido incolor, altamente viscoso (pode cristalizar no frio devido à alta pureza)."
        },
        comportamento: {
            volatilidade: "Topo a Meio (Nota de Saída a Coração).",
            tenacidade: "Média-Baixa. Permanece perceptível na fita por cerca de 24 a 48 horas.",
            intensidade: "Médio a Alto (Escala: 6/10). Ótima projeção inicial.",
            diluicao: "Puro (100%) ou a 10% para facilitar o manuseio caso cristalize."
        },
        perfil: {
            descritores: "Lilás, Jacinto, Herbal, Cítrico-Pináceo, Difusivo.",
            nuances: "Odor floral clássico que remete diretamente a lilás e jacinto, combinado com facetas herbáceas, refrescantes, cítricas e um toque sutil, limpo e canforado de pinho."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Saída floral-aguda, penetrante, canforada e cítrica, com forte aspecto de frescor rústico."
            },
            {
                tempo: "30 min",
                descricao: "O aspecto canforado diminui drasticamente, abrindo espaço para um corpo floral doce de lilás e jacinto campestre."
            },
            {
                tempo: "2 horas",
                descricao: "Deixa um rastro floral-herbal limpo, transparente e sutil antes de dissipar-se."
            }
        ],
        aplicacao: {
            funcao: "Muito empregado para construir acordes florais pesados (como lilás, muguet, pinho fresco e florais brancos rústicos). Ajuda fortemente na difusão inicial e no volume da fórmula.",
            sinergias: "Sinergia perfeita com o Salicilato de Amila para criar corações florais-herbáceos vigorosos. Combina com a Bergamota para expandir o frescor de saída.",
            riscos: "Se usado sem o devido cuidado ou em excesso, puxa a fragrância imediatamente para o território funcional, lembrando desinfetantes domésticos de pinho ou lilás."
        },
        seguranca: {
            alerta: "O Alpha-Terpineol é geralmente considerado seguro e amplamente aceito na indústria de fragrâncias.",
            restricao: "Não possui restrições severas da IFRA, devendo-se monitorar a pureza do lote do fornecedor para evitar a oxidação de subprodutos.",
            solucao: "Manter o frasco bem vedado e protegido da luz para evitar a degradação e garantir uma performance olfativa limpa e segura."
        }
    },
    {
        id: "trimofix",
        nome: "TRIMOFIX",
        subtitulo: "Trimofix O / Fixamber (Methyl 2,4,2-trimethylcyclododecyl ketone)",
        nomeCientifico: "Sintético (Molécula isolada)",
        identificacao: {
            tipoMateriaPrima:
                "Sintético (Aromaquímico puro desenvolvido pela IFF).",
            familiaOlfativa:
                "Amadeirada / Âmbar.",
            aparencia:
                "Líquido viscoso, límpido, de coloração incolor a amarelada pálida."
        },
        comportamento: {
            volatilidade:
                "Fundo (Nota de Base / Fixador).",
            tenacidade:
                "Altíssima. Permanece perceptível na fita olfativa por mais de 400 horas (várias semanas). É um fixador de peso molecular elevado e evaporação extremamente lenta.",
            intensidade:
                "Médio-Alto (Escala: 6.5/10). Não obstrui a fragrância de imediato, mas cresce progressivamente à medida que as notas voláteis evaporam.",
            diluicao:
                "Pura (100%) para formulação direta em blocos amadeirados ou a 10% para manipulação e avaliação laboratorial devido à sua alta viscosidade."
        },
        perfil: {
            descritores:
                "Amadeirado seco, Âmbar cinzento, Tabaco, Almíscar sutil, Vetiver terroso.",
            nuances:
                "Exibe uma rica assinatura amadeirada que combina a secura do cedro e do vetiver com um calor ambarado e nuances sutis de tabaco seco. Compartilha certos aspetos olfativos com o rastro do âmbar cinzento natural, adicionando densidade e uma textura aveludada à base do perfume."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao:
                    "Abertura discreta e abafada, quase impercetível isoladamente na fita se houver notas voláteis presentes, revelando apenas um fundo seco e denso."
            },

            {
                tempo: "30 min",
                descricao:
                    "Começa a projetar um calor amadeirado persistente, ambarado e com toques secos que lembram fumo de tabaco refinado."
            },

            {
                tempo: "2 horas",
                descricao:
                    "Atinge a sua plenitude, estabelecendo uma fundação amadeirada-âmbar extremamente sólida, rica, envolvente e com excelente difusão residual."
            }
        ],
        aplicacao: {
            funcao:
                "O 'alicerce' estrutural da perfumaria. Atua como um fixador excecional de longo espetro, sendo ideal para prolongar a vida útil de fragrâncias e conferir corpo às famílias Fougère Oriental, Amadeirado, e composições masculinas modernas de grande impacto.",
            sinergias:
                "Cria uma união perfeita e amplifica o poder do Iso E Super e do Ambroxan, criando acordes amadeirados e ambarados que parecem tridimensionais. Excelente em conjunto com o óleo essencial de Patchouli ou de Cedro.",
            riscos:
                "O seu uso em excesso pode achatar o brilho floral ou cítrico do topo da fragrância, tornando a secagem (drydown) monótona, pesada ou excessivamente sintética e linear."
        },
        seguranca: {
            alerta:
                "O Trimofix possui restrições regulamentadas pela IFRA devido à presença de potenciais agentes sensibilizantes cutâneos.",
            restricao:
                "Limitado a uma concentração máxima segura no produto final aplicado na pele, variando conforme a categoria do cosmético (geralmente restrito a cerca de 1% a 2.5% na perfumaria fina).",
            solucao:
                "Consultar sempre os limites mais recentes da biblioteca de normas da IFRA para a categoria pretendida e ajustar a fórmula com precisão matemática, tirando partido do seu alto rendimento mesmo em doses moderadas."
        }
    },
    {
        id: "vanilina",
        nome: "VANILINA",
        subtitulo: "Vanillin / 4-hydroxy-3-methoxybenzaldehyde",
        nomeCientifico: "Sintético (Cristal isolado idêntico ao natural)",
        identificacao: {
            tipoMateriaPrima: "Sintético (Cristal puro ou em pó obtido por síntese).",
            familiaOlfativa: "Gourmand / Doce / Balsâmica.",
            aparencia: "Cristais brancos a levemente amarelados."
        },
        comportamento: {
            volatilidade: "Fundo (Nota de Base / Fixador Fundamental).",
            tenacidade: "Altíssima. Permanece perceptível na fita por mais de 400 horas (várias semanas).",
            intensidade: "Alto (Escala: 7/10). O odor é muito doce e expande com facilidade.",
            diluicao: "Altamente recomendado diluir a 10% ou 20% em DPG ou Álcool para uso prático na pesagem de bancada."
        },
        perfil: {
            descritores: "Doce, Baunilha pura, Cremoso, Confortável, Açucarado.",
            nuances: "Odor intensamente doce, cremoso, característico e puro da fava de baunilha natural. Apresenta nuances balsâmicas, açucaradas e de confeitaria fina, sem o lado defumado do absoluto natural."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Saída intensamente doce, leitosa e açucarada que imediatamente aquece e preenche o ambiente."
            },
            {
                tempo: "30 min",
                descricao: "Evolui para um corpo cremoso e aveludado de baunilha pura de confeitaria, trazendo uma sensação aconchegante."
            },
            {
                tempo: "2 horas",
                descricao: "Fixa-se com uma doçura balsâmica profunda, extremamente rica, cremosa e persistente por dias na pele."
            }
        ],
        aplicacao: {
            funcao: "Espinha dorsal indispensável de fragrâncias orientais, gourmands, âmbares e doces. Age como um fixador térmico pesado na pele.",
            sinergias: "Sinergia perfeita com o Rum para criar licores gourmands e com o Sandalore para fundar bases amadeiradas-cremosas. Une-se ao Musk T para criar fundos confortáveis.",
            riscos: "Nota Crítica de Bancada: Causa forte descoloração (o perfume escurece para âmbar, marrom escuro ou púrpura) ao longo do tempo em contato com a luz e o oxigênio. Pode soterrar notas sutis se usada em excesso."
        },
        seguranca: {
            alerta: "A Vanilina é restrita quantitativamente pela IFRA devido ao risco de induzir sensibilização cutânea.",
            restricao: "Sujeita a limites máximos permitidos calculados com base na aplicação final do produto cosmético.",
            solucao: "Formular dentro dos tetos estabelecidos pela IFRA e, para evitar o escurecimento do perfume líquido, pode-se usar estabilizantes de cor (antioxidantes/absorvedores de UV) ou substituir parcialmente por Etil Vanilina (que é mais forte e descolore um pouco menos, embora também mude de cor)."
        }
    },
    {
        id: "veramoss",
        nome: "VERAMOSS",
        subtitulo: "Veramoss (IFF) / Evernyl / Methyl atrarate",
        nomeCientifico: "Sintético (Molécula substituta estável)",
        identificacao: {
            tipoMateriaPrima: "Sintético (Aromaquímico puro em pó/cristal).",
            familiaOlfativa: "Musgo / Amadeirada / Terrosa.",
            aparencia: "Pó cristalino branco a esbranquiçado."
        },
        comportamento: {
            volatilidade: "Fundo (Nota de Base / Fixador Pesado).",
            tenacidade: "Altíssima. Permanece perceptível na fita por mais de 400 hours (várias semanas).",
            intensidade: "Médio a Alto (Escala: 6/10). Muito marcante e substantivo.",
            diluicao: "Altamente recomendado diluir a 10% ou 5% em DPG para facilitar a pesagem líquida precisa na bancada."
        },
        perfil: {
            descritores: "Musgo de carvalho, Terroso, Amadeirado, Fenólico, Marinho.",
            nuances: "Odor característico de musgo de carvalho limpo, amadeirado, terroso e ligeiramente fenólico/tinto, com sutis nuances marinhas ou salinas de algas secas."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Abertura limpa, seca, amadeirada com facetas de terra úmida e floresta sombria."
            },
            {
                tempo: "30 min",
                descricao: "Assenta num tom rico de musgo seco, trazendo um aspecto clássico, amargo e elegante de mata úmida."
            },
            {
                tempo: "2 horas",
                descricao: "Fixação extrema de musgo lenhoso e marinho sutil, conferindo uma base sólida, inabalável e texturizada."
            }
        ],
        aplicacao: {
            funcao: "Utilizado como um substituto seguro, estável e cristalino ao Musgo de Carvalho natural (Oakmoss), sendo a peça-chave insubstituível na criação de estruturas modernas e clássicas de Chipres e Fougères.",
            sinergias: "Link histórico inquebrável com o Salicilato de Amila e Cumarina (Fougère) e com o Iso E Super / Bergamota para estruturar o esqueleto de perfumes Chypres.",
            riscos: "Se usado puro em quantidades desmedidas, pode deixar o perfume com um aspecto excessivamente seco, amargo, áspero ou com cheiro forte de tinta e fenol."
        },
        seguranca: {
            alerta: "O Veramoss é restrito pela IFRA para prevenir o desencadeamento de alergias e sensibilização na pele.",
            restricao: "Possui limites claros de dosagem segura estabelecidos na biblioteca de padrões da IFRA, substituindo com grande vantagem de segurança o extrato natural bruto (altamente alergênico).",
            solucao: "Pesar através de diluições controladas a 10% e verificar o limite permitido na categoria de perfumaria fina para manter a conformidade legal do produto."
        }
    },
    {
        id: "verdox",
        nome: "VERDOX",
        subtitulo: "Verdox (IFF) / O-tert-Butylcyclohexyl acetate / Agrumex",
        nomeCientifico: "Sintético (Molécula esterificada desenvolvida pela IFF)",
        identificacao: {
            tipoMateriaPrima: "Sintético (Aromaquímico puro estável).",
            familiaOlfativa: "Frutada / Verde / Conífera.",
            aparencia: "Líquido límpido e incolor de baixa viscosidade."
        },
        comportamento: {
            volatilidade: "Topo a Meio (Nota de Saída a Coração).",
            tenacidade: "Média. Permanece perceptível na fita por cerca de 24 a 48 horas.",
            intensidade: "Alto (Escala: 7/10). Projeta intensamente nos primeiros minutos.",
            diluicao: "Puro (100%) devido ao seu perfil equilibrado e comercial."
        },
        perfil: {
            descritores: "Maçã verde, Pera madura, Frutado, Amadeirado seco, Crocante.",
            nuances: "Odor frutado marcante e crocante de maçã verde madura e pera doce, intimamente associado a nuances amadeiradas secas, limpas e de agulhas de pinho fresco."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Uma explosão frutada crocante, suculenta, azedinha e alegre de casca de maçã verde."
            },
            {
                tempo: "30 min",
                descricao: "O lado suculento diminui, revelando um corpo amadeirado frutado seco, limpo e ligeiramente pináceo."
            },
            {
                tempo: "2 horas",
                descricao: "Resta uma nuance frutada-amadeirada muito limpa e confortável antes de fundir-se totalmente à base."
            }
        ],
        aplicacao: {
            funcao: "Muito versátil. Ideal para trazer uma assinatura frutada fresca, limpa e crocante a linhas de perfumaria fina, cuidados pessoais e funcionais, sem a doçura pesada de bagas.",
            sinergias: "Funciona muito bem com o Limoneno para criar saídas cítricas-frutadas estimulantes e com o Iso E Super para prolongar o caráter amadeirado-frutado seco.",
            riscos: "Por ser muito comercial e amplamente usado em xampus e sabonetes, uma dosagem desequilibrada pode remeter a fragrâncias baratas de produtos de higiene pessoal de massa."
        },
        seguranca: {
            alerta: "O Verdox é amplamente reconhecido como um ingrediente seguro para o uso em contato com a pele.",
            restricao: "Permitido sem restrições severas ou tetos quantitativos drásticos pelas diretrizes vigentes da IFRA quando usado sob as boas práticas.",
            solucao: "Pode ser trabalhado livremente na bancada como pilar frutado de saída para dar volume e impacto inicial às criações."
        }
    },
    {
        id: "vertofix",
        nome: "VERTOFIX",
        subtitulo: "Vertofix Coeur (IFF) / Methyl Cedryl Ketone",
        nomeCientifico: "Sintético (Derivado obtido por acetilação do óleo de cedro)",
        identificacao: {
            tipoMateriaPrima: "Sintético (Derivado de fonte natural renovável/Cedro).",
            familiaOlfativa: "Amadeirada.",
            aparencia: "Líquido viscoso de cor âmbar claro a amarelado."
        },
        comportamento: {
            volatilidade: "Fundo (Nota de Base / Fixador Pesado).",
            tenacidade: "Altíssima. Permanece perceptível na fita por mais de 300 horas.",
            intensidade: "Médio (Escala: 5/10). Alta substantividade com liberação lenta e constante.",
            diluicao: "Puro (100%) devido ao seu papel estrutural volumoso na base."
        },
        perfil: {
            descritores: "Cedro rico, Seco, Especiado, Couro, Ambarado.",
            nuances: "Odor amadeirado de cedro rico, nobre e seco, com facetas quentes, especiadas, coriáceas (couro) e um sutil fundo ambarado e de vetiver terroso."
        },
        evolucao: [
            {
                tempo: "0 min",
                descricao: "Abertura amadeirada densa, austera, seca e ligeiramente picante de serragem de cedro."
            },
            {
                tempo: "30 min",
                descricao: "Aquece significativamente, revelando nuances ricas de couro macio, âmbar e toques especiados confortáveis."
            },
            {
                tempo: "2 horas",
                descricao: "Estabelece uma base amadeirada nobre, macia, persistente e de grande textura masculina e luxuosa."
            }
        ],
        aplicacao: {
            funcao: "Excelente fixador e modificador de notas amadeiradas brutas. Adiciona corpo, calor, sofisticação e textura aveludada a perfumes masculinos, orientais e compartilhados.",
            sinergias: "Sinergia extraordinária com o Iso E Super (criando o famoso bloco amadeirado moderno e difusivo) e com o Trimofix para bases ambaradas. Harmoniza com a Isobutyl Quinoline.",
            riscos: "Se usado de forma exagerada em fórmulas delicadas, pode 'secar' demais o perfume, roubando o frescor das notas florais e cítricas de topo."
        },
        seguranca: {
            alerta: "O Methyl Cedryl Ketone é restrito pela IFRA devido ao seu potencial de causar sensibilização cutânea por contato continuado.",
            restricao: "Deve ser monitorado e limitado de acordo com as porcentagens máximas estipuladas pela IFRA para a Categoria 4 (perfumaria fina).",
            solucao: "Checar os tetos regulatórios do produto final e formular o concentrado garantindo que a aplicação final na pele esteja dentro das margens seguras da legislação."
        }
    }
];