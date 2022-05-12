import '../App.css';
import React, { useState } from 'react';
import PanelComponent from './PanelComponent';
import DisplayComponent from './DisplayComponent';

function FinalAppWithJsSintax() {

  const [count, setCount] = useState(0);

  const cantidadPaneles=[1,2,3,4,5,6,7];

  return (
    <div className='App'>
        <PanelComponent actual={count} cambiar={setCount}/>
        {cantidadPaneles.map(indice=> <DisplayComponent contador={count} subIndice={indice} key={indice}/> )}
    </div>
  );
}

export default FinalAppWithJsSintax;