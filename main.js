
let primerDiv = document.getElementById("soyDiv");

const remeras = [
    {codigo:"1", modelo: "Aries", precio: 2700},
    {codigo:"2", modelo: "Géminis", precio: 2700},
    {codigo:"3", modelo: "Cáncer", precio: 2700},
    {codigo:"4", modelo: "Capricornio", precio: 2700}
];

//Proximamente agregaré imagenes

for(const destacado of remeras){
    let remerasDiv = document.createElement("div");    
    remerasDiv.innerHTML = `<div class="divFlex">
                                <h2> Modelo: ${destacado.modelo}</h2>
                                <p> Código: ${destacado.codigo}</p>
                                <p> Precio: ${destacado.precio}</p>
                            </div>
                            `;
    document.body.append(remerasDiv);
} 

//Ejercicio de interacción 
let suerte = prompt("Obtén descuento según tu suerte: \n Elige 1 o 2");
if (suerte === "1") {
    let oferta = document.createElement("div");    
    oferta.innerHTML = `<p class="pDescuento" > Te tocó 10% de descuento en tu primera compra
                        <br> Espero haber cumplido con la entrega ¡Gracias! </p>`;
    document.body.append(oferta);
}else if (suerte === "2"){
    let oferta = document.createElement("div");    
    oferta.innerHTML = `<p class="pDescuento" > Te tocó 25% de descuento en tu primera compra
                        <br> Espero haber cumplido con la entrega ¡Gracias! </p>`;
    document.body.append(oferta);
}