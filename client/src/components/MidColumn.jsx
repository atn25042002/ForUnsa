import { ListPost} from "./ListPost";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { ChangeTags } from "../static/js/main.js";
import ModalComponent from "./ModalComponent"

export function MidColumn(props){
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {    
    if(props.titulo){
      console.log(props.titulo)
      document.getElementsByName("search")[0].value = props.titulo;
    }
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
<<<<<<< HEAD
              <div><a href="http://localhost:5173/popular/" >Popular</a></div>
              <div><a href="http://localhost:5173/" >Nuevos</a></div>
              {user_email === '' ? (
=======
              <div>Popular</div>
              <div>Nuevos</div>
              {localStorage.getItem('user_email') === null ? (
>>>>>>> 5d5e999e0645d64ef176d933cff117aaf12d09d4
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
            <ListPost mod={props.mod} tag={props.tag} titulo={props.titulo}/>
          </div>
        </div>
    );
}

export default MidColumn;