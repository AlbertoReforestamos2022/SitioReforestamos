// Deshabilitar el envío de formularios si hay campos no válidos
(() => {
  'use strict'

  // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
  const forms = document.querySelectorAll('.needs-validation');
  const ventana = document.querySelector('.error');
  const mensaje = document.createElement('h3');

  // Bucle de validación
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        mensaje.textContent = 'Verifica los espacios en blanco y los datos.';
        mensaje.classList.add('text-center', 'rojo', 'pt-3');
        ventana.appendChild(mensaje);

      }else {
        alert("En breve nos comunicaremos contigo");
      }
      form.classList.add('was-validated') 
    }, false)
  })
})()
