import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAll, getOnly } from "../api/jspost";
import '../static/css/tarjeta.css'

export function TarjetaPost({post}) {
    const navigate= useNavigate()
    const fecha = new Date(post.updated_at);
    const fechaFormateada = fecha.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric', minute: 'numeric' });
    const imagen = post.img;
    const pdf= post.file;

    const [datos, setDatos]= useState([]);
    useEffect (() => {
      async function loadDatos(){
        const res = await getOnly('user', post.user);
        setDatos(res.data);
      }
      loadDatos();
    }, []);

    return(
        <div class="postContainer" key={post.id}>
            <div class="postContainerf1">
              <div class="fotoPerfil">
                <img src={datos.img} class="fotoPerfilTarjeta" alt="foto de Usuario"/>
              </div>
              <div class="derechaFoto">
                <div class="topicosContainer">
                  <div class="topicoCurso">
                    {post.title}
                  </div>
                  <div class="topicoTresPuntos" 
                    onClick={()=>{
                        navigate('/post/' + post.id)
                    }}
                    >
                    <i class="fa-solid fa-ellipsis"></i>
                  </div>
                </div>
                <div class="NombreFecha">
                  <div class="nombre">
                    {datos.username}
                  </div>
                  <div class="fechaPublicacion">
                    {fechaFormateada}
                  </div>
                </div>
              </div>
            </div>
            <div class="postContainerf2" >
              {post.content}
            </div>
            <div class="postContainerf3">
                <ListTags tags={post.tags} c={post.id}/>
            </div>
            {imagen && 
            <div class="postContainerf4">
              <img src={imagen} width="70%" alt="publicacion"/>              
            </div>}
            {pdf &&
            <div class="postContainerf6">
              <br />
              <i class="fas fa-file-pdf pdf-icon"></i>
              <a href={pdf}>{pdf.substring(33)}</a>
            </div>}
            <div class="postContainerf5">
              <div class="likes">
                <i class="fa-regular fa-thumbs-up"></i>
                <div class="likescount">{post.likes_count}</div>
                <i class="fa-regular fa-thumbs-down"></i>
                <div class="dislikescount">{post.dislikes_count}</div>
              </div>
              <div class="derechaLike">
                <i class="fa-regular fa-comment-dots"></i>
                <div>Ver {post.comments_count} comentarios</div>
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
        </div>
    );
    /*return(
        <div key={post.id}
            onClick={()=>{
                navigate('/post/' + post.id)
            }}
        >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <ListTags tags={post.tags} c={post.id}/>
            <p>{post.rate}</p>
        </div>
    );*/
}

export function ListTags({tags,id}){
  return (
      <div class="containerTags">
          {tags.map( tag => (
              <div key={tag + id} class="tags"><a class="numtag" href="#">{tag}</a></div>
          ))}
      </div>
  );
}