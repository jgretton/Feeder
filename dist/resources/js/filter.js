$(function(){var t="";$(".content__nav-item").click(function(){t=$(this).attr("data-rel"),$(".portfolio__content").fadeTo(100,.1),$(".portfolio__content .portfolio__tile").not("."+t).fadeOut().removeClass("scale-anm"),setTimeout(function(){$("."+t).fadeIn().addClass("scale-anm"),$(".portfolio__content").fadeTo(300,1)},300)})});