
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Principal from './Pages/principal.tsx'

import { HeaderLayout } from './Layout/HeaderLayout.tsx'
import {lazy,Suspense} from 'react'

const PagFavorito = lazy(() => import('./Pages/Favoritos.tsx'))
const PagPrincipal = lazy(() => import('./Pages/principal.tsx'))


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<HeaderLayout/>}> 
            <Route path='/' element={
              <Suspense>
                <PagPrincipal/>
              </Suspense>
            } index/>
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