import React from 'react';
import s from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input className={s.input} type="text" placeholder='Ciudades'/>
      <button className={s.button} onClick={() => props.onSearch('buscando...')}>agregar</button>
    </div>
  )
};