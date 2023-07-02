import { useEffect, useState } from "react";
import { getAllPosts } from "../api/jspost";
import { TarjetaPost } from "./TarjetaPost";

export function ListPost(){
    const [posts, setPosts]= useState([]);

    useEffect (() => {
        async function loadPosts(){
            const res = await getAllPosts();
            setPosts(res.data);
        }
        loadPosts();
    }, []);

    return (
        <div key={""}>
            {posts.map( post => (
                <TarjetaPost key={post.id} post={post}/>
            ))}
        </div>
    );
}