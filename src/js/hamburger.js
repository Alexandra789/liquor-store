let hamburgerMenuButton = document.querySelector('.menu__btn');
let hamburgerMenuBox = document.querySelector('.menu__box');
let hamburgerMenuLink = document.querySelectorAll('.nav__item');

for (let i = 0; i<hamburgerMenuLink.length; i++){
    hamburgerMenuLink[i].addEventListener('click', () => {
        hamburgerMenuBox.classList.remove('active');
        hamburgerMenuButton.classList.remove('active');
    })
}
hamburgerMenuButton.addEventListener('click', () => {
    hamburgerMenuBox.classList.toggle('active');
    hamburgerMenuButton.classList.toggle('active');
});


