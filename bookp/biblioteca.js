// =============================================
// BANCO DE DADOS — 20 LIVROS
// =============================================
// Para adicionar a capa de cada livro:
// substitua o valor de "capa" pelo caminho da imagem (ex: "capas/livro1.jpg")
// Enquanto não houver imagem, um placeholder estilizado é exibido automaticamente.

const livros = [
    {
        id: 1,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        genero: "Literatura Brasileira",
        sinopse: "A história narrada por Bentinho, que passa a se chamar Dom Casmurro, sobre seu amor por Capitu e a dúvida que o consome por toda a vida.",
        capa: "imagens/dom-casmurro.jpg" // COLOQUE AQUI: "capas/dom-casmurro.jpg"
    },
    {
        id: 2,
        titulo: "Grande Sertão: Veredas",
        autor: "Guimarães Rosa",
        genero: "Literatura Brasileira",
        sinopse: "O jagunço Riobaldo narra sua vida no sertão mineiro, suas batalhas, amores e o pacto que pode ou não ter feito com o diabo.",
        capa: "imagens/grande-sertao.jpg" // COLOQUE AQUI: "capas/grande-sertao.jpg"
    },
    {
        id: 3,
        titulo: "1984",
        autor: "George Orwell",
        genero: "Distopia",
        sinopse: "Em um futuro sombrio dominado pelo Partido e pelo Grande Irmão, Winston Smith tenta preservar sua humanidade e liberdade de pensamento.",
        capa: "imagens/1984.jpg" // COLOQUE AQUI: "capas/1984.jpg"
    },
    {
        id: 4,
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        genero: "Fantasia",
        sinopse: "A épica jornada de Frodo Bolseiro para destruir o Um Anel e salvar a Terra-média das garras do Senhor das Trevas Sauron.",
        capa: "imagens/senhor-aneis.jpg" // COLOQUE AQUI: "capas/senhor-dos-aneis.jpg"
    },
    {
        id: 5,
        titulo: "Cem Anos de Solidão",
        autor: "Gabriel García Márquez",
        genero: "Clássicos",
        sinopse: "A saga da família Buendía ao longo de sete gerações na cidade fictícia de Macondo, obra-prima do realismo mágico.",
        capa: "imagens/cem-anos.jpg" // COLOQUE AQUI: "capas/cem-anos.jpg"
    },
    {
        id: 6,
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        genero: "Fantasia",
        sinopse: "Um menino que descobre ser um bruxo e ingressa na Escola de Magia e Bruxaria de Hogwarts, enfrentando seu primeiro grande desafio.",
        capa: "imagens/harry.jpg" // COLOQUE AQUI: "capas/harry-potter-1.jpg"
    },
    {
        id: 7,
        titulo: "Duna",
        autor: "Frank Herbert",
        genero: "Ficção Científica",
        sinopse: "No planeta deserto de Arrakis, Paul Atreides enfrenta intrigas políticas e assume seu destino como líder messiânico dos Fremen.",
        capa: "imagens/duna.jpg" // COLOQUE AQUI: "capas/duna.jpg"
    },
    {
        id: 8,
        titulo: "Orgulho e Preconceito",
        autor: "Jane Austen",
        genero: "Romance",
        sinopse: "Elizabeth Bennet e o altivo Sr. Darcy navegam por mal-entendidos, preconceitos sociais e sentimentos que transformam ambos.",
        capa: "imagens/orgulho.jpg" // COLOQUE AQUI: "capas/orgulho-preconceito.jpg"
    },
    {
        id: 9,
        titulo: "It: A Coisa",
        autor: "Stephen King",
        genero: "Terror",
        sinopse: "Em Derry, Maine, um grupo de crianças enfrenta uma entidade maligna que se manifesta como seus maiores medos, especialmente como um palhaço.",
        capa: "imagens/it.jpg" // COLOQUE AQUI: "capas/it.jpg"
    },
    {
        id: 10,
        titulo: "O Nome do Vento",
        autor: "Patrick Rothfuss",
        genero: "Fantasia",
        sinopse: "Kvothe narra sua própria lenda: de orphão nas ruas a estudante na Universidade e por fim o mago mais temido do mundo.",
        capa: "imagens/vento.jpg" // COLOQUE AQUI: "capas/nome-do-vento.jpg"
    },
    {
        id: 11,
        titulo: "Admirável Mundo Novo",
        autor: "Aldous Huxley",
        genero: "Distopia",
        sinopse: "Uma sociedade futurista tecnologicamente perfeita onde a felicidade é compulsória e a individualidade foi completamente eliminada.",
        capa: "imagens/novo.jpg" // COLOQUE AQUI: "capas/admiravel-mundo-novo.jpg"
    },
    {
        id: 12,
        titulo: "O Alquimista",
        autor: "Paulo Coelho",
        genero: "Autoajuda",
        sinopse: "Santiago, um pastor andaluz, parte em busca de um tesouro e descobre que a maior riqueza está na jornada e em si mesmo.",
        capa: "imagens/alquimia.jpg" // COLOQUE AQUI: "capas/o-alquimista.jpg"
    },
    {
        id: 13,
        titulo: "Crime e Castigo",
        autor: "Fiódor Dostoiévski",
        genero: "Clássicos",
        sinopse: "Raskólnikov acredita que homens superiores estão acima da lei e comete um assassinato — e então enfrenta a culpa que o devora.",
        capa: "imagens/crime.jpg" // COLOQUE AQUI: "capas/crime-e-castigo.jpg"
    },
    {
        id: 14,
        titulo: "Fundação",
        autor: "Isaac Asimov",
        genero: "Ficção Científica",
        sinopse: "O cientista Hari Seldon prevê a queda do Império Galáctico e cria a Fundação para preservar o conhecimento da humanidade.",
        capa: "imagens/fundacao.jpg" // COLOQUE AQUI: "capas/fundacao.jpg"
    },
    {
        id: 15,
        titulo: "Vidas Secas",
        autor: "Graciliano Ramos",
        genero: "Literatura Brasileira",
        sinopse: "A família de Fabiano e Sinhá Vitória foge da seca nordestina em busca de sobrevivência, numa narrativa crua e poderosa.",
        capa: "imagens/vida.jpg" // COLOQUE AQUI: "capas/vidas-secas.jpg"
    },
    {
        id: 16,
        titulo: "O Iluminado",
        autor: "Stephen King",
        genero: "Terror",
        sinopse: "Jack Torrance aceita o cargo de zelador de inverno do Hotel Overlook, mas as forças sobrenaturais do lugar ameaçam destruir sua família.",
        capa: "imagens/iluminado.jpg" // COLOQUE AQUI: "capas/o-iluminado.jpg"
    },
    {
        id: 17,
        titulo: "Assassinato no Expresso do Oriente",
        autor: "Agatha Christie",
        genero: "Policial",
        sinopse: "O detetive Hercule Poirot investiga um assassinato a bordo do famoso trem, onde todos os passageiros são suspeitos.",
        capa: "imagens/assassinato.jpg" // COLOQUE AQUI: "capas/expresso-oriente.jpg"
    },
    {
        id: 18,
        titulo: "A Hora da Estrela",
        autor: "Clarice Lispector",
        genero: "Literatura Brasileira",
        sinopse: "Macabéa, uma nordestina ingênua vivendo no Rio de Janeiro, existe na margem do mundo — e sua história questiona o ato de narrar.",
        capa: "imagens/hora-da-star.jpeg" // COLOQUE AQUI: "capas/hora-da-estrela.jpg"
    },
    {
        id: 19,
        titulo: "O Conto da Aia",
        autor: "Margaret Atwood",
        genero: "Distopia",
        sinopse: "Na República de Gilead, mulheres são reduzidas a funções reprodutivas. Offred resiste em silêncio enquanto tenta sobreviver.",
        capa: "imagens/aia.jpg" // COLOQUE AQUI: "capas/conto-da-aia.jpg"
    },
    {
        id: 20,
        titulo: "Os Homens que Não Amavam as Mulheres",
        autor: "Stieg Larsson",
        genero: "Policial",
        sinopse: "O jornalista Mikael Blomkvist e a hacker Lisbeth Salander investigam o desaparecimento de uma jovem décadas atrás numa família poderosa.",
        capa: "imagens/homens.jpg" // COLOQUE AQUI: "capas/millennium.jpg"
    }
];

