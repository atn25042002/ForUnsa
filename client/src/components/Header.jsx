export function Header(){
    return(
        <div class="header">
            <div class="logo">
                <div class="LogoForUnsa">
                <img src="src/static/images/LogoForUnsa.png" width="70px" alt=""/>
                </div>
            </div>
            <div class="busqueda">
                <div class="busquedaBarra">
                <input class="busquedaTop" type="text" placeholder="Search..." name="search"/>
                <button type="submit">
                    <i class="fa fa-search"></i>
                </button>

                </div>

            </div>
            <div class="iconos">
                <div class="interiorIcones">
                <div class="i">
                    <i class="fa-solid fa-house hover-effect d-none d-md-inline"></i>
                </div>
                <div class="i">
                    <i class="fa-regular fa-circle-question"></i>
                </div>
                <div class="i">
                    <i class="fa-solid fa-user-group hover-effect  d-none d-md-inline"></i>
                </div>
                <div class="i">
                    <i class="fa-regular fa-message hover-effect  d-none d-md-inline"></i>
                </div>
                <div class="i">
                    <i class="fa-regular fa-circle-user hover-effect d-none d-md-inline fa-2x" id="login"></i>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Header;