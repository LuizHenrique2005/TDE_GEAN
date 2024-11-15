document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    const text = "Makarios informa, é sempre um prazer te receber";
    let index = 0;

    const typeText = () => {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Ajusta a velocidade de digitação aqui
        }
    };

    typeText();
});
