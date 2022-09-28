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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyo7g1FAEzv5p5R23BF6Nfy71thvkFzKc",
  authDomain: "coderhouse-ecommerce-a8028.firebaseapp.com",
  projectId: "coderhouse-ecommerce-a8028",
  storageBucket: "coderhouse-ecommerce-a8028.appspot.com",
  messagingSenderId: "974824047398",
  appId: "1:974824047398:web:ee3b976f9b1d7206f4f7e7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

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