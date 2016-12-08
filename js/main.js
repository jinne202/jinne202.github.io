
//현재페이지 인덱스
var pageIndex = 0; 

 $(".menulist ul li").on('click',function() {
        console.log($(this).index());
  });
  $(".menulist ul li").on('click',function() {
        var menuIndex = $(this).index();
		pageIndex = -menuIndex;
        goToPage(); 
      
        allAni();
  });

function goToPage(){
    $(".page").each(function(index){ 
            $(".page").eq(index).animate({"top":100*(pageIndex+index)+"%"},800);
    });
}

/************** 스크롤방향 판단 *****************/
var scrollFunc = function (e) {
    //window event 
    e = e || window.event;
    //익스, 크롬  
    if (e.wheelDelta) { 
        // wheelDelta가 0보다 크면 (120)
        if (e.wheelDelta > 0) { 
            // animate가 진행안할때 및 첫페이지가 아닐때 
            if(!$(".page").is(":animated") && pageIndex < 0) 
            {
                //현재페이지 인덱스 변동 + 로 
                pageIndex++; 
                //page박스의 top비율을 100%의 배수로 설정
                goToPage();
            }

        }
        //wheelDelta가 0보다 작으면 (-120)
        if (e.wheelDelta < 0) { 
            // animate가 진행안할때 및 마지막페이지가 아닐때
            if(!$(".page").is(":animated") && pageIndex > -($(".page").length-1)) 
            {
                //현재페이지 인덱스 변동 - 로 
                pageIndex--; 
                //page박스의 top비율을 100%의 배수로 설정
                goToPage();
            }

        }
    }
    else if (e.detail) {  //Firefox
        if (e.detail< 0) {
            
            if(!$(".page").is(":animated") && pageIndex < 0)
            {
                pageIndex++; 
                goToPage();
            }

        }
        if (e.detail> 0) {
            
            if(!$(".page").is(":animated") && pageIndex > -($(".page").length-1)) 
            {
                pageIndex--; 
                goToPage();
            }

        }
    }
    
    allAni();

}

//페이지에 스크롤이벤트 bind
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//스크롤시 scrollFunc함수 진행
window.onmousewheel = document.onmousewheel = scrollFunc;
/************** 스크롤방향 판단 *****************/

// index 0 의 모션을 초기화시키는 function animate 말고 css로만 초기화 시켜도 됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 그러함!!!!!!!!!!!!!!! remove class add class같은걸로 응용해도 할 수 있음
// 1번이 있고 2번이 있다 하면 하위 클래스들을 셀렉팅해서 초기화 animate가 과부화가 많이 걸림 css로만 해도 되고 class를 더하고 빼는걸로만도 제어할 수 있음 애니메이션 실행 시키고 하던가 올리기 전에 reset class를 추가하고 뺴고
// 화면 전환이 되는 타이밍이 같으므로 뒤에 애들 다 멈추고 스크룰이 움직이는 애니메이션이 끝났을때 애니메이션이 끝나고 reset class를 붙이는 것 

/*var resetData = [
    //page1
    {
        '.boxleft': {'opacity': 0, 'left': '-30%'}
    }
]*/

/*function resetPage(page) {
    for (var item in resetData[page]) {
        reset(item, scene1[item]);
    }
}
resetPage(0);*/


