/// ejercisios 03

// 1 a 5

// for (i = 1; i <= 10; i++){
//     console.log(i)
// }

// let suma = 0
// for (let i = 1; i <= 100; i++){
//     suma += i
// }
// console.log(suma)

// for (let i = 2; i <= 20; i+=2) {
//     console.log(i)
// }

// let resultado = 0
// let userNumber = 0
// for (i = 1; i <= 5 ; i++){
//     userNumber = parseInt(prompt('Ingrese un numero: '))
//     resultado += userNumber
// }
// console.log(`La suma de los 5 numeros es ${resultado}`)

// let paises = ['argentina','brasil','paraguay','uruguay', 'bolivia', 'peru'];
// for (i = 0; i < paises.length; i++){
//     console.log(paises[i])
// }

// 6 a 10

// let i = 0
// while (i < 10) {
//     i++
//     console.log(i)
// }

// let i = 0;
// let resultado = 0;
// while (i < 50){
//     i++
//     resultado += i 
// }
// console.log(resultado)

// let i = 0
// while (i < 20) {
//     i++
//     console.log(i)
// }

// let userNumber = 1;
// while (userNumber > 0) {
//     userNumber = parseInt(prompt('Insert a numer: '))
// }

// let contador = 0;
// let userPrompt = 'hola';
// while (userPrompt == 'hola') {
//     userPrompt = prompt('Escriba la palabra hola: ').toLowerCase()
//     if (userPrompt == 'hola'){
//         contador++
//     }
// }
// console.log(contador);

// de 11 a 15

// let i = 1
// do {
//     console.log(i)
//     i++
// } while (i <= 10)

// let i = 0
// let resultado = 0
// do {
//     i++
//     resultado += i
// } while (i <= 30)
// console.log(resultado)

// let i = 0
// do {
//     i += 3
//     console.log(i)
// } while (i <= 29)

// let userNumber = 0
// do {
//     userNumber = parseInt(prompt('Insert a number: '))
// } while (userNumber != 0)

// let secretNumber = 5
// let userNumber = 0
// let counter = 0
// do {
//     userNumber = parseInt(prompt('Adivina el numero secreto: '))
//     counter ++
// } while (userNumber !== secretNumber)
// console.log(`El usuario intento ${counter} veces hasta adivinar el numero ${secretNumber}.`)

// 16 a 20

// let arrayNumbers = [2, 10, 20, 25, 33, 48, 51, 60, 100];
// for (i = 0; i >= arrayNumbers.length; i++) {
//     if (arrayNumbers[i] > 50){
//         break
//     }
// }
// console.log('Se encontro un numero mayor a 50 en el array.')

// let i = 0
// while (i <= 15) {
//     i++
//     if (i === 11 ){
//         break
//     }
// }

// let userNumber = 0
// do {
//     userNumber = parseInt(prompt('Ingrese un numero: '))
// } while (userNumber > 0 )

// for (i = 1; i <= 100; i++) {
//     console.log(i)
//     if (i % 37 == 0){
//         break
//     }
// }

// for (i = 1; i <= 20; i++) {
//     console.log(i)
//     if (i === 13){
//         break
//     }
// }

// 21 a 25

// for (i = 1; i <= 20; i++) {
//     if (i % 5 == 0){
//         continue
//     } else {
//         console.log(i)
//     }
// }

// let i = 0
// while (i <= 14) {
//     i++
//     if (i % 3 === 0){
//         continue
//     }
//     console.log(i)
// }

// let i = 1
// let userNumber = 0
// do {
//     userNumber = parseInt(prompt('Ingrese un numero: '))
//     if (userNumber % 2 == 0){
//         continue
//     }
//     console.log(userNumber)
// } while (userNumber > 0) 

// for (i = 1; i <= 10; i++) {
//     if (i % 7 == 0){
//         continue
//     } else {
//         console.log(i)
//     }
// }

// let i = 0
// while (i <= 18) {
//     i+=2
//     console.log(i)
// }

// 26 a 30

// let userNumber = prompt('Ingrese un numero del 1 al 7: ')
// switch (userNumber) {
//     case "1" :
//         console.log('Lunes')
//         break
//     case "2" :
//         console.log('Martes')
//         break
//     case "3":
//         console.log('Miercoles')
//         break
//     case "4" :
//         console.log('Jueves')
//         break
//     case "5" :
//         console.log('Viernes')
//         break
//     case "6" :
//         console.log('Sabado')
//         break
//     case "7" :
//         console.log('Domingo')
//         break
//     case "0" :
//         console.log('Numero 0 no es valido')
//         break
//     default:
//         console.log('Ingrese un numero del 1 al 7')
//         break
// }

