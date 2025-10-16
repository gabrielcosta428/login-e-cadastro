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

    alert(`Bem-vindo, ${usuarioSalvo.nome}!`);
    window.location.href = "../home/home.html"; //redireciona para a pagina pricipal
    
});

//Botão cadastre-se da pagina
document.querySelector("#cadastro").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "../cadastro/index01.html"; 
});