import { ListTags } from "./ListTag";
import { indexTag } from "../static/js/main.js";
import { useNavigate} from "react-router-dom";
export function RigthColumn(){  
  const navigate= useNavigate();

  const busqueda = () => {
    let indice= indexTag();
    if(indice ==0){
      window.alert('No es un tag válido');
      return;
    }
    window.location.href = "http://localhost:5173/tag/" + indice;
  }; 
    return(
        <div class="rigthColumn">
            <div class="columnside">
          <div class="containerTags">
            <div>Buscar por Tag</div>
            <div class="barraBuscarTag">
              <ListTags/>             
              <i class="fa fa-search" onClick={busqueda}></i>
            </div>
            
            <div class="tags">
              <a href="http://localhost:5173/tag/2">Calculo </a>
              <a href="http://localhost:5173/tag/1">Ing. de Sistemas </a>
              <a href="http://localhost:5173/tag/3">Programacion </a>
            </div>
          </div>
          <div class="containerPreguntas">
            <div class="preguntasFrecuentas">Preguntas Frecuentes</div>
            <ul>
              <li>Que es Forounsa</li>
              <li>Cuales son nuestros objetivos</li>
              <li>Que es un post</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
              <li>Como navegas entre escuelas</li>
            </ul>
          </div>
        </div>
        </div>
    );
}

export default RigthColumn;
