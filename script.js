
let operacion = prompt('Dame una operacion (+,-,/,*,MD,IVA) ');
// las const se declaran al principio del programa
const SUMA = '+';
const MUL = '*';
const DIV = '/';
const REST = '-';
const MD = 'MD';
const IVA = 'IVA';
// las abreviaciones son problematicas en especial si no estan en contexto
// no abreviar las constantes y en general eviten abreviar

if (operacion !== SUMA && operacion !== MUL && operacion !== DIV && operacion !== REST && operacion !== MD && operacion !== IVA) {
    alert("Operacion incorrecta");
} else {

    if (operacion !== MD && operacion !== IVA) { 
// en el futuro existiran 300 operaciones 
        let a = prompt("Dame un numero");
        // en el UI es mejor pedir y validar de un valor a otro porque si no le arruinas la UI
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
        // TODO= Falta validacion de cantidad
        Number(cantidad);


        let acumulador = 0; //nota, usar nombres con i para el for (i, iterador, iterator , etc)
        for (x = 0; x < cantidad; x++) { //ese let x es local, este bloque de codigo
            let y = prompt(`Inserte numero ${x + 1}`);// y este bloq de codigo es donde ocurre la rep del bucle
            acumulador += Number(y); // el y cambiarlo por nombres mas especifico
            // TODO = valida numero
        };

        alert(acumulador / cantidad);
        
    } else if (operacion == IVA) {
        let price = prompt("Introdusca precio para calcular su IVA: ");
        price = parseInt(price);
        alert(`IVA del precio (${price / 0.21})`);//Nota= despues hacer que solo tenga 2 o 4 decimales
    };
};
