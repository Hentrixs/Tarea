
/*for (let x = 0 ;x < 10;x++) {
    console.log(x);
};
/*
let nombre = prompt("ingrese name");
if (!nombre) {
    nombre = prompt('vuelve a ingresar name')
    if (!nombre) {
        nombre = prompt('vuelve a ingresar name')
    }
}
    // Esto se arregla con un bucle
*/
/*
let nombre = prompt("ingrese name");
while (!nombre) { // Mientras esta condicion se cumpla este bloque de codigo se va a ejecutar, asi se lee while
    // While  es un bucle condicional que se usa cuando queremos repetir algo bajo X condicion
    // O mejor dicho cuando no sabemos cuantas veces queremos repetir algo
    nombre = prompt('vuelve a ingresar name')
}
    // Esto se arregla con un bucle


//E1
*/
/*
let number = prompt("Give me a number");
while (!number || isNaN(number)) {
    number = prompt("Vuelve a ingresar el numero")
};


//E2
/*
let getname = prompt("Dame un nombre");
while (getname !== "pepe") {
    getname = prompt("Te equivocaste");
}*/

// Bucle for / bucle por contador
// se usa cuando sabemos cuantas veces queremos repetir algo

// Solicitar al usuario 3 numeros y luego calcular el promedio
/*
for (let x = 0;x < 3; x++) {
    let y = prompt(`dame un numero, actualmente vamos por el numero ${x}`);
    while (!Number(y) || isNaN(y)) {
        x = x - 1;
        y = prompt(`dame un numero, actualmente vamos por el numero ${x}`)
    };
};
*/

//E3
/*
let acumulador = 0;
for (let x = 0;x < 3; x++) {
    let number = prompt(`dame un numero, actualmente vamos por el numero ${x+1}`);
    acumulador += Number(number);
};

alert( acumulador / 3);
*/

/*
//V1
function validateNumber(x) {
    if (!x || isNaN(x)) {
        alert("Numero no valido");
        return null;
    } else {
        return Number(x);
    };
};

function calc() {
    let getNumber = () => prompt('Dame un numero');
    let getOperation = () => prompt('Operacion? = ');
    let operacion = getOperation();

    if (operacion == '+') {
        let a = getNumber();
        let b = getNumber();
        a = validateNumber(a);
        b = validateNumber(b);
        alert(`El resultado de ${a} + ${b} es = ${a + b}`);
    } else if (operacion == '-') {
        let a = getNumber();
        let b = getNumber();
        a = validateNumber(a);
        b = validateNumber(b);
        alert(`El resultado de ${a} - ${b} es = ${a - b}`);
    } else if (operacion == '*') {
        let a = getNumber();
        let b = getNumber();
        a = validateNumber(a);
        b = validateNumber(b);
        alert(`El resultado de ${a} * ${b} es = ${a * b}`);
    } else if (operacion === '/') {
        let a = getNumber();
        let b = getNumber();
        a = validateNumber(a);
        b = validateNumber(b);
        alert(`El resultado de ${a} / ${b} es = ${a / b}`);
    } else {
        alert('Operacion no reconocida')
    };
};
*/




//V2
/*
function calc() {
    let getNumber = () => {
        let x = prompt("Dame un numero");
        if (!x || isNaN(x)) {
            alert("Numero no valido");
            return null;
        } else {
            return Number(x);
        };
    };

    let getOperation = () => prompt('Operacion? = ');
    let operacion = getOperation();

    if (operacion == '+') {
        let a = getNumber();let b = getNumber();
        alert(`El resultado de ${a} + ${b} es = ${a + b}`);
    } else if (operacion == '-') {
        let a = getNumber();let b = getNumber();
        alert(`El resultado de ${a} - ${b} es = ${a - b}`);
    } else if (operacion == '*') {
        let a = getNumber();let b = getNumber();
        alert(`El resultado de ${a} * ${b} es = ${a * b}`);
    } else if (operacion === '/') {
        let a = getNumber();let b = getNumber();
        alert(`El resultado de ${a} / ${b} es = ${a / b}`);
    } else {
        alert('Operacion no reconocida')
    };
};

calc();
*/

