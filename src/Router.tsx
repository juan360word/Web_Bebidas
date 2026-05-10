
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Principal from './Pages/principal.tsx'
import Favoritos from './Pages/Favoritos.tsx'
import { HeaderLayout } from './Layout/HeaderLayout.tsx'



const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<HeaderLayout/>}> 
            <Route path='/' element={<Principal/>} index/>
            <Route path='/Favoritos' element={<Favoritos/>}/>
          </Route> 
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter