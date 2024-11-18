document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Pega os valores dos campos de cadastro
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    // Cria um objeto do usuário
    const usuario = { nome, email, senha };

    // Armazena o usuário no localStorage
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Exibe a mensagem de sucesso
    document.getElementById("mensagem").innerText = "Cadastro realizado com sucesso!";

    // Ação após o cadastro (mostrar a tela de login, por exemplo)
    mostrarTela("login");
});