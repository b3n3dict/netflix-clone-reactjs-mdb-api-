import React, { useEffect, useState } from 'react'
import axios from '../axios'
import './Row.css'
const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies,setMovies] = useState([])


  useEffect(()=>{
     const fetchData =async()=>{
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results)
     }
     fetchData()
  },[fetchUrl])

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
            {movies.map((movie)=>(
               <img key={movie.id}
               className={`row_poster ${isLargeRow && "row_posterLarge"}`}
               src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={movie.name} />
            ))}
            </div>
           
        </div>
    )
}

export default Row