// =============================================
// MAPA DE ÍCONES POR GÊNERO
// =============================================
const iconeGenero = {
    "Literatura Brasileira": "🇧🇷",
    "Clássicos":             "📜",
    "Romance":               "💛",
    "Fantasia":              "🧙",
    "Ficção Científica":     "🚀",
    "Terror":                "👻",
    "Policial":              "🔎",
    "Autoajuda":             "✨",
    "Distopia":              "⚙️",
    "Poesia":                "🌸",
    "Biografia":             "📖",
    "História":              "🏛️"
};

// =============================================
// PALETA DE CORES POR GÊNERO (para placeholder de capa)
// =============================================
const corGenero = {
    "Literatura Brasileira": ["#3A7D44", "#52B788"],
    "Clássicos":             ["#5C4033", "#8D6E63"],
    "Romance":               ["#B5338A", "#E91E8C"],
    "Fantasia":              ["#4A148C", "#7B1FA2"],
    "Ficção Científica":     ["#0D47A1", "#1565C0"],
    "Terror":                ["#1A1A1A", "#4A1A1A"],
    "Policial":              ["#263238", "#37474F"],
    "Autoajuda":             ["#E65100", "#F57C00"],
    "Distopia":              ["#37474F", "#546E7A"],
    "Poesia":                ["#880E4F", "#AD1457"],
    "Biografia":             ["#1B5E20", "#2E7D32"],
    "História":              ["#4E342E", "#6D4C41"]
};

