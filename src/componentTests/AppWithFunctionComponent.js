import '../App.css';
import React, { useState } from 'react';

function AppWithFunctionComponent() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
        Hola LAB
        <button onClick={()=> setCount(count +1)}>
          sumar
        </button>

        <button onClick={()=>setCount(count - 1)}>
          restar
        </button>

        <button onClick={()=>setCount(0)}>
          limpiar
        </button>

        <div className="App">
          Contador con Function Component: {count}
        </div>

    </div>
  );
}

export default AppWithFunctionComponent;