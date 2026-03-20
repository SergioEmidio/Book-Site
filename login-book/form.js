// =============================================
// NOME COMPLETO
// =============================================

const nomeInput = document.getElementById("nomeCompleto");
const nomeErro = document.getElementById("nomeErro");

// Formata apenas removendo caracteres inválidos, SEM destruir espaços em progresso
// A formatação completa (capitalização) só acontece no blur
function limparCaracteresInvalidos(nome) {
    return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
}

// Formata o nome completo com capitalização — aplicado só ao sair do campo
function formatarNomeCompleto(nome) {
    return nome
        .toLowerCase()
        .split(" ")
        .filter(p => p.length > 0)
        .map(p => p.charAt(0).toUpperCase() + p.slice(1))
        .join(" ");
}

function validarNome() {
    const nome = nomeInput.value.trim();
    const partes = nome.split(" ").filter(p => p.length > 0);

    if (nome === "") {
        nomeErro.textContent = "Por favor, preencha seu nome completo.";
        nomeErro.style.display = "block";
        nomeInput.setCustomValidity("erro");
        return false;
    }

    if (partes.length < 2) {
        nomeErro.textContent = "Digite seu nome completo (nome e sobrenome).";
        nomeErro.style.display = "block";
        nomeInput.setCustomValidity("erro");
        return false;
    }

    nomeErro.style.display = "none";
    nomeInput.setCustomValidity("");
    return true;
}

// Durante a digitação: só remove caracteres inválidos, preserva espaços intermediários
nomeInput.addEventListener("input", () => {
    const cursor = nomeInput.selectionStart;
    const valorLimpo = limparCaracteresInvalidos(nomeInput.value);
    nomeInput.value = valorLimpo;
    nomeInput.setSelectionRange(cursor, cursor);
    validarNome();
});

// Ao sair do campo: aplica a formatação completa com capitalização
nomeInput.addEventListener("blur", () => {
    nomeInput.value = formatarNomeCompleto(nomeInput.value);
    validarNome();
});


// =============================================
// DATA DE NASCIMENTO
// =============================================

const dataInput = document.getElementById("dataNascimento");
const dataErro = document.getElementById("dataErro");

dataInput.max = new Date().toISOString().split("T")[0];

function calcularIdade(data) {
    const hoje = new Date();
    const nascimento = new Date(data);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
}

function validarData() {
    const valor = dataInput.value;

    if (!valor) {
        dataErro.textContent = "Por favor, preencha sua data de nascimento.";
        dataErro.style.display = "block";
        dataInput.setCustomValidity("erro");
        return false;
    }

    const idade = calcularIdade(valor);

    if (idade < 0) {
        dataErro.textContent = "Data inválida (não pode ser no futuro).";
        dataErro.style.display = "block";
        dataInput.setCustomValidity("erro");
        return false;
    }

    if (idade > 122) {
        dataErro.textContent = "Coloque uma idade válida, tente novamente!";
        dataErro.style.display = "block";
        dataInput.setCustomValidity("erro");
        return false;
    }

    dataErro.style.display = "none";
    dataInput.setCustomValidity("");
    return true;
}

dataInput.addEventListener("change", validarData);
dataInput.addEventListener("blur", validarData);


// =============================================
// E-MAIL
// =============================================

const emailInput = document.getElementById("email");
const helpText = document.getElementById("emailHelp");

emailInput.addEventListener("focus", () => {
    helpText.style.display = "block";
});

emailInput.addEventListener("blur", () => {
    helpText.style.display = "none";
});

emailInput.addEventListener("input", () => {
    const email = emailInput.value;
    const regex = /^[a-z0-9._%+-]+@(gmail|hotmail)\.com$/;

    if (email === "") {
        emailInput.setCustomValidity("Por favor, preencha o e-mail.");
    } else if (!regex.test(email)) {
        emailInput.setCustomValidity("Use apenas Gmail ou Hotmail válidos (ex: exemplo@gmail.com).");
    } else {
        emailInput.setCustomValidity("");
    }
});


// =============================================
// TELEFONE
// =============================================

const phoneInput = document.getElementById("phone");
const phoneErro = document.getElementById("phoneErro");

const ddds = {
    "11": "sp",
    "12": "sp",
    "13": "sp",
    "14": "sp",
    "15": "sp",
    "16": "sp",
    "17": "sp",
    "18": "sp",
    "19": "sp",
    "21": "rj",
    "22": "rj",
    "24": "rj",
    "27": "es",
    "28": "es",
    "31": "mg",
    "32": "mg",
    "33": "mg",
    "34": "mg",
    "35": "mg",
    "37": "mg",
    "38": "mg",
    "41": "pr",
    "42": "pr",
    "43": "pr",
    "44": "pr",
    "45": "pr",
    "46": "pr",
    "47": "sc",
    "48": "sc",
    "49": "sc",
    "51": "rs",
    "53": "rs",
    "54": "rs",
    "55": "rs",
    "61": "df",
    "62": "go",
    "64": "go",
    "63": "to",
    "65": "mt",
    "66": "mt",
    "67": "ms",
    "68": "ac",
    "69": "ro",
    "71": "ba",
    "73": "ba",
    "74": "ba",
    "75": "ba",
    "77": "ba",
    "79": "se",
    "81": "pe",
    "87": "pe",
    "82": "al",
    "83": "pb",
    "84": "rn",
    "85": "ce",
    "88": "ce",
    "86": "pi",
    "89": "pi",
    "91": "pa",
    "93": "pa",
    "94": "pa",
    "92": "am",
    "97": "am",
    "95": "rr",
    "96": "ap",
    "98": "ma",
    "99": "ma"
};

// Extrai só os dígitos que o usuário digitou, ignorando o prefixo +55
function extrairDigitos(valor) {
    // Remove tudo que não é dígito
    let digitos = valor.replace(/\D/g, "");
    // Se o usuário colou o número com 55 na frente, remove
    if (digitos.startsWith("55") && digitos.length > 11) {
        digitos = digitos.slice(2);
    }
    return digitos;
}

// Monta a máscara visual a partir dos dígitos puros
function aplicarMascara(digitos) {
    if (digitos.length === 0) return "";

    let resultado = "(" + digitos.substring(0, 2);

    if (digitos.length >= 2) resultado += ") ";

    if (digitos.length > 6) {
        resultado += digitos.substring(2, 7) + "-" + digitos.substring(7, 11);
    } else if (digitos.length > 2) {
        resultado += digitos.substring(2);
    }

    return resultado;
}

phoneInput.addEventListener("input", () => {
    // 1. Pega o que o usuário digitou e extrai só os números
    let digitos = extrairDigitos(phoneInput.value);

    // 2. Limita a 11 dígitos (DDD + 9 dígitos do celular)
    if (digitos.length > 11) digitos = digitos.slice(0, 11);

    // 3. Aplica a máscara e atualiza o campo
    phoneInput.value = aplicarMascara(digitos);

    // 4. Valida com os dígitos limpos
    validarTelefone(digitos);
});