// =============================================
// ESTADO
// =============================================
let generoAtivo   = null;
let termoBusca    = "";

// =============================================
// INTEGRAÇÃO COM CADASTRO — recupera o nome
// =============================================
function carregarNomeUsuario() {
    // Tenta recuperar o nome salvo pelo formulário de cadastro
    // O form de cadastro usa o campo #nomeCompleto — ao submeter com sucesso
    // ele poderia salvar em localStorage. Aqui lemos essa chave.
    const nomeSalvo = localStorage.getItem("bookleaf_nome") || "";
    const primeiroNome = nomeSalvo.split(" ")[0] || "Visitante";

    const elNome = document.getElementById("userNome");
    if (elNome) elNome.textContent = primeiroNome;

    // Foto do usuário — se salva, exibe
    const fotoSalva = localStorage.getItem("bookleaf_foto") || "";
    if (fotoSalva) {
        const img = document.getElementById("avatarImg");
        const placeholder = document.getElementById("avatarPlaceholder");
        if (img && placeholder) {
            img.src = fotoSalva;
            img.style.display = "block";
            placeholder.style.display = "none";
        }
    }
}

// =============================================
// NAVBAR — efeito scroll
// =============================================
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 20) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
});

// =============================================
// EXTRAIR GÊNEROS ÚNICOS (ordenados)
// =============================================
function extrairGeneros() {
    const map = {};
    livros.forEach(l => {
        map[l.genero] = (map[l.genero] || 0) + 1;
    });
    return Object.entries(map)
        .sort((a, b) => a[0].localeCompare(b[0], "pt"))
        .map(([nome, qtd]) => ({ nome, qtd }));
}

// =============================================
// RENDERIZAR CHIPS DE GÊNERO
// =============================================
function renderizarGeneros() {
    const container = document.getElementById("generoLista");
    const generos = extrairGeneros();

    container.innerHTML = "";
    generos.forEach(({ nome, qtd }) => {
        const chip = document.createElement("button");
        chip.className = "genero-chip" + (generoAtivo === nome ? " ativo" : "");
        chip.setAttribute("aria-pressed", generoAtivo === nome);
        chip.innerHTML = `
            <span class="genero-chip-icone">${iconeGenero[nome] || "📚"}</span>
            ${nome}
            <span class="genero-chip-qtd">${qtd}</span>
        `;
        chip.addEventListener("click", () => toggleGenero(nome));
        container.appendChild(chip);
    });
}

// =============================================
// TOGGLE GÊNERO (filtro)
// =============================================
function toggleGenero(nome) {
    generoAtivo = generoAtivo === nome ? null : nome;
    renderizarGeneros();
    renderizarResultado();
}

