function totalNinio(cuanto){
    const modeloRemerasNinio = [ "Batman","Hulk","Superman"];
        let modeloDeNinio = prompt(`Ahora ¿Qué modelo desea seleccionar?\n
        ${(modeloRemerasNinio.join("  ****  "))}\n
        Presione cualquier tecla si no aún no eligió`);
            cuanto = parseInt(prompt("¿Cuántas remeras desea comprar?"));
                let resultado = cuanto * 1500;
            return alert(`El total de su compra es: ${resultado}$ del modelito: ${modeloDeNinio}`);
        
}
function totalAdulto(cuanto){
    const modeloRemerasAdulto = [
        {codigo: 1 , modelo: "Aries"},
        {codigo: 2 , modelo: "Géminis"},
        {codigo: 3 , modelo: "Capricornio"}
    ];
    let modeloDeAdulto = prompt(`Ahora ¿Qué modelo desea seleccionar?\n
        ${modeloRemerasAdulto[0].modelo} con código ${modeloRemerasAdulto[0].codigo}\n
        ${modeloRemerasAdulto[1].modelo} con código ${modeloRemerasAdulto[1].codigo}\n 
        ${modeloRemerasAdulto[2].modelo} con código ${modeloRemerasAdulto[2].codigo}\n
        Presione cualquier tecla si no aún no eligió`);
    cuanto = parseInt(prompt("¿Cuántas remeras desea comprar?"));
    let resultado = cuanto * 2300;
    return alert(`El total de su compra es: ${resultado}$ del modelo ${modeloDeAdulto}`);
}

function saludo(){
    alert("Gracias por su compra. Vuelva Pronto");
}

function talle(){
    let tipoPersona = prompt("Comprar remeras para: Niño (1) Adulto (2)");    
    
        if (tipoPersona == "1") {
            let ninio = prompt("¿Qué talle desea seleccionar? 4 , 6 , 8 , 10");
                if((ninio == "4") || (ninio == "6") || (ninio == "8") || (ninio == "10")){
                    alert(`Se agregó correctamente el talle ${ninio}`);                    
                    totalNinio();
                    saludo();
                } else{
                    alert("Ud. necesita ingresar un talle válido");
                }
            }
            else if (tipoPersona == "2"){
            let adulto = prompt("¿Qué talle desea seleccionar? S, M, L, XL");
                if((adulto == "s") || (adulto == "m") || (adulto == "l") || (adulto == "xl")){
                    alert(`Se agregó correctamente el talle ${adulto}`);
                    totalAdulto();
                    saludo();
                }else{
                    alert("Debes ingresar un talle existente");
                }
            }
}

for (let i = 0; i <=2 ; i++){
    talle();
}