function allAni(){

    
    //pageIndex가 -0일때 
    if (pageIndex === 0 ) {
            $('.menu1 > span').animate( {'width' : '100%'},100);
            setTimeout(function(){
			     $('.line1').animate( {'height' : '230px'},1000);
                 $('.line2').animate( {'height' : '230px'},1000);
            },800);
        
            resetpage1();
            resetpage2();
            resetpage3();
        
            console.log(pageIndex);
		}
    
    //pageIndex가 -1일때 
    if (pageIndex === -1) {
            $('.menu2 > span').animate( {'width' : '100%'},100);
            setTimeout(function(){
			     $('.line3').animate( {'height' : '40%'},1000);
                 $('.line4').animate( {'height' : '40%'},1000);
            },800);
            resetpage0();
            resetpage2();
            resetpage3();
        
            console.log(pageIndex);
		}
    
    //pageIndex가 -2일때 
    if (pageIndex === -2) {
            $('.menu3 > span').animate( {'width' : '100%'},100);
            setTimeout(function(){
			     $('.line5').animate( {'height' : '80%'},1000);
            },800);
            resetpage0();
            resetpage1();
            resetpage3();
        
            console.log(pageIndex);
        
		}
    
    //pageIndex가 -3일때 
    if (pageIndex === -3) {
            $('.menu4 > span').animate( {'width' : '100%'},100);
            $('div.page4_back').animate( {'opacity' : '1'},4000);
            setTimeout(function(){
                $('.line6').animate( {'height' : '80%'},1000);
            },800);
            resetpage0();
            resetpage1();
            resetpage2();
        
            console.log(pageIndex);
		}
}
    


function resetpage0() {
    $('.menu2 > span').css({'width':0},100);
    $('.menu3 > span').css({'width':0},100);
    $('.menu4 > span').css({'width':0},100);
    $('.line5').css({'height':0},1000);
    $('.line6').css({'height':0},1000);
    $('.line3').css({'height':0});
    $('.line4').css({'height':0});
    $('div.page4_back').css( {'opacity' : '0'},4000);
}
// index -1 의 모션을 초기화시키는 function 
function resetpage1() {
    $('.menu1 > span').css({'width':'0'},100);
    $('.menu3 > span').css({'width':'0'},100);
    $('.menu4 > span').css({'width':'0'},100);
    $('.line5').css({'height':0});
    $('.line6').css({'height':0});
    $('.line2').css({'height':0});
    $('.line1').css({'height':0});
    $('div.page4_back').css( {'opacity' : '0'},4000);
}
// index -2 의 모션을 초기화시키는 function 
function resetpage2() {
    $('.menu1 > span').css({'width':'0'},100);
    $('.menu2 > span').css({'width':'0'},100);
    $('.menu4 > span').css({'width':'0'},100);
    $('.line6').css({'height':0});
    $('.line3').css({'height':0});
    $('.line4').css({'height':0});
    $('.line2').css({'height':0});
    $('.line1').css({'height':0});
    $('div.page4_back').css( {'opacity' : '0'},4000);
}
// index -3 의 모션을 초기화시키는 function 
function resetpage3() {
    $('.menu1 > span').css({'width':'0'},100);
    $('.menu2 > span').css({'width':'0'},100);
    $('.menu3 > span').css({'width':'0'},100);
    $('.line5').css({'height':0});
    $('.line3').css({'height':0});
    $('.line4').css({'height':0});
    $('.line2').css({'height':0});
    $('.line1').css({'height':0});
}
/*
function reset(selector, prop) {
    $(selecotr).css(prop);
}*/

$(function () {
    $('.menu1 > span').animate( {'width' : '100%'},100);
    $('.line1').animate( {'height' : '230px'},1000);
    $('.line2').animate( {'height' : '230px'},1000);
});



