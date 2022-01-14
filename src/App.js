import React from 'react'
import NavBar from './components/NavBar/NavBar';
import {originals,action,trending,ComedyMovies,HorrorMovies,RomanceMovies, Documentaries} from './urls'
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost  url={originals}title='Netflix Orginals'/>
      <RowPost url={trending}title='Trending' isSmall />
      <RowPost url={action}title='Action' isSmall />
      <RowPost url={ComedyMovies}title='Comedy' isSmall />
      <RowPost url={HorrorMovies}title='Horror' isSmall />
      <RowPost url={RomanceMovies}title='Romance' isSmall />
      <RowPost url={Documentaries}title='Documentaries' isSmall />




      
    </div>
  );
}

export default App;
