import dataCategory from './data/categoria'
const {categorias}= dataCategory;

console.log(typeof categorias);


const containerCategory=document.querySelector('.category--container');


const getValueCategory = (category) => {
    const aElementCategory=document.createElement('a');
    aElementCategory.classList.add('category__continent');

    const plantillaCategory=`
            <figure class="category__figure">
                <img src="${category.imagenPortada}" alt="" class="category__img">
            </figure>
            <div class="category__text">
                <h3 class="category__namecontinent">${category.nombre}</h3>
                <p class="category__countphotos">${category.numeroFotos} photos</p>
            </div>`;
    aElementCategory.innerHTML=plantillaCategory;
    containerCategory.appendChild(aElementCategory);
    aElementCategory.dataset.categoria=category.id;
};

categorias.forEach((categoria)=>{
    getValueCategory(categoria);
});
