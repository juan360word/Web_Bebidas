
  import {Link, NavLink} from 'react-router-dom'
  

export const Header = () => {
  const imagen = '/Logov3.png'


  return (
    <>
         <header className="bg-cyan-900">
            <div className="mx-auto container px-5 py-16">
                    <div className="flex justify-between items-center">
                            <div>
                                    <img src={imagen} className="w-40 " alt="" />
                            </div>

                            <nav className="flex flex-col gap-4">
                                <NavLink to='/' className={({isActive}) => isActive ? 'text-3xl tracking-widest text-amber-400': 'text-3xl tracking-widest text-white'} >Inicio</NavLink>
                                <NavLink to='/Favoritos' className={({isActive}) => isActive ? 'text-3xl tracking-widest text-amber-400': 'text-3xl tracking-widest text-white'} >Favoritos</NavLink>
                                
                            </nav>
                    </div>
            </div>

         </header>
    </>
  )
}
