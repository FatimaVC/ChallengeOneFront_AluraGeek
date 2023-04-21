const listaUsuarios = () => fetch('http://localhost:3000/usuarios').then(respuesta => respuesta.json());

const crearUsuario = (correo, password) => {
    return fetch('http://localhost:3000/usuarios', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({correo,password , id:uuid.v4()})
    });
  };

//Detalles del producto por ID
const detalleUsuario = async (id) => {
  return fetch(`http://localhost:3000/usuarios/${id}`).then( respuesta => respuesta.json());
};
export const usuariosService = {
    crearUsuario,
    detalleUsuario,
    listaUsuarios
}