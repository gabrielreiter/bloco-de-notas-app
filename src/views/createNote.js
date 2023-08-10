import React from "react";
import NavBar from '../components/navbar'
import NoteForm from "../components/noteForm";

class CreateNote extends React.Component{

  render(){
    return(
      <div>
        <NavBar/>
        <NoteForm/>
      </div>
    ) 
  }
}

export default CreateNote 