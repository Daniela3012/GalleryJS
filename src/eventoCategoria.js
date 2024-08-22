import dataFotos from './data/fotos';

const {fotos} = dataFotos;
const containerCategory = document.querySelector('.category--container');
const containerGallerySmall = document.querySelector('.gallery__overlay');
const containerSlidesGallery = document.querySelector('.gallery__small-slides');
const nameCategory = document.querySelector('.gallery__category');
const descriptionCategory = document.querySelector('.gallery__description');
const photoMainCategory = document.querySelector('.galler__main-img');
const btnBeforeMain=document.querySelector('.gallery__main-before');
const btnAfterMain=document.querySelector('.gallery__main-after');
const btnCloseGallery=document.querySelector('.gallery__close');
const btnAfterCarrusel=document.querySelector('.gallery__small-after');
const btnBeforeCarrusel=document.querySelector('.gallery__small-before');




let categoria='';
let index=0;

const setActivePhot=(index)=>{
    // Remove active-photo class from all figures
    const allFigures = containerSlidesGallery.querySelectorAll('.galler__small-figure');
    allFigures.forEach(figure => figure.classList.remove('active-photo'));
    // Add active-photo class to the selected figure
    allFigures[index].classList.add('active-photo');
};


const getValuesCategory=(categoria, index)=>{
    nameCategory.textContent=fotos[categoria][index].nombre;
    descriptionCategory.textContent=fotos[categoria][index].descripcion;
    photoMainCategory.setAttribute('src',`${fotos[categoria][index].ruta}`);
};


const getGalerySmall = (categoria)=>{
    containerSlidesGallery.innerHTML = '';
    for (let i = 0; i < fotos[categoria].length; i++) {
        const photoPlace=fotos[categoria][i].ruta;
        const plantilla=`<figure class="galler__small-figure active-photo"><img src="${photoPlace}" alt="" class="gallery__small-img">
    </figure>`;
    containerSlidesGallery.innerHTML+=plantilla;
    }
};


const getIndexSmallGallery = (even)=>{
    if (even.target && even.target.tagName === 'IMG') {
        const src = even.target.getAttribute('src'); // Obtener la ruta de la imagen clicada
        index = fotos[categoria].findIndex(foto => foto.ruta === src);
        console.log(index);
        getValuesCategory(categoria, index);
        setActivePhot(index);
    } else {
        console.log('xd');
    }
};


const changePositionBefore = (eve)=>{
    if (index > 0 && index < fotos[categoria].length) {
        index--;
        getValuesCategory(categoria, index);
        console.log(index);
        setActivePhot(index);
    }
};


const changePositionAfter =(eve)=>{
    if (index >= 0 && index < fotos[categoria].length - 1) {
        index++;
        getValuesCategory(categoria, index);
        console.log(index);
        setActivePhot(index);
    }
};


const changeAfterCarrusel = (event) => {
    containerSlidesGallery.scrollLeft = containerSlidesGallery.scrollWidth;
};

const changeBeforeCarrusel = (event) => {
    console.log('el carrusel before no me sirve aun');
};


const closeGallery=(even)=>{
        containerGallerySmall.classList.remove('gallery__overlay-active');
        index=0;
        console.log(index);
        containerSlidesGallery.removeEventListener('click',getIndexSmallGallery);
        btnBeforeMain.removeEventListener('click', changePositionBefore);
        btnAfterMain.removeEventListener('click', changePositionAfter);
};





const getCategory=(event)=>{
    event.preventDefault();
    if (event.target && event.target.closest('a')) {
        categoria=event.target.closest('a').dataset.categoria;
        console.log(categoria);
        containerGallerySmall.classList.toggle('gallery__overlay-active');
    }
    getValuesCategory(categoria, index);
    getGalerySmall(categoria);
    setActivePhot(index);
    
    
    containerSlidesGallery.addEventListener('click', getIndexSmallGallery);

    btnBeforeMain.addEventListener('click', changePositionBefore);
    
    btnAfterMain.addEventListener('click', changePositionAfter);

    btnCloseGallery.addEventListener('click', closeGallery);


};


btnAfterCarrusel.addEventListener('click', changeAfterCarrusel);
btnBeforeCarrusel.addEventListener('click', changeBeforeCarrusel);


containerCategory.addEventListener('click', getCategory);










