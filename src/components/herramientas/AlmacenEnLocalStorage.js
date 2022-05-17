export const AlmacenEnLocalStorage = (clave, elemento) => {
  //conseguir los elementos que ya tenemos en el localstorage
  let datos = JSON.parse(localStorage.getItem(clave));

  //comporbar si es un array
  if(Array.isArray(datos)){
      //si es un array añadiremos un elemento nuevo
      datos.push(elemento);
  }else{
      //crearemos un array con la nueva peli
      datos = [elemento];
  }

  //guardar en el localstorage
  localStorage.setItem(clave, JSON.stringify(datos))

  //devolver un objeto
  console.log(datos)
  return(elemento);
}