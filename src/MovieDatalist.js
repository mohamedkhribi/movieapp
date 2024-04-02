import Cards from './Component/MovieCard';
import moviesData from './Component/Data';
import React from 'react'
import MovieCard from './Component/MovieCard';

export const MovieDatalist = ({movies,search}) => {
  return (
    <div style={{display:'flex',flexWrap:'wrap' }}>
      
      
       {movies.filter(movie=>movie.title.toUpperCase().includes(search.toUpperCase().trim())).map(movie=><MovieCard movie={movie}/>)}
       </div>
  )
}
