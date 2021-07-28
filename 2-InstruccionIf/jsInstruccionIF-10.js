function mostrar()
{
	let numero;
	numero = Math.floor(Math.random() * 10 + 1);

	if(numero >= 9){
		alert(numero);
		alert("Excelente");
	}
	else if(numero >= 4 && numero <= 8){
		alert(numero);
		alert("Aprobo");
	}
	else{
		alert(numero);
		alert("Vamos, la proxima se puede");
	}
}