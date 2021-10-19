$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
});

var fecharMenu = $('#menu-voador-open');
var abrirMenu = $('#menu-voador-close');

abrirMenu.click(function () {
    fecharMenu.removeClass('display-none');
    abrirMenu.addClass('display-none');
    $('.menu-toponovo').addClass('margin-left-aberto');
    $('.body-session').addClass('margin-left-aberto');
    console.log('removi o atributo none do aberto');
})

fecharMenu.click(function () {
    $('.sidenav').sidenav('close');
    abrirMenu.removeClass('display-none');
    fecharMenu.addClass('display-none');
    $('.menu-toponovo').removeClass('margin-left-aberto');
    $('.body-session').removeClass('margin-left-aberto')
})

var collapsibleElem = document.querySelector('.collapsible');
var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
var elem = document.querySelectorAll('.sidenav');
var instance = M.Sidenav.getInstance(elem);