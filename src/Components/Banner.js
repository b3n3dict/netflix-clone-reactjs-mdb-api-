
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
     function truncate(str,n){
         return str?.length > n ? str.substr(0,n-1)+ "..." : str;
     }
    return (
        <header className="banner" style={{backgroundImage:`url(${base_url}${movie?.backdrop_path})`}} > 
        <div className="banner_contents">
        <h1 className="banner_title">{movie?.name || movie?.title || movie?.orinal_name}</h1>
           <div className="banner_buttons">
               <button className="banner_button">Play</button><button className="banner_button">My List</button>
           </div>
          <h1 className="banner_description">{truncate(movie.overview,150)}</h1>
        </div>
            <div className="banner_fadeBottom"></div>
        </header>
    )
}

export default Banner
