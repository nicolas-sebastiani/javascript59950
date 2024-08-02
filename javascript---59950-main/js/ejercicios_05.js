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

// const agenda = {
//     contactos : ['nico', 'ale'],
//     buscarContacto: function(nombre){
//         const resultado = this.contactos.find((elemento) => elemento === nombre);
//         console.log(resultado)
//     }
// }
// agenda.buscarContacto('nico')

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
//     calcularPerimetro(){
//         return (this.base * 2) + (this.altura * 2)
//     }
// }
// const rectangulo1 = new Rectangulo (10,25)
// console.log(rectangulo1.calcularArea())
// console.log(rectangulo1.calcularPerimetro())

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

// 24 a 28

// class Vehiculo{
//     constructor(marca, modelo, año){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.año = año;
//     }
//     detalles(){
//         console.log(`Marca: ${this.marca} Modelo: ${this.modelo} Año: ${this.año}`)
//     }
//     acelerar(){
//         console.log('El vehiculo esta acelerando.')
//     }

// }
// const vehiculo1 = new Vehiculo ('peugeot', 208, 2016)
// vehiculo1.detalles()
// vehiculo1.acelerar()

// class Triangulo{
//     constructor (lado1, lado2, lado3){
//         this.lado1 = lado1;
//         this.lado2 = lado2;
//         this.lado3 = lado3;
//     }
//     calcularArea(){
//         return (this.lado1 + this.lado2 + this.lado3) / 2
//     }
//     calcularPerimetro(){
//         return this.lado1 + this.lado2 + this.lado3
//     }
// }
// const traingulo1 = new Triangulo(5,4,6)
// console.log(traingulo1.calcularArea())

// 29 a 32

// const computadora = {
//     marca: 'razer',
//     modelo: 'gtx5k',
//     procesador: 'intel i9'
// }
// console.log('procesador' in computadora)
// for (let propiedad in computadora){
//     console.log(propiedad)
// }

// class Circulo{
//     constructor(radio){
//         this.radio = radio;
//     }
//     calcularArea(){
//         return 3.14 * radio * radio
//     }
// }

// class TriagunloEquilatero{
//     constructor(lado){
//         this.lado = lado
//     }
//     calcularPerimetro(){
//         return lado * 3
//     }
// }

// 33 a 36

// const libro = {
//     titulo: 'harry potter',
//     autor: 'jw rowling',
//     paginas: 800,
//     leerPagina: function(){
//         console.log('Leyendo pagina...')
//     }
// }
// libro.leerPagina()

// const televisor = {
//     marca: 'samsung',
//     pulgadas: 32,
//     resolucion: '1440p',
//     encender: function(){
//         console.log('El televisor esta encendido')
//     }
// }
// televisor.encender()

// const computadora = {
//     marca: 'razer',
//     modelo: 'gtx5k',
//     procesador: 'intel i9',
//     encender: function(){
//         console.log('La computadora esta encendida')
//     }
// }
// computadora.encender()

// const celular = {
//     marca: 'nokia',
//     modelo: '1100',
//     bateria: '5000w',
//     llamar: function(numero){
//         console.log(`Llamando a ${numero}`)
//     }
// }
// celular.llamar(3364376358)

// 37 a 40

// const animal = {
//     especie: 'felino',
//     nombre: 'gato',
//     edad: 8,
// }
// console.log('nombre' in animal)
// for (let propiedad in animal){
//     console.log(propiedad + ': ' + animal[propiedad])
// }

// const persona = {
//     nombre: 'nico',
//     apellido: 'sebastiani',
//     edad: 33,
// }
// console.log('apellido' in persona)
// for (let propiedad in persona){
//     console.log(propiedad + ': ' + persona[propiedad])
// }

// 41 a 44

// class Telefono {
//     constructor(marca, modelo){
//         this.marca = marca;
//         this.modelo = modelo;
//     }
//     hacerLlamada(){
//         console.log('Llamando...')
//     }
// }

// class Laptop {
//     constructor(marca, modelo, ram){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.ram = ram;
//     }
//     encender(){
//         console.log('La laptop esta encendida.')
//     }
// }

// class Tablet {
//     constructor(marca, modelo, pantalla){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.pantalla = pantalla;
//     }
//     navegarInternet(){
//         console.log('Navegando en internet')
//     }
// }

// class SmartWatch {
//     constructor(marca, modelo, bateria){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.bateria = bateria;
//     }
//     mostrarHora(){
//         console.log('Mostrando la hora.')
//     }
// }

// 45 a 48

// class Bicicleta {
//     constructor(marca, modelo, tamaño){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.tamaño = tamaño;
//     }
// }
// const bici1 = new Bicicleta('aita','xxl','90')

// 49 a 52

// class Refrigerador {
//     constructor(marca, modelo, capacidad){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.capacidad = capacidad;
//     }
//     enfriar(){
//         console.log('Enfriando...')
//     }
// }

// 53 a 56

// const usuario = {
//     nombre: 'nicolas',
//     correo: 'nico@hotmail.com',
//     edad: 33,
// }
// console.log('correo' in usuario)
// for (let propiedad in usuario){
//     console.log(propiedad + ': ' + usuario[propiedad])
// }

// const carro = {
//     marca: 'ford',
//     modelo: 'fiesta',
//     año: 2003,
// }
// console.log('año' in carro)
// for (let propiedad in carro){
//     console.log(propiedad + ': ' + carro[propiedad])
// }

// 57 a 60

// class Drone {
//     constructor(marca, modelo, bateria){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.bateria = bateria;
//     }
//     volar(){
//         console.log('El dron esta volando.')
//     }
// }
// const drone1 = new Drone ('aiwa', '1009', 6000)
// drone1.volar()