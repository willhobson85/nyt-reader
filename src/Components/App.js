import './App.css';
import React, {useState, useEffect} from 'react';
const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [section, setSection] = useState([])

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`)
    .then(response => response.json())
    .then(json => setSection(json))
    console.log(section)
  }, [])

  return (
    <div className='App'>
      <div className='Header'>
        <h1>NYT Top Stories</h1>
      </div>
    </div>
  );
}

export default App;
