import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from '../axios'
import movieTrailer from 'movie-trailer';
import './Row.css'
const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies,setMovies] = useState([])
 const [trailerUrl,setTrailerUrl] = useState('')
   
   // Options for react-youtube
   const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(()=>{
     const fetchData =async()=>{
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results)
     }
     fetchData()
  },[fetchUrl])

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.descripton || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
    return (
        <div className="row">
            <h2 className="row_title">{title}</h2>
            <div className="row_posters">
            {movies.map((movie)=>(
               <img key={movie.id}
               onClick={()=>handleClick(movie)}
               className={`row_poster ${isLargeRow && "row_posterLarge"}`}
               src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={movie.name} />
            ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