function validarTelefone(digitos) {
    // Campo vazio — mostra erro só ao sair (blur), aqui fica silencioso
    if (!digitos || digitos.length === 0) {
        phoneErro.style.display = "none";
        phoneInput.setCustomValidity("erro");
        return false;
    }

    // DDD ainda incompleto — sem mensagem agressiva enquanto digita
    if (digitos.length < 2) {
        phoneErro.style.display = "none";
        phoneInput.setCustomValidity("erro");
        return false;
    }

    const ddd = digitos.substring(0, 2);

    // Valida DDD apenas quando os 2 primeiros dígitos estão completos
    if (!ddds[ddd]) {
        phoneErro.textContent = "DDD inválido. Apague e corrija os dois primeiros dígitos.";
        phoneErro.style.display = "block";
        phoneInput.setCustomValidity("erro");
        return false;
    }

    // Número ainda incompleto — silencioso enquanto digita
    if (digitos.length < 10) {
        phoneErro.style.display = "none";
        phoneInput.setCustomValidity("erro");
        return false;
    }

    if (digitos.length !== 10 && digitos.length !== 11) {
        phoneErro.textContent = "Número incorreto. Verifique e tente novamente.";
        phoneErro.style.display = "block";
        phoneInput.setCustomValidity("erro");
        return false;
    }

    if (digitos.length === 11 && digitos[2] !== "9") {
        phoneErro.textContent = "Celular inválido — o número deve começar com 9 após o DDD.";
        phoneErro.style.display = "block";
        phoneInput.setCustomValidity("erro");
        return false;
    }

    phoneErro.style.display = "none";
    phoneInput.setCustomValidity("");
    return true;
}

// Ao sair do campo: mostra erro de campo vazio se necessário
phoneInput.addEventListener("blur", () => {
    const digitos = extrairDigitos(phoneInput.value);

    if (!digitos || digitos.length === 0) {
        phoneErro.textContent = "Por favor, preencha o telefone.";
        phoneErro.style.display = "block";
        phoneInput.setCustomValidity("erro");
        return;
    }

    validarTelefone(digitos);
});


// =============================================
// SISTEMA LITERÁRIO — BANCO DE DADOS
// =============================================

