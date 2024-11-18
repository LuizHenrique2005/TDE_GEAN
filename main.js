const telaPrincipal = document.getElementById("telaPrincipal");
const formCadastro = document.getElementById("formCadastro");
const formLogin = document.getElementById("formLogin");

// Função para alternar telas
function mostrarTela(tela) {
    telaPrincipal.style.display = "none";
    formCadastro.style.display = "none";
    formLogin.style.display = "none";

    if (tela === "cadastro") {
        formCadastro.style.display = "block";
    } else if (tela === "login") {
        formLogin.style.display = "block";
    }
}

// Botões para alternar telas
document.getElementById("btnCadastro").addEventListener("click", () => mostrarTela("cadastro"));
document.getElementById("btnLogin").addEventListener("click", () => mostrarTela("login"));