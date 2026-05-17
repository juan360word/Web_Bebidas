import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useAppStore } from '../Stores/StoreZustand'

import type { JSX } from 'react'
import type { Drink } from '../Types/Types'


export function Modal() {
  
  const isOpen = useAppStore((item) => item.Modal)
  const closeModal = useAppStore((item) => item.closeModal)
  const info = useAppStore((item) => item.info)
  const Favoritos = useAppStore((item) => item.handleFavoritos)
  const existefavorito = useAppStore((item) => item.existefavorito)

  const Ingredientes = () => {
    const ingrediens : JSX.Element[] = []
    for(let i =1; i<= 9 ; i++){
      const ingredien = info[`strIngredient${i}` as keyof Drink]
      const me = info[`strMeasure${i}` as keyof Drink]

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


  if (!isOpen || !info.strDrink) return null

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
            <DialogTitle className="text-3xl text-center font-medium tracking-wider text-gray-900">
              {info.strDrink}
            </DialogTitle>
            
            <img
              src={info.strDrinkThumb}
              alt={`imagen de ${info.strDrink}`}
              className="mx-auto mt-4 w-48 rounded-lg"
            />
            <p className="mt-4 text-lg text-gray-700">{info.strInstructions}</p>
            {Ingredientes()}
            <div className="mt-6 flex justify-between gap-20">
              <Button
                className="w-full rounded-lg bg-orange-400 px-4 py-2 font-semibold text-white hover:bg-orange-600"
                onClick={closeModal}
              >
                Cerrar
              </Button>
              <Button
                className="w-full rounded-lg bg-blue-800 px-4 py-2 font-semibold text-white hover:bg-blue-950"
                onClick={() => {
                  Favoritos(info)
                  closeModal()
                }}
              >
               {existefavorito(info.idDrink) ? 'Elimina Favorito' : 'Insertar a Favoritos'}
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
