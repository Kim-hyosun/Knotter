// 메뉴 toggle기능 생성
(function turnMenu() {
  const menuOpen = document.querySelector("header .menu_open");
  const menuPage = document.querySelector(".menu_page");
  const menuClose = document.querySelector(".menu_page .menu_close");
  menuOpen.addEventListener("click", () => {
    menuPage.classList.add("on");
    menuPage.classList.remove("none");
    document.body.classList.add("noScroll");
  });
  menuClose.addEventListener("click", () => {
    menuPage.classList.remove("on");
    menuPage.classList.add("none");
    document.body.classList.remove("noScroll");
  });
})();

//스크롤내려서 화면이 전환되면 페이지카운팅 + 화면확대
(function () {
  const currentIdx = document.querySelector(".page_count .current_count");

  addEventListener("scroll", () => {
    let artObserver = new IntersectionObserver((entries) => {
      entries.forEach((e, idx) => {
        if (e.intersectionRatio > 0.6) {
          currentIdx.textContent = `0${idx + 1}`;
        }
      });
    });
    const art = document.querySelectorAll("article");
    art.forEach((el) => {
      artObserver.observe(el);
    });

    const logoDarken = document.querySelector("header .logo");
    const footerA1 = document.querySelector(
      "footer .family_site li:nth-child(1) a"
    );
    const footerA2 = document.querySelector(
      "footer .family_site li:nth-child(2) a"
    );
    const footerA3 = document.querySelector(
      "footer .family_site li:nth-child(3) a"
    );
    const footerP = document.querySelector("footer p");
    const footerContact = document.querySelector("footer .contact_btn");
    const menuDarken = document.querySelector("header .menu_open");
    const pageCountSvg1 = document.querySelector(".page_count svg path");
    const pageCountSvg2_1 = document.querySelector(
      ".page_count svg rect:nth-child(1)"
    );
    const pageCountSvg2_2 = document.querySelector(
      ".page_count svg rect:nth-child(2)"
    );
    const pageCountSvg2_3 = document.querySelector(
      ".page_count svg rect:nth-child(3)"
    );
    const pageCountSvg2_4 = document.querySelector(
      ".page_count svg rect:nth-child(4)"
    );

    let observer = new IntersectionObserver((e) => {
      e.forEach((page) => {
        if (page.intersectionRatio > 0.8) {
          currentIdx.textContent = `back to Top`;
          currentIdx.style.color = `#101010`;
          logoDarken.style.backgroundImage = `url(./images/index_img/img_logo_black.svg)`;
          footerContact.classList.add("dark");

          menuDarken.classList.add("dark");
          pageCountSvg1.classList.add("dark");
          pageCountSvg2_1.classList.add("dark");
          pageCountSvg2_2.classList.add("dark");
          pageCountSvg2_3.classList.add("dark");
          pageCountSvg2_4.classList.add("dark");

          footerA1.classList.add("dark");
          footerA2.classList.add("dark");
          footerA3.classList.add("dark");
          footerP.classList.add("dark");
        } else {
          footerContact.classList.remove("dark");
          currentIdx.style.color = `#fff`;
          logoDarken.style.backgroundImage = `url(./images/index_img/img_logo_white.svg)`;

          menuDarken.classList.remove("dark");
          pageCountSvg1.classList.remove("dark");
          pageCountSvg2_1.classList.remove("dark");
          pageCountSvg2_2.classList.remove("dark");
          pageCountSvg2_3.classList.remove("dark");
          pageCountSvg2_4.classList.remove("dark");
          footerA1.classList.remove("dark");
          footerA2.classList.remove("dark");
          footerA3.classList.remove("dark");
          footerP.classList.remove("dark");
        }
      });
    });
    const address = document.querySelector("address");
    observer.observe(address);
  });
})();

// 마우스커서 안 보이게
document.body.style.cursor = "none";

//가로스크롤

(function () {
  const container = document.querySelector(".container");
  const stickyBox = document.querySelector(".sticky_box");
  const horizontal = document.querySelector(".horizontal");
  console.log(horizontal.scrollWidth);
  console.log(horizontal.getBoundingClientRect());
  console.log(document.documentElement.getBoundingClientRect().width);
  console.log(document.documentElement.clientWidth);
  console.log(document.documentElement.scrollHeight);
  function calcHt(ht) {
    return (
      ht.scrollWidth -
      ht.scrollWidth +
      document.documentElement.getBoundingClientRect().width * 3 -
      document.documentElement.clientHeight
      /* ht.scrollWidth -
      document.documentElement.clientWidth +
      document.documentElement.clientHeight */
    );
  }
  container.style.height = `${calcHt(horizontal)}px`;

  addEventListener("scroll", scrolled);
  function scrolled() {
    horizontal.style.transform = `translateX(-${stickyBox.offsetTop}px)`;
    horizontal.scrollTo({ behavior: "smooth" });
  }
})();

//스크롤 따라서 애니메이션
gsap.registerPlugin(ScrollTrigger);
gsap.from("#slogan", {
  scrollTrigger: {
    trigger: "#textZoom",
    toggleActions: "restart none reverse none",
  },
  duration: 1,
  y: 100,
  scale: 1000,
});
gsap.to(".data-scroll1", {
  scrollTrigger: {
    trigger: ".data-scroll1",
    toggleActions: "restart none restart none",
  },
  duration: 0.5,
  width: 0,
  height: 0,
  textIndent: -9999,
  delay: 1.5,
});
gsap.to(".data-scroll2", {
  scrollTrigger: {
    trigger: ".data-scroll2",
    toggleActions: "restart none restart none",
  },
  duration: 0.5,
  width: 0,
  height: 0,
  textIndent: -9999,
  delay: 1.5,
});
gsap.to(".data-scroll3", {
  scrollTrigger: {
    trigger: ".data-scroll3",
    toggleActions: "restart none restart none",
  },
  duration: 0.5,
  width: 0,
  height: 0,
  textIndent: -9999,
  delay: 1.5,
});
gsap.to(".data-scroll4", {
  scrollTrigger: {
    trigger: ".data-scroll4",
    toggleActions: "restart none restart none",
  },
  duration: 0.5,
  width: 0,
  height: 0,
  textIndent: -9999,
  delay: 1.5,
});
gsap.to(".data-scroll5", {
  scrollTrigger: {
    trigger: ".data-scroll5",
    toggleActions: "restart none restart none",
  },
  duration: 0.5,
  width: 0,
  height: 0,
  textIndent: -9999,
  delay: 1.5,
});