// let userPrompt = prompt('Ingrese una calificacion de la A a la F: ').toLocaleUpperCase();
// switch(userPrompt){
//     case 'A':
//         console.log('La nota es exelente.');
//         break;
//     case 'B':
//         console.log('La nota es mmuy buena.');
//         break;
//     case 'C':
//         console.log('La nota es satisfactoria.');
//         break;
//     case 'D':
//         console.log('La nota es pesima.');
//         break;
//     default:
//         console.log('Ingrese una letra.');
//         break;
// }

// let userPrompt = parseInt(prompt('Ingrese 1 para el primer mensaje, 2 para el segundo, 3 para el tercero: '))
// switch(userPrompt){
//     case 1:
//         console.log('Mensaje 1');
//         break;
//     case 2:
//         console.log('Mensaje 2');
//         break;
//     case 3:
//         console.log('Mensaje 3');
//         break;
// }

// let userNumber = prompt('Ingrese un numero del 1 al 12: ')
// switch (userNumber) {
//     case "1" :
//         console.log('Verano')
//         break
//     case "2" :
//         console.log('Verano')
//         break
//     case "3":
//         console.log('Verano')
//         break
//     case "4" :
//         console.log('Otoño')
//         break
//     case "5" :
//         console.log('Otoño')
//         break
//     case "6" :
//         console.log('Otoño')
//         break
//     case "7" :
//         console.log('Invierno')
//         break
//     case "8" :
//         console.log('Invierno')
//         break
//     case "9" :
//         console.log('Verano')
//         break
//     case "10" :
//         console.log('Verano')
//         break
//     case "11" :
//         console.log('Verano')
//         break
//     case "12" :
//         console.log('Verano')
//         break
//     default:
//         console.log('Ingrese un numero del 1 al 12')
//         break
// }

// let userPrompt = prompt('Ingrese un numero del 1 al 12: ').toLocaleLowerCase()
// switch (userPrompt) {
//     case "a" :
//         console.log(`La letra ${userPrompt} es vocal.`)
//         break
//     case "e" :
//         console.log(`La letra ${userPrompt} es vocal.`)
//         break
//     case "i":
//         console.log(`La letra ${userPrompt} es vocal.`)
//         break
//     case "o" :
//         console.log(`La letra ${userPrompt} es vocal.`)
//         break
//     case "u" :
//         console.log(`La letra ${userPrompt} es vocal.`)
//         break
//     default:
//         console.log(`La letra ${userPrompt} es consonante.`)
//         break
// }

// 31 a 35

// let resultado = 0
// let userNumber = 0
// for (let i = 0; i < 5; i++){
//     userNumber = parseInt(prompt('Ingrese un numero: '))
//     resultado += userNumber
// }
// console.log(resultado)

// let userPrompt = ''
// while (userPrompt != 'salir'){
//     userPrompt = prompt('Ingrese una palabra cualquiera').toLowerCase()
// }

// for (let i = 0; i <= 50; i++){
//     if (i % 4 === 0) {
//         continue
//     }
//     console.log(i)
// }

// let userNumber = 0
// while (userNumber < 100){
//     userNumber = parseInt(prompt('Ingrese un numero cualquiera: '))
// }

// let userNumber = prompt('Ingrese un numero del 1 al 12: ')
// switch (userNumber) {
//     case "1" :
//         console.log('Enero')
//         break
//     case "2" :
//         console.log('febrero')
//         break
//     case "3":
//         console.log('marzo')
//         break
//     case "4" :
//         console.log('abril')
//         break
//     case "5" :
//         console.log('mayo')
//         break
//     case "6" :
//         console.log('junio')
//         break
//     case "7" :
//         console.log('julio')
//         break
//     case "8" :
//         console.log('agosto')
//         break
//     case "9" :
//         console.log('septiembre')
//         break
//     case "10" :
//         console.log('octubre')
//         break
//     case "11" :
//         console.log('noviembre')
//         break
//     case "12" :
//         console.log('diciembre')
//         break
//     default:
//         console.log('Ingrese un numero del 1 al 12')
//         break
// }

// 36 a 40

// for (let i = 10; i >= 1; i--){
//     console.log(i)
// }

// let i = 11
// while (i >= 2){
//     i--
//     console.log(i)
// }

// let i = 4
// do {
//     i++
//     console.log(i)
// } while (i <= 14)

// let arrayInverso = [1,2,3,4,5,6,7,8]
// for (i = arrayInverso.length; i >= 0; i--){
//     console.log(arrayInverso[i])
// }

// let i = 0
// while (i <= 100){
//     i++
//     console.log(i)
//     if (i % 25 === 0){
//         break
//     }
// }

// 41 a 45

// let userNumber = 0
// for (let i = 1; i <= 1; i++){
//     userNumber = parseInt(prompt("Ingrese un numero: "))
//     switch(userNumber){
//         case 1:
//             console.log('mensaje 1')
//             break
//         case 2:
//             console.log('mensaje 2')
//             break
//         case 3:
//             console.log('mensaje 3')
//             break
//         case 4:
//             console.log('mensaje 4')
//             break
//         case 5:
//             console.log('mensaje 5')
//             break
//         default:
//             console.log('ingrese un numero')
//     }
// }

