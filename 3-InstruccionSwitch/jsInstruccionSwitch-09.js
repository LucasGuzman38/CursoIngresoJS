function mostrar()
{
	let precio = 15000;
	let precioFinal;
	let cuenta;
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				cuenta = precio * 0.2;
				precioFinal = precio + cuenta;
				alert("El precio final es " + precioFinal)
				break;
			}
			else if(destino == "Cordoba"){
				cuenta = precio * 0.1;
				precioFinal = precio - cuenta;
				alert("El precio final es " + precioFinal)
				break;
			}
			else if(destino == "Cataratas"){
				cuenta = precio * 0.1;
				precioFinal = precio - cuenta;
				alert("El precio final es " + precioFinal)
				break;
			}
			else if(destino == "Mar del plata"){
				cuenta = precio * 0.2;
				precioFinal = precio - cuenta;
				alert("El precio final es " + precioFinal)
				break;
			}

			//////////////

		case "Verano":
			if(destino == "Bariloche"){
				cuenta = precio * 0.2;
				precioFinal = precio - cuenta;
				alert("El precio final es " + precioFinal)
				break;
			}
			else if(destino == "Cordoba"){
				cuenta = precio * 0.1;
				precioFinal = precio + cuenta;
				alert("El precio final es " + precioFinal)
				break;
			}
			else if(destino == "Cataratas"){
				cuenta = precio * 0.1;
				precioFinal = precio + cuenta;
				alert("El precio final es " + precioFinal)
				break;
			}
			else if(destino == "Mar del plata"){
				cuenta = precio * 0.2;
				precioFinal = precio + cuenta;
				alert("El precio final es " + precioFinal)
				break;
			}

			//////////////
		
		case "Otoño":
		case "Primavera":
			if(destino == "Bariloche"){
				cuenta = precio * 0.1;
				precioFinal = precio + cuenta;
				alert("El precio final es " + precioFinal)
				break;
			}
			else if(destino == "Cordoba"){
				alert("El precio final es " + precio)
				break;
			}
			else if(destino == "Cataratas"){
				cuenta = precio * 0.1;
				precioFinal = precio + cuenta;
				alert("El precio final es " + precioFinal)
				break;
			}
			else if(destino == "Mar del plata"){
				cuenta = precio * 0.1;
				precioFinal = precio + cuenta;
				alert("El precio final es " + precioFinal)
				break;
			}
	}
}