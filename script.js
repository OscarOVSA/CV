// Tema oscuro
$("#temaBtn").click(function(){
$("body").toggleClass("dark");
});

// Cambio de color
$("#colorBtn").click(function(){
$("header").css("background","linear-gradient(135deg,#198754,#20c997)");
});

// Animación scroll
$(window).scroll(function(){
$("section").each(function(){
var top = $(this).offset().top - 200;
if($(window).scrollTop() > top){
$(this).addClass("animate");
}
});
});

// Validación formulario
$("#formulario").submit(function(e){
e.preventDefault();

let nombre=$("#nombre").val();
let email=$("#email").val();

if(nombre=="" || email==""){
alert("Completa los campos");
}else{
alert("Mensaje enviado");
}
});