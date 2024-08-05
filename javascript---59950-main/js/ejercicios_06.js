// 1 a 10

// const personas = [
//     {nombre : 'nico', edad : 33},
//     {nombre : 'ramon', edad : 19},
//     {nombre : 'pedro', edad : 10},
// ]
// console.log(personas)
// personas.push({nombre: 'omar', edad: 54})
// console.log(personas)
// personas.shift()
// console.log(personas)
// const mayorDe30 = personas.filter((elemento) => elemento.edad > 30);
// console.log(mayorDe30)
// console.log(personas.sort())

// let sumatoria = 0
// for (persona of personas){
//     sumatoria += (persona.edad)
// }
// console.log(sumatoria / (personas.length))

// let nombres = []
// for (persona of personas){
//         nombres.push(persona.nombre)
//     }
// console.log(nombres)

// for (elemento of personas){
//     if(elemento.edad > 18){
//         console.log('Todas las peronas son mayores de edad')
//     }else {
//         console.log('No todas las personas son mayores')
//     }
// }

// let comparacion = 0
// for (persona of personas){
//     comparacion = persona.edad
//     if (comparacion >= persona.edad){
//         comparacion = persona.edad
//         console.log(comparacion)
//     }
// }

// 11 a 20

// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     infoPersona(){
//         console.log(`El usuario ${this.nombre} tiene ${this.edad} años.`)
//     }
// }

// // persona1.infoPersona()

// let personas = [
//     {nombre: 'nicolas', edad: 33},
//     {nombre: 'barbara', edad: 36},
//     {nombre: 'alejandro', edad: 20},
//     {nombre: 'tobias', edad: 12},
// ]

// class Grupo{
//     constructor(){
//         this.personas = [];
//     }
//     agregarPersona(Persona){
//         this.personas.push(Persona)
//     }
//     eliminarPersona(nombreBuscado){
//         this.personas = this.personas.filter((elemento) => elemento.nombre !== nombreBuscado)
//     }
//     encontrarPersona(nombreBuscado){
//         return this.personas.find((persona) => persona.nombre === nombreBuscado)
//     }
//     meyoresDeEdad(){
//         const resultado = this.personas.filter((elemento) => elemento.edad > 18)
//         console.log(resultado)
//     }
//     totalDePersonas(){
//         console.log(`Hay ${personas.length} personas en la lista`)
//     }
//     ordenarPorEdad() {
//         this.personas.sort((a, b) => a.edad - b.edad);
//     }
// }

// const persona1 = new Persona('nico', 34)
// const persona2 = new Persona('pepe', 54)
// const persona3 = new Persona('mariel', 19)

// const grupo1 = new Grupo()
// grupo1.agregarPersona(persona1)
// grupo1.agregarPersona(persona2)
// grupo1.agregarPersona(persona3)
// grupo1.eliminarPersona('pepe')
// console.log(grupo1.personas)
// const personaEncontrada = grupo1.encontrarPersona('mariel');
// if (personaEncontrada){
//     console.log('La persona fue encontrada')
// }else {
//     console.log('No se encotro a la persona')
// }
// grupo1.meyoresDeEdad()
// grupo1.totalDePersonas()
// grupo1.ordenarPorEdad()
// console.log(grupo1.personas)

// 21 a 

// class Coche{
//     constructor(marca, modelo, año){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.año = año;
//     }
//     infoCoche(){
//         console.log(`Su ${this.marca} ${this.modelo} es del año ${this.año}`)
//     }
// }

// auto1.infoCoche()

// class Concesionario{
//     constructor(){
//         this.coches = []
//     }
//     agreagarCoche(Coche){
//         this.coches.push(Coche)
//     }
//     eliminarCoche(modelo){
//         this.coches = this.coches.filter((coche) => coche.modelo !== modelo)
//     }
//     encontrarCoche(modeloBuscado){
//         return this.coches.find((coche) => coche.modelo === modeloBuscado)
//     }
//     cochesPorMarca(marca){
//         this.coches = this.coches.filter((coche) => coche.marca === marca)
//     }
//     totalDeCoches(){
//         console.log(`El concesionario tiene ${this.coches.length} coches disponibles`)
//     }
//     ordenarPorAño(){
//         this.coches.sort((a,b) => a.año - b.año)
//     }
// }

// const auto1 = new Coche('chevrolet', 'chevelle', 1995)
// const auto2 = new Coche('ford', 'fiesta', 1990)
// const auto3 = new Coche('peugeot', '208', 2016)

// const consecionario1 = new Concesionario()
// consecionario1.agreagarCoche(auto1)
// consecionario1.agreagarCoche(auto2)
// consecionario1.agreagarCoche(auto3)
// console.log(consecionario1.coches)
// consecionario1.eliminarCoche('fiesta')
// console.log(consecionario1.coches)
// const cocheEncontrado = consecionario1.encontrarCoche('208');
// if(cocheEncontrado){
//     console.log('El coche fue encontrado con exito')
// }else {
//     console.log('No se encuentra el coche.')
// }
// consecionario1.cochesPorMarca('peugeot')
// console.log(consecionario1.coches)
// consecionario1.totalDeCoches()
// consecionario1.ordenarPorAño()
