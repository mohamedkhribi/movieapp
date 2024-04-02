import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cards from './Component/MovieCard';
import { MovieDatalist } from './MovieDatalist';
import { useState } from 'react';
import moviesData from './Component/Data';
import MovieCard from './Component/MovieCard';
import Navb from './Component/Navb';
import AddMovie from './Component/AddMovie/AddMovie';


function App() {

  const [movies,setMovies]=useState(moviesData)
  const [search,setSearch]=useState("")

  const Add=(newMovie)=>{
    setMovies([...movies,newMovie])

  }
  return (
    <div className="App">
       
    <Navb setSearch={setSearch}/>
   <AddMovie Add={Add}/>
   <MovieDatalist movies={movies} search={search}/>
      
    </div>
  );
}

export default App;
