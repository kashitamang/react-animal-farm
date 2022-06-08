import React from 'react';
import Animal from '../Animal/Animal.js';
import '../Animal/Animal.css';

export default function AnimalList({ animals }) {
  return (
    <div className="animal-list">
      {
        animals.map((animal, i) => <Animal{...animal}key={animal.name + i}/>)
      }
    </div>
  );
}