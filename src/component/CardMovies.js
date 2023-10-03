import React from 'react'
import {Col} from "react-bootstrap"
import {Link} from  'react-router-dom'

 const CardMovies = ({Mov}) => { 
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
       
        <Link to={`/movie/${Mov.id}`}>
             <div className='card'>
                <img src={ `https://image.tmdb.org/t/p/w500/` +  Mov.backdrop_path} className='card-image' alt="hu"/>
                <div className='card-overlay'>
                    <div className='overlay_text text-center w-100 p-2'>
                        <p> cast away :- {Mov.original_title} </p>
                        <p> Release Date : {Mov.release_date} </p>
                        <p> Genre : {Mov.vote_count} </p>
                        <p> Rating : {Mov.vote_average} </p>
                    </div>
                </div>
            </div>
       </Link>
       
    </Col>
  );
}


export default CardMovies;
