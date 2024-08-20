import logo from './logo.svg';
import './App.css';

function App() {
  let myVariable = "Hey very good to see yeah"
  return (
    <div className="App">
      
      <header className="App-header">
        <div> {myVariable} </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
