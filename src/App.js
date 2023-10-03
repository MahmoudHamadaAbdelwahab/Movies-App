import React , { useState } from "react"
import NavBar from "./component/NavBar";
import {Container} from "react-bootstrap"
import MoviesList from "./component/MoviesList"
// import axios from "axios";
import {BrowserRouter , Routes , Route} from  'react-router-dom'

import MovieDetails from "./component/MovieDetails";

function App() {
                    // should be from api movies 
  return (
    <div className="font color-body">
          <NavBar/>

          <Container>
            <BrowserRouter>

              <Routes>
                {/* GetPage in PaginationComponent */}
                {/* it's there is found in setState  */}
                <Route path="/"  element={ <MoviesList />  }/>
                <Route path="/movie/:id" element={<MovieDetails/>} />
                
              </Routes>
                
            </BrowserRouter>
          </Container>

    </div>
  );

}

export default App;
