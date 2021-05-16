
import axios from '../axios'
import React, { useEffect, useState } from 'react'
import requests from '../requests'
import './Banner.css'
const base_url = "https://image.tmdb.org/t/p/original/"; 
const Banner = () => {
    const [movie,setMovie] =useState([])


    useEffect(()=>{
       const fetchData =async()=>{
           const request = await axios.get(requests.fetchNetflixOriginals)
         
          setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1 )]);
          return request;
       }
       
       fetchData();
    },[])
    console.log(movie)
   
    return (
        <header className="banner" style={{backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundPosition:"center center"}} > 
        <div className="banner_contents">
        <h1>{movie?.name || movie?.title || movie?.orinal_name}</h1>
            {/* div>2 buttons  */}
            {/* description */}
        </div>
            
        </header>
    )
}

export default Banner
