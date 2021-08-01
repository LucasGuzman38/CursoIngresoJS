/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numero;
	let numMin = 0;
	let numMax = 0;
	let seguir;
	let flag = 0;

	do{
		numero = parseInt(prompt("Por favor ingrese un numero"));

		while(isNaN(numero)){
			numero = parseInt(prompt("ERROR, numero no valido, por favor intentelo nuevamente"));
		}

		if(flag == 0){
			console.log("Es la primera vez");
			numMax += numero;
			numMin += numero;
			flag = 1;
		}
		else{
			console.log("No es la primera vez");
			if(numero > numMax){
				numMax = numero;
			}
			else if(numero < numMin){
				numMin = numero;
			}
		}

		seguir = prompt("Desea seguir?");
	}while(seguir == "s");

	document.getElementById("txtIdMaximo").value = numMax;
	document.getElementById("txtIdMinimo").value = numMin;
}