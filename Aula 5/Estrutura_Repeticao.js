// Estrutura de repetição


/* 

- While
-Do/while
-for
-for...of... 

*/   

//While

let x = 0;

while (x < 5) {
    console.log(x);
    x = x + 1;
}

// Exercicio

let i = 0;

while (i < 20) {
    console.log(i);
    i = i + 1; // ou i += 1; ou i++;
}

// Do/While

let n = 0

do {
    console.log(n);
    n = n + 1
} while (n < 5);

// Exercicio

let i2 = 0;

do {
    console.log(i2);
    i2 = i2 + 1;
} while (i2 < 10);


// Exercicio


let u = 0;

while (u < 20) {
    
    if(u % 2 == 0) {
        console.log(` ${u} é par`);
    } else if (u % 2 == 1) {
        console.log(` ${u} é impar`);
    }

    u = u + 1;
}


// For

for (let numero = 0 ; numero < 5; numero = numero + 1) {
    console.log(numero);
}

// Exercicio

for (a = 20; a > 0; a -= 5) {
    console.log(a);
}


// for...of...

for (let number of [1, 2, 3]) {
    console.log(number);
}



//exemplo do Mauro

let idh = [4.9, 7.8, 3.5, 1.9, 9.8];
console.log(idh);
for (p = 0; p < 5; p++) {
    let valor = idh[i];
    console.log(p, idh[p]);
}

//exemplo 2


for (o = 5; o <= 1000; o = o +50) {
    console.log(o);
}