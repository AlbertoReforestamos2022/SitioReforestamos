document.addEventListener("keyup", e=>{

    if (e.target.matches("#palabras-clave")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".notas__content").forEach(nota =>{
  
            nota.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?nota.classList.remove("filtro")
              :nota.classList.add("filtro")
        })
  
    }
  
  
  })



