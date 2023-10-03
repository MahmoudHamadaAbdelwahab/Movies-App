import React , {useEffect, useState} from 'react'
import {Row,Col} from 'react-bootstrap';
import {Link , useParams} from  'react-router-dom'
import axios from 'axios';
 const MovieDetails = () => {

    const [movie , setMovie] = useState([]);
    const param = useParams();
    console.log(param.id)

      // get all movies by axios
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=9937b404f58789c54dc8294e781aec53`);
        setMovie(res.data);
   }

   useEffect(()=>{
    getMovieDetails();
   },[])
  return (
    <div>
        <Row className='justify-content-center'>
            <Col md="12" ms="12" sm="12" className='mt-4'>
            <div className='card-details'>
                <div>
                   <img className='card-img' src={ `https://image.tmdb.org/t/p/w500/` +  movie.backdrop_path} alt='notfound'/>
                </div>
                <div>
                    <p className='card-text-details border-bottom'> name the movie : {movie.title} </p>
                    <p className='card-text-details border-bottom'> date the movie : {movie.release_date} </p>
                    <p className='card-text-details border-bottom'> evaluation : {movie.vote_count} </p>
                    <p className='card-text-details border-bottom'> average : {movie.vote_average} </p>
                </div>
            </div>
            </Col>
        </Row>

        
        <Row className='justify-content-center'>
            <Col md="12" ms="12" sm="12" className='mt-4'>
                <div className='card-details d-flex align-item-center'>
          
                    <div className='text-end p-4'>
                        <p className='card-text-details border-bottom'> {movie.overview} </p>
                    </div>

                    <div className='text-end p-4'>
                        <p className='card-text-details border-bottom'> movie story </p>
                    </div>
                </div>
            </Col>
        </Row>

        <Row className='justify-content-center'>
            <Col md="12" ms="12" sm="12" className='mt-4 d-flex justify-content-center'>
               <Link to="/">
               
                <button 
                style={{backgroundColor:"red" , border:"none"}} 
                className='btn btn-primary mx-2'
                >Homepage</button>

               </Link>

               <a href={movie.homepage}>
                    <button 
                    style={{backgroundColor:"red" , border:"none"}} 
                    className='btn btn-primary'
                    >watching a movie</button>
                </a>
            </Col>
        </Row>




    </div>


    )
}

export default MovieDetails;
