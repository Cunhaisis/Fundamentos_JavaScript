const escola = "Cod3r"

console.log(escola.charAt(4)) // Pega o valor que esta na posição 4 (r)
console.log(escola.charAt(5)) // pega o valor que esta na posição dentro da String 
console.log(escola.charCodeAt(3)) // Pega o valor da String
console.log(escola.indexOf('3')) // Pega o a posicão que esta o valor
console.log(escola.substring(1))  //Pega o valor da String 
console.log(escola.substring(0, 3)) // pea os valores do intervalo 0 ao 3 

console.log('Escola'.concat(escola).concat("!")) // Concatena valores com a funcao .concat ou + 
console.log('Escola' + escola + "!") // Outra forma de concatenar 
console.log(escola.replace(3, 'e')) // subtistui um valor por outro
console.log('Ana, Maria, Pedro'.split(',')) // Cria um array com os valores 
