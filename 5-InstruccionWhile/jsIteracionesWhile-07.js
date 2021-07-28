/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador = 0; //cuento cuantas veces se sumo
	let num = 0;
	let suma = 0;
	let r; //pregunto

	do{
		num=parseInt(prompt("Ingrese un numero"));
		suma += num;
		contador++;
		r = prompt("Le gustaria que le pregunte denuevo?");
	}while(r == "s");

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = suma /contador;

}//FIN DE LA FUNCIÓN