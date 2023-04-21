const listaUsuarios = () => fetch('https://challengeonefront-alurageek.onrender.com/usuarios').then(respuesta => respuesta.json());

const crearUsuario = (correo, password) => {
    return fetch('https://challengeonefront-alurageek.onrender.com/usuarios', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({correo,password , id:uuid.v4()})
    });
  };

//Detalles del producto por ID
const detalleUsuario = async (id) => {
  return fetch(`https://challengeonefront-alurageek.onrender.com/usuarios/${id}`).then( respuesta => respuesta.json());
};
export const usuariosService = {
    crearUsuario,
    detalleUsuario,
    listaUsuarios
}