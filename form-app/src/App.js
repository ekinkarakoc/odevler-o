import logo from "./logo.svg";
import "./App.css";

function App() {
  const ekin = "selam";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>selam {ekin} naber</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react with me hi hello
        </a>
      </header>
    </div>
  );
}

export default App;
