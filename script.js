
$(document).ready(function(){
    

 $("#menuitem1").click(function(){
       $("#container1").html("<p>Hello!</p>");
   })

 $("#menuitem2").click(function(){
     $("#container1").text("O w O");
 })

 $("#menuitem3").click(function(){
   $("#container1").text("OWO!!!");
 })

   $(".menu2").children().click(function(){
     console.log("click")
     $(this).toggleClass("menuitems")
     $(this).toggleClass("menuitems2")
     console.log("click")
     
    
     $("#container2").animate({
       opacity: '1',
       
     });
     })

   $("#menuitem5").click(function(){
       scrollTo(0,5500)
})

$( ".menu3" ).children().draggable();

    
});


//  $("#container2").fadeToggle();