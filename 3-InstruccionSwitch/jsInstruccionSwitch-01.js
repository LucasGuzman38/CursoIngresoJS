function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Enero":
			alert("Que comiences bien el año");
			break;
		case "Marzo":
			alert("Se vienen las clases");
			break;
		case "Julio":
			alert("Se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices fiestas!");
			break;
	}

	/*if(mes == "Enero"){
		alert("que comiences bien el año!!!.");
	}
	else if(mes == "Marzo"){
		alert("a clases!!!.");
	}
	else if(mes == "Julio"){
		alert("se vienen las vacaciones!!!.");
	}
	else if(mes == "Diciembre"){
		alert("Felices fiesta!!!.");
	}
	*/
}//FIN DE LA FUNCIÓN