for(let i=1; i<=3 ; i++){
    let nombre = prompt("Ingrese nombre");
    let number = parseInt(prompt("Ingrese edad"));

if(number <= 12){
    alert (`${i} ${nombre}, su turno pasa al día lunes`);
    let nombre2 = prompt("¿Desea ingresar otro nombre? si/no");
        if((nombre2 == "no")||(nombre2 == "NO")){
            alert("Hasta luego, gracias.");
            break;
        }else if((nombre2 == "si")|| (nombre2 == "SI")){
            alert("Continuamos...");
            while (i === 3) {
                alert("Se completaron 3 veces los campos, necesitas comenzar de nuevo");
                break;
            }
        }else{
            alert("Ud. necesita afirmar o denegar");
        }
}else if( number <= 20){
    alert (`${i} ${nombre}, su turno pasa al día martes`);
    let nombre2 = prompt("¿Desea ingresar otro nombre? si/no");
        if((nombre2 == "no")||(nombre2 == "NO")){
            alert("Hasta luego, gracias.");
            break;
        }else if((nombre2 == "si")|| (nombre2 == "SI")){
            alert("Continuamos...");
            while (i === 3) {
                alert("Se completaron 3 veces los campos, necesitas comenzar de nuevo");
                break;
            }
        }else{
            alert("Ud. necesita afirmar o denegar");
        }
}else if( number <= 40){
    alert (`${i} ${nombre}, su turno pasa al día miercoles`);
    let nombre2 = prompt("¿Desea ingresar otro nombre? si/no");
        if((nombre2 == "no")||(nombre2 == "NO")){
            alert("Hasta luego, gracias.");
            break;
        }else if((nombre2 == "si")|| (nombre2 == "SI")){
            alert("Continuamos...");
            while (i === 3) {
                alert("Se completaron 3 veces los campos, necesitas comenzar de nuevo");
                break;
            }
        }else{
            alert("Ud. necesita afirmar o denegar");
        }
}else{
    alert (`${nombre}, Ud. pasa sin turno`);
    let nombre2 = prompt("¿Desea ingresar otro nombre? si/no");
        if((nombre2 == "no")||(nombre2 == "NO")){
            alert("Hasta luego, gracias.");
            break;
        }else if((nombre2 == "si")|| (nombre2 == "SI")){
            alert("Continuamos...");
            while (i===3){
                alert("Se completaron 3 veces los campos, necesitas comenzar de nuevo");
                break;
            }
        }else{
            alert("Ud. necesita afirmar o denegar");
        }
    }
}