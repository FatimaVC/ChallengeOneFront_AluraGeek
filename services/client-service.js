//GET

const listaProductos = () =>fetch('https://challengeonefront-alurageek.onrender.com/productos').then(respuesta => respuesta.json());

const crearProducto = (nombre, precio,imagen, categoria, descripcion) => {
    return fetch('https://challengeonefront-alurageek.onrender.com/productos',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre, precio, imagen, id:uuid.v4(), categoria, descripcion})
    });
};

const eliminarProducto = (id) => {
    return fetch(`https://challengeonefront-alurageek.onrender.com/productos/${id}`,{
        method: "DELETE",
    });
};

//Detalles del producto por ID
const detalleProducto = async (id) => {
    return fetch(`https://challengeonefront-alurageek.onrender.com/productos/${id}`).then(respuesta => respuesta.json());
};

const actualizarProducto = (nombre, precio,imagen, id, categoria, descripcion) => {
    return fetch(`https://challengeonefront-alurageek.onrender.com/productos/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre, precio, imagen, categoria, descripcion})
    }).then(respuesta => respuesta).catch(error => console.log(error));
};

export const clientServices = {
    listaProductos,
    detalleProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
};