import { useEffect, useState } from "react";
import { getAll } from "../api/jspost";

export function ListTags(){
    const [tags, setTags]= useState([]);

    useEffect (() => {
        async function loadTags(){
            const res = await getAll('tag');
            const ord = [...res.data].sort((a, b) => new Date(a.id) - new Date(b.id));
            console.log(ord)
            setTags(ord);
        }
        loadTags();
    }, []);

    return (
        <div class="inputTags" id= "lista">
            <input class="inputCrearTag" type="text"  id="TagInput" list="opciones" placeholder="Crea Tags..."/>
            <datalist id="opciones">
            {tags.map( tag => (
                <option key={tag.id} value={tag.name}></option>
            ))}
            </datalist>
        </div>
    );
}