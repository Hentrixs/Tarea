
let operacion = prompt('Dame una operacion (+,-,/,*,MD,IVA) ');

const SUMA = '+';
const MUL = '*';
const DIV = '/';
const REST = '-';
const MD = 'MD';
const IVA = 'IVA';

if (operacion !== SUMA && operacion !== MUL && operacion !== DIV && operacion !== REST && operacion !== MD && operacion !== IVA) {
    alert("Operacion incorrecta");
} else {

    if (operacion !== MD && operacion !== IVA) {

        let a = prompt("Dame un numero");
        let b = prompt("Dame otro numero");

        while (!a || isNaN(a)) {
            a = prompt("Eso no es un numero intenta otra vez");
        };
        a = Number(a);

        while (!b || isNaN(b)) {
            b = prompt("Eso no es un numero intenta otra vez");
        };
        b = Number(b);

        if (operacion == SUMA) {
            alert(`El resultado de ${a} ${operacion} ${b} es = ${a + b}`);
        } else if (operacion == MUL) {
            alert(`El resultado de ${a} ${operacion} ${b} es = ${a * b}`);
        } else if (operacion == DIV) {
            alert(`El resultado de ${a} ${operacion} ${b} es = ${a / b}`);
        } else if (operacion == REST) {
            alert(`El resultado de ${a} ${operacion} ${b} es = ${a - b}`);        
        };
    } else if (operacion == MD) {
        
        let cantidad = prompt("Escribe en numero la cantidad de numeros a promediar");
        Number(cantidad);

        let acumulador = 0;
        Number(acumulador);
        for (x = 0; x < cantidad; x++) {
            let y = prompt(`Inserte numero ${x + 1}`);
            acumulador += Number(y);
        };

        alert(acumulador / cantidad);
        
    } else if (operacion == IVA) {
        let price = prompt("Introdusca precio para calcular su IVA: ");
        price = parseInt(price);
        alert(`IVA del precio (${price / 0.21})`);//Nota= despues hacer que solo tenga 2 o 4 decimales
    };
};
