function mostrar()

/*
1) tipo (arena, cal, cemento), cantidad de bolsas, precio por bolsa > 0

a) el importe a pagar bruto
b) el importe a pagar con descuento
c) informar el tipo con mas bolsas
d) el tipo mas caro

Variable a declarar: tipo, cantidad, precioPorBolsa, PrecioBruto, PrecioDesc, acumBolsas, tipoMaxCaro.
*/
{
  let tipo;
  let cantidadBolsas;
  let precioPorBolsa;
  let acumArena = 0;
  let acumCemento = 0;
  let acumCal = 0;
  let acumBolsas = 0;
  let acumImportes = 0;
  let seguir;
  let descuento;
  let descuento2;
  let maxTipo;
  let precioArena = 0;
  let precioCal = 0;
  let precioCemento = 0;
  let masCaro;

  do{

    tipo = prompt("Ingrese el tipo");

    while(tipo != "arena" && tipo != "cemento" && tipo != "cal"){
      tipo = prompt("ERROR, intentelo nuevamente");
    }

    cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas"));

    while(isNaN(cantidadBolsas) || cantidadBolsas < 1){
      cantidadBolsas = parseInt(prompt("ERROR, intentelo nuevamente"));
    }

    acumBolsas = cantidadBolsas + acumBolsas;

    precioPorBolsa = parseInt(prompt("Ingrese el precio por bolsa"));

    while(isNaN(precioPorBolsa) || precioPorBolsa < 1){
      precioPorBolsa = parseInt(prompt("ERROR, intentelo nuevamente"))
    }

    if(tipo == "arena"){
      acumArena += cantidadBolsas;
      precioArena += precioPorBolsa;
    }else if(tipo == "cemento"){
      acumCemento += cantidadBolsas;
      precioCemento += precioPorBolsa;
    } else {
      acumCal += cantidadBolsas;
      precioCal += precioPorBolsa;
    }
    
    acumImportes += cantidadBolsas * precioPorBolsa; // ACORDATE DE ESTO SALAMIN

    seguir = prompt("Desea seguir ingresando datos");
  }while(seguir == "s");

  if(acumBolsas > 10 && acumBolsas < 30){
    descuento = acumImportes * 0.15;
    descuento2 = acumImportes - descuento;
    alert("El precio bruto es " + acumImportes + " y con descuento el precio es " + descuento2);
  } else if(acumBolsas >= 30){
    descuento = acumImportes * 0.25;
    descuento2 = acumImportes - descuento;
    alert("El precio bruto es " + acumImportes + " y con descuento el precio es " + descuento2);
  } else {
    alert("El importe total es " + acumImportes + " y no corresponde descuento");
  }



  if(acumArena > acumCal && acumArena > acumCemento){
    maxTipo = "Arena";
  } else if(acumCal >= acumArena && acumCal > acumCemento){
    maxTipo = "Cal";
  } else{
    maxTipo = "Cemento";
  }

  if(precioArena > precioCal && precioArena > precioCemento){
    masCaro = "Arena";
  } else if(precioCal >= precioArena && precioCal > precioCemento){
    masCaro = "Cal";
  } else {
    masCaro = "Cemento";
  }

  alert("El tipo con mas cantidad de bolsas es " + maxTipo);
  alert("El tipo mas caro es " + masCaro);
}