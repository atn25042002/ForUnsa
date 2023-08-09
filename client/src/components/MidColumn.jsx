import { ListPost} from "./ListPost";
import { ListSocialPost } from "./ListSocialPost";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import { ChangeTags } from "../static/js/main.js";

export function MidColumn(props){
  useEffect(() => {
    ChangeTags();
  }, []);

  const navigate= useNavigate()
    return(
        <div class="midColumn" data-mod={props.mod}>
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
            {props.mod ? <ListSocialPost /> : <ListPost />}
          </div>
        </div>
    );
}

export default MidColumn;