import './App.css';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container" id="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">  
            <Weather />
          </div>  
        </div>
          <footer>
            <a href="https://github.com/staceyowen/weather-react" target="_blank" rel="noreferrer">
              Open-source code{" "}
            </a>by Stacey Owen
          </footer>
      </div>
    </div>
  );
}
