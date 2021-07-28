/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaFahrenheit;
	var temperaturaCelsius;

	temperaturaFahrenheit= parseInt(document.getElementById("txtIdTemperatura").value);
	
	temperaturaCelsius= (temperaturaFahrenheit-32)/1,8;

	/*mensaje=temperaturaFahrenheit+" fahrenheit son "+temperaturaCelsius" centigrados";*/

	alert(`${temperaturaFahrenheit} fahrenheit son ${temperaturaCelsius} centigrados`);
}
