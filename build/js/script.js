$(document).ready(function () {
  //slider
  $('.slider .owl-carousel').owlCarousel({
    autoplay : false,
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    autoplayTimeout : 7000,
    navText: [],
    responsive:{
      0:{
        items:1,
        dots: true,
        nav: false
      },
      650:{
        items:1
      }
    }
  });

//show photogallery
 $(function(){
  $('.webdesing__foto--img').slice(0,8).show();
  $('.webdesing__loadmore').on('click',function(e){
    e.preventDefault();
    $('.webdesing__foto--img:hidden').slice(0,8).slideDown();
  });

   $('.photography__foto--img').slice(0,8).show();
   $('.photography__loadmore').on('click',function(e){
     e.preventDefault();
     $('.photography__foto--img:hidden').slice(0,8).slideDown();
   });
 });


//select block
 $(function(){
  $(".portfolio__btn").click( function (e) {
    e.preventDefault();
    $(".portfolio__btn").removeClass('active');    
    var typbtn=($(this).attr("id"));
    $("#"+typbtn).addClass('active');

    $('.webdesing__foto').css('display','none');
    $('.photography__foto').css('display','none');
    $('.webdesing__loadmore').css('display','none');
    $('.photography__loadmore').css('display','none');
    $('.'+typbtn+'__foto').css('display','flex');
    $('.'+typbtn+'__loadmore').css('display','block');

  });
}); 
            
});