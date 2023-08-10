import React from "react";
import NavBar from '../components/navbar'
import NotePanel from '../components/notePanel'

class Home extends React.Component{
  render(){
    return(
      <div>
        <NavBar/>
        <NotePanel/>
      </div>
    ) 
  }
}

export default Home 