// let userNumber = 0
// let i = 1
// while (i <= 1) {
//     i++
//     userNumber = parseInt(prompt("Ingrese un numero del 1 al 7: "))
//     switch(userNumber){
//         case 1:
//             console.log('lunes')
//             break
//         case 2:
//             console.log('martes')
//             break
//         case 3:
//             console.log('miercoles')
//             break
//         case 4:
//             console.log('jueves')
//             break
//         case 5:
//             console.log('viernes')
//             break
//         case 6:
//             console.log('sabado')
//             break
//         case 7:
//             console.log('domingo')
//             break
//         default:
//             console.log('ingrese un numero.')
//     }
// }

// let i = 1
// let userPrompt = ""
// do {
//     i++
//     userPrompt = prompt("Ingrese una letra: ").toUpperCase()
//     switch(userPrompt){
//         case "a":
//             console.log(`la letra ${userPrompt} es una vocal`)
//             break
//         case "e":
//             console.log(`la letra ${userPrompt} es una vocal`)
//             break
//         case "i":
//             console.log(`la letra ${userPrompt} es una vocal`)
//             break
//         case "o":
//             console.log(`la letra ${userPrompt} es una vocal`)
//             break
//         case "u":
//             console.log(`la letra ${userPrompt} es una vocal`)
//             break
//         default:
//             console.log(`la letra ${userPrompt} es una consonante`)
//             break
//     }
// } while (i <= 1)

// for (let i = 0; i <= 20; i++){
//     switch(i % 4){
//         case 0:
//             console.log(`el numero ${i} es divisible por 4`);
//             break;
//         default:
//             console.log(i)
//             break
//     }
// }

// let i = 1
// let userPrompt = ""
// while (i <= 1) {
//     i++
//     userPrompt = prompt("Ingrese una calificacion de la A a la F: ").toUpperCase()
//     switch(userPrompt){
//         case 'A':
//             console.log(`la calificacion es exelente`)
//             break
//         case 'B':
//             console.log(`la calificacion es muy buena`)
//             break
//         case 'C':
//             console.log(`la calificacion es buena`)
//             break
//         case 'D':
//             console.log(`la calificacion es satisfactoria`)
//             break
//         case 'F':
//             console.log(`la calificacion es mala`)
//             break
//         default:
//             console.log('Ingrese una calificacion de la A a la F')
//     }
// }

// 46 a 

// for (let i = 0; i <= 100; i++){
//     if (i % 10 === 0){
//         continue
//     }
//     console.log(i)
// }

// let esPrimo = true
// let userNumber = 0
// let i = 0;
// while (esPrimo){
//     userNumber = parseInt(prompt('Ingrese un numero: '))
//     if (userNumber > 1) {
//         for (let i = 2; i < userNumber; i++) {
//             if (userNumber % i === 0) {
//             esPrimo = false;
//             break;
//             }
//         }
//     }
// }

// let userAge = 0
// let i = 0
// do {
//     userAge = parseInt(prompt("Ingrese su edad: "))
//     if (userAge != 0){
//         switch(true){
//             case (userAge > 1 && userAge < 10):
//                 console.log(`Tenes ${userAge} años y sos un niño.`)
//                 break
//             case (userAge > 10 && userAge < 20):
//                 console.log(`Tenes ${userAge} años y sos un adolesente.`)
//                 break
//             case (userAge > 20 && userAge < 30):
//                 console.log(`Tenes ${userAge} años y sos un adulto.`)
//                 break
//             case (userAge > 40 && userAge < 50):
//                 console.log(`Tenes ${userAge} años y sos un adulto mayor.`)
//                 break
//             default:
//                 console.log('Ingrese edad.')
//                 break
//         }
//     }
// } while (userAge != 0)

// for (let i = 2; i <= 20; i++){
//     console.log(i)
//     if(Math.sqrt(i) % 1 === 0 ){
//         console.log(`${i} es un cuadrado perfecto`)
//         break
//     }
// }

// let userNumber = 0;
// while (userNumber < 7){
//     userNumber = parseInt(prompt("Ingrese un dia de la semana en numero: "))
//     switch(true){
//         case (userNumber == 1):
//             console.log('Es lunes.');
//             break;
//         case (userNumber == 2):
//             console.log('Es martes.');
//             break;
//         case (userNumber == 3):
//             console.log('Es miercoles.');
//             break;
//         case (userNumber == 4):
//             console.log('Es jueves.');
//             break;
//         case (userNumber == 5):
//             console.log('Es viernes.');
//             break;
//         case (userNumber == 6):
//             console.log('Es sabado.');
//             break;
//         case (userNumber == 7):
//             console.log('Es domingo.');
//             break;
//     }
// }