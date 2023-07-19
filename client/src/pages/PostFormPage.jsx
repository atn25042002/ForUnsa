import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { create, getOnly, update } from "../api/jspost";
import { useNavigate, useParams } from "react-router-dom";

export function PostFormPage() {
    const {register, handleSubmit, formState:{errors}, setValue}= useForm();
    const navigate= useNavigate();
    const params= useParams();

    const onSubmit = handleSubmit(async data => {
        navigate('/post');
        if(params.id){
            await update('post',params.id, data);
        } else{
            await create('post',data);
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
        <div>
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
                        await deletePost('post',params.id);
                        navigate('/posts')
                    }
                }} >Eliminar publicación</button>}
        </div>
    )
}