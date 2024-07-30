// 1 a 4

// const persona = {
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

// 8 a 10

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

const agenda = {
    contactos: ['garcia', 'perez', 'lopez'],
    agregarContacto: function(contacto){
        this.contactos.push(contacto);
        console.log('contacto agregado')
    },
    buscarContacto: function(contacto){
        agenda.forEach(contacto)
    }
}
agenda.agregarContacto('sebastiani')
agenda.buscarContacto('perez')