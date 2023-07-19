import { useNavigate } from "react-router-dom";

export function TarjetaPost({post}) {
    const navigate= useNavigate()
    const fecha = new Date(post.updated_at);
    const fechaFormateada = fecha.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric', minute: 'numeric' });
    const imagen = post.img; 

    return(
        <div class="postContainer" key={post.id}>
            <div class="postContainerf1">
              <div class="fotoPerfil">
              <i class="fa-regular fa-circle-user hover-effect d-none d-md-inline fa-2x" id="login"></i>
              </div>
              <div class="derechaFoto">
                <div class="topicosContainer">
                  <div class="topicoCurso">
                    {post.title}
                  </div>
                  <div class="topicoTresPuntos">
                    <i class="fa-solid fa-ellipsis"></i>
                  </div>
                </div>
                <div class="NombreFecha">
                  <div class="nombre">
                    User: {post.user}
                  </div>
                  <div class="fechaPublicacion">
                    {fechaFormateada}
                  </div>
                </div>
              </div>
            </div>
            <div class="postContainerf2" 
            onClick={()=>{
                navigate('/post/' + post.id)
            }}
            >
              {post.content}
            </div>
            <div class="postContainerf3">
                <ListTags tags={post.tags} c={post.id}/>
            </div>
            <div class="postContainerf4">
              <img src={imagen} width="70%" alt="publicacion"/>
            </div>
            <div class="postContainerf5">
              <div class="likes">

                <i class="fa-regular fa-thumbs-up"></i>
                <i class="fa-regular fa-thumbs-down"></i>
              </div>
              <div class="derechaLike">
                <i class="fa-regular fa-comment-dots"></i>
                <div>Ver 23 comentarios</div>
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

export function ListTags({tags},{id}){
    return (
        <div class="containerTags">
            {tags.map( tag => (
                <div key= {tag + id} class="tags"><a href="#">{tag}</a></div>
            ))}
        </div>
    );
}