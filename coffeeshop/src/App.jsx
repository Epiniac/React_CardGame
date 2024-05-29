import React from 'react';
import Glass from './components/Glass'
import './App.css'

function App() {
  return (
    <div>
      <Glass water={30} coffee={20} milk={50} />
    </div>
  );
};

export default App;