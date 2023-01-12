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
  }, []);

  const filteredStories = () => {
    const filtered = stories.filter((story) => {
      return !story.title.includes('?')
    })
    return filtered
  }
  const myStories = filteredStories()

  return (
    <div className='App'>
      <div className='Header'>
        <h1>NYT Top Stories</h1>
      </div>
        <Switch>
          <Route exact path='/'>
            <div className='stories'>
              {myStories.length === 0 ? <p>Loading stories... </p> : <TileContainer stories={myStories} />}
            </div>
          </Route>
          <Route path='/:title' 
            render={({match}) => {
              const showStory = myStories.find((article) => {
              return article.title === match.params.title})
            return <DetailedPage {...showStory} />
          }} />
        </Switch>
    </div>
  );
}

export default App;
