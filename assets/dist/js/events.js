function myFun() {
    let ob = document.querySelector("#test");
    let detalle = document.querySelector("div.detalles-evento")
    ob.classList.remove("d-none");
    detalle.innerHTML = "<ul><li>Fecha del evento.</li><li>Una breve descripción del evento.</li> <li>Una breve descripción del evento.</li><li>Link de registro (si lo tienen).</li><li>Link de zoom para evento en vivo (si lo tienen)</li><li>¿El evento será transmitido por algún Facebook por ejemplo?.</li><li>Invitados especiales (si los tienen).</li><li>Flyer del evento (si lo tienen).</li></ul>";

    let ac = document.querySelector("#evento");
    ac.classList.add("activo");

  }

  function byeVentana(){
    let cer = document.querySelector("#test");
    let des = document.querySelector("#evento");
    des.classList.remove("activo");
    cer.classList.add("d-none");
  } 
