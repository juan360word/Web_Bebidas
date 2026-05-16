
import { useEffect, useMemo } from 'react'
import {Link, NavLink,useLocation} from 'react-router-dom'
import { useAppStore } from '../Stores/StoreZustand'

export const Header = () => {
  const imagen = '/Logov3.png'
  const {pathname} = useLocation()
  const Api = useAppStore((item) => item.fetchApiCategorias)

  useEffect(() => {
    Api()
  },[])


  const Home = useMemo(() => pathname === '/' ,[pathname])
  return (
    <>
         <header className={Home ? 'btn' : 'bg-cyan-900'}>
            <div className="mx-auto container px-5 py-16">
                    <div className="flex justify-between items-center">
                            <div>
                                    <img src={imagen} className="w-40 " alt="" />
                            </div>

                            <nav className="flex flex-col gap-4">
                                <NavLink to='/' className={({isActive}) => isActive ? 'text-4xl tracking-widest text-amber-400': 'text-4xl tracking-widest text-white'} >Inicio</NavLink>
                                <NavLink to='/Favoritos' className={({isActive}) => isActive ? 'text-4xl tracking-widest text-amber-400': 'text-4xl tracking-widest text-white'} >Favoritos</NavLink>
                                
                            </nav>
                    </div>
                    {Home && (
                      <form className='md:w-1/2 2xl:w-1/3 my-32 bg-orange-400 shadow-2xl p-10 rounded-lg space-y-8 ' >
                        <div className=''>
                          <label className='block  text-white font-extrabold text-lg' htmlFor='ingrediente'>
                            Nombre o Ingrediente

                            <input id='ingrediente'
                                  type='text'
                                  className='p-3 bg-white text-black w-full rounded-lg focus:outline-none'
                                  placeholder='Ingresa el nombre o ingrediente'
                            >
                                  
                            </input>
                          </label>
                        </div>

                        <div className='  '>
                          <label className='block text-white font-extrabold text-lg' htmlFor='ingrediente'>
                            Categoria

                            <select id='ingrediente'
                                 
                                  className='p-3 w-full  bg-white text-black rounded-lg focus:outline-none'
                                  
                            >
                                 <option value=""> Selecciona </option> 
                            </select>
                          </label>
                        </div>

                        <input type="submit" value="Buscar" className=' bg-white text-black rounded-lg w-full
                          cursor-pointer text-lg  hover:bg-amber-950 hover:text-white
                        ' />

                      </form>
                    )}
            </div>

         </header>
    </>
  )
}
