import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaPrincipal from './components/pagina_principal/pagina_principal'
import Administracion from './components/administracion/administracion'
import InformacionGeneral from './components/informacion_general/informacion_general'
import Portafolio from './components/portafolio/portafolio'
import Usuarios from './components/usuarios/usuarios'






const App = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPrincipal/>}></Route>
        <Route path='/administracion' element={<Administracion/>}></Route>
        <Route path='/informacionGeneral' element={<InformacionGeneral/>}></Route>
        <Route path='/portafolio' element={<Portafolio/>}></Route>
        <Route path='/usuarios' element={<Usuarios/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
