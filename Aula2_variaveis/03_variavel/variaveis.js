// Linguagens Interpretadas: São intepretadas por um programa externo - HTML, CSS, JavaScript, PHP, ASP
// Não se clara

// Variaveis é um espaço na memoria de trabalho (RAM) onde guardo informações somente durante a execução do programa.

// Tipos de variaveis

let inteiro = 50;
console.log(inteiro);

let flutuante = 1.5;
console.log(flutuante);

let booleano = true;
console.log(booleano);

let string = 'Feijão por cima do arroz';
console.log(string);

let nulo = null;
let indefinido;
console.log(nulo);
console.log(indefinido);

let lista = [1, 'A', 3, 'B'];
console.log(lista);
console.log(lista[3]);

let lista2 = [inteiro, flutuante, booleano, string, nulo, indefinido];
console.log(lista2);

let objeto = {
    'nome' : 'Impacta Tecnologia',
    'tipo' : 'Empresa',
    'curso' : ['Introdução ao JavaScript', 'Desenvolvimento Front-End'],
    'alunos'  : 3000,
    1 : 'feliz',
};

console.log(objeto);
console.log(objeto.tipo);
console.log(objeto.curso[1]);
console.log(objeto[1]);

let texto = 'Impacta Tecnologia';
let texto2 = 'escola legal';
let texto3 = 'professor competentes';
let texto4 = 10;
let texto5 = true;

console.log(texto + ' ' + texto2);
console.log(texto + ' ' + texto3);
console.log(texto + texto4);
console.log(texto + texto5);
console.log(texto4 + texto5);

console.log('O instrutor se ' + texto4 + 'esforça u pouco' + texto5 + 'para dar' + texto + 'uma boa aula');
console.log(`O instrutor se ${texto4} esforça um pouco ${texto5} para dar ${texto} uma boa aula`);



let numeroInteiro = 3;
let numeroFracionario = 3.141519;
let minhaListaDeVariaveis = [1, 'a', 2, 'b', 3, 'c'];

console.log(minhaListaDeVariaveis[0])
console.log(minhaListaDeVariaveis[1])
console.log(minhaListaDeVariaveis[3])


objeto.bairro = 'Bela Vista';
objeto['rua'] = 'AV Paulista';

lista.push(10);
console.log(lista);












