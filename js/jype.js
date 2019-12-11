window.addEventListener('load', function(){ // on page load 
    document.body.addEventListener('touchstart', function(e){
        // alert pageX coordinate of touch point
        $('.intro').children('section').animate({'opacity':'0'},function(){
            $('.intro').addClass('on');
            $('.middleBox').addClass('on');
            $('.imgBox').addClass('on');
            $('footer').addClass('on');
        });
        $('.intro').children('p').animate({'opacity':'0'});
    }, false)
}, false)

//intro
$(document).ready(function(){
	
    $('.intro').on('mousewheel',function(event,delta){
        if(delta>0){
            $('.intro').children('section').animate({'opacity':'0'},function(){
                $('.intro').addClass('on');
                $('.middleBox').addClass('on');
                $('.imgBox').addClass('on');
                $('footer').addClass('on');
            });
            $('.intro').children('p').animate({'opacity':'0'});

            
        }else if(delta<0){
            $('.intro').children('section').animate({'opacity':'0'},function(){
                $('.intro').addClass('on');
                $('.middleBox').addClass('on');
                $('.imgBox').addClass('on');
                $('footer').addClass('on');
            });
            $('.intro').children('p').animate({'opacity':'0'});
        }
    });
    
    //nav button
    $('nav button').click(function(){
        $(this).next().stop().fadeToggle();
        $(this).toggleClass('on');
        var thisTxt = $(this).children().eq(2);
        thisTxt.text( thisTxt.text() == 'MENU' ? 'CLOSE' : 'MENU');
    });
    
    //nav hover
    var left= $('.left').children();
    var right = $('.right').children();

    left.on( "focus mouseenter", function(){ right.eq( $(this).index() ).children().stop().animate({'width':'80%'},230);});
    left.on( "blur mouseleave", function(){ right.eq( $(this).index() ).children().stop().animate({'width':'30%'},230);});
    
    //issue button
    
    $('.middleBox button:nth-of-type(2)').click(function(){
        $('.imgBox').removeClass('on').addClass('move');
        $('.slide div').stop().animate({'width':'100%'},function(){
            $('.imgBox > div.up').removeClass('up').next().addClass('up');
            $('.imgBox > div:first').insertAfter('.imgBox > div:last');
            $('.leftBox > div.up').removeClass('up').next().addClass('up');
            $('.leftBox > div:first').insertAfter('.leftBox > div:last');           
            $(this).animate({'left':'100%'},100,function(){
                $(this).css({'width':'0' , 'left':'0'});
            });
        });
    });
    $('.middleBox button:nth-of-type(1)').click(function(){
        $('.imgBox').removeClass('on').addClass('move');
        $('.slide div').css({'width':'100%','left':'100%'});
        $('.slide div').stop().animate({'left':'0%'},function(){
            $('.imgBox > div.up').removeClass('up');
            $('.imgBox > div:last').insertBefore('.imgBox > div:first').addClass('up');
            $('.leftBox > div.up').removeClass('up');
            $('.leftBox > div:last').insertBefore('.leftBox > div:first').addClass('up');
            $(this).animate({'width':'0%'},100);
        });
    });
    
    //issue button scroll
    $('.leftBox, .slide, .middleBox, .imgBox, .rightBox').on('mousewheel',function(event,delta){
        if(delta>0){
            $('.imgBox').removeClass('on').addClass('move');
            $('.slide div').css({'width':'100%','left':'100%'});
            $('.slide div').stop().animate({'left':'0%'},function(){
                $('.imgBox > div.up').removeClass('up');
                $('.imgBox > div:last').insertBefore('.imgBox > div:first').addClass('up');
                $('.leftBox > div.up').removeClass('up');
                $('.leftBox > div:last').insertBefore('.leftBox > div:first').addClass('up');
                $(this).animate({'width':'0%'},100);
            });
        }else if(delta<0){
            $('.imgBox').removeClass('on').addClass('move');
            $('.slide div').stop().animate({'width':'100%'},function(){
                $('.imgBox > div.up').removeClass('up').next().addClass('up');
                $('.imgBox > div:first').insertAfter('.imgBox > div:last');
                $('.leftBox > div.up').removeClass('up').next().addClass('up');
                $('.leftBox > div:first').insertAfter('.leftBox > div:last');
                $(this).animate({'left':'100%'},100,function(){
                    $(this).css({'width':'0' , 'left':'0'});
                });
            });
        }
    });
    
});