import React from 'react';
import './Main.css';
import backgroundImg from '../../background.png';
//import animal card here 
// import Animal from '../Animal/Animal.js';
//import animal data here 
// import { animals } from '../../data.js';
import AnimalList from '../AnimalList/AnimalList.js';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      <AnimalList animals={animals} />
    </main>
  );
}