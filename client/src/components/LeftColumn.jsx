export function LeftColumn(){
    return(
        <div class="leftColumn">
            <div class="listadoPost">
                <div class="listadoPostTitulo">Listado de Post</div>
                <div class="listadoPostDetalle">
                    <ul class="tree">
                    <li>
                        <details>
                        <summary>Area de Biomedicas</summary>
                        <ul>
                            <li>Facultad de Medician</li>
                            <li>Facultad de Biologia</li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary>Area de Ingenierias</summary>
                        <ul>
                            <li>
                            <details>
                                <summary>Fac. de Ingenieras de Procesos y Produccion</summary>
                                <ul>
                                <li>Esc. de Ing. de Sistemas</li>
                                <li>Esc. de Ing Electronica</li>
                                </ul>
                            </details>
                            </li>
                        </ul>
                        </details>
                    </li>
                    </ul>
                </div>
            </div>
            <div class="comunicados">
                <img src="src/static/images/img_mountains_wide.jpg" width="100%" height="100%" alt=""/>
            </div>
        </div>
    );
}

export default LeftColumn;