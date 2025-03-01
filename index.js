function toggleMenu(){

  /* toogle menu */
  var menu_vertical = document.getElementById("id-show-menu");
  menu_vertical.classList.toggle("toggle-menu");
    
  /* Oculta solamente la visibilidad del boton menu */
  var menu_boton = document.getElementById("id-boton-menu");
  menu_boton.classList.toggle("ocultar-boton");

  }


function ocultarMenu(){

  const menu_oculto = document.querySelector(".show-menu");
  const carac = window.getComputedStyle(menu_oculto);
  let display = carac.getPropertyValue("display");
        
  if (display!="none"){
    toggleMenu();
  }
}
