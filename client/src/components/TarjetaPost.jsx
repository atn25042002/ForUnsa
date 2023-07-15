import { useNavigate } from "react-router-dom";

export function TarjetaPost({post}) {
    const navigate= useNavigate()

    return(
        <div class="postContainer" key={post.id}
            onClick={()=>{
                navigate('/post/' + post.id)
            }}
        >
            <div class="postContainerf1">
              <div class="fotoPerfil">
                foto
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
                    Henry Galvez Q.
                  </div>
                  <div class="fechaPublicacion">
                    Lun 11:39 05/07/23
                  </div>
                </div>
              </div>
            </div>
            <div class="postContainerf2">
              {post.content}
            </div>
            <div class="postContainerf3">
                <ListTags tags={post.tags} c={post.id}/>
            </div>
            <div class="postContainerf4">
              <img src="src/static/images/imagenGato.jpg" width="70%" alt="publicacion"/>
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
        <div class="tag">
            {tags.map( tag => (
                <a key= {tag + id} href="#">{tag}</a>
            ))}
        </div>
    );
}