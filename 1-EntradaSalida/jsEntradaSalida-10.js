/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let calculo;
	let calculo2;

	importe = parseInt(document.getElementById(txtIdImporte).value);

	calculo = importe * 0.25;

	calculo2 = importe - calculo;

	document.getElementById(txtIdResultado).value = calculo2;
}

	//let pregunta;
	//let importe;
	//let calculo;
	//let calculo2;

	//importe = parseInt(document.getElementById("txtIdImporte").value);

	//pregunta = prompt("Ingrese el porcentaje", " ");

	//calculo = importe*(pregunta/100);

	//calculo2 = importe + calculo;

	//document.getElementById("txtIdResultado").value = calculo2;