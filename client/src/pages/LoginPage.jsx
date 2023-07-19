import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import '../static/css/login.css'

export function LoginPage() {
    const {register, handleSubmit, formState:{errors}, setValue}= useForm();
    const navigate= useNavigate();
    const params= useParams();

    const onSubmit = handleSubmit(async data => {
        navigate('/post');
    })

    return(
        <div>     
            <div class="loginBackground">
                <img src="src/static/images/login-background.png" width="100%" height="100%" alt=""/>
            </div>
            <form action="" onSubmit={onSubmit}>
                <div class="login">
                    <h3>Bienvenido</h3>
                    <p><strong>"Un lugar para compartir conocimientos"</strong></p>
                    <img src="src/static/images/unsa.png" width="40%" height="40%" alt=""/>
                    <h1></h1>
                    <div class="buttonLogin"></div>
                    <button>Acceder con cuenta institucional</button>
                    <p><a href="#">¿No tiene acceso a su cuenta?</a></p>
                </div>
            </form>
        </div>
    )
}