

document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});

// Se ajusta el scroll por el navbar con clase fixed-top
// Se crea una clase para poder seleccionar todos los elementos que hacen scroll. Utilizamos el metodo forEach para escuchar el evento 'click'.
document.querySelectorAll('.scroll-ajustado').forEach(sect => {
    sect.addEventListener('click', function(event) {
      //prevenimos la funcion por defecto del href
      event.preventDefault();
      
      // Obtenemos el atributo href y le sacamos el #, para poder obtener el id de la seccion que queremos
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Agregamos 100px por el navbar
      const offset = 100;
      // Calculamos la posicion actual de la ventana desde el top, agregamos la poscion actual de la ventana y restamos el navbar
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' 
      });
    });
  });

  //Se utiliza una funcion para el apartado servicios para evitar conflicto con id='servicio'
  document.querySelectorAll('.scroll-ajustado1').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const offset = 600;
      const targetPosition = offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' 
      });
    });
  });

