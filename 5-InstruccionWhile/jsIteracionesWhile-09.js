/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numMax;
	let numMin;
	let num;
	let respuesta;
	let flag = 0;

	do{
		num = parseInt(prompt("Ingrese un numero"));
	
		while(isNaN(num)){
			num = parseInt(prompt("Ese no es un numero, por favor, vuelva a intentarlo"));
		}

		if(flag == 0){
			console.log("Es la primera vez");
			flag++;
			numMax= num;
			numMin= num;
		}
		else{
			console.log("No es la primera vez");
			if(num > numMax){
			numMax = num;
			}
				else if(num < numMin){
					numMin = num;
				}
		}


		respuesta = prompt("Desea volver a ingresar un numero?");
	}while(respuesta == "s");

	document.getElementById("txtIdMaximo").value = numMax;
	document.getElementById("txtIdMinimo").value = numMin;
}