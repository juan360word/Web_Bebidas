
import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAppStore } from '../Stores/StoreZustand'
import { Notificacion,notificar,notificarError } from './Notificacion'



export const Header = () => {
  const imagen = '/Logov3.png'
  const {pathname} = useLocation()
  const Api = useAppStore((item) => item.fetchApiCategorias)
  const Categorias = useAppStore((item) => item.categorias)
  const SearchCosas = useAppStore((item) => item.searchCosas)

  

  const [Search,setSearch] = useState({
    ingrediente: '',
    categoria: ''
  })

  const Home = useMemo(() => pathname === '/' ,[pathname])

  useEffect(() => {
    Api()
  }, [Api])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  
  const handleSumits = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (Object.values(Search).includes('')) {
      notificarError('Llene todos los espacios!')
      return
    }
    SearchCosas(Search)
    notificar('¡Contenido cargado!')
  }

  return (
    <>
        <Notificacion />
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
                      <form onSubmit={handleSumits} className='md:w-1/2 2xl:w-1/3 my-32 bg-orange-400 shadow-2xl p-10 rounded-lg space-y-8 ' >
                        <div className=''>
                          <label className='block  text-white font-extrabold text-lg' htmlFor='ingrediente'>
                            Nombre o Ingrediente

                            <input
                                  id='ingrediente'
                                  name='ingrediente'
                                  type='text'
                                  className='p-3 bg-white text-black w-full rounded-lg focus:outline-none'
                                  placeholder='Ingresa el nombre o ingrediente'
                                  onChange={handleChange}
                                  value={Search.ingrediente}
                            >
                                  
                            </input>
                          </label>
                        </div>

                        <div className='  '>
                          <label className='block text-white font-extrabold text-lg' htmlFor='categoria'>
                            Categoria

                            <select
                                  id='categoria'
                                  name='categoria'
                                  className='p-3 w-full  bg-white text-black rounded-lg focus:outline-none'
                                  onChange={handleChange}
                                  value={Search.categoria}
                            >
                                 <option value=""> Selecciona </option> 
                                 {Categorias.drinks.map(item => (
                                  <option value={item.strCategory} key={item.strCategory}>
                                    {item.strCategory}
                                  </option>
                                 ))}
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
