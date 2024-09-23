let menu_icon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu_icon.onclick = () => {
    navbar.classList.toggle('active');
    menu_icon.classList.toggle('fa-x');
}

console.log(menu_icon);
