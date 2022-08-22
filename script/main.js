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
let groupOFCard = [];
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
  document.querySelectorAll(this.dataset.prod).forEach((el) => {
    el.style.display = "flex";
  });
}

// CheckBox
// Filter
let check = document.querySelectorAll(".checkbox");
let icon = document.querySelectorAll(".checkbox i");

check.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("view");
    icon.forEach((i) => {
      i.classList.toggle("view-icon");
    });
  });
});

// List Style
let list = document.querySelectorAll(".list");
let list1 = document.querySelector(".list-1");
let list2 = document.querySelector(".list-2");

let container = document.querySelector(".products div");
list.forEach((li) => {
  li.addEventListener("click", ActiveContorl);
});
function ActiveContorl() {
  list.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
list1.addEventListener('click',()=>{
  container.classList.remove("rowProducts");
  container.classList.add("content");
})
list2.addEventListener('click',()=>{
  container.classList.remove("content");
  container.classList.add("rowProducts");
})