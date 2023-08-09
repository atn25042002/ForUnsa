import { useEffect, useState } from "react";
import { getAll } from "../api/jspost";
import { TarjetaPost } from "./TarjetaPost";

export function ListPost(props){
    const [posts, setPosts]= useState([]);

    useEffect (() => {
        async function loadPosts(){
            const res = await getAll('post');
            const ord = [...res.data].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            let mode= 2; //modo doc
            if(props.mod){
                mode= 1 //modo social
            }
            const filt = ord.filter(item => item.post_type === mode && item.state=="A");
            setPosts(filt);
        }
        loadPosts();
    }, []);

    return (
        <div id= "lista">
            {posts.map( post => (
                <TarjetaPost key={post.id} post={post}/>
            ))}
        </div>
    );
}