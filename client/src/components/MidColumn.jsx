import { ListPost } from "./ListPost";

export function MidColumn(){
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
              <div>Nuevo Post</div>
            </div>
          </div>
          <div class="botMedio">
            <ListPost/>
          </div>
        </div>
    );
}

export default MidColumn;