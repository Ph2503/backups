
(function () {
    var fotinha = document.getElementById('topimg')
    var menu = document.getElementById('topo'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0){ menu.classList.add('menuFixo'); fotinha.setAttribute('src', 'nout.png'); // > 0 ou outro valor desejado
    }else{ menu.classList.remove('menuFixo'); fotinha.setAttribute('src', 'logo2.jpg');}
    });
})();

function play() {
    var c = document.getElementById('oq')
    alert(c.value)
}
function teste() {

    
}
var imagem = document.getElementById('imagem')
var cont = 0

var btvoltar = document.getElementById('negativo')
var btir = document.getElementById('positivo')

function positive() {
    if(cont<4) {

        cont++
        btir.style.opacity = '100%'
    }
    if(cont == 0){
        btvoltar.style.opacity = '100%'
    }else {
        btvoltar.style.opacity = '100%'

    }
    if(cont == 4) {
        btir.style.opacity = '100%'
    }else {
        btir.style.opacity = '100%'

    }
    if (cont == 0) {
        imagem.src = 'maoprincipal.jpg'
        imagem.style.width = '280px'
        imagem.style.height = '350px'
        imagem.style.transition = 'all 1s'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
    }else if(cont == 1) {
        imagem.src = 'maocentralapp.jpg'
        imagem.style.width = '300px'
        imagem.style.height = '390px'
        imagem.style.transition = 'all 1s'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
    }else if(cont == 2) {
        imagem.src = 'maohapp.jpg'
        imagem.style.width = '270px'
        imagem.style.height = '370px'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
        imagem.style.transition = 'all 1s'
    }else if(cont == 3) {
        imagem.src = 'maodataapp.jpg'
        imagem.style.width = '270px'
        imagem.style.height = '370px'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
        imagem.style.transition = 'all 1s'
    }

}

function negative() {
    

    if(cont == 4) {
        btir.style.opacity = '100%'
    }else {
        btir.style.opacity = '100%'

    }
    if(cont == 0) {
        btvoltar.style.opacity = '100%'
    }
    if(cont>0) {
        cont--
        btvoltar.style.opacity = '100%'
    }

    if (cont == 0) {
        imagem.src = 'maoprincipal.jpg'
        imagem.style.width = '280px'
        imagem.style.height = '350px'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
        imagem.style.transition = 'all 1s'
    }else if(cont == 1) {
        imagem.src = 'maocentralapp.jpg'
        imagem.style.width = '300px'
        imagem.style.height = '390px'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
        imagem.style.transition = 'all 1s'
    }else if(cont == 2) {
        imagem.src = 'maohapp.jpg'
        imagem.style.width = '270px'
        imagem.style.height = '370px'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
        imagem.style.transition = 'all 1s'
    }else if(cont == 3) {
        imagem.src = 'maodataapp.jpg'
        imagem.style.width = '270px'
        imagem.style.height = '370px'
        imagem.style.border = '1px black solid'
        imagem.style.borderRadius = '8px'
        imagem.style.transition = 'all 1s'
    }


    

}
function apptamanhodatela() {

}
/*
maocentralapp.jpg     width="300px" height="390px" 
maodataapp.jpg        width="270px" height="370px
maohapp.jpg           width="270px" height="370px
maoprincipal.jpg      width="280px" height="350px"


*/