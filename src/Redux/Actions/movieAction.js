import { MovieApi , AllMovies } from "../Types/moviesType"
import axios from "axios";

export const getAllMovie = ()=>{

    return async (dispatch) =>{

        const res = await axios.get(MovieApi);
    
        dispatch ({type:AllMovies , data: res.data.results , pages: res.data.total_pages })

    }

}

// search
export const getMovieSearch = (word)=>{

    return async (dispatch) =>{

        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9937b404f58789c54dc8294e781aec53&&query=${word}&language`);
    
        dispatch ({type:AllMovies , data: res.data.results , pages: res.data.total_pages })

    }

}

// pages
export const getPage = (page)=>{

    return async (dispatch) =>{

        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9937b404f58789c54dc8294e781aec53&page=${page}`);
    
        dispatch ({type:AllMovies , data: res.data.results , pages: res.data.total_pages })

    }

}