const dbLivros = {
    "Ação": ["O Conde de Monte Cristo", "Moby Dick", "A Ilha do Tesouro", "As Minas do Rei Salomão", "Scaramouche", "Os Três Mosqueteiros", "O Chamado da Floresta", "Robinson Crusoé", "Ivanhoé", "Ben-Hur", "O Prisioneiro de Zenda", "O Capitão Fracasso", "A Flecha Negra", "O Gavião do Mar", "Odisséia", "As Aventuras de Huckleberry Finn", "O Último dos Moicanos", "Tarzan dos Macacos", "Kim", "Capitão Blood", "O Falcão Maltês", "O Almirante Flutuante", "A Sombra do Vento", "O Nome da Rosa", "O Código Da Vinci", "Anjos e Demônios", "O Alquimista", "A Jornada", "O Fugitivo", "O Homem de Giz", "A Corrente", "O Oitavo Dia", "O Destino do Poseidon", "Tubarão", "Jurassic Park", "Esfera", "Congo", "Linha do Tempo", "Resgate no Tempo", "O Enigma de Andrômeda"],
    "Aventura": ["Viagem ao Centro da Terra", "Vinte Mil Léguas Submarinas", "A Volta ao Mundo em 80 Dias", "A Ilha Misteriosa", "Cinco Semanas em um Balão", "Miguel Strogoff", "Da Terra à Lua", "O Farol no Fim do Mundo", "Robur, o Conquistador", "As Minas do Rei Salomão", "Allan Quatermain", "Ela", "O Mundo Perdido", "As Aventuras de Tom Sawyer", "As Aventuras de Robinson Crusoé", "O Senhor das Moscas", "Na Natureza Selvagem", "A Vida de Pi", "O Alquimista", "Sidarta", "O Pequeno Príncipe", "Dom Quixote", "Gulliver", "Coração das Trevas", "Lorde Jim", "Nostromo", "O Agente Secreto", "Vitória", "Sob os Olhos do Ocidente", "A Linha de Sombra", "O Espelho do Mar", "O Negro do Narciso", "Tufão", "Mocidade", "Fim da Partida", "Crônica Pessoal", "Entre Terra e Mar", "Notas de Vida e Letras", "Últimos Ensaios", "Contos de Inquietude"],
    "Autoajuda": ["O Poder do Hábito", "Pai Rico, Pai Pobre", "Os 7 Hábitos das Pessoas Altamente Eficazes", "Como Fazer Amigos e Influenciar Pessoas", "A Sutil Arte de Ligar o Foda-se", "O Milagre da Manhã", "Ansiedade: Como enfrentar o mal do século", "O Poder do Agora", "Mindset", "Essencialismo", "A Coragem de ser Imperfeito", "Roube como um Artista", "Quem pensa enriquece", "O Homem mais rico da Babilônia", "O Monge e o Executivo", "O Jeito Harvard de ser Feliz", "A Arte da Felicidade", "Desperte seu Gigante Interior", "As Armas da Persuasão", "Faça como Steve Jobs", "A Terceira Medida", "A Dieta Mental", "Limite Zero", "O Segredo", "A Lei da Atração", "O Efeito Sombra", "Conversando com Deus", "Um Curso em Milagres", "A Cabana", "O Profeta", "Manual do Guerreiro da Luz", "Onze Minutos", "O Diário de um Mago", "As Valkírias", "Maktub", "O Monte Cinco", "Veronika Decide Morrer", "O Demônio e a Srta Prym", "A Bruxa de Portobello", "O Vencedor Está Só"],
    "Biografia": ["Steve Jobs", "O Diário de Anne Frank", "Einstein: Sua Vida", "Malala", "Longo Caminho para a Liberdade", "Leonardo da Vinci", "O Povo Brasileiro", "Rita Lee: Uma Autobiografia", "Open", "A Todo Vapor", "Elis Regina: Nada Será Como Antes", "Chatô, o Rei do Brasil", "Marighella", "Sapiens", "Hebe: A Biografia", "Furacão Elis", "Michelle Obama: Minha História", "Barack Obama: Uma Terra Prometida", "Churchill: Caminhando com o Destino", "Hitler (Ian Kershaw)", "Stalin (Simon Sebag)", "Mussolini (R.J.B. Bosworth)", "Napoleão (Andrew Roberts)", "Alexandre o Grande", "César (Adrian Goldsworthy)", "Augusto (Anthony Everitt)", "Cleópatra (Stacy Schiff)", "Elizabeth I", "Catarina a Grande", "Pedro o Grande", "Lincoln (Doris Kearns)", "Franklin D. Roosevelt", "John F. Kennedy", "Martin Luther King Jr.", "Malcolm X", "Gandhi", "Nelson Mandela", "Teresa de Calcutá", "Dalai Lama", "Papa Francisco"],
    "Clássicos": ["Orgulho e Preconceito", "1984", "O Grande Gatsby", "Crime e Castigo", "Jane Eyre", "Guerra e Paz", "Ulysses", "Moby Dick", "Cem Anos de Solidão", "A Metamorfose", "O Retrato de Dorian Gray", "Em Busca do Tempo Perdido", "Cândido", "O Estrangeiro", "O Processo", "Irmãos Karamazov", "A Letra Escarlate", "O Morro dos Ventos Uivantes", "Os Miseráveis", "Don Quixote", "Madame Bovary", "Anna Karenina", "O Vermelho e o Negro", "Pai Goriot", "Ilusões Perdidas", "A Comédia Humana", "Fausto", "A Divina Comédia", "Paraíso Perdido", "Odisseia", "Ilíada", "Eneida", "Édipo Rei", "Medeia", "Antígona", "Lisístrata", "Nuvens", "Rãs", "Aves", "Acarnenses"],
    "Crônica": ["A Vida como ela é", "Para Gostar de Ler", "O Homem Nu", "Ai de ti, Copacabana", "A Menina sem Estrela", "Comédias da Vida Privada", "O Padeiro de Sevilla", "As Mentiras que os Homens Contam", "A Noite das Mulheres Cantoras", "O Rei dos Judeus", "Crônicas da Província", "Bala na Agulha", "O Inverno das Fadas", "A Sangue Frio", "O Espírito das Leis", "A Vida Impressa", "Histórias da Gente Brasileira", "O Óbvio Ululante", "Pátria de Chuteiras", "A Mulher do Próximo", "Cem Crônicas Escolhidas", "O Jogador de Sinuca", "A Dama do Lotação", "O Engraçadinho", "As Serpentes", "O Beijo no Asfalto", "Sete Gatinhos", "Bonitinha mas Ordinária", "Álbum de Família", "Senhora dos Afogados", "Dorotéia", "Valsa nº 6", "Viúva Porém Honesta", "Anti-Nelson Rodrigues", "A Falecida", "Perdoa-me por Me Traíres", "Os Sete Gatinhos", "Boca de Ouro", "Toda Nudez Será Castigada", "O Casamento"],
    "Contos": ["Ficções", "O Aleph", "Contos de Canterbury", "Decameron", "Mil e Uma Noites", "Contos de Grimm", "Contos de Andersen", "Contos de Perrault", "Histórias Extraordinárias", "O Horla", "A Dama do Cachorrinho", "O Nariz", "O Capote", "Viy", "Nevsky Prospect", "Avenida Nevski", "Tarás Bulba", "Noites de Petersburgo", "Almas Mortas", "Inspetor Geral", "Casamento", "Jogadores", "O Diário de um Louco", "O Retrato", "A Carruagem", "A Briga", "O Vigário", "A Velha", "A Criança", "O Homem", "A Mulher", "O Amor", "A Morte", "O Tempo", "O Espaço", "A Vida", "A Alma", "O Mundo", "O Céu", "O Inferno"],
    "Distopia": ["1984", "Admirável Mundo Novo", "Fahrenheit 451", "O Conto da Aia", "Laranja Mecânica", "A Estrada", "Ensaio Sobre a Cegueira", "Jogos Vorazes", "Divergente", "Battle Royale", "Nós (Ievguêni Zamiátin)", "O Senhor das Moscas", "Podemos Construir Você", "A Revolução dos Bichos", "Silo", "Estação Onze", "O Homem Ilustrado", "A Cidade e as Estrelas", "Nunca Me Deixe Ir", "Filhos da Esperança", "Jogador Número 1", "Neuromancer", "Carbono Alterado", "O Homem do Castelo Alto", "Androides Sonham com Ovelhas Elétricas?", "Ubiq", "O Tempo Desconjuntado", "Labirinto de Morte", "Valis", "A Transmigração de Timothy Archer", "A Invasão Divina", "Os Três Estigmas de Palmer Eldritch", "Confissões de um Artista de Merda", "Dr. Bloodmoney", "O Clã da Lua Alfa", "Os Simulacros", "A Penúltima Verdade", "O Tempo de Marte", "Simulacros e Simulação", "Sociedade do Espetáculo"],
    "Drama": ["Hamlet", "Romeu e Julieta", "Macbeth", "Rei Lear", "Otelo", "A Tempestade", "Sonho de uma Noite de Verão", "O Mercador de Veneza", "Ricardo III", "Henrique V", "Júlio César", "Antônio e Cleópatra", "Coriolano", "Tito Andrônico", "Timon de Atenas", "Péricles", "Cimbelino", "Conto de Inverno", "A Megera Domada", "Tudo Bem quando Termina Bem", "Medida por Medida", "Muito Barulho por Nada", "Como Gostais", "Noite de Reis", "As Alegres Comadres de Windsor", "Trabalhos de Amor Perdidos", "Os Dois Cavalheiros de Verona", "A Comédia de Erros", "Vênus e Adônis", "O Estupro de Lucrécia", "Sonetos", "O Peregrino Apaixonado", "A Fênix e a Tartaruga", "Queixa de uma Amante", "Sir Thomas More", "Eduardo III", "Arden de Faversham", "A Tragédia Espanhola", "O Judeu de Malta", "Doutor Fausto"],
    "Espiritualidade": ["O Livro dos Espíritos", "O Livro dos Médiuns", "O Evangelho Segundo o Espiritismo", "O Céu e o Inferno", "A Gênese", "Nosso Lar", "Os Mensageiros", "Missionários da Luz", "Obreiros da Vida Eterna", "No Mundo Maior", "Libertação", "Entre a Terra e o Céu", "Nos Domínios da Mediunidade", "Ação e Reação", "Evolução em Dois Mundos", "Mecanismos da Mediunidade", "Conduta Espírita", "Sexo e Destino", "Desobsessão", "E a Vida Continua", "Pão Nosso", "Caminho Verdade e Vida", "Fonte Viva", "Vinha de Luz", "Palavras de Vida Eterna", "Jesus no Lar", "Antologia dos Imortais", "Poetas Redivivos", "Brasil Coração do Mundo", "Parnaso de Além Túmulo", "Boa Nova", "Crônicas de Além Túmulo", "Emmanuel", "O Consolador", "Ave Cristo", "Há Dois Mil Anos", "50 Anos Depois", "Paulo e Estevão", "Renúncia", "Relicário de Luz"],
    "Fantasia": ["O Senhor dos Anéis", "O Hobbit", "Harry Potter", "O Nome do Vento", "A Guerra dos Tronos", "As Crônicas de Nárnia", "O Aprendiz de Assassino", "O Caminho dos Reis", "Mistborn", "American Gods", "O Oceano no Fim do Caminho", "A Roda do Tempo", "Eragon", "O Feiticeiro de Terramar", "Percy Jackson", "Coração de Tinta", "A História Sem Fim", "O Silmarillion", "The Witcher", "Good Omens", "A Bússola de Ouro", "O Castelo Animado", "Coraline", "Stardust", "Lugar Nenhum", "Filhos de Anansi", "Belas Maldições", "O Livro do Cemitério", "A Arte de Gaiman", "M de Magia", "Objetos Cortantes", "Coisas Frágeis", "Fumaça e Espelhos", "Alerta de Risco", "Sandman", "Morte", "Livros da Magia", "Orquídea Negra", "Miracleman", "Promethea"],
    "Ficção Científica": ["Duna", "Fundação", "Neuromancer", "2001", "Eu, Robô", "O Homem do Castelo Alto", "Crônicas Marcianas", "O Fim da Eternidade", "Contato", "Solaris", "Estranho em uma Terra Estranha", "A Mão Esquerda da Escuridão", "Guerra do Velho", "Carbono Alterado", "Justiça Ancilar", "O Problema dos Três Corpos", "Exalação", "O Declínio de Fobos", "Ubik", "A Máquina do Tempo", "O Homem Invisível", "A Guerra dos Mundos", "A Ilha do Dr. Moreau", "Os Primeiros Homens na Lua", "O Alimento dos Deuses", "Nas Dias do Cometa", "A Guerra no Ar", "Ana Verônica", "A História do Sr. Polly", "O Novo Machiavel", "Casamento", "O Mundo de William Clissold", "O Destino de Homo Sapiens", "Cérebro Gigante", "O Homem que podia fazer milagres", "Estrela Cadente", "O País dos Cegos", "A Porta no Muro", "O Ovo de Cristal", "A Estrela"],
    "Geeks": ["Jogador Número 1", "Snow Crash", "O Jogo do Exterminador", "Neuromancer", "Hacker Crackdown", "Ready Player Two", "O Guia do Mochileiro das Galáxias", "Tron", "WarGames", "Masters of Doom", "Microserfs", "Cryptonomicon", "The Soul of a New Machine", "Ghost in the Shell", "Akira", "Fundação", "Androids Dream of Electric Sheep", "Pirates of Silicon Valley", "Duna", "Scott Pilgrim", "Guerra nas Estrelas", "Jornada nas Estrelas", "Battlestar Galactica", "Babylon 5", "Firefly", "Doctor Who", "Arquivo X", "Matrix", "Blade Runner", "Robocop", "O Exterminador do Futuro", "Aliens", "Predador", "Total Recall", "Starship Troopers", "The Thing", "Inception", "Interstellar", "Tenet", "Dunkirk"],
    "História": ["Sapiens", "Homo Deus", "21 Lições para o Século 21", "O Povo Brasileiro", "Brasil: Uma Biografia", "1808", "1822", "1889", "Escravidão Vol. 1", "Escravidão Vol. 2", "Escravidão Vol. 3", "A Era dos Extremos", "O Capital no Século XXI", "Armas Germes e Aço", "Colapso", "O Mundo até Ontem", "Deuses Túmulos e Sábios", "A História da Riqueza do Homem", "A Cultura do Renascimento na Itália", "O Declínio e Queda do Império Romano", "A História da Revolução Francesa", "O Antigo Regime e a Revolução", "A Democracia na América", "O Mediterrâneo", "A Identidade da França", "O Modelo Italiano", "Civilização Material Economia e Capitalismo", "As Estruturas do Cotidiano", "Os Jogos das Trocas", "O Tempo do Mundo", "A Gramática das Civilizações", "Escritos sobre a História", "O Pensamento de Fernand Braudel", "A Herança de Fernand Braudel", "O Mundo de Fernand Braudel", "A Obra de Fernand Braudel", "O Legado de Fernand Braudel", "A Vida de Fernand Braudel", "Fernand Braudel e a História", "Homenagem a Fernand Braudel"],
    "Horror": ["It: A Coisa", "O Iluminado", "Drácula", "Frankenstein", "O Chamado de Cthulhu", "Hellraiser", "O Silêncio dos Inocentes", "Livros de Sangue", "O Cemitério", "Misery", "A Coisa", "O Corvo", "Contos de Poe", "A Cor que Caiu do Espaço", "O Exorcista", "Psicose", "Carrie", "A Assombração da Casa da Colina", "O Bebê de Rosemary", "A Profecia", "O Vilarejo", "Jantar Secreto", "Suicidas", "Dias Perfeitos", "Uma Mulher no Escuro", "O Sorriso da Hiena", "Bom Dia Verônica", "Casal Perfeito", "A Garota no Trem", "Garota Exemplar", "Boneco de Neve", "O Código Da Vinci", "Anjos e Demônios", "Fortaleza Digital", "Ponto de Impacto", "O Símbolo Perdido", "Inferno", "Origem", "Mentirosos", "A Paciente Silenciosa"],
    "Infantil": ["O Pequeno Príncipe", "Sítio do Picapau Amarelo", "Reinações de Narizinho", "Caçadas de Pedrinho", "O Picapau Amarelo", "A Reforma da Natureza", "Memórias de Emília", "Emília no País da Gramática", "Aritmética da Emília", "Geografia de Dona Benta", "História das Invenções", "Dom Quixote das Crianças", "Peter Pan", "Alice no País das Maravilhas", "Alice Através do Espelho", "O Mágico de Oz", "Pinóquio", "O Patinho Feio", "A Pequena Sereia", "A Roupa Nova do Rei", "O Soldadinho de Chumbo", "A Polegarzinha", "O Rouxinol", "A Rainha das Neves", "O Isqueiro", "A Princesa e a Ervilha", "Os Cisnes Selvagens", "A Menina dos Fósforos", "O Boneco de Neve", "O Abeto", "A Sombra", "O Companheiro de Viagem", "O Jardim do Paraíso", "O Tronco Voador", "As Cegonhas", "O Elfo da Rosa", "O Alfaiate Valente", "O Gato de Botas", "Cinderela", "Chapeuzinho Vermelho"],
    "Literatura Brasileira": ["Dom Casmurro", "Memórias Póstumas de Brás Cubas", "O Cortiço", "Grande Sertão: Veredas", "A Hora da Estrela", "Quarto de Despejo", "Capitães da Areia", "Iracema", "O Guarani", "Vidas Secas", "Fogo Morto", "O Tempo e o Vento", "Incidente em Antares", "Lavoura Arcaica", "Dois Irmãos", "A Menina Morta", "Sagarana", "O Alienista", "Macunaíma", "Triste Fim de Policarpo Quaresma", "Angústia", "São Bernardo", "Caetés", "Insolônia", "Linhas Tortas", "Viventes das Alagoas", "Garranchos", "O Velho Graça", "Graciliano Ramos: Biografia", "A Terra dos Meninos Pelados", "Alexandre e Outros Heróis", "Histórias de Alexandre", "O Pequeno Mundo", "Cartas", "Memórias", "Diários", "Ensaios", "Crônicas", "Contos Escolhidos", "Poesia Reunida"],
    "Poesia": ["A Rosa do Povo", "Alguma Poesia", "Antologia Poética", "As Flores do Mal", "Folhas de Relva", "O Guardador de Rebanhos", "Sonetos de Fidelidade", "Mensagem", "Livro do Desassossego", "Vinte Poemas de Amor", "A Teus Pés", "Claro Enigma", "Morte e Vida Severina", "Libertinagem", "Poemas Escolhidos", "O Amor Natural", "Ou Isto ou Aquilo", "Cante Lá que Eu Canto Cá", "Cecília Meireles", "Bagagem", "A Educação pela Pedra", "O Cão sem Plumas", "O Rio", "Dois Parlamentos", "Aniki Bobó", "A Faca só Lâmina", "Serial", "A Escola das Facas", "Agrestes", "Crime na Calle Relator", "Sevilha Andando", "O Artista Inavisível", "Museu de Tudo", "A Indesejada das Gentes", "O Engenheiro", "Psicologia da Composição", "O Rio ou Relação de uma Viagem", "Paisagem com Figuras", "Quaderna", "A Lição de Geometria"],
    "Romance": ["Orgulho e Preconceito", "O Morro dos Ventos Uivantes", "Jane Eyre", "Como Eu Era Antes de Você", "A Culpa é das Estrelas", "Amor de Perdição", "Os Sofrimentos do Jovem Werther", "Dom Quixote", "Anna Karenina", "Madame Bovary", "O Amor nos Tempos do Cólera", "Memórias de uma Gueixa", "P.S. Eu Te Amo", "Um Amor para Recordar", "A Escolha", "Simplesmente Acontece", "O Duque e Eu", "Razão e Sensibilidade", "Persuasão", "E o Vento Levou", "O Morro dos Ventos Uivantes", "Jane Eyre", "A Abadia de Northanger", "Mansfield Park", "Emma", "Sanditon", "Lady Susan", "Os Watson", "Amor e Amizade", "Juvenília", "Cartas de Jane Austen", "Jane Austen: Biografia", "O Mundo de Jane Austen", "As Mulheres de Jane Austen", "Jane Austen e o Casamento", "Jane Austen e a Religião", "Jane Austen e a Política", "Jane Austen e a Sociedade", "Jane Austen e a Literatura", "O Legado de Jane Austen"],
    "Terror": ["O Exorcista", "Psicose", "Carrie", "O Vilarejo", "Hellraiser", "Drácula", "Frankenstein", "O Chamado de Cthulhu", "It: A Coisa", "O Iluminado", "O Cemitério", "Misery", "A Coisa", "O Corvo", "Contos de Poe", "A Cor que Caiu do Espaço", "A Assombração da Casa da Colina", "O Bebê de Rosemary", "A Profecia", "O Silêncio dos Inocentes", "Livros de Sangue", "O Jogo de Gerald", "Saco de Ossos", "A Dança da Morte", "A Hora do Lobisomem", "O Talismã", "A Casa Negra", "Insônia", "Rose Madder", "Desespero", "Os Reguladores", "A Maldição", "Comboio do Medo", "Creepshow", "Olhos de Gato", "O Nevoeiro", "O Aprendiz", "O Método Respiratório", "O Corpo", "Rita Hayworth e a Redenção de Shawshank"]
};


