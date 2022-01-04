import logo from "./logo.svg";
import "./App.css";
import Name from "./NameComponent/Name.js";
import NameClass from "./NameClassComponent/NameClass.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Name firstName="Tom" />
        <NameClass firstName="Chris" />

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
