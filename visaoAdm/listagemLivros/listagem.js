
const livros = document.querySelectorAll(".livro");

const botaoAnterior = document.getElementById("pagina-anterior");
const botaoProxima = document.getElementById("proxima-pagina");
const numeroPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");

//*Configuração da paginação

//Define quantos livros serao exibidos por pagina
const livroPorPagina = 4;

//guarda qual pagina esta sendo exibida, comecando na pagina 1
let paginaAtual = 1;

//*Calculando total de paginas
//divide a quantidade total de livros pela quantidade de livros por pagina
// Math.ceil() -> arredonda para cima o resultado

//Exemplo:
//10 livros / 4 paginas = 2,5
//Math.ceil() = 2.5 arredonda para cima = 3 paginas
const totalPaginas = Math.ceil(livros.length / livroPorPagina)

//* Função responsavel por mostrar a pagina (atualizar os elementos)

function mostrarPagina() {
    //Descobre o indice do primeiro livro que deve aparecer

    //Pagina 1:
    //(1-1)* 4 = 0

    //Pagina 2:
    //(2-1)* 4 = 4

    //livros = [1,2,3,4,5,6,7,8]
    //pagina 1 = 1,2,3,4
    //pagina 2 = 5,6,7,8
    const inicio = (paginaAtual - 1) * livroPorPagina;

    //Descobre até aonde os livros devem ser exibidos
    //Pagina 1: inicio 0 -> fim = 0 + 4
    //Pagina 2: inicio 4 -> fim = 4 + 4
    const fim = inicio + livroPorPagina;

    //percorre toda lista de livros encontrados no HTML
    //"livro" representa o elemento atual
    //"posicao" representa posicao desse livro na lista
    livros.forEach((livro, posicao) => {

        //inicio na pagina 1 = 0
        //fim = 4

        //Verifica se o indice/posicao do livro esta dentro do intervalo da pagina atual
        if (posicao >= inicio && posicao < fim) {
            //mostra o elemento na tela
            livro.style.display = "grid";
        }
        else{
            //se nao estiver, esconde o livro
            livro.style.display ="none"
        }
    })

    //atualiza no html o numero da pagina atual
    numeroPagina.textContent = paginaAtual;

    //inicialmente, consideramos o "fim" como posicao do ultimo livro mostrado
    let ultimoLivro = fim;

    //se o valor ultrapassar a quantidade real de livros, usamos a quantidade total
    if(ultimoLivro > livros.length){
        ultimoLivro = livros.length
    }

    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros.`
}

//Evento de click no botão de proxima pagina

botaoProxima.addEventListener("click", () => {
    //Só permite avançar se ainda existir uma próxima pagina
    if(paginaAtual < totalPaginas){
        //Avança uma página
        // paginaAtual = paginaAtual + 1
        paginaAtual++;

        //atualiza os livros exibidos na tela
        mostrarPagina();
    }
})

//Evento de click no botao de pagina anterior

botaoAnterior.addEventListener("click", () => {

    //so permite voltar se nao estivermos na primeira pagina
    if(paginaAtual > 1){
        //voltamos uma página
        paginaAtual--;

        //atualiza os livros exibidos na tela
        mostrarPagina();
    }
})

//Quando a página carregar, precisamos executar a função mostrarPagina() uma vez para esconder os livros que não pertencem a primeira página
mostrarPagina();