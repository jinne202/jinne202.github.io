/*로딩 모션 
$.ajax({
     type:"POST"
    ,url: "index.html"
    ,data:""
    ,success:function(res){
        $("#loading").animate({width:'100%'},3000);
        
    }
    ,beforeSend:function(){
        $("#loading").animate({width:'100%'},3000);
    }
    ,complete:function(){
        $("#loading").animate({opacity:0},800);
        //$("#loading").addClass('load_none');
 
    }
    ,error:function(e){
        alert("죄송합니다 페이지를 로드할 수 없습니다");
    }
    ,timeout:100000
});*/

$(document).ready(function(){
    $(".menu_bar").click(function(){
        $("#menulist").fadeToggle("slow");
        $(this).toggleClass("clarrow");
    });
    
    //mouseleave시 hover클래스를 remove시킨다 
    $(".tile").mouseleave(
    function() {
      $(this).removeClass("hover");
    });
    
    //특정 클래스를 클릭했을때 해당 클래스에 대한 active가 모두 사라지고 this에 대한 active만 보인다 
    $('.date').click(function(){
    $('.date').removeClass('active');
    $(this).addClass('active');
    });
    
    $('.time').click(function(){
    $('.time').removeClass('active');
    $(this).addClass('active');
    });
    
    //map 썸네일을 클릭하면 mapping 클래스에 먹여진 map active는 제거되고 특정 클래스에만 mapactive가 추가됨 
    $('.map_thum1').click(function(){
    $('.mapping').removeClass('mapactive');
    $('.map_icon1').addClass('mapactive');
    });
    $('.map_thum2').click(function(){
    $('.mapping').removeClass('mapactive');
    $('.map_icon2').addClass('mapactive');
    });
    $('.map_thum3').click(function(){
    $('.mapping').removeClass('mapactive');
    $('.map_icon3').addClass('mapactive');
    });
});

//현재페이지 인덱스
var pageIndex = 0; 

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
                $(".page").each(function(index){ 
                    $(".page").eq(index).animate({"top":100*(pageIndex+index)+"%"},800);
                });
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
                $(".page").each(function(index){
                    $(".page").eq(index).animate({"top":100*(pageIndex+index)+"%"},800);
                });
            }

        }
    }
    else if (e.detail) {  //Firefox
        if (e.detail< 0) {
            
            if(!$(".page").is(":animated") && pageIndex < 0)
            {
                pageIndex++; 
                $(".page").each(function(index){ 
                    $(".page").eq(index).animate({"top":100*(pageIndex+index)+"%"},800);
                });
            }

        }
        if (e.detail> 0) {
            
            if(!$(".page").is(":animated") && pageIndex > -($(".page").length-1)) 
            {
                pageIndex--; 
                $(".page").each(function(index){ 
                    $(".page").eq(index).animate({"top":100*(pageIndex+index)+"%"},800);
                });
            }

        }
    }
    //pageIndex가 -0일때 
    if (pageIndex === -0) {
        
            $('.boxleft').animate( {'opacity': 1,'left': 0},1000);
            $('.boxright').animate( {'opacity': 1,'left': 0},1000);
            setTimeout(function(){
            $('.show_box2').animate( {'opacity': 1,'top': 0},1000);
            },1000);
			
            replaceWithPaths($('svg'));
            startSVGAnimation($('svg'));
        
        //reset 
            $('.drawing_1').animate( {width:'0%'});
            $('.drawing_2').animate( {width:'0%'});
            resetpage2();
            resetpage3();
            resetpage4();
		}
    
    //pageIndex가 -1일때 
    if (pageIndex === -1) {
        setTimeout(function(){
			$('.drawing_1').animate( {width:'100%'},1000);
            },1000);
        
        setTimeout(function(){
			$('#p_wrap').animate({'opacity':1,'bottom':0},500);
            },1300);
        
        setTimeout(function(){
			$('.date1').animate({'opacity':1,'bottom':0},1000);
            },1700);
        
        setTimeout(function(){
			$('.date2').animate({'opacity':1,'bottom':0},1000);
            },1800);
        
        setTimeout(function(){
			$('.date3').animate({'opacity':1,'bottom':0},1000);
            },1900);
        
        //reset
            $('.drawing_2').animate( {width:'0%'});
            $('.drawing_3').animate( {width:'0%'});
            $('.drawing_4').animate( {width:'0%'});
            resetpage1();
            resetpage3();
            resetpage4();
		}
    
    //pageIndex가 -2일때 
    if (pageIndex === -2) {
			setTimeout(function(){
			$('.drawing_2').animate( {width:'100%'},1000);
            },1000);
        
            setTimeout(function(){
			$('#p_wrap_time').animate({'opacity':1,'bottom':0},500);
            },1300);
        
            setTimeout(function(){
			$('#time_up ul li').animate({'height':'100%'},500);
            },1700);
        
            setTimeout(function(){
			$('.time1').animate({'opacity':1},500);
            },1900);
            setTimeout(function(){
			$('.time2').animate({'opacity':1},500);
            },2000);
            setTimeout(function(){
			$('.time3').animate({'opacity':1},500);
            },2100);
        
            
        
        //reset
            $('.drawing_1').animate( {width:'0%'});
            $('.drawing_3').animate( {width:'0%'});
            $('.drawing_4').animate( {width:'0%'});
            resetpage1();
            resetpage2();
            resetpage4();
		}
    
    //pageIndex가 -3일때 
    if (pageIndex === -3) {
            setTimeout(function(){
			$('.drawing_3').animate( {width:'100%'},1000);
            },1000);
        
            setTimeout(function(){
            replaceWithPaths($('svg'));
            startSVGAnimation($('svg'));
            },1200);
        
            setTimeout(function(){
			$('.tic_circle').animate( {'opacity':1},10);
            },1200);
        
            setTimeout(function(){
			$('.countdown').animate( {'opacity':1,'left':0},700);
            },1600);
            
            setTimeout(function(){
            //순차적으로 실행되는 펑션 
            //실행 시간을 변수 t에 담아둔다 
            var t = 500;
            //div.ticket ul li 각자에 
            $('div.ticket ul li').each(function(i){
                //실행되는 것에 delay를 걸어준다 i * delay 시간 animate height를 300만큼 늘려준다 
                $(this).delay(i*t).animate({'height':"+300"});
            });
            },1800);
            

        //reset
            $('.drawing_1').animate( {width:'0%'});
            $('.drawing_2').animate( {width:'0%'});
            $('.drawing_4').animate( {width:'0%'});
            resetpage1();
            resetpage2();
            resetpage3();
		}
    
    //pageIndex가 -4일때 
    if (pageIndex === -4) {
			setTimeout(function(){
			$('.drawing_4').animate( {width:'100%'},1000);
            },1000);
        //reset
            $('.drawing_1').animate( {width:'0%'});
            $('.drawing_2').animate( {width:'0%'});
            $('.drawing_3').animate( {width:'0%'});
            resetpage1();
            resetpage2();
            resetpage3();
            resetpage4();
		}
    
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

