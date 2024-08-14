// Ejercicios clase 9
// ejercicios 1 al 5

// console.log(document.getElementById('titulo').innerText);

// items = document.getElementsByClassName('item');
// console.log(items[1])

// tags = document.getElementsByTagName('h4');
// console.log(tags[1])

// cambiarFondo = document.querySelector('.item');
// cambiarFondo.style.backgroundColor = 'lightblue';

// cambiarColor = document.querySelectorAll('.item');
// for(let i = 0; i < cambiarColor.length; i++){
//     cambiarColor[i].style.color = 'red';
// }

// ejercicios 6 al 10

miMain = document.getElementById('miMain');
divNuevo = document.createElement('div');
miMain.append(divNuevo);
parrafoNuevo = document.createElement('p');
parrafoNuevo.innerText = 'Este es un parrafo creado con JS';
miMain.appendChild(parrafoNuevo);

imagenNueva = document.createElement('img');
miMain.append(imagenNueva);
imagenNueva.setAttribute('src', './img/logo.png');

botonNuevo = document.createElement('button');
document.body.append(botonNuevo);
botonNuevo.innerText = 'Click me';

ulNueva = document.createElement('ul')
miMain.append(ulNueva)
ulNueva.id = 'lista'
liNuevo = document.createElement('li');
ulNueva.appendChild(liNuevo)

// 11 al 15

titulo = document.getElementById('titulo');
titulo.style.backgroundColor = 'yellow';

cambiarColor = document.querySelector('.item');
cambiarColor.style.color = 'lightblue';
cambiarColor.style.margin = '5px';
cambiarColor.style.fontSize = '22px';

titulo.classList.add('activo');
// titulo.classList.remove('activo');
botonNuevo.id = 'boton'
alterna = document.getElementById('boton');
alterna.classList.toggle('activo')

// 16 al 20

lista = document.createElement('ul');
lista.id = 'contenidos'
contenido1 = document.createElement('li');
contenido2 = document.createElement('li');
contenido3 = document.createElement('li');

contenido1.innerText = 'Contenido uno'
contenido2.innerText = 'Contenido dos'
contenido3.innerText = 'Contenido tres'

lista.appendChild(contenido1);
lista.appendChild(contenido2);
lista.appendChild(contenido3);

miMain.append(lista);

// 21 a 

