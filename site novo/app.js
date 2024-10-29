var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");

// Adicionando o evento de clique para o botão de login
btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

// Adicionando o evento de clique para o botão de cadastro
btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});