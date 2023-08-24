import Translate from "./Translate";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Translate />
        <footer>
          This project was coded by <strong>Laurel Rubel</strong> and is{" "}
          <a
            href="https://github.com/LaurelFR/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
