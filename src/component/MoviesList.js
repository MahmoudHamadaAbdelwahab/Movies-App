import React , {useEffect , useState} from 'react'
import {Row} from "react-bootstrap"
import CardMovies from "./CardMovies"
import PaginationComponent from './PaginationComponent'
import { useDispatch , useSelector } from "react-redux";
import {getAllMovie} from "../Redux/Actions/movieAction"


{/* GetPage in PaginationComponent */}
const MoviesList = ({ GetPage , PageCount}) => {
  const [movies,setMovies] = useState([]);
  // const [PageCount,setPageCount] = useState(0);

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getAllMovie());
  },[])
  
  const dataMovies = useSelector((state) => state.movies)
  
  useEffect (() => {
    setMovies(dataMovies)
 }); 
  
  return (
    <Row className="mt-3">

    {
      movies.length >= 1 ?(
        movies.map((mov)=>{
          return(
            <CardMovies key={mov.id} Mov={mov}/>
          )
        })
      ): <h1 className='text-center'>not found this movies...</h1>
    }

    {movies.length >= 1 ?(

    <PaginationComponent GetPage={GetPage} PageCount={PageCount}/>
  
    ):null}

    </Row>
    )
}

export default MoviesList;
