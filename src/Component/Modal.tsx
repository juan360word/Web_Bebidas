
// Importaciones

import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react' // Importaciones de Modal
import { useAppStore } from '../Stores/StoreZustand' // Se llamo al hook AppStore
import { notiFavoritoseliminar,agregar } from "./Notificacion" // Se llamo al componente de notificaciones y los mensajes

import type { JSX } from 'react' // para quitar el error del llamado de JSX
import type { Drink } from '../Types/Types' // se llamo a los datos 



export function Modal() { // Componente
  
  {/* TODO ESTO SON LLAMADOS DE LA API Y LA INFORMACION QUE NOS AGREGARA */}

  const isOpen = useAppStore((item) => item.Modal)
  const closeModal = useAppStore((item) => item.closeModal)
  const info = useAppStore((item) => item.info)
  const Favoritos = useAppStore((item) => item.handleFavoritos)
  const existefavorito = useAppStore((item) => item.existefavorito)


  // Para que se vean los mensajes de notificaciones
  const handelsumit = () => {
    if(existefavorito(info.idDrink)){ 
      notiFavoritoseliminar('Se eliminó de favoritos')
    } else {
      agregar('Se agregó a favoritos')
    }
    Favoritos(info)  
  }

  // Se crea un arreglo vacío de elementos JSX para almacenar los ingredientes.
  // Se itera del 1 al 9 accediendo dinámicamente a las propiedades strIngredient y strMeasure
  // de la API usando template literals y casting con keyof Drink,
  // ya que la API retorna los ingredientes como propiedades indexadas (strIngredient1, strIngredient2...)
  // en lugar de un arreglo, por lo que se construye manualmente cada elemento

  const Ingredientes = () => {
    const ingrediens : JSX.Element[] = []
    for(let i =1; i<= 9 ; i++){
      const ingredien = info[`strIngredient${i}` as keyof Drink]
      const me = info[`strMeasure${i}` as keyof Drink]

  // Se valida que tanto el ingrediente como la medida existan (no sean null o undefined),
  // ya que la API puede retornar propiedades vacías si el drink tiene menos de 9 ingredientes.
  // Si ambos existen, se inserta un elemento <li> al arreglo ingrediens usando push(),
  // mostrando el ingrediente y su medida separados por un guión.
      if(ingredien && me){
        ingrediens.push(
          <li key={i} className='text-lg m-4'>
            {ingredien}-{me}
          </li>
        )
      }
    }
   return ingrediens
  }


  if (!isOpen || !info.strDrink) return null // Para que se pueda abrir el modal

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
            <DialogTitle className="text-3xl text-center font-medium tracking-wider text-gray-900">
              {info.strDrink}
            </DialogTitle>
            
            <img
              src={info.strDrinkThumb} // Muestra el nombre que nos ofrece el api
              alt={`imagen de ${info.strDrink}`} // Muestra la imagen que nos ofrece la Api
              className="mx-auto mt-4 w-48 rounded-lg"
            />
            <p className="mt-4 text-lg text-gray-700">{info.strInstructions}</p>
            {Ingredientes()}
            <div className="mt-6 flex justify-between gap-20">
              <Button
                className="w-full rounded-lg bg-orange-400 px-4 py-2 font-semibold text-white hover:bg-orange-600"
                onClick={closeModal} // Cierra el modal
              >
                Cerrar
              </Button>
              <Button
                className="w-full rounded-lg bg-blue-800 px-4 py-2 font-semibold text-white hover:bg-blue-950"
                onClick={() => {
                  
                  closeModal()
                  handelsumit()
                }} // para que la opcion de eliminar y insertar sirva
              >
               {existefavorito(info.idDrink) ? 'Elimina Favorito' : 'Insertar a Favoritos'}
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>

    
  )
  {/* EL MODAL SE AGARRO DE UNA PAGINA LLAMADA HEADLESSUI
    SE CONFIGURO A LO QUE SE NECECITABA */}
}
