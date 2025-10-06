//js login

document.querySelector("#entrar").addEventListener("click", function (e){
    e.preventDefault();

    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha").value;
    
    var usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

    if(!usuarioSalvo){
        alert("Nenhum usuário cadastrado!");
        return;
    }
    if(email === usuarioSalvo.email && senha === usuarioSalvo.senha){
        alert(`Bem-vindo, ${usuarioSalvo.nome}!`);
        window.location.href = "../home/home.html"; //redireciona para a pagina pricipal
    }else {
        alert("E-mail ou senha invalidos!");
    }
});

//Botão cadastre-se da pagina
document.querySelector("#cadastro").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "../cadastro/index01.html"; 
});