
var testeForaBlocoVar =  'Estou fora do bloco'

if (true){
    var testeDentroblocoVar = 'Estou dentro do bloco'
    console.log("Dentro do bloco - testeForaBlocoVar", testeForaBlocoVar);
    console.log("Dentro do bloco - testeDentrblocoVar",testeDentroblocoVar);
}

console.log("Fora do bloco - testeForaBlocoVar", testeForaBlocoVar);
console.log("Fora do bloco - testeDentrblocoVar",testeDentroblocoVar);