function resetpage1() {
//            $('.boxleft').css( {'opacity': 0,'left': '-30%'});
//            $('.boxright').css( {'opacity': 0,'left': '30%'});
//            $('.show_box2').css( {'opacity': 0,'top': '100px'});
    for (var item in scene1) {
        reset(item, scene1[item]);
    }
}
// index -1 의 모션을 초기화시키는 function 
function resetpage2() {
            $('#p_wrap').animate({'opacity':0,'bottom':'30px'});
            $('.date1').animate({'opacity':0,'bottom':'20px'});
            $('.date2').animate({'opacity':0,'bottom':'30px'});
            $('.date3').animate({'opacity':0,'bottom':'25px'});
}
// index -2 의 모션을 초기화시키는 function 
function resetpage3() {
            $('#p_wrap_time').animate({'opacity':0,'bottom':'30px'});
            $('#time_up ul li').animate({'height':0});
            $('.time1').animate({'opacity':0});
            $('.time2').animate({'opacity':0});
            $('.time3').animate({'opacity':0});
}
// index -3 의 모션을 초기화시키는 function 
function resetpage4() {
            $('.tic_circle').animate( {'opacity':0});
            $('div.ticket ul li').animate({'height':0},'slow');
            $('.countdown').animate( {'opacity':0,'left':'-100px'},700);
            
}
// index -4의 모션을 초기화시키는 function 
function resetpage5() {
            
}
/*
function reset(selector, prop) {
    $(selecotr).css(prop);
}*/
    
    
    

/************** svg *****************/
    jQuery.extend( jQuery.easing,
{
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
  }
});

function SVG(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag);
}



