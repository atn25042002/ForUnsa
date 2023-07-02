import { useNavigate } from "react-router-dom";

export function TarjetaPost({post}) {
    const navigate= useNavigate()

    return(
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
    );
}

export function ListTags({tags},{id}){
    return (
        <div>
            {tags.map( tag => (
                <a key= {tag + id} href="#">{tag}</a>
            ))}
        </div>
    );
}