function mostrar()
{
	let numero = parseInt(prompt("Por favor ingrese un numero"));

	while(isNaN(numero) || numero < 0){
		numero = parseInt(prompt("Por favor, ingrese un numero mayor a 0"));
	}
	//declaro contador, si contador es menor a numero ENTRA, contador++ le suma un numero al contador
	//cuando el contador pasa al numero, se termina el while
	for(let contador = 0; contador < numero; contador++){
		console.log("Hola UTN FRA");
	}
}