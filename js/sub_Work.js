// toggle menu
(function turnMenu() {
  const menuOpen = document.querySelector('.menu_open');
  const menuPage = document.querySelector('.menu_wrap');
  const menuClose = document.querySelector('.menu_wrap .menu_close');

  menuOpen.addEventListener('click', () => {
    menuPage.classList.add('on');
    menuPage.classList.remove('none');
  });
  menuClose.addEventListener('click', () => {
    menuPage.classList.remove('on');
    menuPage.classList.add('none');
  });
})();

//마우스 커서
const circle = document.querySelector('.circle');
var pointSize = $('.circle').width() / 2;
$('body').mousemove(function (e) {
  $('.circle').css('top', e.pageY - pointSize);
  $('.circle').css('left', e.pageX - pointSize);
});
document.body.style.cursor = 'none';
