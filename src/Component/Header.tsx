
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
                                <Link to='/' className='text-white text-2xl '  >Inicio</Link>
                                <Link to='/favoritos' className='text-white text-2xl'  >Favoritos</Link>

                            </nav>
                    </div>
            </div>

         </header>
    </>
  )
}
