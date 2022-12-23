//로딩창 제이쿼리
$(window).load(function () {
  $('#roading').show();

  setTimeout(() => {
    $('#roading').fadeOut();
  }, 2000);
});

//휠 블락화 (한 페이지씩만 보이게 하는 것)
window.addEventListener(
  'wheel',
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);
let mHtml = $('html');
let page = 1;

mHtml.animate({ scrollTop: 0 }, 10);

$(window).on('wheel', function (e) {
  if (mHtml.is(':animated')) return;
  if (e.originalEvent.deltaY >0) {
    if (page == 12) return;
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;
    page--;
  }
  let posTop = (page - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop });
});

//마우스 커서 
 var pointSize = $(".circle").width()/2;
 $(".wrap").mousemove(function(e){    
     $('.circle').css("top", e.pageY-pointSize);
     $('.circle').css("left", e.pageX-pointSize); 
 });



