var egg = 0;
const pat = document.getElementById("pescador")
const b1 = document.getElementById("barata1");
var s = 1;
var pescaIntervalo

function ranint(max) {
    return (parseInt(Math.random() * max))
}
function abrir() {
    egg = ranint(5)
    console.log(egg)
    if (egg == 1) {
        window.open("https://www.youtube.com", "_self")
    }
    else if (egg == 2) {
        window.open("https://www.youtube.com", "_self")
    }
    else if (egg == 3) {
        window.open("https://www.youtube.com", "_self")
    }
    else if (egg == 4) {
        window.open("https://www.youtube.com", "_self")
    }
    else if (egg == 0) {
        window.open("https://www.youtube.com", "_self")
    }
}
function pesca() {
    switch (s) {
        case 1:
            console.log("im1")
            pat.src = "./imagens/pat1.png"
            break;
        case 2:
            pat.src = "./imagens/pat2.png"
            break;
        case 3:
            pat.src = "./imagens/pat3.png"
            break;
        case 4:
            pat.src = "./imagens/pat4.png"
            break;
        case 5:
            pat.src = "./imagens/pat5.png"
            break;
        case 6:
            pat.src = "./imagens/pat4.png"
            break;
        case 7:
            pat.src = "./imagens/pat3.png"
            break;
        case 8:
            pat.src = "./imagens/pat2.png"
            break;
        case 9:
            pat.src = "./imagens/pat1.png"
            
            break;
    }
    if (s == 9) {
        s = 1
        clearInterval(pescaIntervalo)
    } else {
        s++;
    }
}
function ani() {
    console.log("ani")
    pescaIntervalo = setInterval(pesca, 100);
}
function baratinha() {

    var visi = ranint(2)
    egg = visi
    console.log(visi)
    if (visi == 0) {
        b1.style.opacity = 0;
    }
    else {
        b1.style.opacity = 255;
        console.log("certo")

    }

}
b1.addEventListener("click", () => abrir());
pat.addEventListener("click", () => {
    if (s == 1) {
        ani()
    }
})
baratinha();
