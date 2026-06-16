import { SeleccionProvider } from './context/seleccion_context';
import ListaPreseleccion from './pages/lista_preseleccion';
import ListaSeleccionFinal from './pages/lista_seleccion_final';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <SeleccionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ListaPreseleccion />} />
          <Route path="/final" element={<ListaSeleccionFinal />} />
        </Routes>
      </Router>
    </SeleccionProvider>
  );
}

export default App