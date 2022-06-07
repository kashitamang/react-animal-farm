import './App.css';
import { animals } from './data.js';
import Footer from '../src/components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      {
        <Footer year="2022"/>
      }
    </div>
  );
}

export default App;
