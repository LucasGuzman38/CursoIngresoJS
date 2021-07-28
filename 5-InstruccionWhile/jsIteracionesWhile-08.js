/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
    let acumPos = 0;
    let acumNeg = 1;
    let preg;
    let flag = 0;

    do{
        let num = parseInt(prompt("Ingrese un numero"));
        if(num >= 0){
        acumPos += num;
        }
            else if(num < 0){
                acumNeg *= num;
            }
        preg = prompt("Quiere seguir ingresando?");
        flag = 1;
    }while(preg == "s");

    if(flag){
        acumNeg = 0;
    }

    document.getElementById("txtIdSuma").value = acumPos;
    document.getElementById("txtIdProducto").value = acumNeg;
}//FIN DE LA FUNCIÓN