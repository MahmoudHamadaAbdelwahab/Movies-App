import React , {useEffect, useState}from 'react'
import {pagination} from "react-bootstrap"
import ReactPaginate from 'react-paginate'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import {getPage} from "../Redux/Actions/movieAction"
 const PaginationComponent = () => {

  const [PageCount , setPageCount] = useState(0)

  const dispatch = useDispatch();

  const Pages = useSelector((state) => state.pageCount)

  useEffect(()=>{

    setPageCount(Pages);

  },[])

  // get current page
  
  const handlePageClick =(data)=>{
    dispatch(data.selected + 1)

  }

  return(
    <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={PageCount}
    previousLabel="< previous"

    containerClassName={'pagination justify-content-center p-3'}
    // can call className from index.css
    pageClassName={'page-item'}
    pageLinkClassName={'page-link'}
    previousClassName={'page-item'}
    nextClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-item'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}
  />
  )
}

export default PaginationComponent;