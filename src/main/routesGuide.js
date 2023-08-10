import React from "react"

import Home from '../views/home'
import CreateNote from "../views/createNote"

import {HashRouter, Route, Routes} from 'react-router-dom'

function RoutesGuide(){
  return (
      <HashRouter>
        <Routes>
          <Route exact path="/createnote" element={<CreateNote/>}/>
          <Route exact path="" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
        </Routes>
      </HashRouter>
  )
}

export default RoutesGuide