// =============================================
// SISTEMA LITERÁRIO — LÓGICA E INTERFACE
// =============================================

const gera_listaGeneros = Object.keys(dbLivros).sort();
let gera_escolhas = [];

// Guarda a obra selecionada pelo NOME DO GÊNERO como chave
const gera_obrasSalvas = {};

function aplicarEstiloInabalavel(el) {
    el.style.display = 'none';
    el.style.position = 'absolute';
    el.style.top = '100%';
    el.style.left = '0';
    el.style.right = '0';
    el.style.zIndex = '9999999';
    el.style.backgroundColor = '#fff';
    el.style.border = '2px solid #333';
    el.style.margin = '0';
    el.style.padding = '0';
    el.style.listStyle = 'none';
    el.style.maxHeight = '250px';
    el.style.overflowY = 'auto';
    el.style.boxShadow = '0px 8px 16px rgba(0,0,0,0.2)';
}

// limparAposSelecao: true  → campo de gênero (limpa o input após escolher)
//                   false → campo de obra    (mantém o valor escolhido visível)
function gera_configurarBuscador(inputId, listaId, dados, callback, limparAposSelecao) {
    const input = document.getElementById(inputId);
    const lista = document.getElementById(listaId);

    aplicarEstiloInabalavel(lista);
    let foco = -1;

    function criarItemLista(item) {
        const li = document.createElement('li');
        li.textContent = item;
        li.style.padding = '12px';
        li.style.cursor = 'pointer';
        li.style.borderBottom = '1px solid #eee';
        li.style.fontFamily = 'Arial, sans-serif';
        li.onmouseover = () => li.style.backgroundColor = '#f4f4f4';
        li.onmouseout = () => li.style.backgroundColor = '#fff';
        li.onclick = () => {
            callback(item);
            if (limparAposSelecao) {
                input.value = '';
            } else {
                input.value = item;
            }
            lista.style.display = 'none';
        };
        return li;
    }

    input.addEventListener('focus', function() {
        if (this.value === '') {
            lista.innerHTML = '';
            foco = -1;
            dados.forEach((item) => lista.appendChild(criarItemLista(item)));
            lista.style.display = 'block';
        }
    });

    input.addEventListener('input', function() {
        const val = this.value.toUpperCase();
        lista.innerHTML = '';
        foco = -1;
        if (!val) { lista.style.display = 'none'; return; }
        const filtrados = dados.filter(i => i.toUpperCase().startsWith(val)).sort();
        if (filtrados.length > 0) {
            lista.style.display = 'block';
            filtrados.forEach((item) => lista.appendChild(criarItemLista(item)));
        } else {
            lista.style.display = 'none';
        }
    });

    input.addEventListener('keydown', function(e) {
        const itens = lista.getElementsByTagName('li');
        if (itens.length === 0) return;
        if (e.key === "ArrowDown") { foco = (foco + 1) % itens.length;
            atualizarVisualGera(itens, foco); } else if (e.key === "ArrowUp") { foco = (foco - 1 + itens.length) % itens.length;
            atualizarVisualGera(itens, foco); } else if (e.key === "Enter") { e.preventDefault(); if (foco > -1) itens[foco].click(); }
    });

    document.addEventListener('click', (e) => {
        if (e.target !== input) lista.style.display = 'none';
    });
}

