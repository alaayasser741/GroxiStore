let _toggleMenu = document.querySelector('.toggle-menu i');
let _icons = document.querySelector('.icons');

function IconShow(){
    if(_icons.style.right == "-105%"){
        _icons.style.right = "0";
    }else{
        _icons.style.right = "-105%";
    }
}
_toggleMenu.addEventListener('click',IconShow);
let loginFrom = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () => {
    loginFrom.classList.toggle('active');
}

document.querySelector('#close-btn-login').onclick = () => {
    loginFrom.classList.remove('active');
}
