

// Importaciones

import {Outlet} from 'react-router-dom' // Se importa para que los componentes que son hijos y los renderice
import { Header } from '../Component/Header' // Se importo el componete Header
import { Modal } from '../Component/Modal' // se Importo el componente Modal
import { useEffect } from 'react' // se importo el estado effect ya que este ayudara a llamar al LocalStorage (guardar informacion)
import { useAppStore } from '../Stores/StoreZustand' // Se importo el hook que se creo con Zustand

export const HeaderLayout = () => { //Esto se llamara en el Router.tsx para que se pueda usar en todos los componentes

  const Stoge = useAppStore((item) => item.localfromStorage) // llamamos al hook de appstore para que retorne la informacion que se va a usar

  useEffect(() => {
    Stoge()
  }, [Stoge]) // Para llamar al LocalStorage
  
  return (
    <>
    <Header/> {/* El componente Header */}
    <main className=' container mx-auto py-26'>
      <Outlet/>
    </main>
    <Modal/> {/* El componente Modal */}
    </>
  )
}