function atualizarVisualGera(itens, foco) {
    Array.from(itens).forEach((li, idx) => {
        if (idx === foco) { li.style.backgroundColor = '#333';
            li.style.color = '#fff';
            li.scrollIntoView({ block: "nearest" }); } else { li.style.backgroundColor = '#fff';
            li.style.color = '#000'; }
    });
}

// Renderiza as tags de gênero com botão X de remoção
function gera_renderizarTags() {
    const tags = document.getElementById('gera-tags-selecionadas');
    tags.innerHTML = '';

    gera_escolhas.forEach((gen) => {
        const span = document.createElement('span');
        span.className = 'tag-removivel';
        span.innerHTML = `
            ${gen}
            <button class="tag-btn-remover" title="Remover ${gen}" aria-label="Remover ${gen}">✕</button>
        `;
        span.querySelector('.tag-btn-remover').addEventListener('click', () => {
            // Remove o gênero e a obra salva correspondente
            gera_escolhas = gera_escolhas.filter(g => g !== gen);
            delete gera_obrasSalvas[gen];
            gera_atualizarInterface();
        });
        tags.appendChild(span);
    });
}

function gera_atualizarInterface() {
    gera_renderizarTags();

    const container = document.getElementById('gera-secao-perguntas');
    container.innerHTML = '';

    document.getElementById('gera-container-principal').style.display =
        (gera_escolhas.length >= 4) ? 'none' : 'block';

    gera_escolhas.forEach((gen) => {
        const iID = `in-obra-${gen}`;
        const lID = `li-obra-${gen}`;

        const div = document.createElement('div');
        div.style.marginTop = "30px";
        div.style.borderLeft = "4px solid #333";
        div.style.paddingLeft = "15px";
        div.innerHTML = `
            <p style="font-family:serif; font-style:italic; font-size:18px;">| qual é a sua obra de ${gen.toLowerCase()} favorita |</p>
            <div style="position: relative; width: 100%; max-width: 500px;">
                <input type="text" id="${iID}" placeholder="Selecione um dos 40 livros de ${gen}..." autocomplete="off"
                       style="width: 100%; padding: 10px; border: 1px solid #999;">
                <ul id="${lID}"></ul>
            </div>`;
        container.appendChild(div);

        if (gera_obrasSalvas[gen]) {
            document.getElementById(iID).value = gera_obrasSalvas[gen];
        }

        gera_configurarBuscador(iID, lID, dbLivros[gen], (obra) => {
            gera_obrasSalvas[gen] = obra;
        }, false);
    });
}

// Inicialização do sistema literário
gera_configurarBuscador('gera-input-genero', 'gera-lista-genero', gera_listaGeneros, (escolha) => {
    if (gera_escolhas.length < 4 && !gera_escolhas.includes(escolha)) {
        gera_escolhas.push(escolha);
        gera_atualizarInterface();
    }
}, true);


