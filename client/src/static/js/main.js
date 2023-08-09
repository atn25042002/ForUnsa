import { ruta } from "../../api/jspost.js";

export async function ChangeTags(){
  let dir = ruta + "tag/"
    try {
        let newpost = await fetch(dir, {
          method: 'GET',
        });
      
        if (!newpost.ok) {
          throw new Error('Network response was not ok');
        }
      
        let data = await newpost.json();
        data.sort(function(a, b) {
          return a.id - b.id;
        });
        const nombres = data.map(item => item.name);

        const elementos = document.querySelectorAll('.numtag');

        elementos.forEach(elemento => {
          elemento.textContent= nombres[elemento.textContent-1]
        });
    }catch (error){
        console.error('There was a problem with the fetch operation:', error);
    }
}