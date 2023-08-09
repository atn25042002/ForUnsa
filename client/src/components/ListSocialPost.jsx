import { useEffect, useState } from "react";
import { getAll } from "../api/jspost";
import { TarjetaPost } from "./TarjetaPost";

export function ListSocialPost(){
    const [posts, setPosts]= useState([]);

    useEffect (() => {
        async function loadPosts(){
            const res = await getAll('post');
            const ord = [...res.data].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            const filt = ord.filter(item => item.post_type === 1 && item.state=="A");
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