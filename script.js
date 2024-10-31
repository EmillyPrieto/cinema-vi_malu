const movieList = document.getElementById('movie-list');
const movieModal = document.getElementById('movie-modal');
const closeModal = document.querySelector('.close');

document.getElementById('movie-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('movie-title').value;
    const director = document.getElementById('movie-director').value;
    const imageUrl = document.getElementById('movie-image').value;

    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="${imageUrl}" alt="${title}">
        <h3>${title}</h3>
        <p>Diretor: ${director}</p>
    `;

    // Adiciona o evento de clique para abrir o modal
    card.addEventListener('click', function() {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-director').textContent = `Diretor: ${director}`;
        document.getElementById('modal-image').src = imageUrl;
        movieModal.style.display = 'block'; // Exibe o modal
    });

    movieList.appendChild(card);

    // Limpa os campos do formulário
    document.getElementById('movie-title').value = '';
    document.getElementById('movie-director').value = '';
    document.getElementById('movie-image').value = '';
});

// Adiciona filmes pré-definidos ao carregar a página
window.onload = function() {
    adicionarFilme("Moana", "Ron Clements, John Musker", "https://lumiere-a.akamaihd.net/v1/images/garland_intl_teaser2_poster_brazil_c487c296.jpeg");
    adicionarFilme("Robô Selvagem", "Carlos Saldanha", "https://ingresso-a.akamaihd.net/prd/img/movie/robo-selvagem/b95bdd07-47ad-46d4-801a-017be432b849.webp?v=20201127_1203");
};

function adicionarFilme(titulo, diretor, imagemUrl) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="${imagemUrl}" alt="${titulo}">
        <h3>${titulo}</h3>
        <p>Diretor: ${diretor}</p>
    `;

    // Adiciona o evento de clique para abrir o modal
    card.addEventListener('click', function() {
        document.getElementById('modal-title').textContent = titulo;
        document.getElementById('modal-director').textContent = `Diretor: ${diretor}`;
        document.getElementById('modal-image').src = imagemUrl;
        movieModal.style.display = 'block'; // Exibe o modal
    });

    movieList.appendChild(card);
}

// Fecha o modal quando o botão de fechar é clicado
closeModal.addEventListener('click', function() {
    movieModal.style.display = 'none';
});

// Fecha o modal quando clicar fora do conteúdo
window.addEventListener('click', function(event) {
    if (event.target === movieModal) {
        movieModal.style.display = 'none';
    }
});
