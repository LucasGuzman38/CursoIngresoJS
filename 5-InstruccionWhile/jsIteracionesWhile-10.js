function mostrar()
{
    let num;
    let acumPos = 0;
    let acumNeg = 0;
    let contaPos = 0;
    let contaNeg = 0;
    let contaCero = 0;
    let contaPar = 0;
    let flagP = 1;
    let flagN = 1;
    let promPos = 0;
    let promNeg = 0;
    let dif;

    do{
        num= parseInt(prompt("Porfavor, ingrese un numero."));

        while(isNaN(num)){
            num = prompt("Eso no es un numero, porfavor, intentelo nuevamente.");
        }

        if(num > 0){
            console.log("Es positivo");
            acumPos += num;
            contaPos++;
            flagP = 0;
        }
        else if(num < 0){
            console.log("Es negativo");
            acumNeg += num;
            contaNeg++;
            flagN = 0;
        }
        else{
            console.log("Es un cero");
            contaCero++;

        }
        if(num % 2 == 0){
            contaPar++;
        }

        pregunta = prompt("Continuamos?");
    }while(pregunta == "s");

    if(flagP == 0){
        promPos = acumPos/contaPos;
        alert("El promedio de positivos es " + promPos);
    }
    if(flagN == 0){
        promNeg = acumNeg/contaNeg;  
        alert("El promedio de negativos es " + promNeg);
    }

    dif = contaPos-contaNeg;

    alert("La suma de los negativos es: " + acumNeg);
    alert("La suma de los positivos es: " + acumPos);
    alert("La cantidad de positivos es: " + contaPos);
    alert("La cantidad de negativos es: " + contaNeg);
    alert("La cantidad de ceros es: " + contaCero);
    alert("La cantidad de pares es: " + contaPar);
    alert("El promedio de positivos es: " + promPos);
    alert("El promedio de negativos es: " + promNeg);
    alert("La diferencia entre positivos y negativos es: " + dif);

}