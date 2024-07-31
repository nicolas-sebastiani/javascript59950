// 1 a 4

// // const persona = {
//     nombre: 'nicolas', 
//     edad: 33, 
//     ciudad: 'villa consitucion', 
//     telefono: 3364376358}
// console.log(persona)
// console.log(persona.telefono)

// const auto = { 
//     marca: 'fiat',
//     modelo: 'uno',
//     año: 1993,
//     color: 'blanco'
// }
// console.log(auto.modelo)
// console.log(auto.color)

// 5 a 7

// function producto (nombre, precio, cantidad) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.cantidad = cantidad;
// }
// const producto1 = new producto('agua', 1300, 1)
// console.log(producto1.precio)

// function persona (nombre, edad, ciudad) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.ciudad = ciudad;
// }
// const persona1 = new persona('nicolas', 33, 'villa')
// console.log(persona1)

// function libro (titulo, autor, año) {
//     this.titulo = titulo;
//     this.autor = autor;
//     this.año = año;
// }
// const libro1 = new libro('harry potter', 'jk rowling', 1998)
// console.log(libro1)

// 8 a 14

// function rectangulo (base, altura){
//     this.base = base;
//     this.altura = altura;
//     this.calcularArea = function () {
//         return base * altura
//     }
// }
// const rectangulo1 = new rectangulo(10,5)
// console.log(rectangulo1.calcularArea())

// function circulo (radio){
//     this.radio = radio;
//     this.calcularPerimetro = function (){
//         return radio * 2 * 3.1415
//     }
// }
// const circulo1 = new circulo(2)
// console.log(circulo1.calcularPerimetro())

// function estudiante (nombre, edad, curso){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.curso = curso;
//     this.presentarse = function(){
//         console.log(`Hola, me llamo ${nombre} tengo ${edad} años y soy del curso ${curso}`)
//     }
// }
// const estudiante1 = new estudiante('nicolas', 15, 'B')
// estudiante1.presentarse()

// function cuentaBancaria(saldo, titular){
//     this.saldo = saldo;
//     this.titular = titular;
//     this.depositar = function(monto){
//         return this.saldo +=  monto
//     }
//     this.retirar = function(monto){
//         return this.saldo -= monto
//     }
// }
// const cuenta1 = new cuentaBancaria(1000, 'nicolas')
// console.log(cuenta1.depositar(200))
// console.log(cuenta1.retirar(50))

// const agenda = {
//     contactos : ['nico', 'ale'],
//     agregarContacto: function (contacto){
//         const nuevoMiembro = (contacto) 
//         this.contactos.push(nuevoMiembro)
//     }
// }
// agenda.agregarContacto('luz')
// console.log(agenda)


// 15 a 16

// const frutas = {
//     manzana: 'roja',
//     pera: 'amarilla',
//     naranja: 'verde',
// }

// if ('manzana' in frutas){
//     console.log(`la propiedad manzana esta en el objeto`)
// } else {
//     console.log('la propiedad NO esta.')
// }

// for (fruta in frutas){
//     console.log(fruta)
// }

// 17 a 19

// class Rectangulo {
//     constructor(base,altura){
//         this.base = base;
//         this.altura = altura;
//     }
//     calcularArea(){
//         return this.base * this.altura;
//     }
// }
// const rectangulo1 = new Rectangulo (10,25)
// console.log(rectangulo1.calcularArea())

// class Circulo{
//     constructor(radio){
//         this.radio = radio;
//     }
//     calcularPerimetro(){
//         return this.radio * 2 * 3.14;
//     }
// }
// const circulo1 = new Circulo(8)
// console.log(circulo1.calcularPerimetro())

// class Empleado{
//     constructor(nombre,edad,cargo){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.cargo = cargo;
//     }
//     promocionar(){
//         this.cargo = 'encargado'
//         console.log('El empleado a sido promocionado a Encargado.')
//     }
// }
// const empleado1 = new Empleado('nicolas', 33, 'operario')
// console.log(empleado1.cargo)
// empleado1.promocionar()
// console.log(empleado1.cargo)

// 20 a 22

// class Producto{
//     constructor(nombre, precio, cantidad){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//     }
// }
// const producto1 = new Producto('cafe', 1350, 2)
// console.log(producto1)

// class Estudiante{
//     constructor(nombre, edad, curso){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.curso = curso;
//     }
// }
// const producto1 = new Producto('cafe', 1350, 2)
// console.log(producto1.nombre)

// class Libro{
//     constructor(titulo, autor, año){
//         this.titulo = titulo;
//         this.autor = autor;
//         this.año = año;
//     }
// }
// const libro1 = new Libro('cafe', 'jk rowling', 1990)
// console.log(libro1.autor)

// 