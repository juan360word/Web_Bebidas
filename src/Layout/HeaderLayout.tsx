
import {Outlet} from 'react-router-dom'
import { Header } from '../Component/Header'
import { Modal } from '../Component/Modal'
import { useEffect } from 'react'
import { useAppStore } from '../Stores/StoreZustand'

export const HeaderLayout = () => {

  const Stoge = useAppStore((item) => item.localfromStorage)

  useEffect(() => {
    Stoge()
  }, [Stoge])
  
  return (
    <>
    <Header/>
    <main className=' container mx-auto py-26'>
      <Outlet/>
    </main>
    <Modal/>
    </>
  )
}
