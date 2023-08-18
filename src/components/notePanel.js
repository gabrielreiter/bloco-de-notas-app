import React from "react";

import 'bootswatch/dist/flatly/bootstrap.css'

import Note from './note'

import NoteService from "../app/service/noteService";

import Card from "./card";

import {successMessage, errMessage} from '../components/toastr'

class NotePanel extends React.Component {

  state = {
    notes: [],
    title : '',
    text : ''
  }

  constructor(){
    super();
    this.service = new NoteService()
  }

  prepareUpdate = () => {

    const note = {
      titulo: this.state.title,
      texto: this.state.text,
      dataAtualizacao: null
    }

    this.service.update(note).then(response => {
      successMessage("Nota atualizada com sucesso!")
    }).catch(error => {
      console.log(error)
    })
  }

  prepareDelete = () => {

    const note = {
      titulo: this.state.title,
      texto: this.state.text,
      dataAtualizacao: null
    }

    this.service.remove(note).then(response => {
      successMessage("Nota removida com sucesso!")
    }).catch(error => {
      console.log(error)
    })
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

  render() {
    return (
      <div className="container" style={{paddingTop: "100px"}}>
        {this.chargeNotes()}
        {this.state.notes.map((note, index) => {
          return (
            <Card title={note.titulo}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <Note htmlFor="inputTitle">
                    <input type="title" 
                          className="form-control"
                          id="inputTitle"
                          name="title"
                          onChange={e => this.setState({title: e.target.value})}
                          defaultValue={note.titulo}>
                          </input>
                    </Note>
                    <Note htmlFor="inputText">
                    <textarea type="text" 
                          className="form-control"
                          id="inputText"
                          name="text"
                          onChange={e => this.setState({title: e.target.value})}
                          defaultValue={note.texto}>
                          </textarea>
                    </Note>
                    <button onClick={this.prepareUpdate} type="button" className="btn btn-primary">Salvar</button>
                    <button onClick={this.prepareDelete} type="button" className="btn btn-danger">Excluir</button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default NotePanel