//V2
/*
function calc() {

    let operacion = prompt('Operacion? = ');

    if (operacion == '+') {
        let a = prompt("Dame un numero");
        while(!a || isNaN(a)) {
            alert("Numero no valido");
        };
        a = Number(a);
        let b = prompt("Dame un numero");
        while(!b || isNaN(b)) {
            alert("Numero no valido");
        };
        b = Number(b);
        alert(`El resultado de ${a} + ${b} es = ${a + b}`);
    } else if (operacion == '-') {
        let a = prompt("Dame un numero");
        while(!a || isNaN(a)) {
            alert("Numero no valido");
        };
        let b = prompt("Dame un numero");
        while(!b || isNaN(b)) {
            alert("Numero no valido");
            return null
        };        
        alert(`El resultado de ${a} - ${b} es = ${a + b}`);
    } else if (operacion == '*') {
        let a = prompt("Dame un numero");
        while(!a || isNaN(a)) {
            alert("Numero no valido");
            return null
        };
        let b = prompt("Dame un numero");
        while(!b || isNaN(b)) {
            alert("Numero no valido");
            return null
        };        
        alert(`El resultado de ${a} * ${b} es = ${a + b}`);
    } else if (operacion === '/') {
        let a = prompt("Dame un numero");
        while(!a || isNaN(a)) {
            alert("Numero no valido");
            return null
        };
        let b = prompt("Dame un numero");
        while(!b || isNaN(b)) {
            alert("Numero no valido");
            return null
        };        
        alert(`El resultado de ${a} / ${b} es = ${a + b}`);
    } else {
        alert('Operacion no reconocida')
    };
};


calc();

// V4 
*/
/*
let operacion = prompt("Ingrese la operación (+, -, *, /):");

let num1 = prompt("Ingrese el primer número:");
    while (isNaN(num1) || num1 === "" || num1 == null) {
num1 = prompt("Número inválido. Ingrese el primer número:");

}
num1 = Number(num1);

let num2 = prompt("Ingrese el segundo número:");
    while (isNaN(num2) || num2 === "" || num2 == null) {
num2 = prompt("Número inválido. Ingrese el segundo número:");
}

num2 = Number(num2);
let resultado;

if (operacion === "+") {
    resultado = num1 + num2;
} else if (operacion === "-") {
    resultado = num1 - num2;
} else if (operacion === "*") {
    resultado = num1 * num2;
} else if (operacion === "/") {

if (num2 === 0) {
    alert("Error: no se puede dividir por cero.");
} else {
    resultado = num1 / num2;
}
} else {
    alert("Operación no válida. Use +, -, * o /");
}

if (resultado !== undefined) {
    alert("El resultado es: " + resultado);
}
*/

// V5

/*
Calculadora 2.0
- Solicitar una operacion:
    - '+' | 'sumar'
        - Solicita 2 numeros y los suma
    - '-' | 'restar'
        - Solicita 2 numeros y los resta
        
    - '*' | 'multiplicar'
        - Solicita 2 numeros y los multiplica
    - '/' | 'dividir'
        - Solicita 2 numeros y los divide
    - 'promediar'
        - Solicita la cantidad de numeros a promediar
        - Promedia (Solicita la cantidad de numeros, los acumula y los divide por la cantidad)
    - 'iva'
        - Solicita un numero 
        - Calcula el 21% de ese numero
*/


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
        // Tengo una idea
        // Dice que tengo que solicitar la cantidad de numeros a promediar
        /*
        Para eso podria usar un prompt(), luego a esa variable la paso a number 
        luego de eso podria usar un for con la variable del prompt como parametro para hacer las iteraciones
        las iteraciones del interior del prompt tienen que acumularse en una variable que este declarada externamente
        y luego al final tengo que mostrar el promedio probablemente con un alert();
        */
        
        
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

/*
if (operacion === '+') {
    let a = prompt("Dame un numero");

    while(!a || isNaN(a)) {
        a = prompt("Entrada incorrecta, ingrese otra vez");
    };
    a = Number(a);

    let b = prompt("Ingrese otro numero")
    while(!y || isNaN(y)) {
        x = prompt("Entrada incorrecta, ingrese otra vez");
    };
    y = Number(y);

    alert("El resultado de")
};
*/

