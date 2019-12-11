$(document).ready(function(){
    
    $('html').scrollTop(0);
    
    $(window).on('scroll',function(){
       
        var scroll = $(this).scrollTop();
        $('.artBox,.albumBox').stop().animate({'left':-scroll},600);
        if($(this).scrollTop() > 50){
            $('header').addClass('on');
            $('nav').addClass('on');
        }else{
            $('header').removeClass('on');
            $('nav').removeClass('on');
        } 
    });
		$('.artBox > div > a').click(function(){
			event.preventDefault();
		});
    
    //rollover
    $('.roll').each(function(){
        var div = $(this);
        var img = div.find('img');
        var srcOff = img.attr('src');
        var srcOn = srcOff.replace('-off','-on');
        div.on({
            'mouseenter focus':function(){img.attr('src',srcOn);},
            'mouseleave blur':function(){img.attr('src',srcOff);}
        });
    });
    
    //news
    var news = $('.news');
    var title = news.find('section');
    var close = title.next('div').children('.close');
    
    title.click(function(){
        event.preventDefault();
        $(this).parent().siblings().find('div').stop().slideUp();
        $(this).next('div').stop().slideToggle(); 
    });
    
    close.click(function(){
        event.preventDefault();
        $(this).parent().stop().slideUp(); 
    });
    
});