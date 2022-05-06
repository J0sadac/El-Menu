import React from 'react';

import Boton from './herramientas/Boton';

const Ajustes = () => {

    const cambioDeMesa = () => {
        alert("Corrije la mesa");
    }

    const ajustes = () => {
        alert("Entraste a los ajustes");
    }


    const perfil = () => {
        alert("Pronto estaran disponibles")
    }

    return(
        <div className='ajustes'>
            <div className='contenedor'>
                <Boton 
                    nombre= 'Cambiar mesa'
                    styles= 'boton-ajustes'
                    funcion= {cambioDeMesa}
                />
                <Boton 
                    nombre= 'Ajustes'
                    styles= 'boton-ajustes'
                    funcion= {ajustes}
                />
                <Boton 
                    nombre= 'Perfil'
                    styles= 'boton-ajustes'
                    funcion= {perfil}
                />
            </div>
        </div>
    );
};

export default Ajustes;