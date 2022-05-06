import React from "react";

const Boton = (props) => {

    return (
        <button onClick={props.funcion} className={props.styles}>
            {props.nombre}
        </button>
    );
};

export default Boton;