// =============================================
// SISTEMA DE AUTORES — BANCO DE DADOS
// =============================================

const dbAutores = {
    "Machado de Assis": ["Literatura Brasileira"],
    "Clarice Lispector": ["Literatura Brasileira"],
    "Guimarães Rosa": ["Literatura Brasileira"],
    "Carlos Drummond de Andrade": ["Literatura Brasileira"],
    "Graciliano Ramos": ["Literatura Brasileira"],
    "Jorge Amado": ["Literatura Brasileira"],
    "Cecília Meireles": ["Literatura Brasileira"],
    "Monteiro Lobato": ["Literatura Brasileira"],
    "Raul Pompeia": ["Literatura Brasileira"],
    "Aluísio Azevedo": ["Literatura Brasileira"],
    "Lima Barreto": ["Literatura Brasileira"],
    "Manuel Bandeira": ["Literatura Brasileira"],
    "João Cabral de Melo Neto": ["Literatura Brasileira"],
    "Oswald de Andrade": ["Literatura Brasileira"],
    "Mário de Andrade": ["Literatura Brasileira"],
    "Rachel de Queiroz": ["Literatura Brasileira"],
    "Érico Veríssimo": ["Literatura Brasileira"],
    "José de Alencar": ["Literatura Brasileira"],
    "Gonçalves Dias": ["Literatura Brasileira"],
    "Luís Fernando Veríssimo": ["Literatura Brasileira"],
    "Fiódor Dostoiévski": ["Clássicos"],
    "Liev Tolstói": ["Clássicos"],
    "Franz Kafka": ["Clássicos"],
    "Victor Hugo": ["Clássicos"],
    "Charles Dickens": ["Clássicos"],
    "Honoré de Balzac": ["Clássicos"],
    "Gustave Flaubert": ["Clássicos"],
    "Stendhal": ["Clássicos"],
    "Émile Zola": ["Clássicos"],
    "Guy de Maupassant": ["Clássicos"],
    "Anton Tchekhov": ["Clássicos"],
    "Ivan Turguêniev": ["Clássicos"],
    "Nikolai Gógol": ["Clássicos"],
    "Alexandre Dumas": ["Clássicos"],
    "Voltaire": ["Clássicos"],
    "Jean-Jacques Rousseau": ["Clássicos"],
    "Miguel de Cervantes": ["Clássicos"],
    "Dante Alighieri": ["Clássicos"],
    "Homero": ["Clássicos"],
    "Virgílio": ["Clássicos"],
    "Jane Austen": ["Romance"],
    "Charlotte Brontë": ["Romance"],
    "Emily Brontë": ["Romance"],
    "Nicholas Sparks": ["Romance"],
    "Jojo Moyes": ["Romance"],
    "Colleen Hoover": ["Romance"],
    "Nora Roberts": ["Romance"],
    "Diana Gabaldon": ["Romance"],
    "Rosamunde Pilcher": ["Romance"],
    "Isabel Allende": ["Romance"],
    "Eça de Queirós": ["Romance"],
    "Alain-Fournier": ["Romance"],
    "Alexandre Herculano": ["Romance"],
    "Camilo Castelo Branco": ["Romance"],
    "Júlio Dinis": ["Romance"],
    "Laini Taylor": ["Romance"],
    "Rainbow Rowell": ["Romance"],
    "Kathleen E. Woodiwiss": ["Romance"],
    "Sandra Brown": ["Romance"],
    "Luís de Camões": ["Romance"],
    "J.R.R. Tolkien": ["Fantasia"],
    "J.K. Rowling": ["Fantasia"],
    "George R.R. Martin": ["Fantasia"],
    "Brandon Sanderson": ["Fantasia"],
    "Patrick Rothfuss": ["Fantasia"],
    "Neil Gaiman": ["Fantasia"],
    "Terry Pratchett": ["Fantasia"],
    "Robin Hobb": ["Fantasia"],
    "Ursula K. Le Guin": ["Fantasia"],
    "Robert Jordan": ["Fantasia"],
    "Andrzej Sapkowski": ["Fantasia"],
    "Christopher Paolini": ["Fantasia"],
    "Philip Pullman": ["Fantasia"],
    "Diana Wynne Jones": ["Fantasia"],
    "Joe Abercrombie": ["Fantasia"],
    "Scott Lynch": ["Fantasia"],
    "Brent Weeks": ["Fantasia"],
    "Trudi Canavan": ["Fantasia"],
    "Tad Williams": ["Fantasia"],
    "Raymond E. Feist": ["Fantasia"],
    "Isaac Asimov": ["Ficção Científica"],
    "Arthur C. Clarke": ["Ficção Científica"],
    "Philip K. Dick": ["Ficção Científica"],
    "Frank Herbert": ["Ficção Científica"],
    "H.G. Wells": ["Ficção Científica"],
    "Ray Bradbury": ["Ficção Científica"],
    "William Gibson": ["Ficção Científica"],
    "Carl Sagan": ["Ficção Científica"],
    "Stanisław Lem": ["Ficção Científica"],
    "Andy Weir": ["Ficção Científica"],
    "Orson Scott Card": ["Ficção Científica"],
    "Kim Stanley Robinson": ["Ficção Científica"],
    "Neal Stephenson": ["Ficção Científica"],
    "Dan Simmons": ["Ficção Científica"],
    "Alastair Reynolds": ["Ficção Científica"],
    "Peter F. Hamilton": ["Ficção Científica"],
    "Greg Bear": ["Ficção Científica"],
    "Larry Niven": ["Ficção Científica"],
    "Robert A. Heinlein": ["Ficção Científica"],
    "Cixin Liu": ["Ficção Científica"],
    "Stephen King": ["Terror"],
    "H.P. Lovecraft": ["Terror"],
    "Edgar Allan Poe": ["Terror"],
    "Shirley Jackson": ["Terror"],
    "Dean Koontz": ["Terror"],
    "Anne Rice": ["Terror"],
    "Peter Straub": ["Terror"],
    "Clive Barker": ["Terror"],
    "Joe Hill": ["Terror"],
    "Paul Tremblay": ["Terror"],
    "Thomas Harris": ["Terror"],
    "Robert Bloch": ["Terror"],
    "Richard Matheson": ["Terror"],
    "Ramsey Campbell": ["Terror"],
    "Graham Masterton": ["Terror"],
    "James Herbert": ["Terror"],
    "Ira Levin": ["Terror"],
    "William Peter Blatty": ["Terror"],
    "Bentley Little": ["Terror"],
    "Adam Nevill": ["Terror"],
    "Agatha Christie": ["Policial"],
    "Arthur Conan Doyle": ["Policial"],
    "Raymond Chandler": ["Policial"],
    "Dashiell Hammett": ["Policial"],
    "Stieg Larsson": ["Policial"],
    "Gillian Flynn": ["Policial"],
    "Tana French": ["Policial"],
    "Michael Connelly": ["Policial"],
    "James Ellroy": ["Policial"],
    "Patricia Cornwell": ["Policial"],
    "Lee Child": ["Policial"],
    "John Grisham": ["Policial"],
    "Harlan Coben": ["Policial"],
    "Henning Mankell": ["Policial"],
    "Jo Nesbø": ["Policial"],
    "Donna Leon": ["Policial"],
    "Andrea Camilleri": ["Policial"],
    "Fred Vargas": ["Policial"],
    "P.D. James": ["Policial"],
    "Ruth Rendell": ["Policial"],
    "Dale Carnegie": ["Autoajuda"],
    "Napoleon Hill": ["Autoajuda"],
    "Stephen Covey": ["Autoajuda"],
    "Eckhart Tolle": ["Autoajuda"],
    "Brené Brown": ["Autoajuda"],
    "Mark Manson": ["Autoajuda"],
    "Hal Elrod": ["Autoajuda"],
    "James Clear": ["Autoajuda"],
    "Robin Sharma": ["Autoajuda"],
    "Tony Robbins": ["Autoajuda"],
    "Daniel Goleman": ["Autoajuda"],
    "Malcolm Gladwell": ["Autoajuda"],
    "Carol Dweck": ["Autoajuda"],
    "Viktor Frankl": ["Autoajuda"],
    "Adam Grant": ["Autoajuda"],
    "Simon Sinek": ["Autoajuda"],
    "Augusto Cury": ["Autoajuda"],
    "Içami Tiba": ["Autoajuda"],
    "Leandro Karnal": ["Autoajuda"],
    "Mario Sergio Cortella": ["Autoajuda"],
    "Pablo Neruda": ["Poesia"],
    "Fernando Pessoa": ["Poesia"],
    "Charles Baudelaire": ["Poesia"],
    "Walt Whitman": ["Poesia"],
    "Emily Dickinson": ["Poesia"],
    "Rainer Maria Rilke": ["Poesia"],
    "Arthur Rimbaud": ["Poesia"],
    "Paul Verlaine": ["Poesia"],
    "Langston Hughes": ["Poesia"],
    "Sylvia Plath": ["Poesia"],
    "Adélia Prado": ["Poesia"],
    "Ferreira Gullar": ["Poesia"],
    "Vinicius de Moraes": ["Poesia"],
    "Cora Coralina": ["Poesia"],
    "Sophia de Mello Breyner": ["Poesia"],
    "Eugénio de Andrade": ["Poesia"],
    "Álvaro de Campos": ["Poesia"],
    "Ricardo Reis": ["Poesia"],
    "Alberto Caeiro": ["Poesia"],
    "Cruz e Sousa": ["Poesia"],
    "Yuval Noah Harari": ["História"],
    "Walter Isaacson": ["Biografia"],
    "Erik Larson": ["História"],
    "Laurentino Gomes": ["História"],
    "Boris Fausto": ["História"],
    "Eduardo Bueno": ["História"],
    "Mary del Priore": ["História"],
    "Lilia Schwarcz": ["História"],
    "Leandro Narloch": ["História"],
    "Jared Diamond": ["História"]
};


