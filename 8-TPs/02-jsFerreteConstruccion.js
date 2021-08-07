/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let alambreRectangulo;

    largo = parseInt(document.getElementById("txtIdLargo").value);

    ancho = parseInt(document.getElementById("txtIdAncho").value);

    alambreRectangulo = largo*2 + ancho*2;

    alambreRectangulo *= 3;
    
    alert(alambreRectangulo);
}
function Circulo () 
{
	let radio;
    let alambreCirculo;

    radio = parseInt(document.getElementById("txtIdRadio").value);

    alambreCirculo = 2* radio *Math.PI;

    alambreCirculo *= 3;

    alert(alambreCirculo);
}
function Materiales ()
{
    let largo;
    let ancho;
    let superficiePiso;
    let cantidadCal = 3;
    let cantidadCemen = 2;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    superficiePiso = ancho * largo;

    cantidadCal *= superficiePiso;
    cantidadCemen *= superficiePiso;


    alert("El contrapiso va a necesitar " + cantidadCal + " bolsas de cal y " + cantidadCemen + " bolsas de cemento");
}