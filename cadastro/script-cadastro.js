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
    //vê usuario já cadastrado e cria array para não substituir dados que ja existem
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    //verifica se já tem email cadastrado
    var existe = usuarios.some(u => u.email === email)
    if(existe){
        alert("Nome ou senha invalido");
        return;
    }
    //verifica se ja existe nome
     var nomeExiste = usuarios.some(u => u.nome === nome);

     if(nomeExiste){
        alert("Nome ou senha invalido");
        return;
     }

    //adicionar o novo usuario na lista
    usuarios.push({nome, email, senha});

    // salva os dados no localstorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "../login/index02.html"
});