// =============================================
// SISTEMA DE AUTORES — LISTA E ESTADO
// =============================================

const autor_listaAutores = Object.keys(dbAutores)
    .sort()
    .map(nome => `${nome} - ${dbAutores[nome][0]}`);

let autor_escolhas = [];
const autor_obrasSalvas = {};


// =============================================
// SISTEMA DE AUTORES — LÓGICA E INTERFACE
// =============================================

// estaNoFluxo: true  → lista no fluxo normal (empurra o botão para baixo quando abre)
//              false → lista flutuante absolute (dropdowns internos de obra)
function autor_aplicarEstiloInabalavel(el, estaNoFluxo) {
    el.style.display = 'none';
    el.style.listStyle = 'none';
    el.style.margin = '0';
    el.style.padding = '0';
    el.style.backgroundColor = '#fff';
    el.style.border = '2px solid #D4A855';
    el.style.borderRadius = '0 0 10px 10px';
    el.style.maxHeight = '260px';
    el.style.overflowY = 'auto';
    el.style.boxShadow = '0px 8px 20px rgba(180,100,10,0.18)';

    if (estaNoFluxo) {
        // Ocupa espaço real — empurra o botão Enviar para baixo
        el.style.position = 'static';
        el.style.width = '100%';
        el.style.zIndex = '';
        el.style.top = '';
        el.style.left = '';
        el.style.right = '';
    } else {
        // Flutua sobre o conteúdo
        el.style.position = 'absolute';
        el.style.top = '100%';
        el.style.left = '0';
        el.style.right = '0';
        el.style.zIndex = '9999999';
        el.style.width = '';
    }
}

function autor_atualizarVisual(itens, foco) {
    Array.from(itens).forEach((li, idx) => {
        if (idx === foco) { li.style.backgroundColor = '#333';
            li.style.color = '#fff';
            li.scrollIntoView({ block: "nearest" }); } else { li.style.backgroundColor = '#fff';
            li.style.color = '#000'; }
    });
}

// limparAposSelecao: true  → campo de autor (limpa o input após escolher)
//                   false → campo de obra   (mantém o valor escolhido visível)
function autor_configurarBuscador(inputId, listaId, dados, callback, limparAposSelecao, estaNoFluxo) {
    const input = document.getElementById(inputId);
    const lista = document.getElementById(listaId);

    // estaNoFluxo=true → lista do buscador principal, empurra o botão para baixo
    autor_aplicarEstiloInabalavel(lista, estaNoFluxo === true);
    let foco = -1;

    function criarItemLista(item) {
        const li = document.createElement('li');
        li.textContent = item;
        li.style.padding = '12px';
        li.style.cursor = 'pointer';
        li.style.borderBottom = '1px solid #eee';
        li.style.fontFamily = 'Arial, sans-serif';
        li.onmouseover = () => li.style.backgroundColor = '#f4f4f4';
        li.onmouseout = () => li.style.backgroundColor = '#fff';
        li.onclick = () => {
            callback(item);
            if (limparAposSelecao) { input.value = ''; } else { input.value = item; }
            lista.style.display = 'none';
        };
        return li;
    }

    input.addEventListener('focus', function() {
        if (this.value === '') {
            lista.innerHTML = '';
            foco = -1;
            dados.forEach((item) => lista.appendChild(criarItemLista(item)));
            lista.style.display = 'block';
        }
    });

    input.addEventListener('input', function() {
        const val = this.value.toUpperCase();
        lista.innerHTML = '';
        foco = -1;
        if (!val) { lista.style.display = 'none'; return; }
        const filtrados = dados.filter(i => i.toUpperCase().startsWith(val)).sort();
        if (filtrados.length > 0) {
            lista.style.display = 'block';
            filtrados.forEach((item) => lista.appendChild(criarItemLista(item)));
        } else {
            lista.style.display = 'none';
        }
    });

    input.addEventListener('keydown', function(e) {
        const itens = lista.getElementsByTagName('li');
        if (itens.length === 0) return;
        if (e.key === "ArrowDown") { foco = (foco + 1) % itens.length;
            autor_atualizarVisual(itens, foco); } else if (e.key === "ArrowUp") { foco = (foco - 1 + itens.length) % itens.length;
            autor_atualizarVisual(itens, foco); } else if (e.key === "Enter") { e.preventDefault(); if (foco > -1) itens[foco].click(); }
    });

    document.addEventListener('click', (e) => {
        if (e.target !== input) lista.style.display = 'none';
    });
}

