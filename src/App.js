import './App.css';
import NavBar from './components/navBar/NavBar';
import "./components/navBar/navBarstyles.css";
import "./components/CartWidget/estilocarro.css";
import "./pages/itemListContainer/itemListContainerEstilo.css"
import '../src/components/itemDetail/ItemDetailEstilo.css';
import ItemListContainer from './pages/itemListContainer/itemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/itemDetailContainer'
import './components/itemCount/itemCountEstilo.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'; 
import { CartProvider } from './context/CartProvider.js'
import Cart from './components/cart/Cart';
import count from './components/itemCount/ItemCount'

function App() {
  return (
    <CartProvider> 
      <BrowserRouter>
      <NavBar />
      <Routes>  
        <Route path='/' element={<ItemListContainer />} />
        <Route path="details/:id" element={<ItemDetailContainer/> } />
        <Route path="category/:categoryName" element={<ItemListContainer/>} /> 
        <Route path='Cart' element={<Cart />} /> 
      </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;