import axios from 'axios';



// base url

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/"
})

export default instance;