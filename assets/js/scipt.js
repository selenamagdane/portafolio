document.addEventListener("DOMContentLoaded", function() {

    var btnProyectos = document.getElementById("btnProyectos");
    var btnNosotras = document.getElementById("btnNosotras");
    var btnshinge = document.getElementById("btnshinge");

    
    btnProyectos.addEventListener("click", function() {
       
        window.location.href = "proyectos.html";
    });

 
    btnNosotras.addEventListener("click", function() {
    
        window.location.href = "nosotras.html";
    });

    btnshinge.addEventListener("click", function() {
       
        window.location.href = "shingeki.html";
    });

});
