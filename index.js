
let characters = JSON.parse(file).results // [{}, {}, {}, ...]


let input_character_name = document.getElementById("input_character_name")
let conteinerResultado = document.getElementById("conteinerResultado")

//funcion para el evento submit
search_character_button_click.addEventListener("submit", function(evento){

    let results = ""
    evento.preventDefault()//evitar el evento del formulario
    console.log("presionaste buscar")
    
    // funcion buscar un resultado
    // let character = search_character(input_character_name.value)
    // console.log(character)

    // funcion buscar varios resultados
    let resultados_characters = search_characters(input_character_name.value)
    if(results != ""){
      for(let i = 0; i< resultados_characters.length; i++){
        results += `
        <p>
          <span>Titile: ${resultados_characters[i].title}</span><br/>
          <span> Año: ${resultados_characters[i].year}</span><br/>
          <span>Genero: ${resultados_characters[i].genres}</span>
        <p>
        <br/>
        `
      }
    }else{
      results = `no inserto datos`
    }

  // modificamos el HTML para que muestre el contenido encontrado
  conteinerResultado.innerHTML = results
   
})


// // solo encuentra uno
// function search_character(character_name) { 
//   // creamos variable para guardar la longitud
//     let longitud_cadena = character_name.length
//     for (let i = 0; i < characters.length; i++) {
//       if(characters[i].title.substring(0,longitud_cadena) == character_name) {
//          return characters[i]
//       }
//     }
//   }


  // encuentra todos los que coincidad
function search_characters(character_name) { 
  if(character_name != ""){
        // creamos variable para guardar la longitud
      let longitud_cadena = character_name.length
      // creamos array donde se guarde los resultados encontrados
      let results = []
      for (let i = 0; i < characters.length; i++) {
        if(characters[i].title.substring(0,longitud_cadena) == character_name) {
          results.push(characters[i])
        }
      }
      return results
  }else{
    console.log("Error no inserto datos")
    let results = ""

    return results
  }
}
