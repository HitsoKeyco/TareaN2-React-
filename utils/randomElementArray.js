

// Funcion que me permite elegir una posicioon aleatoria de un arreglo
const randomElementArray = arr => {    
    const indexRandom = Math.floor(Math.random() * arr.length);
    // accedo al elemento segun su posicion
    return arr[indexRandom];
}

export default randomElementArray

