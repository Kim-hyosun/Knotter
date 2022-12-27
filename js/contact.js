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



//마우스 커서 
document.body.style.cursor = 'none';
var pointSize = $(".circle").width()/2;
$("body").mousemove(function(e){    
    $('.circle').css("top", e.clientY-pointSize);
    $('.circle').css("left", e.clientX-pointSize);

    $("footer").on("mouseover", () => {
      $(".circle").addClass("wh");
  }).on("mouseleave", () => {
      $(".circle").removeClass("wh");
  })

    $(".menu_page").on("mouseover", () => {
      $(".circle").addClass("wh");
  }).on("mouseleave", () => {
      $(".circle").removeClass("wh");
  })
    
});



/* const circle = document.querySelector('.circle');

function mouseOver() {
  footer.addEventListener('mousemove', () => {
    circle.classList.add('ft');
  });
};
 */

//article - part_1 토글 클릭 이벤트
const link = document.querySelectorAll('.checkbox > a');
const checkBox = document.querySelectorAll('.checkbox');

link.forEach((link) => {
  link.addEventListener('click', e => {
    e.preventDefault();
    e.currentTarget.parentNode.classList.toggle('active');
  })
})


//article 다음 버튼 클릭시 오버레이 0

const opaPlus = document.querySelector('.opa_plus');


link.forEach(link => {
  link.addEventListener('click', () => {
    opaPlus.classList.add('plus');
      
  })
})




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
  if (e.originalEvent.deltaY > 0) {
    if (page == 13) return;
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;
    page--;
  }
  let posTop = (page - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop });
});


//sub_title 고정->시간 조절, 오퍼시티
const subTitle = document.querySelector('.project_sub_title');
const projectWrapper = document.querySelector('.project_wrapper');
const part2Wrapper = document.querySelector('.part2_wrapper');
const part3Wrapper = document.querySelector('.part3_wrapper');
const header = document.querySelector('header');


let subTitleOffsetTop = subTitle.offsetTop;
let clientHt = document.documentElement.clientHeight;
console.log(subTitleOffsetTop);
console.log(clientHt);
console.log(subTitle.clientHeight);

let result = subTitleOffsetTop- clientHt - subTitle.clientHeight;
    addEventListener('scroll', () => {
      // console.log(scrollY); 3230
      if (scrollY >= result) {
        subTitle.classList.add('fixed')
        projectWrapper.classList.add('fixed');
        part2Wrapper.classList.add('fixed');
        part3Wrapper.classList.add('fixed');
      } else if (scrollY <= 76) {
        subTitle.classList.remove('fixed')
      }
    });


//sub_title progressBar
const progressBar = document.querySelector('.border_lf');

addEventListener('scroll', progress)

function progress() {
  const winScrollTop = document.documentElement.scrollTop;
  // console.log(winScrollTop);
  const scrollHt = document.documentElement.scrollHeight;
  const clientHt = document.documentElement.clientHeight;
  let height = winScrollTop / (scrollHt - clientHt) * 100;
  // console.log(height);

  progressBar.style.width = height + '%';
}

//문의하기 버튼 클릭시 페이지 이동
const mainBtn = document.querySelector('main > .title_btn');
const articlePart1 = document.querySelector('.part_1');

mainBtn.addEventListener('click', (e) => {
  // e.preventDefault();
  let ht = articlePart1.offsetTop;
  scrollTo({
    top: ht,
    behavior: 'smooth'
  });
});


//다음 버튼 클릭시 페이지 이동
const articlePart2 = document.querySelector('.part_2');
const articlePart3 = document.querySelector('.part_3');
const btntopPart3 = document.querySelector('.btn_top_part_3');
const nextPart1 = document.querySelector('.btn_next_part_1');
const nextPart2 = document.querySelector('.btn_next_part_2');
const nextPart3 = document.querySelector('.btn_next_part_3');
const nextPart4 = document.querySelector('.btn_next_part_4');

//part1 -> part2로 내려가기 (다음 버튼)
opaPlus.addEventListener('click', (e) => {
  
  let parttoTop = articlePart2.offsetTop;
  
  scrollTo({
    top: parttoTop,
    behavior: 'smooth'
  });
});

//의뢰하기 버튼 클릭시
nextPart4.addEventListener('click', (e) => {
  alert('전송되었습니다');
})


btntopPart3.addEventListener('click', (e) => {
  
  let parttoTop = articlePart3.offsetTop;
  
  scrollTo({
    top: parttoTop,
    behavior: 'smooth'
  });
});

//part1 -> 메인으로 올라가기(이전 버튼)
const main = document.querySelector('main');
nextPart1.addEventListener('click', (e) => {
  
  let parttoTop = header.offsetTop;
  
  scrollTo({
    top: parttoTop,
    behavior: 'smooth'
  });
});

//part2 -> part1으로 올라가기 (이전 버튼)
nextPart2.addEventListener('click', (e) => {
  
  let parttoTop = articlePart1.offsetTop;
  
  scrollTo({
    top: parttoTop,
    behavior: 'smooth'
  });
});

//part3 -> part2으로 올라가기 (이전 버튼)
nextPart3.addEventListener('click', (e) => {
  
  let parttoTop = articlePart2.offsetTop;
  
  scrollTo({
    top: parttoTop,
    behavior: 'smooth'
  });
});




//main title 애니메이션 (아래에서 위로)
const btnAni = document.querySelector('.btn_ani');
const mainTxt = document.querySelector('.main_txt');

    // txt box 애니메이션
mainTxt.animate({
  transform: [
    'translateY(80px)',
    'translateY(0)'
  ]
}, {
  duration: 1000,
  easing: 'ease',
  fill: 'forwards'
});



  main.addEventListener('scroll',() => {
    articlePart1.animate({
      transform: [
        'translateY(80px)',
        'translateY(0)'
      ]
    }, {
      duration: 1000,
      easing: 'ease',
      fill: 'forwards'
    });
  });




  // 문의하기 버튼 애니메이션
btnAni.animate({
  transform: [
    'translateY(80px)',
    'translateY(0)'
  ],
  opacity: [
    '0',
    '1'
  ]
}, {
  duration: 800,
  easing: 'ease-in-out',
  fill: 'forwards',
  opacity: 0.5
});




///////////////////////////////오류 메시지//////////////////////////////////////////
const inputError = document.querySelectorAll('.input_txt > input[type="text"]');
const errorMsg = document.querySelectorAll('.error_msg');
const labelError = document.querySelectorAll('.input > label');
const errorWrapper = document.querySelectorAll('.error');
const inputErrorbrtext = document.querySelectorAll('#labelError');

//오류 txt
errorMsg.forEach(errorMsg => {
  articlePart2.addEventListener('wheel', () => {
    errorMsg.style.display = 'block';
  });
});

//보더 컬러
inputError.forEach(inputError => {
  articlePart2.addEventListener('wheel', () => {
    inputError.classList.add('error_input');
  });
});

//오류 label 컬러
labelError.forEach(labelError => {
  articlePart2.addEventListener('wheel', () => {
    labelError.classList.add('error_label');
  });
});

//클릭시 보더 오류 제거
inputError.forEach(inputError => {
  inputError.addEventListener('click', () => {
    inputError.style.border="2px solid #303030";
  });
});

