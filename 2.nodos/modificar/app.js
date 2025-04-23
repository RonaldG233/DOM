let padre=document.querySelector('.container');
let node=document.createElement('h2');
node.textContent="Titulo de segundo nivel";
let texto=document.createTextNode("Palabra texto");
padre.appendChild(node);
padre.appendChild(texto);

let lista=document.querySelector('#list');

// console.log(lista);

// let hijo=document.querySelector('.list');
// let pal=document.createElement('li.item');
// let texto2=document.createTextNode("CSS");
// hijo.appendChild(pal);
// hijo.appendChild(texto2);

let html =document.createElement('li');
let css=document.createElement('li');
let js=document.createElement('li');

html.classList.add('item');
css.classList.add('item');
js.classList.add('item');

html.textContent="HTML";
css.textContent="CSS";
js.textContent="JS";
lista.append(html, css, js);

let card=document.querySelector('.card');
let lista_card=document.querySelector('#list');
console.log(card);

let titulo=document.createElement('h2');
titulo.textContent="TITULO DE LA CARD";

card.append(titulo)
card.insertBefore(titulo, lista_card);

let beforebegin=document.createElement('li');
beforebegin.classList.add('item', 'before');
beforebegin.textContent ="hola chamos 3000";

let afterbegin=document.createElement('li');
afterbegin.classList.add('item');
afterbegin.textContent= "que tal chavalees bienvenidos";

let beforeend=document.createElement('li');
beforeend.classList.add('item', 'before');
beforeend.textContent="al toque mi rey";

let afterend=document.createElement('li');
afterend.classList.add('item');
afterend.textContent="quee viva petroo";

lista_card.insertAdjacentElement('beforebegin', beforebegin);//1
lista_card.insertAdjacentElement('afterbegin', afterbegin);//4
lista_card.insertAdjacentElement('beforeend', beforeend);//2
lista_card.insertAdjacentElement('afterend',afterend);//3


//los dias de la semana

let card_dias=document.querySelector('#dias');
const dias=[
    {
        id:1,
        nombre:'lunes',
        img:"https://picsum.photos/200/300",
        parrafo:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        id:2,
        nombre:'martes',
        img:"https://picsum.photos/200/300",
        parrafo:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        id:3,
        nombre:'miercoles',
        img:"https://picsum.photos/200/300",
        parrafo:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        id:4,
        nombre:'jueves',
        img:"https://picsum.photos/200/300",
        parrafo:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        id:5,
        nombre:'viernes',
        img:"https://picsum.photos/200/300",
        parrafo:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        id:6,
        nombre:'sabado',
        img:"https://picsum.photos/200/300",
        parrafo:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        id:7,
        nombre:'domingo',
        img:"https://picsum.photos/200/300",
        parrafo:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
]

dias.map( ({nombre, img , parrafo}) => {
    // console.log(dia);
    let card=document.createElement('div');
    let card_header=document.createElement('div');
    let card_titulo=document.createElement('h2');
    let card_body=document.createElement('div');
    let imagen=document.createElement('img');
    let p=document.createElement('p');

    card.classList.add('card');

    card_header.classList.add('card__header');
    card_titulo.classList.add('card__title');
    card_body.classList.add('card__body');
    imagen.classList.add('card__img');
    p.classList.add('card__paragraph');

    imagen.setAttribute('src', img)
    imagen.setAttribute('alt', nombre);
    

    card_titulo.textContent=nombre;

    p.textContent =parrafo;

    card_body.append(imagen,p);
    card_header.append(card_titulo);
    card.append(card_header)
    card.append(card_body);
    card_dias.append(card);


})
