import './App.css';
import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import TileContainer from './TileContainer';
import DetailedPage from './DetailedPage';

const API_KEY = process.env.REACT_APP_API_KEY

const App = () => {
  const [stories, setStories] = useState([]);
  const [sortedStories, setSortedStories] = useState(false);

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
  
  const sortData = (direction) => {
    let sorted; 
    if (direction === 'down') {
        sorted = myStories.sort((a, b) =>{
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();
          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          return 0;
        })
      
    } else {
      sorted = myStories.sort((a, b) =>{
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA < titleB) {
          return 1;
        }
        if (titleA > titleB) {
          return -1;
        }
        return 0;
      })
    }

    setStories(sorted);
    setSortedStories(true);
    return sorted
  }

  return (
    <div className='App'>
      <Header sorting={sortData}/>
        <Switch>
          <Route exact path='/'>
            <div className='stories'>
              {myStories.length === 0 && !sortedStories ? <p>Loading stories... </p> : <TileContainer stories={myStories} />}
              {stories.length === 0 && sortedStories ? <p>Loading stories... </p> : <TileContainer stories={stories} />}
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
