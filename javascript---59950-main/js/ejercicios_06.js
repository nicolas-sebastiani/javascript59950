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
//      eliminarPersona(nombreBuscado){
//          this.personas = this.personas.filter((elemento) => elemento.nombre !== nombreBuscado)
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

// 31 a 40

// class Estudiante {
//     constructor(nombre, nota1, nota2, nota3){
//         this.nombre = nombre;
//         this.nota1 = nota1;
//         this.nota2 = nota2;
//         this.nota3 = nota3;
//     }
//     calcularPromedio(){
//         const sumaNotas = this.nota1 + this.nota2 + this.nota3;
//         const promedio = sumaNotas / 3;
//         return promedio;
//     }
//     aprueba(){
//         const promedio = this.calcularPromedio();
//         return promedio >= 6;
//     }
// }

// class Curso{
//     constructor(){
//         this.estudiantes = []
//     }
//     agregarEstudiante(Estudiante){
//         this.estudiantes.push(Estudiante)
//     }
//     eliminarEstudiante(nombreBuscado){
//         this.estudiantes = this.estudiantes.filter((elemento) => elemento.nombre !== nombreBuscado)
//     }
//     buscarEstudiante(nombreBuscado){
//         return this.estudiantes.find((elemento) => elemento.nombre === nombreBuscado)
//     }
//     obtenerEstudiantesAprobados(){
//         return this.estudiantes.filter((estudiante) => estudiante.aprueba());
//     }
// }

// console.log(`El promedio es ${alumno1.notaPromedio().toFixed(1)}`)
// const alumno1 = new Estudiante('nico', 2, 4, 2)
// const alumno2 = new Estudiante('barby', 9, 7, 9)
// const alumno3 = new Estudiante('jose', 10, 1, 9)
// alumno2.notaPromedio()
// alumno1.aprueba()
// const curso1 = new Curso()
// curso1.agregarEstudiante(alumno1)
// curso1.agregarEstudiante(alumno2)
// curso1.agregarEstudiante(alumno3)
// curso1.eliminarEstudiante('nico')
// console.log(curso1.estudiantes)
// const personaEncontrada = curso1.buscarEstudiante('nico')
// if (personaEncontrada){
//     console.log('Se encontro al alumno buscado')
// } else {
//     console.log('No se encontro el alumno')
// }
// const alumnosAprobados = curso1.estudiantesAprobados();
// console.log('Estudiantes aprobados: ');
// alumnosAprobados.forEach((estudiante) => {console.log(`${estudiante.nombre}: Promedio: ${estudiante.aprueba()}`)});

// const estudiantesAprobados = curso1.obtenerEstudiantesAprobados();
// console.log('Estudiantes aprobados: ');
// estudiantesAprobados.forEach((estudiante) => {console.log(`${estudiante.nombre} - Promedio: ${estudiante.calcularPromedio()}`);
// })

// 41 a 

// const numeros = [2, 4, 6, 12, 16, 1, 3, 25]
// let suma = 0
// for (elemento of numeros){
//     suma += elemento
// }
// console.log(suma)

// let numeroMayor = numeros[0]
// for(let i = 1; i < numeros.length; i++){
//     if(numeros[i] > numeroMayor){
//         numeroMayor = numeros[i]
//     }
// }
// console.log(numeroMayor)

// const numeros = [2, 4, 6, 12, 16, 1, 3, 25, 11, 29]
// let contadorNumeros = 0
// for(let i = 1; i < numeros.length; i++){
//     if (numeros[i] > 10){
//         contadorNumeros++
//     }
// }
// console.log(contadorNumeros)

// const numeros = [2, 4, 6, 12, 16, 1, 3, 25, 11, 29]
// let resultado = 0
// let numero = 0
// for(let i = 0; i < numeros.length; i++){
//     numero = numeros[i]
//     resultado = numero * 2
//     console.log(`${numeros[i]} x 2 es ${resultado}`)
// }

// const numeros = [3, 4, 6, 12, 16, 1, 3, 25, 11, 29]
// const numerosPares = []
// let numeroPar = numeros[0]
// for(let i = 1; i < numeros.length; i++){
//     numeroPar = numeros[i]
//     if (numeroPar % 2 === 0){
//         numerosPares.push(numeroPar)
//     }
// }
// console.log(numeros)
// console.log(numerosPares)

// const numeros = [3, 4, 6, 12, 16, 1, 3, 25, 11, 29];
// let promedio = 0;
// let sumatoria = 0;
// let numero = numeros[0]
// for(let i = 0; i < numeros.length; i++){
//     numero = numeros[i]
//     sumatoria += numero
// }
// promedio = sumatoria / numeros.length
// console.log(promedio)

// const numeros = [3, 4, 6, 12, 16, 1, 3, 25, 11, 29];
// let numeroPar = numeros[0];
// let sumatoria = 0;
// let numero = 0;
// for(let i = 0; i < numeros.length; i++){
//     numeroPar = numeros[i]
//     if (numeroPar % 2 === 0){
//         sumatoria += numeroPar 
//     }
// }
// console.log(sumatoria)