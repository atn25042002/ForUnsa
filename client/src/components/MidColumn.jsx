import { ListPost} from "./ListPost";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { ChangeTags } from "../static/js/main.js";
import { user_email } from "./ModalComponent"
import ModalComponent from "./ModalComponent"

export function MidColumn(props){
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    ChangeTags();
  }, []);
  //{props.mod ? <ListSocialPost /> : <ListPost />}
  const navigate= useNavigate()
    return(
        <div class="midColumn" id="mid" data-mod={props.mod}>
          <div class="midcolumHeader">
            <div class="topMedio">
              <div>Mi escuela</div>
              <div>Todos</div>
            </div>
            <div class="subTopMedio">
              <div>Popular</div>
              <div>Nuevos</div>
              {user_email === '' ? (
                <div>
                  <div onClick={handleShow}>Nuevo Post</div>
                  <ModalComponent
                    show={showModal}
                    onHide={handleClose}
                    title="Inicie sesión"
                    content="This is the content of the modal."
                  />
                </div>
                ) : (
                  // Mostrar esta porción después del registro
                  <div onClick={()=>{
                    navigate('/post-create/')
                  }}
                  >Nuevo Post</div>
              )}
              
            </div>
          </div>
          <div class="botMedio">
            <ListPost mod={props.mod}/>
          </div>
        </div>
    );
}

export default MidColumn;