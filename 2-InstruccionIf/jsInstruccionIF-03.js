function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18){
		alert("El usuario es mayor de edad");
	}
	else{
		alert("El usuario es menor de edad");
	}
}//FIN DE LA FUNCIÓN