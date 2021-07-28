function CalcularPrecio () 
{
    let cantidad;
    let marca;
    let precio = 35;
    let descuento = 0;
    let precioFinal;
    let impuesto;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    switch(cantidad) {
        case 5:
            if (marca == "ArgentinaLuz") {
                descuento = 40;
            } else {
                descuento = 30;
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                descuento = 25;
            } else {
                descuento = 20;
            }
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                descuento = 15;
            } else if (marca == "FelipeLamparas") {
                descuento = 10;
            } else {
                descuento = 5;
            }
            break;
        case 2:
        case 1:
            descuento = 0;
            break;
        default:
            descuento = 50;
            break;
    }

    descuento = precio * cantidad * descuento/100;
    precioFinal = precio * cantidad - descuento;

    if(precioFinal > 120) {
        impuesto = precioFinal * 10/100;
        precioFinal = precioFinal + impuesto;
        impuesto = impuesto.toFixed(2)
        alert("IIBB Usted pago " + impuesto);
    }
    precioFinal = precioFinal.toFixed(2)
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

}