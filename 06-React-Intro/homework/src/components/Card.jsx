import React from 'react';

export default function Card(props) {
  //const = {name ,min , max , onClose ,img}
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h4>{props.name}</h4>
      <p>Min</p>
      <p>{props.min}</p>
      <p>max</p>
      <p>{props.max}</p>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
    </div>
  )
};