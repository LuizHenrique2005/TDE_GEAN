const bags = [
    { id: 1, type: 'mochila', color: 'preta', price: 'baixo', name: 'Mochila Preta Básica' },
    { id: 2, type: 'carteira', color: 'marrom', price: 'medio', name: 'Carteira Marrom de Couro' },
    { id: 3, type: 'tote', color: 'vermelha', price: 'alto', name: 'Bolsa Tote Vermelha' },
    { id: 4, type: 'mochila', color: 'preta', price: 'medio', name: 'Mochila Preta de Luxo' },
    { id: 5, type: 'carteira', color: 'vermelha', price: 'baixo', name: 'Carteira Vermelha Pequena' },
];

const bagsContainer = document.getElementById('bags-container');
const filterButton = document.querySelector('.back-button');
const dropdownContent = document.querySelector('.dropdown-content');

// Função para exibir as bolsas
function displayBags(filteredBags) {
    bagsContainer.innerHTML = '';
    filteredBags.forEach(bag => {
        const bagItem = document.createElement('div');
        bagItem.className = 'bag-item';
        bagItem.innerHTML = `
            <h2>${bag.name}</h2>
            <p>Tipo: ${bag.type}</p>
            <p>Cor: ${bag.color}</p>
            <p>Preço: ${bag.price}</p>
        `;
        bagsContainer.appendChild(bagItem);
    });
}

// Função para filtrar as bolsas
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

filterButton.addEventListener('click', (event) => {
    event.preventDefault(); // Previne a navegação padrão do link
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});