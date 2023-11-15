
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

// Para visualizar el contenedor modal


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
//lupa del producto






