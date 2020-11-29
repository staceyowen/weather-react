import './App.css';
import "./styles.css";
import Search from "./Search.js";
import Footer from "./Footer";



function App() {
  return (
    <div className="App">
      <div class="container" id="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">  
            <Search />
          </div>  
        </div>
          <Footer />
      </div>
    </div>
  );
}

export default App;
