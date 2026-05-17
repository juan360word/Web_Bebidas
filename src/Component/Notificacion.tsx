import { Bounce, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

    export const notificar = (mensaje: string) => toast.success(mensaje)
    export const notificarError = (mensaje: string) => toast.error(mensaje)
    export const notiFavoritoseliminar = (mensaje:string) => toast.error(mensaje)
    export const agregar = (mensaje : string) => toast.info(mensaje)

export const Notificacion = () => {

   

  return <ToastContainer
  position="top-right"
  autoClose={5000}
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
  
}
