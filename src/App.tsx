import Sidenav from './Components/Sidenav';
import Header from './Components/Header';
import Resumo from './Pages/Resumo';
import Vendas from './Pages/Vendas';
import Venda from './Pages/Venda';

import { DataContextProvider } from './Context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./Style.css"

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div>
          <Sidenav /> 
            <main>
              <Header />
              <Routes>  
                <Route path="/" element={<Resumo />}/> 
                <Route path="/vendas" element={<Vendas />}/>    
                <Route path="/vendas/:id" element={<Venda />}/>          
              </Routes>              
            </main>    
        </div>
      </DataContextProvider> 
    </BrowserRouter>         
  );
}

export default App
