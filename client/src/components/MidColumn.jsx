import { ListPost } from "./ListPost";
import { useNavigate } from "react-router-dom";

export function MidColumn(){
  const navigate= useNavigate()
    return(
        <div class="midColumn">
          <div class="midcolumHeader">
            <div class="topMedio">
              <div>Mi escuela</div>
              <div>Todos</div>
            </div>
            <div class="subTopMedio">
              <div>Popular</div>
              <div>Nuevos</div>
              <div onClick={()=>{
                navigate('/post-create/')
            }}
            >Nuevo Post</div>
            </div>
          </div>
          <div class="botMedio">
            <ListPost/>
          </div>
        </div>
    );
}

export default MidColumn;