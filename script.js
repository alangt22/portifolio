const myObserver = new IntersectionObserver( (entries) => {
   entries.forEach( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }

    }); 
});

const texto = document.querySelectorAll('.texto')
const global = document.querySelectorAll('.global')
const img_sobre = document.querySelectorAll('.img-sobre')
const texto_sobre = document.querySelectorAll('.texto-sobre')
const img = document.querySelectorAll('.img')

texto.forEach( (Element) => myObserver.observe(Element))
global.forEach( (Element) => myObserver.observe(Element))
img_sobre.forEach( (Element) => myObserver.observe(Element))
texto_sobre.forEach( (Element) => myObserver.observe(Element))
img.forEach( (Element) => myObserver.observe(Element))


let show = true;
const menuContent = document.querySelector('.content'); 
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    menuContent.classList.toggle('on', show);
    show = !show;

});