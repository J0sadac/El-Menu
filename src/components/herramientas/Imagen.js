import React from "react";

const Imagen = (props) => {

    return (
            <img src={props.imagen} className={props.styles} alt={props.alt}/>
    )
}

export default Imagen;