function replaceRectsWithPaths(parentElement) {


    var rects = $(parentElement).find('rect');

    $.each(rects, function() {

        var rectX = $(this).attr('x');
        var rectY = $(this).attr('y');

        var rectX2 = parseFloat(rectX) + parseFloat($(this).attr('width'));
        var rectY2 = parseFloat(rectY) + parseFloat($(this).attr('height'));

        var convertedPath = 'M' + rectX + ',' + rectY + ' ' + rectX2 + ',' + rectY + ' ' + rectX2 + ',' + rectY2 + ' ' + rectX + ',' + rectY2 + ' ' + rectX + ',' + rectY;


        $(SVG('path'))
        .attr('d', convertedPath)
        .attr('fill', $(this).attr('fill'))
        .attr('stroke', $(this).attr('stroke'))
        .attr('stroke-width', $(this).attr('stroke-width'))
        .insertAfter(this);

    });

    $(rects).remove();
}



function replaceLinesWithPaths(parentElement) {


    var lines = $(parentElement).find('line');

    $.each(lines, function() {

        var lineX1 = $(this).attr('x1');
        var lineY1 = $(this).attr('y1');

        var lineX2 = $(this).attr('x2');
        var lineY2 = $(this).attr('y2');

        var convertedPath = 'M' + lineX1 + ',' + lineY1 + ' ' + lineX2 + ',' + lineY2;


        $(SVG('path'))
        .attr('d', convertedPath)
        .attr('fill', $(this).attr('fill'))
        .attr('stroke', $(this).attr('stroke'))
        .attr('stroke-width', $(this).attr('stroke-width'))
        .insertAfter(this);

    });

    $(lines).remove();
}



function replaceCirclesWithPaths(parentElement) {

    var circles = $(parentElement).find('circle');

    $.each(circles, function() {

        var cX = $(this).attr('cx');
        var cY = $(this).attr('cy');
        var r = $(this).attr('r');
        var r2 = parseFloat(r * 2);

        var convertedPath = 'M' + cX + ', ' + cY + ' m' + (-r) + ', 0 ' + 'a ' + r + ', ' + r + ' 0 1,0 ' + r2 + ',0 ' + 'a ' + r + ', ' + r + ' 0 1,0 ' + (-r2) + ',0 ';

        $(SVG('path'))
        .attr('d', convertedPath)
        .attr('fill', $(this).attr('fill'))
        .attr('stroke', $(this).attr('stroke'))
        .attr('stroke-width', $(this).attr('stroke-width'))
        .insertAfter(this);

    });

    $(circles).remove();
}



function replaceEllipsesWithPaths(parentElement) {


    var ellipses = $(parentElement).find('ellipse');

    $.each(ellipses, function() {

        var cX = $(this).attr('cx');
        var cY = $(this).attr('cy');
        var rX = $(this).attr('rx');
        var rY = $(this).attr('ry');

        var convertedPath = 'M' + cX + ', ' + cY + ' m' + (-rX) + ', 0 ' + 'a ' + rX + ', ' + rY + ' 0 1,0 ' + rX*2 + ',0 ' + 'a ' + rX + ', ' + rY + ' 0 1,0 ' + (-rX*2) + ',0 ';

        $(SVG('path'))
        .attr('d', convertedPath)
        .attr('fill', $(this).attr('fill'))
        .attr('stroke', $(this).attr('stroke'))
        .attr('stroke-width', $(this).attr('stroke-width'))
        .insertAfter(this);

    });

    $(ellipses).remove();
}




function replacePolygonsWithPaths(parentElement) {


    var polygons = $(parentElement).find('polygon');

    $.each(polygons, function() {

        var points = $(this).attr('points');
        var polyPoints = points.split(/[ ,]+/);
        var endPoint = polyPoints[0] + ', ' + polyPoints[1];

        $(SVG('path'))
        .attr('d', 'M' + points + ' ' + endPoint)
        .attr('fill', $(this).attr('fill'))
        .attr('stroke', $(this).attr('stroke'))
        .attr('stroke-width', $(this).attr('stroke-width'))
        .insertAfter(this);

    });

    $(polygons).remove();
}




function replacePolylinesWithPaths(parentElement) {


    var polylines = $(parentElement).find('polyline');

    $.each(polylines, function() {

        var points = $(this).attr('points');

        $(SVG('path'))
        .attr('d', 'M' + points)
        .attr('fill', $(this).attr('fill'))
        .attr('stroke', $(this).attr('stroke'))
        .attr('stroke-width', $(this).attr('stroke-width'))
        .insertAfter(this);

    });

    $(polylines).remove();
}

function hideSVGPaths(parentElement) {

    var paths = $(parentElement).find('path');

    //for each PATH..
    $.each( paths, function() {

        //get the total length
        var totalLength = this.getTotalLength();

        //set PATHs to invisible
        $(this).css({
            'stroke-dashoffset': totalLength,
            'stroke-dasharray': totalLength + ' ' + totalLength
        });
    });
}

