

// Importaciones 
import {BrowserRouter,Routes,Route} from 'react-router-dom' // Importacion de router (para que se pueda navegar en diferentes paginas)
import { HeaderLayout } from './Layout/HeaderLayout.tsx' // Se importa ya que este tiene el Header que se repite en las 2 paginas (o se repetira varias veces)
import {lazy,Suspense} from 'react' // Esto se importa ya que ayuda a renderizar o a mejorar la carga de las paginas, ya que carga que el usuario visita (usarlo)


// Estos son los imports de los componentes de las paginas, usando lazy
// Asi es para usarlo con Suspense
const PagFavorito = lazy(() => import('./Pages/Favoritos.tsx')) 
const PagPrincipal = lazy(() => import('./Pages/principal.tsx'))

//
const AppRouter = () => {
  return (
    <BrowserRouter> {/* Se pone para que se pueda ir a la pagina sin nececidad de recargarla (obligatorio para usarlo con React Router) */}
        <Routes> {/* Esta ayuda a renderizar la pagina con la que coincide el url (obligatiorio tambien) */}
          <Route element={<HeaderLayout/>}> {/* Esto se coloco ya que el LAYOUT se usa para poner las cosas que se repetiran en varias paginas => Ejemplo Header  */}
            <Route path='/' element={ 
              <Suspense>
                <PagPrincipal/>
              </Suspense>
              } index/>               {/* Aca juega algo importante el Route con Suspense,
                                      donde el route tendra el path que es el identificacor de la pagina ( / ) siempre sera principal
                                      en el element ira el JDX ELEMENT que sera el del componente y el Suspense es un limite de carga
                                      que ayuda a mostrar un contenido mientras el lazy esta descargandose (SIEMPRE PONER INDEX EN EL / )  
                                      */}
            <Route path='/Favoritos' element={
              <Suspense fallback='Cargando...'>
                <PagFavorito />
              </Suspense>
            }/>
          </Route> 
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter