
//divs body 
const divBody = document.querySelectorAll('.divbody');
const oriImage = document.getElementById('original-image');

divBody.forEach(divBody => {
    const imagen = divBody.querySelector('img');
    imagen.addEventListener('mousemove', () => {
        const src = imagen.getAttribute('src');
        oriImage.setAttribute('src', src);
    });
});
/* lupa */

/*  */

//Boton de salir 
const closeButton = document.querySelector('.btn-close');
const modalContainer = document.querySelector('.box-modal');

closeButton.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});
// divs miniatura
const mainImgDiv = document.querySelector('.box-main-img-modal');
const miniDivs = document.querySelectorAll('.divMiniaturas');

miniDivs.forEach((miniDiv) => {
  miniDiv.addEventListener('click', () => {
//para que cambie el color de borde
    miniDivs.forEach((div) => {
      div.classList.remove('selected');
    });
// al color que tenga la clase select 
    miniDiv.classList.add('selected'); 

    const img = miniDiv.querySelector('img');
    mainImgDiv.querySelector('img').src = img.src;
  });
});

/* para que la img made al modal */
let modal = document.getElementById("modal");
oriImage.addEventListener('click',function () {
  modal.style.display = "flex"
});
/* so far */

// Para visualizar el contenedor de la informacion de la calificación global
let star = document.getElementById("star");
let calificacionGlobal = document.getElementById("calificacionGlobal");

star.addEventListener("mousemove", function() {
    calificacionGlobal.style.display = "flex";
});
calificacionGlobal.addEventListener("mousemove", function() {
    calificacionGlobal.style.display = "flex";
});
star.addEventListener("mouseleave", function () {
    calificacionGlobal.style.display = "none";
});
calificacionGlobal.addEventListener("mouseleave", function () {
    calificacionGlobal.style.display = "none";
});
// Fin para lo de la clificación global


/* PARA LA CALIFICACIÓN  */
let calificaciones = [4, 5, 3, 2, 5];

let promedio = calificaciones.reduce((a, b) => a + b, 0) / calificaciones.length;

let estrellas = new Array(5).fill(Math.round(promedio));

let porcentajes = calificaciones.map(calificacion => (calificacion * 20) / 5);

for (let i = 0; i < 5; i++) {
    document.getElementById(`etrella${i+1}Divs`).style.fill = estrellas[i] > 0 ? "gold" : "gray";
    document.getElementById(`puntuacion${i+1}`).style.width = `${porcentajes[i]}%`;
    document.querySelector(`.porcentaje${i+1} .pbarra`).textContent = `${porcentajes[i].toFixed(2)}%`;
 }
 



