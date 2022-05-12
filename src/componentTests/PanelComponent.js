import '../App.css';
import React from 'react';

function PanelComponent(props) {


  return (
    <div>
        Hola LAB
        <button onClick={()=> props.cambiar(props.actual +1)}>
          sumar
        </button>

        <button onClick={()=> props.cambiar(props.actual - 1)}>
          restar
        </button>

        <button onClick={()=> props.cambiar(0)}>
          limpiar
        </button>
    </div>
  );
}

export default PanelComponent;