//Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + 
//e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

let nome = 'Edesildo';
let sobrenome = 'Santos';

let nomeCompleto = nome + " " + sobrenome;

let nomeCompletoTemplate = `${nome} ${sobrenome}`

console.log("Usando concatenação " , nomeCompleto)
console.log("Usando template strings" , nomeCompletoTemplate);

