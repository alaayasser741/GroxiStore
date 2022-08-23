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

// Input Number
let Plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let num = document.querySelector(".numb");
let Number = 1;
Plus.addEventListener("click", () => {
  Number++;
  Number = Number < 10 ? "0" + Number : Number;
  num.innerHTML = `${Number}`;
});
minus.addEventListener("click", () => {
  if (Number > 1) {
    Number--;
    Number = Number < 10 ? "0" + Number : Number;
    num.innerHTML = `${Number}`;
  }
});
// Description
let discList = document.querySelectorAll(".discList li");
let discBtn = document.getElementById("description");
let addBtn = document.getElementById("additonal");
let revBtn = document.getElementById("reviews");
let f1 = document.querySelector(".f1");
let f2 = document.querySelector(".f2");
discList.forEach((li) => {
  console.log("first");
  li.addEventListener("click", removeActiveDescripton);
});
function removeActiveDescripton() {
  discList.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

discBtn.addEventListener("click", () => {
  f1.innerHTML =
    "Ratione volurtatem serui nesciunt neaue porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.";
  f2.innerHTML =
    "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";
});
addBtn.addEventListener("click", () => {
  f1.innerHTML =
    "Some industries mandate current certifications to even be considered for employment. If that is your field, a separate certification category can make it easy for an interviewer to scan your resume and find your current licenses and certifications quickly. If you have a non-mandatory certification as part of your personal professional development, you can explain the organization issuing the certification and what coursework and testing it required.";
  f2.innerHTML =
    "klam klam klam klam bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ";
});
revBtn.addEventListener("click", () => {
  f1.innerHTML =
    "Getting customers to write positive reviews about your company is very beneficial, but it can also be challenging.";
  f2.innerHTML =
    "That’s why you should take some action to encourage your customers to write reviews. One of the ways to motivate them is to show them positive examples for your industry.";
});
/*
https://www.facebook.com/sharer.php?u=[post-url]
.
https://twitter.com/share?url=[post-url]&text=[post-title]
.
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
.
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
.
https://api.whatsapp.com/send?text=[post-title] [post-url]

*/
// Share
let facebookBtn = document.querySelector(".btn-facebook");
let twitterBtn = document.querySelector(".btn-twitter");
let linkedintn = document.querySelector(".btn-linkedin");
let pinterestBtn = document.querySelector(".btn-pinterest");
let whatsappBtn = document.querySelector(".btn-whatsapp");

function share() {
  const pinterestImg = document.querySelector(".pinterestImg");
  let PostUrl = encodeURI(document.location.href);
  let postTitle = encodeURI(
    "Hi everyone, I had a pleasant experience with this site and I share with you this masterpiece 🤍❤️"
  );
  let postImg = encodeURI(pinterestImg.src);
  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${PostUrl}`
  );
  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${PostUrl}&text=${postTitle}`
  );
  linkedintn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${PostUrl}&title=${postTitle}`
  );
  pinterestBtn.setAttribute(
    "href",
    `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${PostUrl}&description=${postTitle}`
  );
  whatsappBtn.setAttribute(
    "href",
    `https://api.whatsapp.com/send?text=${postTitle} ${PostUrl}`
  );
}
share();