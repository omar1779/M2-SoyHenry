import React from 'react';
import './Cards.css';
import { useSelector } from 'react-redux';
import Card from './Card.jsx';

export default function Cards({ onClose}) {
  const cities = useSelector((state) => state.allClima)
  console.log(cities,"useSelector")
  return (
    <>{cities.length !==0 ?
      <div className='cards'>
      {cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          id={c.id}
          onClose={() => onClose(c.id)}
        /> )}
      </div>
    : <div>
        <h1>Bienvenido al ClimApp , para buscar una ciudad o paise , utiliza el buscador :)</h1>
      </div>
    }
      </>
  );
}
