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
    if (e.intersectionRatio > 0.6) {currentIdx.textContent = `0${idx+1}`;  }
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

  /* const art2 = document.querySelector('main .art:nth-child(2)');
  const logoDarken = document.querySelector('header .logo');
  addEventListener('scroll',()=>{
 
    let Observer = new IntersectionObserver((el) => {
      el.forEach(entry => {
        if (entry.isIntersecting) { logoDarken.style.backgroundImage =`url(./images/index_img/img_logo_black.svg)`;}
        else {logoDarken.style.backgroundImage =`url(./images/index_img/img_logo_white.svg)`;}
      })
       }) 
    Observer.observe(art2);
  })  */
}())

//fade
/* const txtFade = ()=> {
  const container = document.querySelector('main .container');

addEventListener('scroll',()=>{
  let svgObserver = new IntersectionObserver((ent) => {
    ent.forEach((e) => {
      let sizeget = e.getBoundingClientRect();
      let sizeost = e.offsetTop;
      let sizesct = e.scrollTop;
      console.log(sizeget)
      console.log(sizeost)
      console.log(sizesct)
                             if (size[key] === 0) {
                              container.classList.add('visible');
                             }
                            else {
                              container.classList.remove('visible');
                            }
                         })
                       })
    svgObserver.observe(container);
  })
};  */


// 마우스커서 안 보이게 
document.body.style.cursor = 'none';

//가로스크롤

(function(){
const container = document.querySelector('.container');
const stickyBox = document.querySelector('.sticky_box');
const horizontal = document.querySelector('.horizontal');

function calcHt(ht) {
  return ht.scrollWidth - document.documentElement.clientWidth + document.documentElement.clientHeight + 200;
   //(document.documentElement.clientWidth / 100 * 10) - (document.documentElement.clientHeight) ;
}
container.style.height = `${calcHt(horizontal)}px`;
// console.log(container.getBoundingClientRect().top)
//console.log(container.scrollHeight)// 4457 (더하기 안하면 4061)

addEventListener('scroll', scrolled);
function scrolled() {
  horizontal.style.transform = `translateX(-${stickyBox.offsetTop}px)`;
  horizontal.scrollTo({behavior:"smooth"})
}
}())

//스크롤 따라서 애니메이션 
gsap.registerPlugin(ScrollTrigger);
gsap.from("#slogan", {scrollTrigger : {trigger:"#textZoom", toggleActions: "restart none restart none"}, duration:1 ,y:100, scale: 1000} )
gsap.to(".data-scroll1", {scrollTrigger : {trigger : ".data-scroll1", toggleActions: "restart none restart none"} ,duration:.5, width : 0, height : 0, textIndent : -9999 , delay : 1.5 });
gsap.to(".data-scroll2", {scrollTrigger : {trigger : ".data-scroll2", toggleActions: "restart none restart none"} ,duration:.5, width : 0, height : 0, textIndent : -9999 , delay : 1.5 });
gsap.to(".data-scroll3", {scrollTrigger : {trigger : ".data-scroll3", toggleActions: "restart none restart none"} ,duration:.5, width : 0, height : 0, textIndent : -9999 , delay : 1.5 });
gsap.to(".data-scroll4", {scrollTrigger : {trigger : ".data-scroll4", toggleActions: "restart none restart none"} ,duration:.5, width : 0, height : 0, textIndent : -9999 , delay : 1.5 });
gsap.to(".data-scroll5", {scrollTrigger : {trigger : ".data-scroll5", toggleActions: "restart none restart none"} ,duration:.5, width : 0, height : 0, textIndent : -9999 , delay : 1.5 });

/* ScrollTrigger.create({onEnterBack: ONBACK})
function ONBACK (){
  document.querySelector('.data-scroll1').style.width(`100%`);
} */
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
