import './App.css';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Search";
import Footer from "./Footer";



export default function App() {
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
