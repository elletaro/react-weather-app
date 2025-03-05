import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/elletaro"
            target="_blank"
            rel="noreferrer"
          >
            Chantelle Dlamini{" "}
          </a>{" "}
          and is hosted on{" "}
          <a href="" target="_blank" rel="noreferrer">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
