(function () { // código copiado e alterado para topo flutuante
    var fotinha = document.getElementById('topimg')
    var menu = document.getElementById('topo'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0){ menu.classList.add('menuFixo'); fotinha.setAttribute('src', 'nout.png'); // > 0 ou outro valor desejado
    }else{ menu.classList.remove('menuFixo'); fotinha.setAttribute('src', 'logo2.jpg');}
    });
})();
function voltar() {
    document.documentElement.scrollTop = 0
    
    /*while(windowTop > 0) {
        windowTop
    }*/
}
function anime() {
    var windowTop = window.pageYOffset; //váriavel do scroll
    console.log(windowTop)// declaração no console
    var topo = document.getElementById('topo')
    if(windowTop > 370 && windowTop < 500) {
        var topo = document.getElementById('topo')
        topo.style.height = '0px'
        topo.style.transition = 'all .2s'
        
    }else if(windowTop > 865 && windowTop < 1056) {
        var topo = document.getElementById('topo')
        topo.style.height = '0px'
        topo.style.transition = 'all .2s'
    }else if(windowTop > 1257 && windowTop < 1853) {
        var topo = document.getElementById('topo')
        topo.style.height = '0px'
        topo.style.transition = 'all .2s'
    
    }else {topo.style.height = '52px'}

}

window.addEventListener('scroll', function(){ //declarando a função para o scroll
    anime();
});
