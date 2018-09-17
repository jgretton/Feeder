$(function() {
    var selectedClass = "";
    $(".content__nav-item").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
 $(".portfolio__content").fadeTo(100, 0.1);
    $(".portfolio__content .portfolio__tile").not("."+selectedClass).fadeOut().removeClass('scale-anm');
setTimeout(function() {
  $("."+selectedClass).fadeIn().addClass('scale-anm');
  $(".portfolio__content").fadeTo(300, 1);
}, 300); 
    
});
});

/*
  Grid wont work//
  flexbox grid might. positions are perm set with grid. needs to flow when the scale is reduced to 0;
  
*/