


$(document).ready(function(){
    $("#loading").fadeOut(1000)
 
})


let menuWidth = $("#menu").outerWidth();
//console.log(menuWidth);
//$("#sideContainer").css("left",`-${menuWidth}`);
$("#sideContainer").animate({left:`-${menuWidth}`}, 700);

$("#openIcon span").click(function(){
    $("#sideContainer").animate({left:"0px"}, 700);
});

$("#close").click(function(){
     $("#sideContainer").animate({left:`-${menuWidth}`}, 700);
})

$(".desc div").css("display","none");

$(".desc h3").click(function(){
    $(this).next().slideToggle(500);
    $(".desc div").not($(this).next()).slideUp(500);
});


/*function countdown(){
    
    let now = new Date();
    let eventDate = new Date(2020,01,25);
    
    let currentTime = new.getTime();
    let eventTime = eventDate.getTime();
    
    let remainingTime = eventTime - currentTime;
    
    let s = Math.floor(remainingTime / 1000 );
    let m = Math.floor( s / 60 );
    let h = Math.floor( m / 60 );
    let d = Math.floor( h / 24 );
    
    s %= 60;
    m %= 60;
    h %= 24;
    
    s = (s < 10) ? "0" + s : s ;
    m = (m < 10) ? "0" + m : m ;
    h = (h < 10) ? "0" + h : h ;
    
    $("#day h3").html(d+`<span>deys </span>`);
    $("#hours h3").html(h+`<span>hrs </span>`);
    $("#min h3").html(m+`<span>min </span>`);
    $("#sec h3").html(s+`<span>sec </span>`);
    
    
};
countdown();*/


 
function countdown(){
				var now = new Date();
				var eventDate = new Date(2020, 01, 25);

				var currentTime = now.getTime();
				var eventTime = eventDate.getTime();

				var remainingTime = eventTime - currentTime;

				var s = Math.floor(remainingTime / 1000);
				var m = Math.floor(s / 60);
				var h = Math.floor(m / 60);
				var d = Math.floor(h / 24);

				s %= 60;
				m %= 60;
				h %= 24;

				s = (s < 10) ? "0" + s : s ;
                m = (m < 10) ? "0" + m : m ;
                h = (h < 10) ? "0" + h : h ;
    
    
    
                $("#day h3").html(d+` <span class=" font-weight-lighter">deys </span>`);
                $("#hours h3").html(h+` <span class=" font-weight-lighter">hrs </span>`);
                $("#min h3").html(m+` <span class=" font-weight-lighter">min </span>`);
                $("#sec h3").html(s+` <span class=" font-weight-lighter">sec </span>`);
    setTimeout(countdown,1000);
};

countdown()

$(".contact-input .num").text(100)

let x = 100;
$(".contact-input textarea").keyup(function(){
    let charNum = $(".contact-input textarea").val().length;
    
    let remChar = x - charNum;
    
    if(remChar < 0){
        $(".contact-input .num").text("your available character finished") 
    }
    else
    {$(".contact-input .num").text(remChar);
    }
})


$("#menu a[href]").click(function(){
    let aHref = $(this).attr("href");
   
    
   let sectionOffset = $(aHref).offset().top;
     
    
   $("body,html").animate({scrollTop:sectionOffset},1000);
})


