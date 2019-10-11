import React from 'react';
import './App.css';
import Componente from './Componente';
import ComponenteConProps from './ComponenteConProps';

function App() {

  let numbe = 34;


  return (
    <div className="App">
     <Componente></Componente>
     <ComponenteConProps textProp={numbe}></ComponenteConProps>
    </div>
  );
}

export default App;
