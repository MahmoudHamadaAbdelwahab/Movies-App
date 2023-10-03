import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {Container , Col , Row} from "react-bootstrap";
import { getAllMovie , getMovieSearch } from '../Redux/Actions/movieAction';

const NavBar = () => {

    const onSearch=(word)=>{
        search(word)
    }

  const dispatch = useDispatch();
  
      // search const
  const search = async (word) => {
    if(word === ""){
      dispatch(getAllMovie())
    }else{
      dispatch(getMovieSearch(word))
      // const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9937b404f58789c54dc8294e781aec53&&query=${word}&language`);
    }
 }
  return (
        <div className='navbar'>
            <Container>
                    <Col xs="2" lg="1"> 
                      <a href="/" className='movies'>
                        Movies
                      </a>
                    </Col>

                    <Col xs="10" lg="11">
                        <div className='search'>
                            <i className='fa fa-search'></i>
                            <input onChange={(e)=> onSearch(e.target.value)} type="text" className='form-control' placeholder='search'/>
                        </div>
                    </Col>

            </Container>
        </div>
      );
    }
    

export default NavBar;
