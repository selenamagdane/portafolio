document.addEventListener("DOMContentLoaded", function() {

    var btnProyectos = document.getElementById("btnProyectos");
    var btnNosotras = document.getElementById("btnNosotras");

    
    btnProyectos.addEventListener("click", function() {
       
        window.location.href = "proyectos.html";
    });

 
    btnNosotras.addEventListener("click", function() {
    
        window.location.href = "nosotras.html";
    });
});
