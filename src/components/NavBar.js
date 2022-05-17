import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../image/logos/app-icon.png'

const NavBar = () => {

    return(
            <nav className="navbar">
                <div className="menu-principal">
                    <Link to='/' className="lista"><img src={Logo} alt='El Menu' className="img-navbar"/></Link>
                </div>

                <div className="opciones">
                    <Link to='/platillos' className="lista">Platillos</Link>
                    <Link to='/bebidas'  className="lista">Bebidas</Link>
                </div>

                <div className="funciones">
                    <Link to='/recibo' className="lista">Recibo</Link>
                    <Link to='/ajustes' className="lista">Ajustes</Link>
                </div>
            </nav>
    );
};

export default NavBar;