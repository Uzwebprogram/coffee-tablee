let menu = document.querySelector(".js-menu");

menu.addEventListener('click', e => {
  e.target.classList.toggle('header__menu--active')
})
