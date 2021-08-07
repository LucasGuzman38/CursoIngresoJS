function mostrar()
/* 
1) nos pide:
nombre, edad, sexo (f/m), estado civil (soltero, casado o viudo) y temperatura corporal.

a) nombre de la persona con mas temperatura
b) cantidad de mayores de edad viudos
c) cantidad de hombres solteros y viudos
d) cuantas personas mayores de 60 tienen mas de 38 de temperatura
e) promedio de edad entre hombres solteros

variables a declarar:
nombre, edad, sexo, estado civil, temperatura, MaxTemp, contMayoresViudos, contSolteros, contViudos, contMayorConTemp, promEdadSolteros.
*/
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let seguir;
	let acumNombreMaxTemp;
	let maxTemp = 0;
	let contMayorViudos = 0;
	let contSolterosYViudos = 0;
	let contMayorConTemp = 0;
	let promHombresSolteros = 0;
	let promEdad;
	let acumEdad = 0;

	do{
	nombre = prompt("Por favor ingrese su nombre");

	edad = parseInt(prompt("Por favor ingrese su edad"));
	while(isNaN(edad) || edad < 0){
		edad = parseInt(prompt("ERROR, intentelo nuevamente"));
	}
	acumEdad = edad + acumEdad; 

	sexo = prompt("Por favor ingrese su sexo").toLowerCase();
	while(sexo != "f" && sexo != "m"){
		sexo = prompt("ERROR, intentelo nuevamente");
	}
	estadoCivil = prompt("Por favor ingrese su estado civil").toLowerCase();
	while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
		estadoCivil = prompt("ERROR, intentelo nuevamente");
	}
	temperatura = parseInt(prompt("Por favor ingrese su temperatura"));

	if(temperatura > maxTemp){
		maxTemp = temperatura;
		acumNombreMaxTemp = nombre;
	}

	if(edad >= 18 && estadoCivil == "viudo"){
		contMayorViudos++;
	}

	if(estadoCivil == "soltero" || estadoCivil == "viudo"){
		contSolterosYViudos++;
	}

	if(edad >= 60 && temperatura > 38){
		contMayorConTemp++;
	}

	if(estadoCivil == "soltero" && sexo == "m"){
		promHombresSolteros++;
	}


	seguir = prompt("¿Desea ingresar los datos de otra persona? s/n").toLowerCase();
	}while(seguir == "s");

	promEdad = acumEdad/promHombresSolteros;

	alert("La persona con mayor temperatura es " + acumNombreMaxTemp + " y tiene " + maxTemp + " grados");
	alert("La cantidad de mayores de edad viudos son: " + contMayorViudos);
	alert("La cantidad de hombres solteros o viudos es: " + contSolterosYViudos);
	alert("La cantidad de personas con mas de 60 años que tienen mas de 38 grados son: " + contMayorConTemp);
	alert("El promedio de edad entre los hombres solteros es: " + promEdad);
}
