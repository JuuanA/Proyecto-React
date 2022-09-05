
import './App.css';
import NavBar from './components/navBar/NavBar';
import "./components/navBar/navBarstyles.css";
import "./components/CartWidget/estilocarro.css";
import "./components/itemListContainer/itemListContainerEstilo.css"
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemCount from './components/itemCount/ItemCount';
import "./components/itemCount/itemCountEstilo.css";


function App() {
  const stock = 10 
  return (
    <div className="App">
      <NavBar /> 
      <header className="App-header">
      <ItemCount  stock={stock} />
      <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;