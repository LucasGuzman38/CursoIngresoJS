function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;

	if(edad >= 13 && edad <= 17){
		alert("El usuario es adolescente")		
	}
	else{
		if(edad < 13){
			alert("El usuario es niño")		
		}
		else{
			alert("El usuario es adulto")	
			}	
		}
	}