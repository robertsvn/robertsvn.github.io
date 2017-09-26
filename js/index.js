/* JQUERY CODES
-------------------------------------------------*/
window.onbeforeunload = function(){ window.scrollTo(0,0); }

$(document).ready(function() {
  

  $("#main-page").css("height", "100%");
  $("#main-page").css("width", "100%");
  $("#main-page").fadeIn(1000);
  $(".maincontent").fadeIn(1000);
  
  $(".reslink").on("click", function() {
   
    $("button").prop("disabled", true); 
     $(".maincontent").fadeOut(800);
    
    
    setTimeout(function() {

      $("#res-page").fadeIn(800);
      $("html").css("overflow", "auto");
      $( "html" ).css( "background-size", "100%" );
      $(".rescontent").fadeIn(800);
      
    }, 800);

    setTimeout(function() {

    
    $("#main-page").css("display", "none");
    $("button").prop("disabled", false); }, 1650);
    
  });

  $(".projlink").on("click", function() {
   
    $("button").prop("disabled", true); 
     $(".maincontent").fadeOut(800);
    
    
    setTimeout(function() {
      $("html").css("overflow", "auto");
      $( "html" ).css( "background-size", "100%" );
      $("#proj-page").fadeIn(1100);  
      $(".projcontent").fadeIn(1100);
      
    }, 800);
    setTimeout(function() {
     
    $("#main-page").css("display", "none"); 
  $("button").prop("disabled", false);}, 1650);
  

  });
    
  $(".homelinkfromres").on("click", function() {
    $("button").prop("disabled", true); 
   $("html").css("overflow", "hidden");
   $( "html" ).css( "background-size", "100%" );
    $(".rescontent").fadeOut(800);

    
    
    setTimeout(function() {

      $("#main-page").fadeIn(800);
      $(".maincontent").fadeIn(800);
      
    }, 800);

setTimeout(function() {
    
    $("#res-page").css("display", "none"); 
    $("button").prop("disabled", false);}, 1650);


  });

  $(".homelinkfromproj").on("click", function() {
    $("button").prop("disabled", true); 
   $("html").css("overflow", "hidden");
   $( "html" ).css( "background-size", "100%" );
    $(".projcontent").fadeOut(800);

    
    
    setTimeout(function() {

      $("#main-page").fadeIn(800);
      $(".maincontent").fadeIn(800);
      
    }, 800);

setTimeout(function() {

    $("#proj-page").css("display", "none");
    $("button").prop("disabled", false);  }, 1600);
    

  });





  $(".projlinkfromproj").on("click", function() {
    $("button").prop("disabled", true); 
    
    var id = $(this).attr('id');
    $("." + id).fadeOut(800);

    $( "html" ).css( "background-size", "100%" );
    
    setTimeout(function() {

      $(".projcontent").fadeIn(800);
      $("#proj-page").fadeIn(800);
      
    }, 800);

setTimeout(function() {

    $("." + id).css("display", "none");
    $("button").prop("disabled", false);
      }, 1600);
    

  });

  $(".homelinkfromproj").on("click", function() {
    $("button").prop("disabled", true); 
    var id = $(this).attr('id');
    $("html").css("overflow", "hidden");
    $( "html" ).css( "background-size", "100%" );
    $("." + id).fadeOut(800);

    
    
    setTimeout(function() {

      $("#main-page").fadeIn(800);
      $(".maincontent").fadeIn(800);
      
    }, 800);

setTimeout(function() {

    $("." + id).css("display", "none");
    $("button").prop("disabled", false);  }, 1600);

    
  });



  $(".aproject").on("click", function() {
    $("button").prop("disabled", true); 
    var id = $(this).attr('id');
    $(".projcontent").css("display", "none");
    $( "html" ).css( "background-size", "100%" );

    setTimeout(function() {
      $("." + id).fadeIn(900);
      
    }, 0);

setTimeout(function() {

    $("#proj-page").css("display", "none");
    $("button").prop("disabled", false);  }, 900);
    

  });

  
});