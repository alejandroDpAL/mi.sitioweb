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

/* star */
var numeroDeEstrellas = 1.7;
let numberEstrella = document.getElementById("numberEstrella");
let estrellas = [
    document.getElementById("etrellaUno"),
    document.getElementById("etrellaDos"),
    document.getElementById("etrellaTres"),
    document.getElementById("etrellaCuatro"),
    document.getElementById("etrellaCinco")
];
numeroDeEstrellas = Math.min(Math.max(numeroDeEstrellas, 0), 5);
numberEstrella.innerText = numeroDeEstrellas;

for (let i = 0; i < estrellas.length; i++) {
    estrellas[i].classList.remove("fa-regular", "fa-solid", "fa-star", "fa-star-half-stroke");

    if (i < Math.floor(numeroDeEstrellas)) {
        estrellas[i].classList.add("fa-solid", "fa-star");
    } else if (i === Math.floor(numeroDeEstrellas) && numeroDeEstrellas % 1 !== 0) {
        estrellas[i].classList.add("fa-regular", "fa-star-half-stroke");
    } else {
        estrellas[i].classList.add("fa-regular", "fa-star");
    }
}
/* so far */