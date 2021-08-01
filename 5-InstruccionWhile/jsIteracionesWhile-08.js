/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
    let numero;
    let seguir;
    let acumPos = 0;
    let acumNeg = 1;
    let flag = 0;

    do{
        numero = parseInt(prompt("Por favor ingrese un numero"));

        if(numero > 0){
            acumPos += numero;
        } else if(numero < 0){
            acumNeg *= numero;
            flag++;
        }

    if(flag == 0){
        acumNeg = 0;
    }
    

    seguir = prompt("Desea seguir ingresando numeros?");
    }while(seguir == "s")

    document.getElementById("txtIdSuma").value = acumPos;
    document.getElementById("txtIdProducto").value = acumNeg;
}