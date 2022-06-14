import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" placeholder='Ciudades'/>
      <button onClick={() => props.onSearch('buscando...')}>agregar</button>
    </div>
  )
};