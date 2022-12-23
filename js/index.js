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
const footerA1 =document.querySelector('footer .family_site li:nth-child(1) a');
const footerA2 =document.querySelector('footer .family_site li:nth-child(2) a');
const footerA3 =document.querySelector('footer .family_site li:nth-child(3) a');
const footerP =document.querySelector('footer p');
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

      footerA1.classList.add('dark');
      footerA2.classList.add('dark');
      footerA3.classList.add('dark');
      footerP.classList.add('dark');
    } 
    else {footerContact.classList.remove('dark'); 
    currentIdx.style.color=`#fff`;
    logoDarken.style.backgroundImage =`url(./images/index_img/img_logo_white.svg)`;
    
    menuDarken.classList.remove('dark'); 
    pageCountSvg1.classList.remove('dark'); 
    pageCountSvg2_1.classList.remove('dark');
    pageCountSvg2_2.classList.remove('dark');
    pageCountSvg2_3.classList.remove('dark');
    pageCountSvg2_4.classList.remove('dark');
    footerA1.classList.remove('dark');
    footerA2.classList.remove('dark');
    footerA3.classList.remove('dark');
    footerP.classList.remove('dark');}
  })
   })
   const address =document.querySelector('address');
   observer.observe(address);
  }) 

  const li1 = document.querySelector('main .art2 .horizontal li:nth-child(1)');
  const li2 = document.querySelector('main .art2 .horizontal li:nth-child(2)');
  const art =document.querySelectorAll('article'); 

  addEventListener('scroll',(event)=>{
    if(event === art[1]){
    let Observer = new IntersectionObserver((el) => {
      el.forEach((e) => {
        if (isIntersecting) {e.classList.add('swipe');}
        else {e.classList.remove('swipe')}
       })
    }) 
    Observer.observe(li1);
    Observer.observe(li2);
  }
  })
}())

// 마우스커서 안 보이게 
document.body.style.cursor = 'none';

//가로스크롤

/* (function(){
const container = document.querySelector('.container');
const stickyBox = document.querySelector('.sticky_box');
const horizontal = document.querySelector('.horizontal');

function calcHt(ht) {
  return ht.scrollWidth - document.documentElement.clientWidth + document.documentElement.clientHeight + (document.documentElement.clientWidth / 100 * 4);
}
container.style.height = `${calcHt(horizontal)}px`;

addEventListener('scroll', scrolled);
function scrolled() {
  horizontal.style.transform = `translateX(-${stickyBox.offsetTop}px)`;
  horizontal.scrollTo({behavior:"smooth"})
}
}())
 */
//스크롤 한번에 active제거 하고 detail추가하기

/* 
function update() {
  const container = document.getElementById("controls");
  const elem = document.querySelector('div');
  const rect = elem.getBoundingClientRect();

  container.innerHTML = '';
  for (let key in rect) {
    if(typeof rect[key] !== 'function') {
      let para = document.createElement('p');
      para.textContent  = `${ key } : ${ rect[key] }`;
      container.appendChild(para);
    }
  }
}

document.addEventListener('scroll', update);
update();
   */
// (function() {
// const artimg = document.querySelectorAll('main .art .img');
// let artimgSize = artimg[0].getBoundingClientRect();
// addEventListener('scroll',()=>{
// console.log(artimgSize.width);
// console.log(artimg.scrollTop);
// })
// })();


/* addEventListener('scroll',()=>{
  let artObserver = new IntersectionObserver((entries) => {
    entries.forEach((e, idx) => {
      if (e.intersectionRatio > 0.6) {currentIdx.textContent = `0${idx+1}`; 
      e.target.classList.add('active');}
      // else if(e.intersectionRatio = 0.5){ e.target.classList.remove('active');}
      //        else if(e.intersectionRatio > 1.0){e.target.classList.remove('active');}
     })
  }) */
// (function(){
 

/* const artimg = document.querySelectorAll('main .art .img');
const art =document.querySelectorAll('article');

art[2].addEventListener('scroll',()=>{
  let resizeobserver = new IntersectionObserver((el) => {
    el.forEach((e) => {
      const direction = e.deltaY ;
      if(direction = 100 )  { direction += 100;
       artimg[0].classList.add('detail');
       art[2].classList.remove('active')}
      else{artimg[0].classList.add('detail');}
    })
    art.forEach((el) => {resizeobserver.observe(el);})
  })}) */

// })
/* let lastScrollY = 0;

art[2].addEventListener("scroll", e => {
  const scrollY = window.scrollY;
  
  // 이전의 스크롤 위치와 비교하기
  const direction = scrollY 
  if (scrollY > lastScrollY) {artimg[0].classList.add('detail');
   art[2].classList.remove('active')}
   else{artimg[0].classList.add('detail');}
  
  // 현재의 스크롤 값을 저장
  lastScrollY = scrollY;
  
  console.log(direction);
}); */
