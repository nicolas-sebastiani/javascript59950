// 1 a 

const personas = [
    {nombre : 'nico', edad : 33},
    {nombre : 'ramon', edad : 15},
    {nombre : 'pedro', edad : 20},
]
console.log(personas)
personas.push({nombre: 'omar', edad: 54})
console.log(personas)
personas.shift()
console.log(personas)
const mayorDe30 = personas.filter((elemento) => elemento.edad > 30);
console.log(mayorDe30)
console.log(personas.sort())

