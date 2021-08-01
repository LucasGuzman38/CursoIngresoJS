/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

---------------------------------------------
Estrategia de resolucion
1- declarar variables (tipo / cantidad / precio / marca / fabricante )esto se lo pedimos al usuario
a) precioMinAl / contAlBarato / fabAlBarato / FlagA
b) contadorB / contadorA / contadorJ / maxUnidades / acumB / acumA / acumJ / promedio
c) (acumJ)ya lo tuve en cuenta en el punto b

2- generar un bucle que se repita 5 veces (for) porque se las veces que se debe repetir
2.1- cosas que se tienen que hacer 5 veces(van dentro del bucle)
 datos del producto
 2.1.1- pido tipo y valido
 2.1.2- pido precio y valido
 2.1.3- pido cantidad y valido
 2.1.4- pido marca y valido
 2.1.5- pido fabricante y valido
 -------------------------------
 a) me fijo si el producto es de tipo alcohol y si es asi la primer vez que 
 ingresa alcohol guardo el precio en precio barato y las siguientes veces
 que ingrese un alcohol lo comparo con el precio del acohol barato y si es mas barato lo actualizo(tambien guardo cantidad y fabricante)
 b) me fijo de que tipo es el producto y actualizo acumulador y contador de ese tipo
 c) si es de tipo jabon acumulo la cantidad(ya lo hice en el punto b)
-------------------------------------------
3.1 cosas que hago una sola vez despues del for
3.1.1 para el punto b me tengo que fijar cual es el mayor acumulador
y sacar el promedio para ese tipo

3.2 muestro los resultados
*/

function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let contadorAl = 0;
	let contadorBar = 0;
	let contadorJa = 0;
	let acumAl = 0;
	let acumBar = 0;
	let acumJa = 0;
	let flagA = 1;
	let numMin = 0;
	let promedio;
	let fabAl;
	let cantAl;
	let acumuladorMax;

	for(let i = 0; i < 1; i++){
		tipo = prompt("Por favor, ingrese un tipo");
			if(tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon"){
				tipo = prompt("ERROR, tipo invalido, por favor intentelo nuevamente");
			}
		precio = parseInt(prompt("Por favor, ingrese el precio"));
			if(isNaN(precio) || precio > 300 && precio < 0){
				precio = parseInt(prompt("ERROR, precio invalido, por favor intentelo nuevamente"));
			}
		cantidad = parseInt(prompt("Por favor, ingrese la cantidad"));
			if(isNaN(cantidad) || cantidad > 1000 && cantidad < 0){
				cantidad = parseInt(prompt("ERROR, precio invalido, por favor intentelo nuevamente"));
			}
		marca = prompt("Por favor, ingrese la marca");
			if(marca.lenght == 0){
				marca = parseInt(prompt("ERROR, por favor intentelo nuevamente"));
			}
		fabricante = prompt("Por favor, ingrese el fabricante");
			if(fabricante.lenght == 0){
				fabricante = parseInt(prompt("ERROR, por favor intentelo nuevamente"));
			}

		console.log(tipo);
		console.log(precio);
		console.log(cantidad);
		console.log(marca);
		console.log(fabricante);
	}
	switch(tipo){
		case "barbijo":
			acumBar += cantidad;
			contadorBar++;
			break;
		case "alcohol":
			acumAl += cantidad;
			contadorAl++;

			if(flagA || precio < numMin){
				numMin = precio;
				fabAl = fabricante;
				cantAl = cantidad;
				flagA = 0;
			}
			break;
		case "jabon":
			acumJa += cantidad;
			contadorJa++;
			break;
	}

	if(acumAl > acumBar && acumAl > acumJa){
		acumuladorMax = acumAl;
		promedio = acumAl / contadorAl;
	}
	else if(acumBar >= acumAl && acumBar > acumJa){
		acumuladorMax = acumBar;
		promedio = acumBar / contadorBar;
	}
	else{
		acumuladorMax = acumJa;
		promedio = acumJa / contadorJa;
	}
}