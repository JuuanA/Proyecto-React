import './App.css';
import NavBar from './components/navBar/NavBar';
import "./components/navBar/navBarstyles.css";
import "./components/CartWidget/estilocarro.css";
import "./pages/itemListContainer/itemListContainerEstilo.css"
import '../src/components/itemDetail/ItemDetailEstilo.css';
import ItemListContainer from './pages/itemListContainer/itemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/itemDetailContainer'
/* import ItemCount from './components/itemCount/ItemCount'; */
import "./components/itemCount/itemCountEstilo.css";
import { BrowserRouter , Routes , Route } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>  
      <Route path='/' element={<ItemListContainer />} />
      <Route path="details/:id" element={<ItemDetailContainer/> } />
      <Route path="category/:categoryName" element={<ItemListContainer/>} /> 
    </Routes>
{/*     <ItemCount/> */}
    </BrowserRouter>
  )
}

export default App;