import React from 'react';
import './Main.css';
import backgroundImg from '../../background.png';
//import animal card here 
import Animal from '../Animal/Animal.js';
//import animal data here 
import { animals } from '../../data.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        animals.map((animals, i) => <Animal
          {...animals}
          key={animals.name + i}/>)
      }

    </main>
  );
}