function alternarTexto(id) {
    var elemento = document.getElementById(id);
    if (elemento.style.display === "block" || elemento.style.display === "") {
      elemento.style.display = "none"; 
     } else {
      elemento.style.display = "block";}
  }
  
  