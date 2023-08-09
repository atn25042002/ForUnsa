import { LeftColumn } from "../components/LeftColumn";
import { MidColumn } from "../components/MidColumn";
import { RigthColumn } from "../components/RigthColumn";

export function BodyPage(props){
    return(
        <div class="cuerpo">
            <LeftColumn/>
            <MidColumn mod={props.mod}/>
            <RigthColumn/>
        </div>
    );
}

export default BodyPage;