function drawSVGPaths(_parentElement, _timeMin, _timeMax, _timeDelay) {


    var paths = $(_parentElement).find('path');

    //for each PATH..
    $.each( paths, function(i) {

        //get the total length
        var totalLength = this.getTotalLength();


        //set PATHs to invisible
        $(this).css({
            'stroke-dashoffset': totalLength,
            'stroke-dasharray': totalLength + ' ' + totalLength
        });

        //animate
        $(this).delay(_timeDelay*i).animate({
            'stroke-dashoffset': 0
        }, {
            duration: Math.floor(Math.random() * _timeMax) + _timeMin
            ,easing: 'easeInOutQuad'
        });
    });
}

function replaceWithPaths(parentElement) {

    replaceRectsWithPaths(parentElement);
    replaceLinesWithPaths(parentElement);
    replaceEllipsesWithPaths(parentElement);
    replaceCirclesWithPaths(parentElement);
    replacePolygonsWithPaths(parentElement);
    replacePolylinesWithPaths(parentElement);    
}

function startSVGAnimation(parentElement) {
    drawSVGPaths(parentElement, 1000, 1000, 50);
}
    
    
    replaceWithPaths($('svg'));
    startSVGAnimation($('svg'));
    
/************** svg *****************/

/************** select 기능  *****************/

$(function() {
        //선택된 클래스를 변수로 설정 
		var selectedClass = "";
        //특정 클래스를 클릭하면 
		$("p.date").click(function(){
        //그 클래스의 attribute data-rel을 selectedClass 안에 넣는다
		selectedClass = $(this).attr("data-rel");
      //line_up이 전부 fadeTo를 설정 
      $("#line_up").fadeTo(500, 0);
        //line_up div에 selectedClass가 아닌 것은 fadeOut 시킨다 
		$("#line_up div").not("."+selectedClass).fadeOut();
        //setTimeout
        setTimeout(function() {
      //선택된 클래스는 fadeIn시킨다 
      $("."+selectedClass).fadeIn();
      $("#line_up").fadeTo(500, 1);
    }, 500);
		
	});
});

$(function() {
		var selectedClass2 = "";
		$("p.time").click(function(){
		selectedClass2 = $(this).attr("data-rel");
    $("#time_up div").fadeTo(500, 0);
		$("#time_up div").not("."+selectedClass2).fadeOut();
    setTimeout(function() {
      $("."+selectedClass2).fadeIn();
      $("#time_up div").fadeTo(500, 1);
    }, 500);
		
	});
});
    
//trigger시 생성
$(function () {
    
    var scrolls = 0,        // 현재 스크롤 위치값
        $boxesleft = $('.boxleft'),
        $boxesright = $('.boxright'), // 박스들
        $showboxes = $('.show_box'),
        $showboxes2 = $('.show_box2');
    
    $(window).on('scroll', function () {
        
        // 현재 스크롤 위치값
        scrolls = $(window).scrollTop();
        
        // 박스들의 현재 위치를 체크합니다.
        // 왼쪽 박스 
        $boxesleft.each(function () {
            if ( $(this).hasClass('on') ) {
                return;
            }
            
            if ( $(this).offset().top < $(window).height() - 100 + scrolls ) {
                $(this).addClass('on').animate({
                    'opacity': 1,
                    'left': 0
                }, 800);
            }
        });
        //오른쪽 박스
        $boxesright.each(function () {
            if ( $(this).hasClass('on') ) {
                return;
            }
            
            if ( $(this).offset().top < $(window).height() - 100 + scrolls ) {
                $(this).addClass('on').animate({
                    'opacity': 1,
                    'left': 0
                }, 800);
            }
            
        });
        //opacity
        setTimeout(function(){
        $showboxes.each(function () {
            if ( $(this).hasClass('on') ) {
                return;
            }
            
            if ( $(this).offset().top < $(window).height() - 100 + scrolls ) {
                $(this).addClass('on').animate({
                    'opacity': 1
                }, 700);
            }
            
        });
        },700);
        setTimeout(function(){
        $showboxes2.each(function () {
            if ( $(this).hasClass('on') ) {
                return;
            }
            
            if ( $(this).offset().top < $(window).height() - 100 + scrolls ) {
                $(this).addClass('on').animate({
                    'opacity': 1,
                    'top' : 0
                }, 700);
            }
            
        });
        },1500);
        
    });
    $(window).trigger('scroll');
});
    
/************** timer *****************/
    
var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 3); //just for this demo today + 7 days

timer = setInterval(function() {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  var difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {

    // Timer done
    clearInterval(timer);
  
  } else {
    
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}
/************** timer *****************/
