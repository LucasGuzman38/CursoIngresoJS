/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let primero;
    let segundo;
    let tercero;
    let suma;


    primero = parseInt(document.getElementById("txtIdPrecioUno").value);
    segundo = parseInt(document.getElementById("txtIdPrecioDos").value);
    tercero = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = primero + segundo + tercero;
    alert("El resultado es " + suma);
}
function Promedio () 
{
    let primero;
    let segundo;
    let tercero;
    let suma;


    primero = parseInt(document.getElementById("txtIdPrecioUno").value);
    segundo = parseInt(document.getElementById("txtIdPrecioDos").value);
    tercero = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = (primero + segundo + tercero) /3;
    alert("El resultado es " + suma);
}
function PrecioFinal () 
{
    let primero;
    let segundo;
    let tercero;
    let suma;
    let iva;


    primero = parseInt(document.getElementById("txtIdPrecioUno").value);
    segundo = parseInt(document.getElementById("txtIdPrecioDos").value);
    tercero = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = primero + segundo + tercero;

    iva = suma * 1.21;
    alert("El resultado es " + iva);
}