function mostrar()
{
	let numero;
	let contador = 0;

	numero = parseInt(prompt("Por favor ingrese un numero"));

	for(let i = 1 ; i <= numero ; i++){
		if(i % 2){
			continue;
		}
		console.log(i);
		contador++;
	}
	console.log("Los numeros pares son: " + contador);
}//FIN DE LA FUNCIÓN