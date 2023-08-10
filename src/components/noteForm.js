import React from "react";

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'

import axios from 'axios'
import Card from "./card"
import FormGroup from "./formGroup";
import NoteService from "../app/service/noteService"

class NoteForm extends React.Component {

  state = {
    title : '',
    text : ''
  }

  constructor(){
    super();
    this.service = new NoteService()
  }

  prepareCreate = () => {

    const updateTimeStamp = new Date().toLocaleString()

    const note = {
      titulo: this.state.title,
      texto: this.state.text,
      dataAtualizacao: updateTimeStamp
    }

    this.service.save(note)
  }

  cancel = () => {
    this.props.history.push('/home')
  }

  render(){
    return(
      <div className="container" style={{paddingTop: "100px"}}>
        <Card title="Criar Nota">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="Título" htmlFor="inputTitle">
                      <input type="title" 
                            className="form-control"
                            id="inputTitle"
                            name="title"
                            onChange={e => this.setState({title: e.target.value})}>
                            </input>
                </FormGroup>
                <FormGroup label="Texto" htmlFor="inputText">
                <textarea type="text" 
                      className="form-control"
                      id="inputText"
                      name="text"
                      onChange={e => this.setState({text: e.target.value})}>
                      </textarea>
                </FormGroup>
                <button onClick={this.prepareCreate} type="button" className="btn btn-primary">Salvar</button>
                <button onClick={this.cancel} type="button" className="btn btn-danger">Cancelar</button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default NoteForm