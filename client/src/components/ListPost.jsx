import { useEffect, useState } from "react";
import { getAll } from "../api/jspost";
import { TarjetaPost } from "./TarjetaPost";

export function ListPost(){
    const [posts, setPosts]= useState([]);

    useEffect (() => {
        async function loadPosts(){
            const res = await getAll('post');
            setPosts(res.data);
        }
        loadPosts();
    }, []);

    return (
        <div id= "lista">
            {posts.map( post => (
                <div key={post.id}>
                    <TarjetaPost key={post.id} post={post}/>
                </div>
            ))}
        </div>
    );
}