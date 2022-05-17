import React,{Fragment} from "react";

import Imagen from './herramientas/Imagen'
import Boton from './herramientas/Boton'

import Fresa from '../image/bebidas/fresa.jpg'
import Cacahuate from '../image/bebidas/cacahuate.jpg'
import Arroz from '../image/bebidas/arroz.jpg'
import { AlmacenEnLocalStorage } from "./herramientas/AlmacenEnLocalStorage";

const ContenedorDeBebidas = () => {

    let platillo = [
        {
            id: 1,
            imagen: Fresa,
            nombre: "Horchata de Fresa",
            precio: 15,
            cantidad: 1
        },
        {
            id: 2,
            imagen: Cacahuate,
            nombre: "Horchata de Cacahuate",
            precio: 15,
            cantidad: 1
        },
        {
            id: 3,
            imagen: Arroz,
            nombre: "Horchata de Arroz",
            precio: 15,
            cantidad: 1
        }
    ];

    
    
    let MenuBebidas = platillo.map((platillo) => {
        
        const agregar = () => {
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
            <h2 className='titulo'>Bebidas</h2>

            <div className="contenedor">
                {MenuBebidas}
            </div>
        </Fragment>
    );
};

export default ContenedorDeBebidas;