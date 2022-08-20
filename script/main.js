let _toggleMenu = document.querySelector(".toggle-menu i");
let _icons = document.querySelector(".icons");

function IconShow() {
  if (_icons.style.right == "-105%") {
    _icons.style.right = "0";
  } else {
    _icons.style.right = "-105%";
  }
}
_toggleMenu.addEventListener("click", IconShow);
let loginFrom = document.querySelector(".login-form-container");
document.querySelector("#login-btn").onclick = () => {
  loginFrom.classList.toggle("active");
};

document.querySelector("#close-btn-login").onclick = () => {
  loginFrom.classList.remove("active");
};

// Filter
let _filter = document.querySelectorAll(".filter li");
let _card = document.querySelectorAll(".content .box");
let groupOFCard=[]
_filter.forEach((el) => {
  el.addEventListener("click", RemoveClass);
  el.addEventListener("click", showcards);

});
function RemoveClass() {
  _filter.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
function showcards() {
  _card.forEach((card) => {
    card.style.display = "none";
  });
  document.querySelectorAll(this.dataset.prod).forEach((el)=>{
        el.style.display = "flex";
  })
}
