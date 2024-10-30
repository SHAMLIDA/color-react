import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', textAlign: 'center', padding: '20px' }}>
      <h1>Click a button to change background color</h1>
      <button style={{ backgroundColor: 'pink', border: '2px solid pink' }} onClick={() => setBgColor('pink')}>pink</button>
      <button style={{ backgroundColor: 'lightblue', border: '2px solid lightblue' }} onClick={() => setBgColor('lightblue')}>Light Blue</button>
      <button style={{ backgroundColor: 'lightgreen', border: '2px solid lightgreen' }} onClick={() => setBgColor('lightgreen')}>Light Green</button>
      <button style={{ backgroundColor: 'red', border: '2px solid red' }} onClick={() => setBgColor('red')}>Red</button>
      <button style={{ backgroundColor: 'yellow', border: '2px solid yellow' }} onClick={() => setBgColor('yellow')}>Yellow</button>
    </div>
  );
}

export default App;

