import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> 
          Edita el js en la ruta <code>src/App.js</code> y tira rr de la pagina.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          aprende react bolo
        </a>
      </header>
    </div>
  );
}

export default App;
