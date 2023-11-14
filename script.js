var imagem = 1;
const bd = document.getElementById("dire");
const ft = document.getElementById("ft");
const be = document.getElementById("esque");
const perso = document.getElementById("perso")


function proximg(){
    imagem = imagem + 1;
    console.log("socorro")
    if (imagem >= 3) {
        imagem = 1;
    }
    altimg()
    
}
function antimg(){
    imagem = imagem - 1
    console.log("socorrenos")
    if (imagem <= 0) {
        imagem = 2
    }
    altimg()
}
function altimg(){
    if (imagem == 1){
        ft.src = "./imagens/persop.jpg";
        document.getElementById("nomep").innerText = "mini querido";
        document.getElementById("sap").innerText = "Saude: Saudável";
        document.getElementById("sanp").innerText = "Sanidade: Estável";
        document.getElementById("persp").innerText = "Personalidade: Timido";
        document.getElementById("habup").innerText = "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
        document.getElementById("descp").innerText = "Um garoto timido que nunca ouviu falar de maldições e recentemente as descobriu"
    }
    else if (imagem == 2){
        ft.src = "./imagens/persop2.jpg";
        document.getElementById("nomep").innerText = "mini querido2";
        document.getElementById("sap").innerText = "Saude: Boa até d+";
        document.getElementById("sanp").innerText = "Sanidade: Fish";
        document.getElementById("persp").innerText = "Personalidade: é um querido";
        document.getElementById("habup").innerText = "peixinhos"
        document.getElementById("descp").innerText = "ama peixinhos"
    }
    }
bd.addEventListener("click", proximg);
be.addEventListener("click", antimg);