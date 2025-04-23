let win= window;

let p=document.querySelectorAll('main p');

// const container=document.getElementsByClassName('container');
// let api=document.querySelector('api');
// api.textContent="no valido";
// let formularios =document.forms;
// let imagenes=document.images;
// let scripts=document.scripts;

let lista=document.querySelectorAll('ul.list > li.item');
let card=document.querySelectorAll('div.cards > div.card');
let cards=document.querySelector('div.cards');

// console.log(cards.children);
// console.log("Padre",cards.parentElement);
// console.log("Hermano",cards.previousElementSibling.previousElementSibling);



// console.log(p);
let body=document.querySelector('body')
console.log('hermano',body.previousElementSibling);
console.clear();


let elemento=document.querySelector('#elementos2');
elemento.textContent="Nuexo txto";
elemento.innerHTML= '<p> textos </p> <p> textos </p>'

setTimeout(()=>{
    body.classList.add('bg-red')
    console.log(body.classList)},6000);