$(function(){
	var sliderLenght= $('.slider ul li').length;	
    var sliderWidth = $('.slider ul li').width();
    var sliderHeight = $('.slider ul li').height();
    var sliderULWidth = sliderLenght * sliderWidth;

    $('.slider').css({width: sliderWidth, height: sliderHeight });
    $('.slider ul').css({width: sliderULWidth});

    
	$('.slider ul li').each(function(index){
		var index = index+1;
        var sliderWidth = $('.slider ul li').width(); // 이미지 넓이
		$(this).attr('data-index',index);
		$('.paging').append("<a href='javascript:;' data-index='"+index+"'>"+index+"</a>");
		if(index == 1){
			$(this).addClass('on');
			$(this).css('margin-left','0').css('z-index','3');
			$(".paging a[data-index='1']").addClass("paging_on");
		}
		
	});
	
     $('a.btn_prev').click(function () {
            moveRight();
        });

        $('a.btn_next').click(function () {
            moveLeft();
        });
    
    $('.paging a').css('display','block').css('font-size','0');

	
	$('.paging a').click(function(){
		var i = $(this).attr('data-index');
		var k = $('.on').attr('data-index');
		//alert(i+" : "+k);
		$(this).addClass('paging_on');
		$(this).siblings('a').removeClass('paging_on');
		if(i>k){
		$('.on').css('z-index','2').removeClass('on').siblings("li[data-index='"+i+"']").css('margin-left',sliderWidth).addClass('on');
		$('.slider ul').animate({'margin-left' : -sliderWidth},500,function(){
			$('.slider ul').css('margin-left','0');
			$('.slider ul li').css('margin-left','0');
			$('.on').css('z-index','3');
			$('.slider ul li').not('.on').css('z-index','1');
		});
		}else{
		$('.on').css('z-index','2').removeClass('on').siblings("li[data-index='"+i+"']").css('margin-left',-sliderWidth).addClass('on');
		$('.slider ul').animate({'margin-left' : +sliderWidth},500,function(){
			$('.slider ul').css('margin-left','0');
			$('.slider ul li').css('margin-left','0');
			$('.on').css('z-index','3');
			$('.slider ul li').not('.on').css('z-index','1');
			});	
		}
	});
    
	function moveLeft(){
		if(!$('.slider ul').is(':animated')){
		if($('.on').attr("data-index") == sliderLenght){
		var nextindex = 1;	
		}else{
		var nextindex = parseInt($('.on').attr("data-index"))+1;
		}
		//alert(nextindex)
		$('.on').css('z-index','2').removeClass('on').siblings("li[data-index='"+nextindex+"']").css('margin-left',sliderWidth).addClass('on');
		$('.paging a').removeClass('paging_on');
		$(".paging a[data-index='"+nextindex+"']").addClass('paging_on');
		$('.slider ul').animate({'margin-left' : -sliderWidth},500,function(){
			$('.slider ul').css('margin-left','0');
			$('.slider ul li').css('margin-left','0');
			$('.on').css('z-index','3');
			$('.slider ul li').not('.on').css('z-index','1');
		});
		}
	}
	function moveRight(){
		if(!$('.slider ul').is(':animated')){
		if($('.on').attr("data-index") == 1){
		var previndex = sliderLenght;	
		}else{
		var previndex = parseInt($('.on').attr("data-index"))-1;
		}
		$('.on').css('z-index','2').removeClass('on').siblings("li[data-index='"+previndex+"']").css('margin-left',-sliderWidth).addClass('on');
		$('.paging a').removeClass('paging_on');
		$(".paging a[data-index='"+previndex+"']").addClass('paging_on');
		$('.slider ul').animate({'margin-left' : +sliderWidth},500,function(){
			$('.slider ul').css('margin-left','0');
			$('.slider ul li').css('margin-left','0');
			$('.on').css('z-index','3');
			$('.slider ul li').not('.on').css('z-index','1');
		});
		}
	}
});



function number() {
        var number = $('.buy_btn1');
        number.each(function(){
            //maxNumber을 data-max-number attribute로 지정해준 값으로 지정
            var maxNumber = ($(this).attr('data-max-number'));
            var input = $(this).find('input');
            var plus = $(this).find('.plus');
            var minus = $(this).find('.minus');
            //plus 버튼을 클릭했을때
            plus.on("click", function(){
                //val의 값은 input.val의 값이다 
                var val = +(input.val());
                //val 값이 maxNumber과 같거나 크면
                if (val >= maxNumber) {
                    //return false
                    return false
                }
                //그렇지 않으면
                else {
                    //val을 1씩 증가시킨다 
                    val += 1;
                    input.val(val);
                }
            });
            //minus를 클릭했을때
            minus.on('click', function(){
                var val = +(input.val());
                if (val > 1) {
                    val -= 1;
                    input.val(val);
                }
                return false;
            });
            input.on('change', function(){
                var val = +$(this).val();
                if (val > maxNumber) {
                    val = maxNumber;
                    $(this).val(val);
                }
                if (val == '') {
                    val = 1;
                    $(this).val(val);
                }
            });
        });
    }
    number();  
