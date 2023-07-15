import { LeftColumn } from "./LeftColumn";
import { MidColumn } from "./MidColumn";
import { RigthColumn } from "./RigthColumn";

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