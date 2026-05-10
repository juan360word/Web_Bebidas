
import {Outlet} from 'react-router-dom'
import { Header } from '../Component/Header'
export const HeaderLayout = () => {
  return (
    <>
    <Header/>
    <main className=' container mx-auto py-26'>
      <Outlet/>
    </main>
    
    </>
  )
}
