(function () { // código copiado e alterado para topo flutuante
    var fotinha = document.getElementById('topimg')
    var menu = document.getElementById('topo'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0){ menu.classList.add('menuFixo'); fotinha.setAttribute('src', 'nout.png'); // > 0 ou outro valor desejado
    }else{ menu.classList.remove('menuFixo'); fotinha.setAttribute('src', 'logo2.jpg');}
    });
})();