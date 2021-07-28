/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo = prompt("Ingrese F o M");

	while(sexo != "f" && sexo != "m"){
		sexo = prompt("Sexo no valido");
	}
	alert("Muchas gracias");

	document.getElementById("txtIdSexo").value = sexo;
}//FIN DE LA FUNCIÓN