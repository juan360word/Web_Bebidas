
// Importaciones

 {/* SE USO UN NPM LLAMADO REACT-TOASTIFY EL CUAL NOS AYUDO
    A IMPLEMENTAR LOS MENSAJES 
  */}

import { Bounce, toast, ToastContainer } from 'react-toastify' // Se usara para llamar los mensajes y editarlos
import 'react-toastify/dist/ReactToastify.css' // estilos (OBLIGATORIO)

    export const notificar = (mensaje: string) => toast.success(mensaje)
    export const notificarError = (mensaje: string) => toast.error(mensaje)
    export const notiFavoritoseliminar = (mensaje:string) => toast.error(mensaje)
    export const agregar = (mensaje : string) => toast.info(mensaje)

    {/* TODO ESTO SON LAS NOTIFICACIONES QUE VAN APARECER Y FUERON LLAMADAS,
      ESPESIFICAR CUAL SE VA A USAR (success,error,info,etc) 
      */}

export const Notificacion = () => { // Componente

   

  return <ToastContainer
  position="top-right"
  autoClose={1100}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick={false}
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  transition={Bounce}
  />

  {/* ESTO ES EL ESTILO EL CUAL NOS DA LA DOCUMENTACION DEL NPM, siempre retornar ToastContainer  */}
  
}
