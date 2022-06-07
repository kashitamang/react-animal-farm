import './App.css';
//import animals data here 
import { animals } from './data.js';
//import animal card here 

import Footer from '../src/components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';

function App() {
  return (
    <div className="App">
      {
        <Header name="Kashi"/>
      }
      {
        <Footer year="2022"/>
      }
      {
        <Main animals={animals}/>
      }
    </div>
  );
}

export default App;
