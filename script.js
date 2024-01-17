import{barcelona,roma,paris,londres} from './ciudades.js'

//obteniendo los elementos del DOM
let enlaces=document.querySelectorAll('a')
let tituloElemento=document.getElementById('titulo')
let subtituloElemento=document.getElementById('subtitulo')
let parrafoElemento=document.getElementById('parrafo')
let precioElemento=document.getElementById('precio')

//Agregando un evento CLICK a cada enlace
enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function(){
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        this.classList.add('active')

        //obteniendo el contenido segun el enlace
        let contenido=obtenerContenido(this.textContent)

        tituloElemento.innerHTML=contenido.titulo
        subtituloElemento.innerHTML=contenido.subtitulo
        parrafoElemento.innerHTML=contenido.parrafo
        precioElemento.innerHTML=contenido.precio    
    }); 
});

//F(x) para traer la informacion correcta desdde ciudades
function obtenerContenido(enlace){
    let contenido={
        'Barcelona':barcelona,
        'Roma':roma,
        'París':paris,
        'Londres':londres
    };
    return contenido[enlace]
}
