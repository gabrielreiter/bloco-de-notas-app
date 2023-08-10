import React from "react";

import 'bootswatch/dist/flatly/bootstrap.css'

import Note from './note'

import NoteService from "../app/service/noteService";

class NotePanel extends React.Component {

  state = {
    notes: []
  }

  constructor(){
    super();
    this.service = new NoteService()
  }

  chargeNotes = () => {
    try {
     this.service.view().then(response => {
        this.setState({
          notes: response.data
        })
      })
    } catch (err) {
      console.log(err)
    }
  }

  render(){
    return(
      <div onLoad={this.chargeNotes()}>

      </div>
    )
  }
}

export default NotePanel