// 메뉴 toggle기능 생성
(function turnMenu (){
const menuOpen =document.querySelector('header .menu_open');
const menuPage =document.querySelector('.menu_page');
const menuClose =document.querySelector('.menu_page .menu_close')
menuOpen.addEventListener('click',()=>{
 menuPage.classList.add('on');
 menuPage.classList.remove('none');
})
menuClose.addEventListener('click',()=>{
 menuPage.classList.remove('on');
 menuPage.classList.add('none');
})
})();


  //스크롤내려서 화면이 전환되면 페이지카운팅 + 화면확대
 (function(){
     const currentIdx = document.querySelector('.page_count .current_count');
   
  addEventListener('scroll',()=>{
let artObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, idx) => {
    if (e.intersectionRatio > 0.6) {currentIdx.textContent = `0${idx+1}`; 
    e.target.classList.add('active');}
    // else if(e.intersectionRatio = 0.5){ e.target.classList.remove('active');}
    //        else if(e.intersectionRatio > 1.0){e.target.classList.remove('active');}
   })
})
 const art =document.querySelectorAll('article'); 
art.forEach((el) => {artObserver.observe(el);})

const logoDarken = document.querySelector('header .logo');
// const footerA =document.querySelectorAll('footer .family_site a');
const footerContact =document.querySelector('footer .contact_btn');
const menuDarken = document.querySelector('header .menu_open');
const pageCountSvg1 = document.querySelector('.page_count svg path')
const pageCountSvg2_1 = document.querySelector('.page_count svg rect:nth-child(1)')
const pageCountSvg2_2 = document.querySelector('.page_count svg rect:nth-child(2)')
const pageCountSvg2_3 = document.querySelector('.page_count svg rect:nth-child(3)')
const pageCountSvg2_4 = document.querySelector('.page_count svg rect:nth-child(4)')

  let observer = new IntersectionObserver((e)=>{
  e.forEach((page)=>{
      if(page.intersectionRatio > 0.8){
      currentIdx.textContent = `back to Top`;
      currentIdx.style.color=`#101010`;
      logoDarken.style.backgroundImage =`url(./images/index_img/img_logo_black.svg)`;
      footerContact.classList.add('dark'); 

      menuDarken.classList.add('dark'); 
      pageCountSvg1.classList.add('dark'); 
      pageCountSvg2_1.classList.add('dark');
      pageCountSvg2_2.classList.add('dark');
      pageCountSvg2_3.classList.add('dark');
      pageCountSvg2_4.classList.add('dark');
    } 
    else {footerContact.classList.remove('dark'); 
    currentIdx.style.color=`#fff`;
    logoDarken.style.backgroundImage =`url(./images/index_img/img_logo_white.svg)`;}
    
    menuDarken.classList.remove('dark'); 
    pageCountSvg1.classList.remove('dark'); 
    pageCountSvg2_1.classList.remove('dark');
    pageCountSvg2_2.classList.remove('dark');
    pageCountSvg2_3.classList.remove('dark');
    pageCountSvg2_4.classList.remove('dark');
  })
   })
   const address =document.querySelector('address');
   observer.observe(address);
  }) 
  
}())

  // 마우스 커서(반전 원/근데 한 페이지에서만 보임.. 왜?ㅠㅠ)
  /* 
const circle = document.querySelector('.circle');
let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;
let speed = 0.4;
const animate = () => {
  let distX = mouseX - circleX;
  let distY = mouseY - circleY;
  let translatedValue = `translate3d(${circleX}px, ${circleY}px, 0 )`;

  circleX = circleX + distX * speed;
  circleY = circleY + distY * speed;
  circle.style.transform = translatedValue;

  requestAnimationFrame(animate);
};
animate();
window.addEventListener('mousemove', e => {
  mouseX = e.clientX - circle.offsetWidth / 4;
  mouseY = e.clientY - circle.offsetHeight / 4;
}); */

// 마우스커서 안 보이게 (수정해야 함...)
document.body.style.cursor = 'none';

//가로스크롤
(function(){
const container = document.querySelector('.container');
const stickyBox = document.querySelector('.sticky_box');
const horizontal = document.querySelector('.horizontal');

function calcHt(ht) {
  return ht.scrollWidth - document.documentElement.clientWidth + document.documentElement.clientHeight;
}
container.style.height = `${calcHt(horizontal)}px`;

addEventListener('scroll', scrolled);
function scrolled() {
  horizontal.style.transform = `translateX(-${stickyBox.offsetTop}px)`;
  horizontal.scrollTo({behavior:"smooth"})
}
}())

  


