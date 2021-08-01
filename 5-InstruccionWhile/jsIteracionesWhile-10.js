function mostrar()
{
    let numero;
    let seguir;
    let acumPos = 0;
    let acumNeg = 0;
    let contadorPares = 0;
    let contadorCeros = 0;
    let contadorPos = 0;
    let contadorNeg = 0;
    let diferencia;


    do{
        numero = parseInt(prompt("Por favor ingrese un numero"));

        while(isNaN(numero)){
            numero = parseInt(prompt("ERROR, por favor intentelo nuevamente"));
        }

        if(numero > 0){
            acumPos += numero;
            contadorPos++;
        } else if(numero < 0){
            acumNeg += numero;
            contadorNeg++;
        }
        else{
            contadorCeros++;
        }

        if(numero % 2 == 0){
            contadorPares++;
        }

        diferencia = contadorPos - contadorNeg;

        seguir = prompt("Desea seguir ingresando numeros? s/n").toLowerCase();
    }while(seguir == "s");

    alert("La suma de los positivos es: " + acumPos);
    alert("La suma de los negativos es: " + acumNeg);
    alert("La cantidad de positivos es: " + contadorPos);
    alert("La cantidad de negativos es: " + contadorNeg);
    alert("La cantidad de ceros es: " + contadorCeros);
    alert("La cantidad de numeros pares es: " + contadorPares);
    alert("El promedio de los positivos es: " + acumPos/contadorPos);
    alert("El promedio de los negativos es: " + acumNeg/contadorNeg);
    alert("La diferencia entre positivos y negativos es de: " + diferencia);
}