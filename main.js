
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