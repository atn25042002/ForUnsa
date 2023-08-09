import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { create, getOnly, update, ruta} from "../api/jspost";
import { useNavigate, useParams } from "react-router-dom";
import '../static/css/postForm.css'
import { ListTags } from "../components/ListTag";

export function PostFormPage() {
    const {register, handleSubmit, formState:{errors}, setValue}= useForm();
    const navigate= useNavigate();
    const params= useParams();

    const onCancelar = () => {
      // Redirigir a la página principal
      navigate('/post');
    };

    const onSubmit = handleSubmit(async data => {
      let formdata= new FormData()
      formdata.append('title', data.title)
      formdata.append('content', data.content)
      formdata.append('user', data.user)
      let campoimg= document.getElementById("inputImagen")
      let campopdf= document.getElementById("inputPdf")

      //Extrae el tag
      const tagInput = document.getElementById('TagInput');
      const opciones = document.getElementById('opciones');
      const valorSeleccionado = tagInput.value;      
      for (let i = 0; i < opciones.options.length; i++) {
        if (opciones.options[i].value === valorSeleccionado) {
          formdata.append('tags', i + 1)
        }
      }

      if(campoimg.files.length > 0){
        formdata.append('img', campoimg.files[0])
      }
      if(campopdf.files.length > 0){
        formdata.append('file', campopdf.files[0])
      }     
      
      let dir= ruta;
      navigate('/post');
      if(params.id){
        console.log(formdata.get('tags'))
        //await update('post',params.id, data);
        dir+= params.id + "/"
        let newpost = await fetch(dir,{
          method: 'PUT',
          body: formdata
        }).then(responde => responde.json).catch(error =>{
          console.error(error);
        })        
      } else{
        //await create('post',formdata);
        console.log(formdata.get('tags'))
        let newpost = await fetch(dir,{
          method: 'POST',
          body: formdata
        }).then(responde => responde.json).catch(error =>{
          console.error(error);
        })
      }
    })

    const onDelete = handleSubmit(async data => {
      const accepted= window.confirm('¿Estas seguro?')
      if(accepted){      
        let formdata= new FormData()
        formdata.append('title', data.title)
        formdata.append('content', data.content)
        formdata.append('user', data.user)
        formdata.append('state','X')
        let dir= ruta;
        dir+= params.id + "/"
        let newpost = await fetch(dir,{
            method: 'PUT',
            body: formdata
          }).then(responde => responde.json).catch(error =>{
            console.error(error);
          })        
        navigate('/post');
      }
    });

    useEffect(()=>{
        async function loadPost(){
            if(params.id){
                const res= await getOnly('post',params.id);
                setValue('title', res.data.title);
                setValue('content', res.data.content);
                setValue('user', res.data.user);  
            }
        }
        loadPost();
    },[])

    return(
      <div class="paraCentrar">
        <form class ="crearPostContainer" action="" onSubmit={onSubmit} encType="multipart/form-data">
              <div class="crearPostF1">Crear Publicacion</div>
              <div class="crearPostF2">
                <div class="labelTitulo">Titulo</div>
                <div class="inputTitulo">
                  <input class="inputCrearPost" type="text" placeholder="Titulo" {...register("title",{required: true})}/>
                </div>
              </div>
              <div class="crearPostF3">Contenido</div>
              <div class="crearPostF4">
                <textarea placeholder="Escribe aqui tu post" {...register("content",{required: true})}></textarea>
              </div>
              <div>
                <input type="hidden"
                    value="2"
                    {...register("user",{required: true})}/>
              </div>
              <div class="crearPostF5">
                <div class="inputsAnadir">
                  <div class="addImg">
                    <input type="file" id="inputImagen" accept="image/*"/>
                  </div>
                  <div class="addDoc">
                    <input type="file" id="inputPdf" accept=".pdf"/>
                  </div>
                  <div class="secctioCrear">Seccion</div>
                  <div class="addEsc">Mi escuela</div>
                </div>
                <div class="creaTags">
                  <div class="labelTags">Tags</div>
                  <ListTags/>
                </div>
              </div>
              <div class="crearPostF6">
                <button type="submit" class="subirCrear" >Subir</button>
                <button type="button" class="subirCancelar" onClick={onCancelar}>Cancelar</button>
                {params.id &&
                <button type="button" class="subirCancelar" onClick={onDelete} >Eliminar publicación</button>}
              </div>
            </form>
        </div>
        /*<div>
            <form action="" onSubmit={onSubmit}>
                <input type="text"
                    placeholder="Titulo de la publicación"
                    {...register("title",{required: true})}/>
                <textarea name="" id="" cols="30" rows="10"
                    placeholder="Titulo de la publicación"
                    {...register("content",{required: true})}
                ></textarea>
                <input type="hidden"
                    value="2"
                    {...register("user",{required: true})}/>
                <button>Publicar</button>
            </form>
            {params.id &&
                <button onClick={ async () => {
                    const accepted= window.confirm('¿Estas seguro?')
                    if(accepted){
                        CONFIGURAR EL OCULTO
                        await deletePost('post',params.id);
                        navigate('/post')
                    }
                }} >Eliminar publicación</button>}
        </div>*/
    )
}
