function mostrar() {
	let num,
		div = 0;

	num = parseInt(prompt("Ingrese un numero."));

	while (isNaN(num) || num <= 0) {
		num = parseInt(prompt("ERROR: Ingrese un numero válido."));
	}

	for (let i = 1; i <= num/2; i++) {
		if (num % i == 0);
		div++;
	}
	if (div == 2 || num == 1) {
		console.log("Es primo");
	} else {
		console.log("No es primo");
	}
}