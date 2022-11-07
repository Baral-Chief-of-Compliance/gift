
function msg1(){
  $(".mes1" ).slideUp( 3000 ).fadeIn( 4000 )
  $(".mes1").fadeOut( "slow" )
}

function msg2(){
  $(".mes2" ).slideUp( 3000 ).fadeIn( 4000 )
  $(".mes2").fadeOut( "slow" )
}

function msg3(){
  $("*").animate().css("transition", "3s")

}

function white_bg(){
  $("*").animate().css("background-color", "white")

}

function css_confeti(){
  $(".confeti").css({
    // "position": "fixed",
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "100vh",
    "z-index": "100000",
    "pointer-events": "none"
  })
}

function black_text(){
  $(".popup").animate().css("color", "black")
}

function close_confeti(){
  $(".confeti").hide()
}
//Конфети идут

function ms1(){
  $(".ms1").slideUp( 3000 ).fadeIn( 4000 )
  $(".ms1").fadeOut( "slow" )
}

function ms2(){
  $(".ms2").slideUp( 3000 ).fadeIn( 4000 )
  $(".ms2").fadeOut( "slow" )
}

function ms3(){
  $(".ms3").slideUp( 3000 ).fadeIn( 4000 )
  $(".ms3").fadeOut( "slow" )
}

function ms4(){
  $(".ms4").slideUp( 3000 ).fadeIn( 4000 )
  $(".ms4").fadeOut( "slow" )
}

function ms5(){
  $(".ms5").slideUp( 3000 ).fadeIn( 4000 )
  $(".ms5").fadeOut( "slow" )
}

function heart_show(){
  $(".heart").show()
}

function heart_close(){
  $(".heart").hide()
}

function ms6(){
  $(".ms6").slideUp( 3000 ).fadeIn( 4000 )
  $(".ms6").fadeOut( "slow" )
}

function ms7(){
  $(".ms7").slideUp( 3000 ).fadeIn( 4000 )
  $(".ms7").fadeOut( "slow" )
}

function ms8(){
  $(".ms8").slideUp( 3000 ).fadeIn( 4000 )
  $(".ms8").fadeOut( "slow" )
}

function ms9(){
  $(".ms9").slideUp( 3000 ).fadeIn( 4000 )
  $(".ms9").fadeOut( "slow" )
}

function ms10(){
  $(".ms10").slideUp( 3000 ).fadeIn( 4000 )
  $(".ms10").fadeOut( "slow" )
}

function ms11(){
  $(".ms11").slideUp( 3000 ).fadeIn( 4000 )
  $(".ms11").fadeOut( "slow" )
}

function ms12(){
  $(".ms12").slideUp( 3000 ).fadeIn( 4000 )
  $(".ms12").fadeOut( "slow" )
}

function bg_p(){
  $(".pn").animate().css("background-color", "#ef5083")
}

function we_show(){
  $(".we").show()
}

function we_close(){
  $(".we").hide()
}

function slider_show(){
  $('.slideshow-container').show()
  $(".dot").show()
}

function dot_bg(){
  $(".dot").animate().css("background-color", "#bbb");
  $(".prev").animate().css("background-color", "#bbb");
  $(".next").animate().css("background-color", "#bbb");
}

//начало закгрузки страницы

$(document).ready(function() {

  $(".message-neon").hide();
  $(".popup").hide();
  $(".heart").hide();
  $(".we").hide();
  $(".slideshow-container").hide();
  $(".dot").hide()

  setTimeout(msg1, 1000);

  setTimeout(msg2, 6000);

  setTimeout(msg3, 11000);

  setTimeout(white_bg, 12000);

  setTimeout(css_confeti, 12500);
   
  setTimeout( ()=>{
    var confettiSettings = { target: 'my-canvas'};
    var confetti = new ConfettiGenerator
    (confettiSettings);
    confetti.render();
  },13000)
  //Конфети идут

  setTimeout(ms1, 15000)

  setTimeout(ms2, 20000)

  setTimeout(ms3, 25000)

  setTimeout(ms4, 30000)

  setTimeout(ms5, 35000)

  setTimeout(close_confeti, 40000)

  setTimeout(heart_show, 42000)

  setTimeout(bg_p, 42500)

  setTimeout(ms6, 43000)

  setTimeout(ms7, 48000)

  setTimeout(ms8, 53000)

  setTimeout(ms9, 58000)

  setTimeout(ms10, 63000)

  setTimeout(ms11, 68000)

  setTimeout(ms12, 73000)

  setTimeout(heart_close, 78000)

  setTimeout(we_show, 80000)

  setTimeout(we_close, 90000)

  setTimeout(dot_bg, 91000)

  setTimeout(slider_show, 92000)



});

