import React, {useEffect, useState} from 'react';
import Boton from './herramientas/Boton';

//import Bebidas from './ContenedorDeBebidas';

const Recibo = () => {
    const [total, setTotal] = useState(0);
    const [reciboState, useReciboState] = useState ([]);

    useEffect(() => {
        ObtenerDatos();
    }, []);
    
    useEffect(() => {
        const PrecioTotal = () => {
            const sumaTotal = reciboState.reduce((prev, bebida) => {
                return prev + (bebida.precio * bebida.cantidad);
            }, 0)
            setTotal(sumaTotal);
        }
        PrecioTotal()
    }, [reciboState])

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

    const Resta = (id) => {
        reciboState.forEach((bebida) => {
            if(bebida.id === id){
                bebida.cantidad === 1 ? bebida.cantidad = 1: bebida.cantidad -=1;
            }
        })
        useReciboState([...reciboState])
               
    };

    const Suma = (id) => {
        reciboState.forEach((bebida) => {
            if(bebida.id === id){
                bebida.cantidad +=1;
            }
        })
        useReciboState([...reciboState])

    };

    const Comprar = () =>{ 
        alert("Tu compra se a realizado con exito")
    }

    let peticion = reciboState !== null ?
        reciboState.map((bebida) => {

            return(
                <div key={bebida.id} className='contenedor-recibo'>

                    <h3 className='titulo-recibo'>{bebida.nombre}</h3>

                    <div className='cantidad'>
                        <Boton
                            nombre='-'
                            funcion={() => Resta(bebida.id)}
                        />
                        <p>{bebida.cantidad}</p>
                        <Boton
                            nombre='+'
                            funcion={() => Suma(bebida.id)}
                        />
                    </div>

                    <p className='precio-recibo'>${(bebida.precio * bebida.cantidad)}</p>

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
                <p>{total}</p>
                <Boton
                    nombre='Comprar'
                    funcion={Comprar}
                />
            </div>
        </div>
    );
};

export default Recibo;