// =============================================
// RENDERIZAR SEÇÃO DE RESULTADO DO FILTRO
// =============================================
function renderizarResultado() {
    const secao  = document.getElementById("secaoResultado");
    const titulo = document.getElementById("resultadoTitulo");
    const grid   = document.getElementById("resultadoGrid");

    if (!generoAtivo) {
        secao.style.display = "none";
        return;
    }

    // Filtra e ordena alfabeticamente
    const filtrados = livros
        .filter(l => l.genero === generoAtivo)
        .sort((a, b) => a.titulo.localeCompare(b.titulo, "pt"));

    titulo.textContent = `${iconeGenero[generoAtivo] || "📚"} ${generoAtivo}`;
    grid.innerHTML     = "";

    filtrados.forEach((livro, i) => {
        const card = criarCard(livro, i);
        grid.appendChild(card);
    });

    secao.style.display = "block";
    secao.scrollIntoView({ behavior: "smooth", block: "start" });
}

// =============================================
// RENDERIZAR ACERVO COMPLETO
// =============================================
function renderizarAcervo(lista) {
    const grid = document.getElementById("livrosGrid");
    grid.innerHTML = "";

    if (lista.length === 0) {
        grid.innerHTML = '<p class="vazio-msg">Nenhum livro encontrado para esta busca.</p>';
        return;
    }

    // Ordena alfabeticamente por título
    const ordenados = [...lista].sort((a, b) => a.titulo.localeCompare(b.titulo, "pt"));

    ordenados.forEach((livro, i) => {
        const card = criarCard(livro, i);
        grid.appendChild(card);
    });
}

// =============================================
// CRIAR CARD DE LIVRO
// =============================================
function criarCard(livro, indice) {
    const cores = corGenero[livro.genero] || ["#C8710A", "#E8940E"];
    const temCapa = !!livro.capa;

    const card = document.createElement("article");
    card.className = "livro-card";
    card.style.animationDelay = `${indice * 0.06}s`;
    card.setAttribute("data-id", livro.id);
    card.setAttribute("data-genero", livro.genero);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${livro.titulo} de ${livro.autor}`);

    card.innerHTML = `
        <div class="livro-capa" style="background: linear-gradient(160deg, ${cores[0]}, ${cores[1]});">
            ${temCapa
                ? `<img class="livro-capa-img" src="${livro.capa}" alt="Capa de ${livro.titulo}" loading="lazy">`
                : `<div class="capa-placeholder">
                       <span class="capa-placeholder-icone">${iconeGenero[livro.genero] || "📚"}</span>
                       <span class="capa-placeholder-titulo">${livro.titulo}</span>
                   </div>`
            }
            <span class="livro-badge">${livro.genero}</span>
            <div class="livro-overlay">
                <p class="livro-overlay-titulo">${livro.titulo}</p>
                <p class="livro-overlay-autor">${livro.autor}</p>
                <p class="livro-overlay-sinopse">${livro.sinopse}</p>
            </div>
        </div>
        <div class="livro-info">
            <p class="livro-titulo">${livro.titulo}</p>
            <p class="livro-autor">${livro.autor}</p>
            <span class="livro-genero-tag">${livro.genero}</span>
        </div>
    `;

    return card;
}

// =============================================
// BUSCA
// =============================================
function realizarBusca(termo) {
    termoBusca = termo.trim().toLowerCase();
    if (!termoBusca) {
        renderizarAcervo(livros);
        return;
    }
    const filtrados = livros.filter(l =>
        l.titulo.toLowerCase().includes(termoBusca) ||
        l.autor.toLowerCase().includes(termoBusca) ||
        l.genero.toLowerCase().includes(termoBusca) ||
        l.sinopse.toLowerCase().includes(termoBusca)
    );
    renderizarAcervo(filtrados);

    // Scroll suave até o acervo
    document.getElementById("secao-livros").scrollIntoView({ behavior: "smooth", block: "start" });
}

// =============================================
// EVENTOS — BUSCA
// =============================================
document.getElementById("searchBtn").addEventListener("click", () => {
    realizarBusca(document.getElementById("searchInput").value);
});

document.getElementById("searchInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") realizarBusca(e.target.value);
});

// Busca em tempo real com debounce
let debounceTimer;
document.getElementById("searchInput").addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => realizarBusca(e.target.value), 320);
});

// =============================================
// BOTÃO LIMPAR FILTRO
// =============================================
document.getElementById("btnLimparFiltro").addEventListener("click", () => {
    generoAtivo = null;
    renderizarGeneros();
    renderizarResultado();
});

// =============================================
// INICIALIZAÇÃO
// =============================================
document.addEventListener("DOMContentLoaded", () => {
    carregarNomeUsuario();
    renderizarGeneros();
    renderizarAcervo(livros);
});