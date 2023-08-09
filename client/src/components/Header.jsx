import logo from "/src/static/images/LogoForUnsa.png";
export function Header(){
    return(
        <div class="header">
            <div class="logo">
                <div class="LogoForUnsa">
                    <a href="http://localhost:5173/">
                    <img src={logo} width="70px" alt="logo ForUnsa"/>
                    </a>
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
                    <a href="http://localhost:5173/">
                    <i class="fa-solid fa-house hover-effect d-none d-md-inline"></i>
                    </a>                    
                </div>
                <div class="i">
                    <i class="fa-regular fa-circle-question"></i>
                </div>
                <div class="i">
                    <a href="http://localhost:5173/social">
                    <i class="fa-solid fa-user-group hover-effect  d-none d-md-inline"></i>
                    </a>
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