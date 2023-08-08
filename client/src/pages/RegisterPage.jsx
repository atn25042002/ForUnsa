import React, { useState } from 'react';
import axios from 'axios'

export function Register() {
    /* function sendEmail(e){
        e.preventDefault()
        emailjs.sendForm('service_lqusn5t','template_4x61mye', e.target,'e6i6V33X_--i4SpPa').then(res=>{
            alert("Se ha enviado correctamente.");
            console.log(res);
        })
    }*/
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const sendEmail = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/forUnsa/email/', {
            'recipient': email,   // Utiliza el campo de correo electrónico para el destinatario
            'subject': 'Registro exitoso',  // Asunto del correo
            'message': `Hola ${name}, tu registro ha sido exitoso.`  // Mensaje personalizado
          });
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return(
        <div>     
            <div class="loginBackground">
                <img src="src/static/images/login-background.jpg" width="100%" height="100%" alt=""/>
            </div>
            <form action="" onSubmit={sendEmail}>
                <div class="login">
                    <h3>Bienvenido</h3>
                    <p><strong>"Un lugar para compartir conocimientos"</strong></p>
                    <img src="src/static/images/unsa.jpg" width="40%" height="40%" alt=""/>
                    <br></br>
                    <label>Nickname: </label>
                    <input type="text" id='name' name='name' value={name} onChange={(e) => setName(e.target.value)}/> 
                    <br></br>
                    <label>Correo Institucional: </label>
                    <input type="text" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <br></br>
                    <button>Registrar</button>
                    <p><a href="#">¿No tiene acceso a su cuenta?</a></p>
                </div>
            </form>
        </div>
    )
}