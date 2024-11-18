const bags = [
    { id: 1, type: 'mochila', color: 'preta', price: 'baixo', name: 'Mochila Preta Básica', image: '/imagens/Coleção/IMG_academia.jpg' },
    { id: 2, type: 'bolsa', color: 'marrom', price: 'medio', name: 'Bolsa Marrom de Couro', image: '/imagens/Coleção/IMG_bolsamarrom.jpg' },
    { id: 3, type: 'necessaire', color: 'branco', price: 'alto', name: 'Necessaire Branca', image: '/imagens/Coleção/IMG_necessairebranca.jpg' },
    { id: 4, type: 'mochila', color: 'preta', price: 'medio', name: 'Mochila Preta de Luxo', image: '/imagens/Coleção/IMG_bolsapreta2.jpg' },
    { id: 5, type: 'bolsa', color: 'branco', price: 'baixo', name: 'Bolsa Branca Pequena', image: '/imagens/Coleção/IMG_bolsabranca2.jpg' },
];

// Seleção do contêiner que vai exibir as bolsas filtradas
const bagsContainer = document.getElementById('bags-container');
const filterButton = document.querySelector('.back-button');
const dropdownContent = document.querySelector('.dropdown-content');

// Função para exibir as bolsas filtradas
function displayBags(filteredBags) {
    // Limpa o conteúdo atual do contêiner
    bagsContainer.innerHTML = '';
    
    // Verifica se há bolsas correspondentes aos filtros
    if (filteredBags.length === 0) {
        bagsContainer.innerHTML = '<p>Nenhuma bolsa encontrada com os filtros selecionados.</p>';
        return;
    }
    
    // Exibe cada bolsa filtrada
    filteredBags.forEach(bag => {
        const bagItem = document.createElement('div');
        bagItem.className = 'bag-item';
        bagItem.innerHTML = `
            <div class="box">
                <img src="${bag.image}" alt="${bag.name}" class="bag-image">
                <h2>${bag.name}</h2>
                <p>Tipo: ${bag.type}</p>
                <p>Cor: ${bag.color}</p>
                <p>Preço: ${bag.price}</p>
            </div>
        `;
        bagsContainer.appendChild(bagItem);
    });
}

// Função para filtrar as bolsas de acordo com os filtros aplicados
function filterBags() {
    const type = document.getElementById('type').value;
    const color = document.getElementById('color').value;
    const price = document.getElementById('price').value;

    const filteredBags = bags.filter(bag => {
        return (type === 'todas' || bag.type === type) &&
               (color === 'todas' || bag.color === color) &&
               (price === 'todos' || bag.price === price);
    });

    displayBags(filteredBags);
}

// Evento para mostrar/ocultar o menu suspenso de filtros
filterButton.addEventListener('click', (event) => {
    event.preventDefault(); // Previne a navegação padrão do link
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});
