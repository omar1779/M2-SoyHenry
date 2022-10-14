import React from 'react';
import './Timer.css';

const Timer = () => {
  return (
    <div className="app">
      <div className="time">
        React-Hooks Timer App
      </div>
      <div className="row">
        <button className="button-primary">
          Inicio
        </button>
        <button className="button-secondary">
          Reset
        </button>
      </div>
      <button className="button">
          Contador
      </button>
      <input type="number" placeholder="Ingresa Segundos" autoComplete="off"/>
    </div>
  );
};

export default Timer;
