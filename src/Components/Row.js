import React, { useEffect, useState } from 'react'
import axios from '../axios'
import './Row.css'
const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({title,fetchUrl}) => {
    const [movies,setMovies] = useState([])


  useEffect(()=>{
     const fetchData =async()=>{
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results)
     }
     fetchData()
  },[fetchUrl])
  console.log(movies)
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
            {movies.map((movie)=>(
               <img className="row_poster" src={`${base_url}${movie.poster_path}`} alt={movie.name} />
            ))}
            </div>
           
        </div>
    )
}

export default Row
