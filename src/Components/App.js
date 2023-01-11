import './App.css';
import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import TileContainer from './TileContainer';
import DetailedPage from './DetailedPage';
const API_KEY = process.env.REACT_APP_API_KEY

const App = () => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`)
    .then(response => response.json())
    .then(data => setStories(data.results))
    console.log(stories)
  }, []);

  return (
    <div className='App'>
      <div className='Header'>
        <h1>NYT Top Stories</h1>
      </div>
        <Switch>
          <Route exact path='/'>
            <div className='stories'>
              {stories.length === 0 ? <p>Loading stories... </p> : <TileContainer stories={stories} />}
            </div>
          </Route>
          <Route path='/:title' render={({match}) => {
            const showStory = stories.find((story) => story.uri === match.params.uri)
            return <DetailedPage {...showStory} />
          }} />
        </Switch>
    </div>
  );
}

export default App;
