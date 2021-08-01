function mostrar()
{
  let tipo;
  let bolsas;
  let seguir;
  let contadorBolsas = 0;
  let precio;
  let importeBruto = 0;
  let importeDesc = 0;
  let tipoMasBolsas;
  let tipoMasCaro;


  do{

    tipo = prompt("Por favor ingrese el tipo").toLowerCase();

    if(tipo != "arena" && tipo != "cal" && tipo != "cemento"){
      tipo = prompt("ERROR, tipo invalido, intentelo nuevamente (cemento, arena, cal)");
    }

    bolsas = parseInt(prompt("Por favor ingrese la cantidad de bolsas"));
    
    while(isNaN(bolsas) || bolsas <= 0){
      bolsas = parseInt(prompt("ERROR, cantidad invalida, intentelo nuevamente"));
    }

    precio = parseInt(prompt("Por favor ingrese el precio"));

    if(precio < 0){
      precio = parseInt(prompt("ERROR, precio invalido, por favor intentelo nuevamente"));
    }

    console.log(tipo);
    console.log(bolsas);
    console.log(precio);

  seguir = prompt("Desea ingresar otro producto? s/n");
  }while(seguir == "s");

  if(bolsas > 10){
    importeDesc = precio * 1.15;
    importeBruto += precio;
  }
  if(bolsas > 30){
    importeDesc = precio * 1.25;
    importeBruto += precio;
  }
  console.log(importeDesc);
}
