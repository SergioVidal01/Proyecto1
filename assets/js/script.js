$( "#ingreColor" ).on( "dblclick", function() {
   
   ingreColor.style.color="red"; 
});
$( "#prepColor" ).on( "dblclick", function() {
  prepColor.style.color="red";
 });



  
$("#mostrarCardText").click(function(){
    $("#receta1, card-text").toggle();

 });
 
 $("#mostrarCardText2").click(function(){
  $("#receta2, card-text").toggle();

});

$("#mostrarCardText3").click(function(){
  $("#receta3, card-text").toggle();

});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  
$("#buttonTooltip").click(function(){
  alert("El correo fue enviado correctamente");

});
  
 
 





  
