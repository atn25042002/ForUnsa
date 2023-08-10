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

export function indexTag(){
  const tagInput = document.getElementById('TagInput');
  const opciones = document.getElementById('opciones');
  const valorSeleccionado = tagInput.value;      
  for (let i = 0; i < opciones.options.length; i++) {
    if (opciones.options[i].value === valorSeleccionado) {
      return i + 1;
    }
  }
  return 0;
}

export async function like(id){
  /*const lkcount= document.getElementById("lk" + id);
  const nlike = parseInt(lkcount.textContent) + 1;
  let formdata= new FormData()
      formdata.append('post', id)
      formdata.append('user', 2)
      formdata.append('post_reaction')
  lkcount.textContent = nlike;
  let dir= ruta + "post/" + id + "/"
  let newpost = await fetch(dir,{
    method: 'PATCH',
    body: formdata
  }).then(responde => responde.json).catch(error =>{
    console.error(error);
  })*/
  console.log("Se dio like a " + id)
}

/*export async function like(id){
  const lkcount= document.getElementById("lk" + id);
  const dlkcount= document.getElementById("dlk" + id);
  let formdata= new FormData()
      formdata.append('likes_count', lkcount)
      formdata.append('dislikes_count', dlkcount)
  dir+= "post/" + params.id + "/"
  let newpost = await fetch(dir,{
    method: 'PATCH',
    body: formdata
  }).then(responde => responde.json).catch(error =>{
    console.error(error);
  }) 
} */