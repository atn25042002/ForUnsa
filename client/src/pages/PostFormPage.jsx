import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { create, getOnly, update, subirImagen } from "../api/jspost";
import { useNavigate, useParams } from "react-router-dom";
import '../static/css/postForm.css'

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
      if(campoimg.files.length > 0){
        formdata.append('img', document.getElementById("inputImagen").files[0])
      }

      let ruta= "http://127.0.0.1:8000/forUnsa/post/"
      navigate('/post');
      if(params.id){
        //await update('post',params.id, data);
        ruta+= params.id + "/"
        let newpost = await fetch(ruta,{
          method: 'PUT',
          body: formdata
        }).then(responde => responde.json).catch(error =>{
          console.error(error);
        })        
      } else{
        //await create('post',formdata);
        let newpost = await fetch(ruta,{
          method: 'POST',
          body: formdata
        }).then(responde => responde.json).catch(error =>{
          console.error(error);
        })
      }
    })

    useEffect(()=>{
        async function loadPost(){
            if(params.id){
                const res= await getOnly('post',params.id);
                setValue('title', res.data.title);
                setValue('content', res.data.content);
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
                    value="3"
                    {...register("user",{required: true})}/>
              </div>
              <div class="crearPostF5">
                <div class="inputsAnadir">
                  <div class="addImg">
                    <input type="file" id="inputImagen" name="inputImagen" accept="image/*"/>
                  </div>
                  <div class="addDoc">
                    <input type="file" id="inputPdf" accept=".pdf"/>
                  </div>
                  <div class="secctioCrear">Seccion</div>
                  <div class="addEsc">Mi escuela</div>
                </div>
                <div class="creaTags">
                  <div class="labelTags">Tags</div>
                  <div class="inputTags">
                    <input class="inputCrearTag" type="text" placeholder="Crea Tags..."/>
                  </div>
                </div>
              </div>
              <div class="crearPostF6">
                <button type="submit" class="subirCrear" >Subir</button>
                <button type="button" class="subirCancelar" onClick={onCancelar}>Cancelar</button>
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
