let boxMinus = document.getElementById("boxMinus");
let boxCantidad = document.getElementById("boxCantidad");
let boxPlus = document.getElementById("boxPlus");
let subTotal = document.getElementById("subtotal");
let numeroProducto = document.getElementById("numeroProductos");
let valorProducto = 3500;

let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto);
document.getElementById('precio-unidad').innerHTML = auxValorProducto;

boxPlus.addEventListener("click", function() {
    let auxCant = boxCantidad.innerHTML;
    if(auxCant < 10) {
        auxCant++;
        boxCantidad.innerHTML = auxCant;
        determinarPluralSingular(auxCant);
        calcularSubtotal();
    }
});

 boxMinus.addEventListener("click", function() {
    let auxCant = boxCantidad.innerHTML;
    if(auxCant > 0) {
        auxCant--;
        boxCantidad.innerHTML = auxCant;
        determinarPluralSingular(auxCant);
        calcularSubtotal();
    }
});
function calcularSubtotal() {
    let auxCant = valorProducto*Number(boxCantidad.innerHTML);
    let auxCantUmil = Intl.NumberFormat("de-DE").format(auxCant);
    document.getElementById('subtotal').innerHTML = "$" + auxCantUmil;
}
function determinarPluralSingular(auxCant){
    if(auxCant == 1) {
        numeroProducto.innerHTML = "(" + auxCant + "producto)"
    }
    else if ((auxCant == 0) || auxCant > 1){
        numeroProducto.innerHTML = "(" + auxCant + "productos)"   
    }
}