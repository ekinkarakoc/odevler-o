import Counter from "./components/Counter";
import "./App.css";

function App() {
  const selam = "aliooooo";
  return (
    <div className="App">
      <header className="App-header">
        <Counter selam={selam} />
      </header>
    </div>
  );
}

export default App;
