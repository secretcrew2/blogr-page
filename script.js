const btn = document.getElementById('btn');
const hamburger = document.getElementById('hamburger');
const links = document.getElementById('links');

const accordions = document.querySelectorAll('.accordion');


btn.addEventListener('click', ()=>{
    if(hamburger.getAttribute('src') === 'images/icon-close.svg'){
        hamburger.setAttribute('src', 'images/icon-hamburger.svg');
    } else{
        hamburger.setAttribute('src', 'images/icon-close.svg');
    }
    links.classList.toggle('hidden');
});

accordions.forEach(accordion => {
    if(window.innerWidth >= 788){
        accordion.addEventListener('mouseover', ()=>{
            accordion.lastElementChild.classList.add('showbox');
        })
        accordion.addEventListener('mouseout', ()=>{
            accordion.lastElementChild.classList.remove('showbox');
        })
    } else {
        accordion.addEventListener('click', ()=>{
            accordion.lastElementChild.classList.toggle('showbox');
        })
    }

    
})
