import './App.css';
import { animals } from './data.js';
import Footer from '../src/components/Footer/Footer.js';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="App">
      {
        <Header name="Kashi"/>
      }
      {
        <Footer year="2022"/>
      }
    </div>
  );
}

export default App;
