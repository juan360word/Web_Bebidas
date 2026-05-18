
import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import { NavLink, useLocation } from 'react-router-dom' //Se llama a NAVLINK por que este ayuda a personalizarlo (si no se nececita solo seria LINK) y se usa e; useLocation para poder la ruta actual
import { useAppStore } from '../Stores/StoreZustand'
import { Notificacion,notificar,notificarError } from './Notificacion' // Se importo del Componente de Notificaciones.tsx



export const Header = () => { // Componente
  const imagen = '/Logov3.png' // Imagen del logo
  const {pathname} = useLocation() // Para saber la ruta actual
  const Api = useAppStore((item) => item.fetchApiCategorias) // Se llama la informacion de la Api qeu tiene las categorias (Tipos de bebidas)
  const Categorias = useAppStore((item) => item.categorias) // Se llama Los datos
  const SearchCosas = useAppStore((item) => item.searchCosas) // Se llama Los datos

  

  const [Search,setSearch] = useState({
    ingrediente: '',
    categoria: ''
  }) // Se realiza este UseState para que se almacene los inputs en tiempo real mientras se escribe

  const Home = useMemo(() => pathname === '/' ,[pathname]) // Memorizar para ocultar si se va para la PAG de favoritos

  useEffect(() => {
    Api()
  }, [Api]) // Se llama a API

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch((prev) => ({ ...prev, [e.target.name]: e.target.value })) // Esto lo que hace es actualizar dinamicamente la propiedad y corresponde al input
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
   {/* LO QUE HACE LO de arriba es llamar a las notificaciones y que aparezan cuando
      el usuario no haya llenado el formulario */}

  return (
    <>
        <Notificacion /> {/* Llama al componente de las notificaciones para que aparezca arriba */}
         <header className={Home ? 'btn' : 'bg-cyan-900'}>
            <div className="mx-auto container px-5 py-16">
                    <div className="flex justify-between items-center">
                            <div>
                                    <img src={imagen} className="w-40 " alt="" /> {/* LOGO */}
                            </div>

                            <nav className="flex flex-col gap-6">
                                <NavLink to='/' className={({isActive}) => isActive ? 'text-4xl tracking-widest text-amber-400': 'text-4xl tracking-widest text-white'} >Inicio</NavLink>
                                
                                <NavLink to='/Favoritos' className={({isActive}) => isActive ? 'text-4xl tracking-widest text-amber-400': 'text-4xl tracking-widest text-white'} >Favoritos</NavLink>
                                
                            </nav>
                            {/* Esto son las opciones de las paginas el cual uso isActive para poder mostrar en que pagina esta el usuario (Solo sirve con NAVLINK
                              y se uso el NAV ya que muestra los enlaces de las otras paginas (usar NAV)
                            ) */}
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
                                  onChange={handleChange} // Aca llama a la funcion del input que esta arriba
                                  value={Search.ingrediente} // Aca llama a la API
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
                                    {item.strCategory} {/* Aca se llamo a las Bebidas de la API */}
                                  </option> // ACA lo que se hace es llamar a la API, el cual este tiene las opciones de las bebidas
                                 ))}
                            </select>
                          </label>
                        </div>
                          
                        <input type="submit" value="Buscar" className=' bg-white text-black rounded-lg w-full
                          cursor-pointer text-lg  hover:bg-amber-950 hover:text-white
                        ' />
                      </form> // Boton
                    )}
            </div>
       
         </header>
        
         {/* ESTE COMPONENTE  TIENE UNOS NOMBRES RAROS QUE NO SE VEN COMO IMPORT NI COMO COMPONENTES,
          YA QUE VIENEN DE LA API (CONSOLE.LOG()) => PARA QUE SE PUEDAN VER (strCategory,) */}
         
    </>
  )
}
