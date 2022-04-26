function totalNinio(cuanto , remera){
    cuanto = parseInt(prompt("¿Cuántas remeras desea comprar?"));
    remera = 1500;
    let resultado = cuanto * remera;
    return alert(`El total de su compra es: ${resultado} $`);
}
function totalAdulto(cuanto , remera){
    cuanto = parseInt(prompt("¿Cuántas remeras desea comprar?"));
    remera = 2300;
    let resultado = cuanto * remera;
    return alert(`El total de su compra es: ${resultado} $`);
}
function saludo(){
    alert("Gracias por su compra. Vuelva Pronto");
}

function talle(){
    let tipoPersona = prompt("Comprar remeras para: Niño (1) Adulto (2)");    
    
        if (tipoPersona == "1") {
            let ninio = prompt("¿Qué talle desea seleccionar? 4 , 6 , 8 , 10");
            switch (ninio) {
                case "4":
                    alert(`Se agregó correctamente el talle ${ninio}`);
                    totalNinio();
                    saludo();                        
                    break;
                    
                case "6":
                    alert(`Se agregó correctamente el talle ${ninio}`);
                    totalNinio();
                    saludo();                        
                    break;

                case "8":
                    alert(`Se agregó correctamente el talle ${ninio}`);
                    totalNinio();
                    saludo();                        
                    break;

                case "10":
                    alert(`Se agregó correctamente el talle ${ninio}`);
                    totalNinio();
                    saludo();                        
                    break;
            
                default:
                    alert("Ud. necesita ingresar un talle válido");                        
                    break;
            }
        }
        else if (tipoPersona == "2"){
            let adulto = prompt("¿Qué talle desea seleccionar? S, M, L, XL");
            
                switch (adulto) {            
                    case "s":
                        alert(`Se agregó correctamente el talle ${adulto}`);
                        totalAdulto();
                        saludo();
                        break;
                        
                    case "m":
                        alert(`Se agregó correctamente el talle ${adulto}`);
                        totalAdulto();
                        saludo();
                        break;

                    case "l":
                        alert(`Se agregó correctamente el talle ${adulto}`);
                        totalAdulto();
                        saludo();
                        break;

                    case "xl":
                        alert(`Se agregó correctamente el talle ${adulto}`);
                        totalAdulto();
                        saludo();
                        break;
                
                    default:
                        alert("Ud. necesita ingresar una talla válida")
                        break;
                }
        }
        else{
            alert("Debes ingresar un talle existente");
        }
}

for (let i = 0; i <=2 ; i++){
    talle();
}