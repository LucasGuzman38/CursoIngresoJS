/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num = parseInt(prompt("Ingrese un numero entre 0 y 9"));

	while(num < 0 || num > 9){
		num = prompt("Intentelo denuevo");
	}
	alert("Muchas gracias")
}//FIN DE LA FUNCIÓN