import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState(1);
  const [option, setOption] = useState('0');
  return (
    <div className="App">
      <h2> Page {page} </h2>
      <div>
        <button onClick= { () => setPage(Math.max(1, page -1))}> Previous </button>
        <button onClick= { () => setPage(Math.max(1, page +1))}> Next </button>
      </div>

      <h3> Selected:{option} </h3>
      <select onChange={(eve) => setOption(eve.target.value)}>
        <option value="most popular">most popular</option>
        <option value="most viewed">most viewed</option>
        <option value="recent added">recent added</option>
      </select>

    </div>
  );
}

export default App;
