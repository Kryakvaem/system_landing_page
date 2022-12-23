const HERO_TITLES=[
            'Разработано 2000+ приложений',
            'Бесплатные приложения',
            'Тысячи довольных клиентов'
];

const HERO_TEXTS=[
    'Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток',
    'К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно',
    'Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов'
];      

const MENU_LIST = document.querySelectorAll('.navigation__link')
 

MENU_LIST.forEach(link=> link.addEventListener('click',event=>{
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior:'smooth'
    });
 }));

const HERO_DOTS = document.querySelectorAll('.hero__dot')
const HERO_IMG = document.querySelector('.hero__image')
const HERO_TITLE = document.querySelector('.hero__title')
const HERO_TEXT = document.querySelector('.hero__text')


HERO_DOTS.forEach((dot,index) =>dot.addEventListener('click',event => {
    HERO_DOTS.forEach(el=>{
        el.classList.remove('active')
    })
    dot.classList.add('active');

    HERO_IMG.src=`images/hero${index+1}.png`;
    HERO_TITLE.textContent = HERO_TITLES[index];
    HERO_TEXT.textContent = HERO_TEXTS[index];
}));

//burger menu
 
const BURGER = document.querySelector('.header__burger')
console.log(BURGER)


BURGER.addEventListener('click',event=>{
    event.preventDefault();
    BURGER.classList.toggle("active");
    document.body.classList.toggle('noscroll');
    document.querySelector(".navigation").classList.toggle("open");
    
})

function closeOnClick() {
    document.querySelector(".navigation").classList.remove("open");
    BURGER.classList.remove("active");
    document.body.remove("noscroll");
  }

// Для каждого элемента меню при клике вызываем ф-ию
MENU_LIST.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});



