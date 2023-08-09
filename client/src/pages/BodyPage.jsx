import { LeftColumn } from "../components/LeftColumn";
import { MidColumn } from "../components/MidColumn";
import { RigthColumn } from "../components/RigthColumn";
import { useParams } from "react-router-dom";

export function BodyPage(props){
    const params= useParams();
    return(
        <div class="cuerpo">
            <LeftColumn/>
            <MidColumn mod={props.mod} tag={params.id}/>
            <RigthColumn/>
        </div>
    );
}

export default BodyPage;