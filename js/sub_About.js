const logo = document.querySelector("header h1 .logo");
const path1 = document.querySelector("header .menu_open svg #path1");
const path2 = document.querySelector("header .menu_open svg #path2");
const imgBg = document.querySelector(".img_bg");
const on = document.querySelectorAll(".text_container > .on");
const arrow = document.querySelector(".text_container > .arrow");
const span = document.querySelector(".specialities_wrap span");
const active1 = document.querySelector(
  ".container2 .specialities_wrap ul > #active1"
);
const active2 = document.querySelector(
  ".container2 .specialities_wrap ul > #active2"
);
const active3 = document.querySelector(
  ".container2 .specialities_wrap ul > #active3"
);
const clients = document.querySelector("#clients_wrap > ul");
const container3P = document.querySelector(".container3 p");
const container3Img = document.querySelector(".container3 img");
const line1 = document.querySelector(".container4 .contact .line01");
const line2 = document.querySelector(".container4 .contact .line02");
const line3 = document.querySelector(".container4 .contact .line03");
const line4 = document.querySelector(".container4 .contact .line04");
const eng = document.querySelector(".container4 p");
const mousewheelWrap = document.querySelector(".mousewheel_wrap");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");

// container2
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  // 글자 한 줄씩 슬라이드
  if (value > 300) {
    imgBg.style.animation = "movRight 0.25s ease-out";
    on[0].style.animation = "movLeft 0.25s forwards";
    on[1].style.animation = "movLeft 0.4s forwards";
    on[2].style.animation = "movLeft 0.55s forwards";
    on[3].style.animation = "movLeft 0.7s forwards";
    on[4].style.animation = "movLeft 0.85s forwards";
    arrow.style.animation = "fadeIn 0.95s forwards";
    mousewheelWrap.style.opacity = 0;
  } else {
    mousewheelWrap.style.opacity = 1;
  }

  // span 굴러감
  if (value > 1680) {
    span.style.animation = "move 1.5s forwards";
    active1.style.animation = "active 1.5s forwards";
    active2.style.animation = "active 2.3s forwards";
    active3.style.animation = "active 5s forwards";
  }

  // 글자 opacity
  if (value > 2500) {
    clients.style.transition = "opacity 1s, transform 1s";
    clients.style.transform = "translate(0)";
    clients.style.opacity = 1;
  }
});

// container3
window.addEventListener("scroll", function () {
  let value = window.scrollY;

  // 이미지와 글자 깜박임
  if (value > 3900) {
    container3Img.style.animation = "fadeIn 0.7s 0.4s forwards";
    container3P.style.animation = "fadeIn 0.7s 0.8s forwards";
  }

  // container4
  window.addEventListener("scroll", function () {
    let value = window.scrollY;

    // 선들이 깜빡임
    if (value >= 5460) {
      line1.style.animation = "fadeIn 0.1s ease-in";
      line1.style.opacity = 1;
      line2.style.animation = "fadeIn 0.25s ease-in";
      line2.style.opacity = 1;
      line3.style.animation = "fadeIn 0.4s ease-in";
      line3.style.opacity = 1;
      line4.style.animation = "fadeIn 0.55s ease-in";
      line4.style.opacity = 1;
      eng.style.animation = "fadeIn 0.8s 0.8s forwards";
    }
  });
});

// logo와 toggle 메뉴 색 바뀜
window.addEventListener("scroll", function () {
  const path = document.querySelectorAll("path");
  let value = window.scrollY;
  if (value >= 900) {
    logo.classList.add("color");
    path[0].classList.add("color");
    path[1].classList.add("color");
  }
});

//마우스 커서
const circle = document.querySelector(".circle");
var pointSize = $(".circle").width() / 2;
$("body").mousemove(function (e) {
  $(".circle").css("top", e.pageY - pointSize);
  $(".circle").css("left", e.pageX - pointSize);
});
document.body.style.cursor = "none";

// toggle menu
(function turnMenu() {
  const menuOpen = document.querySelector("header .menu_open");
  const menuPage = document.querySelector(".menu_wrap");
  const menuClose = document.querySelector(".menu_wrap .menu_close");

  menuOpen.addEventListener("click", () => {
    menuPage.classList.add("on");
    menuPage.classList.remove("none");
  });
  menuClose.addEventListener("click", () => {
    menuPage.classList.remove("on");
    menuPage.classList.add("none");
  });
})();
