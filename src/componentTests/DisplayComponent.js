import '../App.css';
import React from 'react';

function DisplayComponent(props) {

  return (
        <div>
         {props.subIndice} -- Contador con app modularizada: {props.contador}
        </div>
  );
}

export default DisplayComponent;