import { useEffect, useState } from "react";
import { getAll } from "../../api/jspost.js";
let ruta= "http://127.0.0.1:8000/forUnsa/tag/"

export async function ChangeTags(){
    try {
        let newpost = await fetch(ruta, {
          method: 'GET',
        });
      
        if (!newpost.ok) {
          throw new Error('Network response was not ok');
        }
      
        let data = await newpost.json();
        const nombres = data.map(item => item.name);

        const elementos = document.querySelectorAll('.numtag');

        elementos.forEach(elemento => {
          elemento.textContent= nombres[elemento.textContent]
        });
    }catch (error){
        console.error('There was a problem with the fetch operation:', error);
    }
}