const campoSenha = document.getElementById("senha")
const btnSenha = document.querySelector("#mostrar-senha")

console.log(campoSenha.type)
console.log(btnSenha.type)
btnSenha.addEventListener("click", function(){

    // if(campoSenha.type == "password"){
    //     campoSenha.type = "text";
    // }
    // 
    // else{
    //     campoSenha.type = "password";
    // }

    // campoSenha.type recebe uma informaçao, 
    campoSenha.type = campoSenha.type == "password" ? "texto" : "password"
})
