import React, {useEffect, useState} from 'react';
import Boton from './herramientas/Boton';

//import Bebidas from './ContenedorDeBebidas';

const Recibo = () => {
    useEffect(() => {
        ObtenerDatos();
    }, []);

    const [reciboState, useReciboState] = useState ([]);

    const ObtenerDatos = () => {
        //recogemos los datos que almacenamos en el localstorage
        let Bebidas =  JSON.parse(localStorage.getItem('Bebidas'));

        //esto le da anuestro useState los datos que va imprimir
        useReciboState(Bebidas);

        //esto nos retorna los datos, para que podamos usarlos en el futuro
        return Bebidas;
    }

    const Eliminar = (id) => {
        let bebidasAlmacenadas = ObtenerDatos();
  
        let nuevoArrayDeBebidas = bebidasAlmacenadas.filter(bebida => bebida.id !== parseInt(id));
  
        useReciboState(nuevoArrayDeBebidas);
  
        localStorage.setItem('Bebidas', JSON.stringify(nuevoArrayDeBebidas));
      }

    

    let peticion = reciboState != null ?
        reciboState.map((bebida) => {

            return(
                <div key={bebida.id} className='contenedor-recibo'>

                    <h3 className='titulo-recibo'>{bebida.nombre}</h3>

                    <div className='cantidad'>
                        <Boton
                            nombre='-'
                        />
                        <p>{bebida.cantidad}</p>
                        <Boton
                            nombre='+'
                        />
                    </div>

                    <p className='precio-recibo'>${bebida.precio}</p>

                    <Boton 
                        nombre='Eliminar'
                        funcion={() => Eliminar(bebida.id)}
                        styles='boton-recibo'
                    />

                </div>
            )
        }): <p>
                aun no haz agragado nada
            </p>


    

    return(
        <div className='recibo'>
            {peticion}
            <div className='pagar'>
                <h3>Total</h3>
                <p>$300</p>
                <Boton
                    nombre='Comprar'
                />
            </div>
        </div>
    );
};

export default Recibo;