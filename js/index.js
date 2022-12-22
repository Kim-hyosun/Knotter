// 메뉴 toggle기능 생성
(function turnMenu (){
const menuOpen =document.querySelector('header .menu_open');
const menuPage =document.querySelector('.menu_page');
const menuClose =document.querySelector('.menu_page .menu_close')
menuOpen.addEventListener('click',()=>{
 menuPage.classList.add('active');
 menuPage.classList.remove('none');
})
menuClose.addEventListener('click',()=>{
 menuPage.classList.remove('active');
 menuPage.classList.add('none');
})
})();


  //스크롤내려서 화면이 전환되면 페이지카운팅 + 화면확대
 (function(){
     const currentIdx = document.querySelector('.page_count .current_count');
   
  addEventListener('scroll',()=>{
let artObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, idx) => {
    if (e.intersectionRatio > 0) {currentIdx.textContent = `0${idx+1}`; 
    e.target.classList.add('active');}
    // else if(e.intersectionRatio = 0.5){ e.target.classList.remove('active');}
    //        else if(e.intersectionRatio > 1.0){e.target.classList.remove('active');}
   })
})
 const art =document.querySelectorAll('article'); 
art.forEach((el) => {artObserver.observe(el);})

  let observer = new IntersectionObserver((e)=>{
  e.forEach((page)=>{
      if(page.intersectionRatio > 0.5){currentIdx.textContent = `back to Top`;} 
     })
   })
   const address =document.querySelector('address');
   observer.observe(address);
  }) 
 
}())



