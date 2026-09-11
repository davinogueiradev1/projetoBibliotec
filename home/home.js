
const menu = document.getElementById("menu"); //pegando elemento pelo id

//estamos pegando o elemento de forma genérica - . para classes e # para id
const navMenu = document.querySelector(".navegacao"); 

menu.addEventListener("click", function(){
    if(navMenu.className == "navegacao"){
        navMenu.className = "navegacao ativo";
    }
    else{
        navMenu.className = "navegacao";
    }
});