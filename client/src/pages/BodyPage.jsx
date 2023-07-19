import { LeftColumn } from "../components/LeftColumn";
import { MidColumn } from "../components/MidColumn";
import { RigthColumn } from "../components/RigthColumn";

export function BodyPage(){
    return(
        <div class="cuerpo">
            <LeftColumn/>
            <MidColumn/>
            <RigthColumn/>
        </div>
    );
}

export default BodyPage;