
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario && usuario.nome === username && usuario.senha === password) {
        alert('Login bem-sucedido!');
    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
});