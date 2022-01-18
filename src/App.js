import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import ResidentsList from './components/ResidentsList';

const randomId = Math.floor(Math.random() * 19) + 1;

function App() {

  const [location, setLocation] = useState({});

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
    .then((res) => {
      setLocation(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Rick and Morty Wiki</h1>
      <SearchBox />
      <h2>{location.name}</h2>
      <ResidentsList location={location} />
    </div>
  );
}

export default App;
