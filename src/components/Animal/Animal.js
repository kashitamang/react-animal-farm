import React from 'react';
import './Animal.css';


export default function Animal({ name, type, says }) {
  return (
    <div className="animal-card">
      <img></img>
      <p className="name">{name}</p>
      <p>{says}</p>
    </div>
  );
}