const SUMA = '+';
//No abreviar las constantes, las constantes se declaran las principio del programa
const MUL = '*';
const DIV = '/';
const REST = '-';
const MD = 'MD';
const IVA = 'IVA';
// las abreviaciones son problematicas en especial si no estan en contexto
// no abreviar las constantes y en general eviten abreviar

let operacion = prompt('Dame una operacion (+,-,/,*,MD,IVA) ');


while (
    operacion !== SUMA 
    &&  // es conveniente tratar de hacer saltos al hacer esto
    // Nota, el while hay que usarlo aca (esto antes era un if)
    // porque en caso de que la operacion sea incorrecta hay que alertar y solicitar el dato otra vez
    // nota= es mejor por lo que parece meter un "si operacion no es igual a X && X entonces hay esto"
    // ahora cambio por si operacion no es igual a todos los XX
    operacion !== MUL 
    && 
    operacion !== DIV 
    && 
    operacion !== REST 
    && 
    operacion !== MD 
    && 
    operacion !== IVA
) {
    alert("Operacion incorrecta");
    operacion = prompt('Dame una operacion (+,-,/,*,MD,IVA) ');
}


if (operacion == SUMA || operacion == MUL || operacion == DIV || operacion == REST ) {
    // Si operacion es igual todos los valores a exepcion de MD y IVA
    let a = prompt("Dame un numero");

    while (!a || isNaN(a)) {
        a = prompt("Eso no es un numero intenta otra vez");
    };
    a = Number(a);


    let b = prompt("Dame otro numero");

    while (!b || isNaN(b)) {
        b = prompt("Eso no es un numero intenta otra vez");
    };
    b = Number(b);

    if (operacion === SUMA) {
        alert(`El resultado de ${a} ${operacion} ${b} es = ${a + b}`);
    } else if (operacion === MUL) {
        alert(`El resultado de ${a} ${operacion} ${b} es = ${a * b}`);
    } else if (operacion === DIV) {
        alert(`El resultado de ${a} ${operacion} ${b} es = ${a / b}`);
    } else if (operacion === REST) {
        alert(`El resultado de ${a} ${operacion} ${b} es = ${a - b}`);
    };
}
else if (operacion === MD) {

    let cantidad = prompt("Escribe en numero la cantidad de numeros a promediar");
    //TODO: Falta validacion de cantidad
    cantidad = Number(cantidad);

    let sumatoria = 0;

    for (
        let iterador = 0; //nota, usar nombres con i para el for (i, iterador, iterator , etc)
        iterador < cantidad;  //ese let iterator es local, este bloque de codigo
        iterador = iterador + 1
    ) {
        let numero = prompt('Inserte numero ' + iterador + 1); // este bloq de codigo es donde ocurre la rep del bucle
        //TODO: Valida el numero
        sumatoria += Number(numero); //esto antes se llamaba y, le puse un name mas especifico 
    };
    

    alert('El promedio es ' + sumatoria / cantidad);

} else if (operacion === IVA) {
    let precio = prompt("Introdusca precio para calcular su IVA: ");
    precio = parseFloat(precio); // El parseInt() elimina los decimales, esmejor usar el parseFloat() en este caso
    alert(`IVA del precio (${(price / 0.21).toFixed(2)})`); // El .toFixed() sirve para limitar la cantidad de decimales en este caso a 2
};


/* 
Alternativa switch 

*/
/* if(operacion == SUMA || operacion == MUL || operacion == DIV || operacion == REST){
    let a  = prompt('ingrese el numero 1')
    let b  = prompt('ingrese el numero 2')
    switch(operacion){
        case SUMA: 
            alert(`El resultado de ${a} ${operacion} ${b} es = ${a + b}`)
            break;
        case MUL: 
            alert(`El resultado de ${a} ${operacion} ${b} es = ${a * b}`)
            break;
        case DIV: 
            alert(`El resultado de ${a} ${operacion} ${b} es = ${a / b}`)
            break;
        case REST: 
            alert(`El resultado de ${a} ${operacion} ${b} es = ${a - b}`)
            break;
    }
} */