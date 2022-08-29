import logo from './logo.svg';
import './App.css';
/* import boton from './components/boton/boton'; */
import NavBar from './components/navBar/NavBar';
import "./components/navBar/navBarstyles.css";

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;

