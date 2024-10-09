import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState(1);
  const [option, setOption] = useState('React');
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    console.log("current page", page);
      fetch('https://api.github.com/repos/facebook/' + option +'/issues?page=' + page)
      // fetch('https://api.github.com/repos/facebook/react/issues')
        .then((res) => res.json())
        .then((data) => {
          // console.log({data});
          setIssues(data)
        })
      // console.log("page or option changed", page, option)
  }, [page, option])

  useEffect(() => {
    console.log("current option", option);
  }, [option])

  useEffect(() => {
    console.log("page loaded");
  }, [])

  return (
    <div className="App">
      <h2> Page {page} </h2>
      <div>
        <button onClick= { () => setPage(Math.max(1, page -1))}> Previous </button>
        <button onClick= { () => setPage(Math.max(6, page +1))}> Next </button>
      </div>

      <h3> Selected:{option} </h3>
      <select onChange={(eve) => setOption(eve.target.value)}>
        <option value="react">React</option>
        <option value="create-react-app">Create React App</option>
      </select>

      <ul>
        {
          issues.map(issue => {
            return (<li key={issues.title}> {issue.title} </li>)
          })
        }
      </ul>

    </div>
  );
}

export default App;
