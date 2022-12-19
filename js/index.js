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
