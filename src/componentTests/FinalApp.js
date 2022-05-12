import '../App.css';
import React, { useState } from 'react';
import PanelComponent from './PanelComponent';
import DisplayComponent from './DisplayComponent';

function FinalApp() {

  const [count, setCount] = useState(0);
  
  return (
    <div className='App'>
        <PanelComponent actual={count} cambiar={setCount}/>
        <DisplayComponent contador={count}/>
    </div>
  );
}

export default FinalApp;