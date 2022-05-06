import React,{Fragment} from "react";

import Imagen from './herramientas/Imagen'
import Boton from './herramientas/Boton'

import Chile from '../image/comidas/chile.jpg'
import Mole from '../image/comidas/mole.jpg'
import Pozole from '../image/comidas/pozole.jpg'

const ContenedorPlatillo = () => {
    let platillo = [
        {
            id: 1,
            imagen: Chile,
            nombre: "Chile",
            precio: 40,
        },
        {
            id: 2,
            imagen: Mole,
            nombre: "Mole",
            precio: 90,
        },
        {
            id: 3,
            imagen: Pozole,
            nombre: "Pozole",
            precio: 80,
        }
    ];

    var MenuPlatillos = platillo.map((platillo) => {
        
        const agregar = () => {
            alert(`Se añadio ${platillo.nombre}`)
        };

        return(
                <div className="contenedor-platillo" key={platillo.id}>
                    <Imagen 
                        imagen={platillo.imagen}
                        styles={"platillo-img"}
                        alt='Comida'
                    />

                    <div className="datos">
                        <h2 className="nombre">{platillo.nombre}</h2>
                        <p className="precio">Precio: ${platillo.precio}</p>
                    
                        <Boton 
                            nombre='Agregar'
                            styles='platillo-boton'
                            funcion={agregar}
                        />
                    </div>
                </div>
        );
    });
    
    return(
        <Fragment>
            <h2 className='titulo'>Platillos</h2>

            <div className="contenedor">
                {MenuPlatillos}
            </div>
        </Fragment>
    );
};

export default ContenedorPlatillo;