//js login

document.querySelector("#entrar").addEventListener("click", function (e){
    e.preventDefault();

    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha").value;
    
    //pega usuários cadastrados 
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    var usuarioSalvo = usuarios.find(u => u.email === email && u.senha === senha);
    
    if(!usuarioSalvo){
        alert("Nenhum usuário cadastrado ou e-mail/senha inválidos!");
        return;
    }

    // Guarda o usuário logado no sessionStorage
    sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioSalvo));
    alert(`Bem-vindo, ${usuarioSalvo.nome}!`);
    
    // Redireciona para a página principal 
    window.location.href = "../pagina-home/home.html"; 
});
 

//Botão cadastre-se da pagina
document.querySelector("#cadastro").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "../cadastro-usuario/index01.html"; 
});

// mostar e ocultar senha
function mostrarSenha() {
    var inputPass = document.getElementById('senha')
    var btShowPass = document.getElementById('btn-senha')

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')
        btShowPass.classList.replace('bi-eye', 'bi-eye-slash')
    } else {
        inputPass.setAttribute('type', 'password')
        btShowPass.classList.replace('bi-eye-slash', 'bi-eye')
    }
}