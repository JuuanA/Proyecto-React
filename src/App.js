import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/NavBar';
import "./components/navBar/navBarstyles.css";
import "./components/CartWidget/estilocarro.css";
import "./components/itemListContainer/itemListContainerEstilo.css"
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <ItemListContainer greeting='Aprovecha las ofertas!' />
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;