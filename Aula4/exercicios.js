// Primeiro exercicio 

let numero = 57687;

if (numero % 2 == 0 ) {
    console.log(`O numero ${numero} é par`);
}
else{
    console.log(`O numero ${numero} é ímpar`);
}

// Outro exemplo


let n = 13;
console.log(n);
console.log(`O resto da divisão de ${n} por 2 é: ${n % 2}`);
console.log(`O quociente da divisão de ${n} por 2 é: ${Math.floor(n / 2)}`);

// Segundo exercicio


let number = -90

if (number > 0) {
    console.log(`O numero ${number} é positivo`);
} else if (number < 0) {
    console.log(`O numero ${number} é negativo`);
} else {
    console.log('O numero é 0');
}

// Terceiro exercicio

let mes = 54;

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    console.log('Este mês tem 31 dias');
} else if (mes == 2){
    console.log('Esse mes tem entre 29 e 28 dias depedendo do ano') 
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11){
 console.log ('Esse mes tem 30 dias');
} else {
    console.log('Esse mes não existe');
}

// Outro exemplo


let deParaMes = {
    'Janeiro': 31,
    'Fevereiro': 28,
    'Março': 31,
    'Abril': 30,
    'Maio': 31,
    'Junho': 30,
    'Julho': 31,
    'Agosto': 31,
    'Setembro': 30,
    'Outubro': 31,
    'Novembro': 30,
    'Dezembro': 31
};

console.log(deParaMes.Abril);

// Datas

let dataDeHoje = new Date();
console.log(dataDeHoje);
console.log(dataDeHoje.getMonth() + 1);
let mes3 = dataDeHoje.getMonth() + 1;

let dataNova = new Date(2023, 5, 1);
console.log(dataNova);

// Vogal Consoante

let letra = 'b';

if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
    console.log(`A letra "${letra}" é uma vogal`);
} else {
    console.log(`A letra "${letra}" é uma consoante`);
}

//Quarto Exercicio

let a1 = 90;
let a2 = 80;
let a3 = 10;

if(a1 + a2 + a3 == 180) {
    console.log('O triangulo é válido');
} else {
    console.log('o triangulo não é valido');
}

if (a1 == a2 && a1 == a3) {
    console.log('O triangulo é equilatero');
} else if (a1 == a2 || a1 == a3 || a2 == a3) {
    console.log('O triangulo é isoceles');
} else if ( a1 != a2) {
    console.log('O triangulo é escaleno');
} 

// Exercicio 6



   