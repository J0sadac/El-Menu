import React,{Fragment} from "react";

import Imagen from './herramientas/Imagen'
import Boton from './herramientas/Boton'

import Chile from '../image/comidas/chile.jpg'
import Mole from '../image/comidas/mole.jpg'
import Pozole from '../image/comidas/pozole.jpg'
import { AlmacenEnLocalStorage } from "./herramientas/AlmacenEnLocalStorage";

const ContenedorPlatillo = () => {
    let platillo = [
        {
            id: 4,
            imagen: Chile,
            nombre: "Chile",
            precio: 40,
            cantidad: 1
        },
        {
            id: 5,
            imagen: Mole,
            nombre: "Mole",
            precio: 90,
            cantidad: 1
        },
        {
            id: 6,
            imagen: Pozole,
            nombre: "Pozole",
            precio: 80,
            cantidad: 1
        }
    ];
    
    let MenuPlatillos = platillo.map((platillo) => {
        
        let agregar = () => {
            let bebida = {
                id: new Date().getTime(),
                nombre: platillo.nombre,
                precio: platillo.precio,
                cantidad: platillo.cantidad,
            };
    
        
            AlmacenEnLocalStorage('Bebidas', bebida);
        
            console.log(bebida);
        }
        
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
                            funcion={() => agregar(platillo.id)}
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