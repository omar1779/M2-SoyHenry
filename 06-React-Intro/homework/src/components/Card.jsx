import React from 'react';
import styles from './Card.module.css'

export default function Card(props) {
  //const = {name ,min , max , onClose ,img}
  return (
    <div className={styles.card}>
      <button className={styles.button} onClick={props.onClose}>X</button>
      <h4 className='title'>{props.name}</h4>
      <p className='parrafo'>Min</p>
      <p>{props.min}</p>
      <p className='parrafo'>max</p>
      <p>{props.max}</p>
      <img className='imagen' src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
    </div>
  )
};