//js cadastro

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha").value;
    var confirmar = document.querySelector("#confirmar").value;

    if (senha !== confirmar) {
        alert("As senhas não são iguais!");
        return;
    }
    //vê usuario já cadastrado e cria array para não substituir dados que ja existem
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    //verifica se já tem email cadastrado
    var existe = usuarios.some(u => u.email === email)
    if (existe) {
        alert("E-mail invalido (usuario já cadastrado)");
        return;
    }

    // Gera ID do usuario 
    var id = 1;
    if (usuarios.length > 0) {
        var maiorId = Math.max(...usuarios.map(u => u.id || 0));
        id = maiorId + 1;
    }

    //adicionar o novo usuario na lista
    usuarios.push({ id, nome, email, senha });

    // salva os dados no localstorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "../pages/login.html";

    

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

function mostrarConfirmarSenha() {
    var inputPass = document.getElementById('confirmar')
    var btShowPass = document.getElementById('btn-confirmar-senha')

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')
        btShowPass.classList.replace('bi-eye', 'bi-eye-slash')
    } else {
        inputPass.setAttribute('type', 'password')
        btShowPass.classList.replace('bi-eye-slash', 'bi-eye')
    }
}


