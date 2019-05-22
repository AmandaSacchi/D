/*Fazer uma nav responsiva com um menu hamburguer que ao clicar apareça os links 

BÔNUS: Fazer com que o menu hamburguer ao clicar abre os links e transforma os tracinhos em X, e ao fechar o menu volta ao estado normal com os 3 tracinhos*/


let i = 0;
let botaoProx = document.querySelector(".proximo");
let imgFront = document.querySelector(".img_front");
let descricaoImgFront = document.querySelector(".texto_portfolio");
let corpo = document.querySelector("body");
let menuHamburguer = document.querySelector(".menu_hamburguer");
let menuNav = document.querySelector(".menu_navegacao");
let traco = document.querySelector(".traco");
let menuX = document.querySelector(".menu_X");


let listaFront=[
   /* 0 */{url:'../static/imagens/front/1.png', tag: "Oficina de Circuitos Texteis"},
    /* 1 */{url:'../static/imagens/front/2.png', tag: "Oficinas de Arduino"},
    /* 2 */{url:'../static/imagens/front/3.png', tag: "Circuitos sensíveis a luz e toque"}
]



function frontIterativo(){
    imgFront.src = listaFront[i].url;
    descricaoImgFront.innerHTML = listaFront[i].tag;
    i++;
    if (i==listaFront.length) i=0;
}

botaoProx.onclick = frontIterativo;
corpo.classList.add("botaoFront");/*adicionar/remover classes existentes no CSS*/


function abrirMenuHamburguer(){
    menuNav.classList.toggle("aparecerMenuNavegacao");
    menuHamburguer.classList.toggle("sumir_menu_hamburguer"); 
    menuX.classList.toggle("aparecer_menu_x");   
}
menuHamburguer.onclick = abrirMenuHamburguer;
menuX.onclick = abrirMenuHamburguer;