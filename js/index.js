$("#ice-cream-recipe").hide();
$("#cupcake-recipe").hide();
$("#cake-recipe").hide();

$("#ice-cream").on("click", function(){
$("#ice-cream-recipe").show();
$("#cupcake-recipe").hide();
$("cake-recipe").hide();
});

$("#cupcake").on("click", function(){
$("#cupcake-recipe").show();
$("cake-recipe").hide(); $("#ice-cream-recipe").hide();
});

$("#cake").on("click", function(){
$("#cake-recipe").show(); 
 $("#cupcake-recipe").hide();
 $("#ice-cream-recipe").hide();
});


$(".close").on("click", function(){
  $(this).parent().parent().hide();
});