// Renderiza as tags de autor com botão X de remoção
function autor_renderizarTags() {
    const tags = document.getElementById('autor-tags-selecionadas');
    tags.innerHTML = '';

    autor_escolhas.forEach((autorComGenero) => {
        const nomeAutor = autorComGenero.split(' - ')[0];

        const span = document.createElement('span');
        span.className = 'tag-removivel';
        span.innerHTML = `
            ${autorComGenero}
            <button class="tag-btn-remover" title="Remover ${nomeAutor}" aria-label="Remover ${nomeAutor}">✕</button>
        `;
        span.querySelector('.tag-btn-remover').addEventListener('click', () => {
            // Remove o autor e a entrada salva correspondente
            autor_escolhas = autor_escolhas.filter(a => a !== autorComGenero);
            delete autor_obrasSalvas[nomeAutor];
            autor_atualizarInterface();
        });
        tags.appendChild(span);
    });
}

function autor_atualizarInterface() {
    autor_renderizarTags();

    const container = document.getElementById('autor-secao-perguntas');
    container.innerHTML = '';

    document.getElementById('autor-container-principal').style.display =
        (autor_escolhas.length >= 4) ? 'none' : 'block';

    autor_escolhas.forEach((autorComGenero) => {
        const nomeAutor = autorComGenero.split(' - ')[0];
        const iID = `in-obra-autor-${nomeAutor.replace(/\s+/g, '-')}`;
        const lID = `li-obra-autor-${nomeAutor.replace(/\s+/g, '-')}`;

        const div = document.createElement('div');
        div.style.marginTop = "30px";
        div.style.borderLeft = "4px solid #333";
        div.style.paddingLeft = "15px";
        div.innerHTML = `
            <p style="font-family:serif; font-style:italic; font-size:18px;">| autor(a) selecionado(a): ${autorComGenero} |</p>
            <div style="position: relative; width: 100%; max-width: 500px;">
                <input type="text" id="${iID}" value="${autor_obrasSalvas[nomeAutor] || autorComGenero}" autocomplete="off"
                       style="width: 100%; padding: 10px; border: 1px solid #999; background: #f9f9f9; color: #555;" readonly>
                <ul id="${lID}"></ul>
            </div>`;
        container.appendChild(div);
    });
}

// Inicialização do sistema de autores
// Último parâmetro true = estaNoFluxo → lista empurra o botão Enviar para baixo
autor_configurarBuscador('autor-input', 'autor-lista', autor_listaAutores, (escolha) => {
    if (autor_escolhas.length < 4 && !autor_escolhas.includes(escolha)) {
        autor_escolhas.push(escolha);
        const nomeAutor = escolha.split(' - ')[0];
        autor_obrasSalvas[nomeAutor] = escolha;
        autor_atualizarInterface();
    }
}, true, true);


// =============================================
// BOTÃO ENVIAR — VALIDAÇÃO E POPUPS
// =============================================

const btnEnviar = document.getElementById('btn-enviar');
const popupErro = document.getElementById('popup-erro');
const popupSucesso = document.getElementById('popup-sucesso');
const popupErroMsg = document.getElementById('popup-erro-msg');
const btnFecharErro = document.getElementById('btn-popup-erro-fechar');
const btnProsseguir = document.getElementById('btn-prosseguir');

// Abre um popup
function abrirPopup(popup) {
    popup.setAttribute('aria-hidden', 'false');
    popup.classList.add('ativo');
    document.body.style.overflow = 'hidden';
}

// Fecha um popup
function fecharPopup(popup) {
    popup.classList.remove('ativo');
    popup.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Fecha ao clicar fora da caixa
popupErro.addEventListener('click', (e) => {
    if (e.target === popupErro) fecharPopup(popupErro);
});

// Botão "Corrigir agora" — fecha o popup e mantém a página para o usuário corrigir
btnFecharErro.addEventListener('click', () => {
    fecharPopup(popupErro);
    // Reseta todos os campos para o usuário preencher novamente
    resetarFormulario();
});

// Botão "Cadastro realizado, prossiga" — redireciona para a biblioteca
btnProsseguir.addEventListener('click', () => {
    fecharPopup(popupSucesso);
    window.location.href = 'biblioteca.html';
});

// Reseta todos os campos e estados do formulário
function resetarFormulario() {
    // Campos de texto
    document.getElementById('nomeCompleto').value = '';
    document.getElementById('dataNascimento').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';

    // Limpa mensagens de erro
    ['nomeErro', 'dataErro', 'phoneErro'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.style.display = 'none';
            el.textContent = ''; }
    });

    // Remove validações customizadas
    ['nomeCompleto', 'dataNascimento', 'email', 'phone'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.setCustomValidity('');
    });

    // Reseta sistema literário
    gera_escolhas = [];
    Object.keys(gera_obrasSalvas).forEach(k => delete gera_obrasSalvas[k]);
    gera_atualizarInterface();

    // Reseta sistema de autores
    autor_escolhas = [];
    Object.keys(autor_obrasSalvas).forEach(k => delete autor_obrasSalvas[k]);
    autor_atualizarInterface();

    // Scroll suave para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Verifica todos os campos e retorna lista de pendências
function coletarPendencias() {
    const pendencias = [];

    // Nome completo
    const nome = document.getElementById('nomeCompleto').value.trim();
    const partesNome = nome.split(' ').filter(p => p.length > 0);
    if (!nome) {
        pendencias.push('Nome completo não preenchido');
    } else if (partesNome.length < 2) {
        pendencias.push('Nome completo deve ter nome e sobrenome');
    }

    // Data de nascimento
    const data = document.getElementById('dataNascimento').value;
    if (!data) {
        pendencias.push('Data de nascimento não preenchida');
    } else {
        const idade = calcularIdade(data);
        if (idade < 0) pendencias.push('Data de nascimento inválida (data no futuro)');
        if (idade > 122) pendencias.push('Data de nascimento inválida (idade acima de 122 anos)');
    }

    // E-mail
    const email = document.getElementById('email').value;
    const regexEmail = /^[a-z0-9._%+-]+@(gmail|hotmail)\.com$/;
    if (!email) {
        pendencias.push('E-mail não preenchido');
    } else if (!regexEmail.test(email)) {
        pendencias.push('E-mail inválido (use Gmail ou Hotmail)');
    }

    // Telefone
    const digitos = extrairDigitos(document.getElementById('phone').value);
    if (!digitos || digitos.length === 0) {
        pendencias.push('Telefone não preenchido');
    } else if (digitos.length < 10) {
        pendencias.push('Telefone incompleto');
    } else if (!ddds[digitos.substring(0, 2)]) {
        pendencias.push('DDD do telefone inválido');
    } else if (digitos.length === 11 && digitos[2] !== '9') {
        pendencias.push('Número de celular inválido (deve iniciar com 9 após o DDD)');
    }

    return pendencias;
}

// Clique no botão Enviar
btnEnviar.addEventListener('click', () => {
    const pendencias = coletarPendencias();

    if (pendencias.length > 0) {
        // Monta mensagem amigável com a lista de pendências
        const lista = pendencias.map(p => `• ${p}`).join('<br>');
        popupErroMsg.innerHTML = `Encontramos <strong>${pendencias.length} campo(s)</strong> que precisam de atenção:<br><br>${lista}`;
        abrirPopup(popupErro);
    } else {
        // Salva o nome no localStorage para a página da biblioteca usar
        const nomeCadastrado = document.getElementById('nomeCompleto').value.trim();
        if (nomeCadastrado) localStorage.setItem('bookleaf_nome', nomeCadastrado);
        // Tudo válido — exibe popup de sucesso
        abrirPopup(popupSucesso);
    }
});