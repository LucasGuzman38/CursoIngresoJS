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
  let cantidad;
  let precioPorBolsa;
  let precioDesc;
  let tipoMasBolsas;
  let precioArena = 0;
  let precioCemento = 0;
  let precioCal = 0;
  let tipoMasCaro;
  let acumArenaBolsas = 0;
  let acumCemenBolsas = 0;
  let acumCalBolsas = 0;
  let contArenaBolsas = 0;
  let contCemenBolsas = 0;
  let contCalBolsas = 0;
  let cuenta;

  do{

    tipo = prompt("Por favor ingrese el tipo").toLowerCase();

    if(tipo != "arena" && tipo != "cal" && tipo != "cemento"){
      tipo = prompt("ERROR, tipo invalido, intentelo nuevamente (cemento, arena, cal)");
    }

    cantidad = parseInt(prompt("Por favor ingrese la cantidad de bolsas"));
    
    while(isNaN(cantidad) || cantidad <= 0){
      cantidad = parseInt(prompt("ERROR, cantidad invalida, intentelo nuevamente"));
    }

    precioPorBolsa = parseInt(prompt("Por favor ingrese el precio"));

    if(precioPorBolsa < 0){
      precioPorBolsa = parseInt(prompt("ERROR, precio invalido, por favor intentelo nuevamente"));
    }

    if(tipo == "arena"){
      acumArenaBolsas = cantidad + acumArenaBolsas;
      contArenaBolsas++;
      precioArena = precioPorBolsa + precioArena;
    } else if(tipo == "cal"){
      acumCalBolsas = cantidad + acumCalBolsas;
      contCalBolsas++;
      precioCal= cantidad + precioCal;
    } else{
      acumCemenBolsas = cantidad + acumCemenBolsas;
      contCemenBolsas++;
      precioCemento = precioPorBolsa + precioCemento;
    }

  seguir = prompt("Desea ingresar otro producto? s/n");
  }while(seguir == "s");

  if(acumArenaBolsas > acumCemenBolsas && acumArenaBolsas > acumCalBolsas){
    tipoMasBolsas = "Arena";
  } else if(acumCalBolsas >= acumArenaBolsas && acumCalBolsas > acumCemenBolsas){
    tipoMasBolsas = "Cal";
  }else{
    tipoMasBolsas = "Cemento";
  }

  if(precioArena > precioCal && precioArena > precioCemento){
    tipoMasCaro = "Arena";
  } else if(precioCal > precioArena && precioCal > precioCemento){
    tipoMasCaro = "Cal";
  }else{
    tipoMasCaro = "Cemento";
  }


  alert("El importe bruto es: " + precioPorBolsa);

  if(cantidad > 10){
      cuenta = precioPorBolsa * 0.15;
      precioDesc = precioPorBolsa - cuenta;
      alert("El importe con descuento es: " + precioDesc)
  } else if(cantidad > 30){
      cuenta = precioPorBolsa * 0.25;
      precioDesc = precioPorBolsa - cuenta;
    alert("El importe con descuento es: " + precioDesc);
    }
  alert("El tipo con mas cantidad de bolsas es: " + tipoMasBolsas);
  alert("El tipo mas caro: " + tipoMasCaro);
}