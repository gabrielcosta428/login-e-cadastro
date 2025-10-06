//js cadastro

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    var nome= document.querySelector("#nome").value;
    var email= document.querySelector("#email").value;
    var senha= document.querySelector("#senha").value;
    var confirmar= document.querySelector("#confirmar").value;

    if(senha !== confirmar) {
        alert("As senhas não são iguais!");
        return;
    }

    // salva os dados no localstorage
    localStorage.setItem("usuario", JSON.stringify({nome, email, senha}));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "../login/index02.html"
});