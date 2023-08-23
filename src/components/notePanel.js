import React from "react";

import 'bootswatch/dist/flatly/bootstrap.css'

import Note from './note'

import NoteService from "../app/service/noteService";

import Card from "./card";

import {successMessage, errMessage, warningMessage} from '../components/toastr'

class NotePanel extends React.Component {

  inputTitle = ''
  inputText = ''
  cardProperties = null

  state = {
    notes: [],
    id : 0,
    title : '',
    text : ''
  }

  constructor(){
    super();
    this.service = new NoteService()
  }

  prepareUpdate = (buttonId) => {

    if (buttonId == this.state.id){
      const note = {
        id: this.state.id,
        titulo: this.state.title,
        texto: this.state.text,
      }

      this.service.update(note).then(response => {
        successMessage("Nota atualizada com sucesso!", 300000)
      }).catch(error => {
        errMessage(error, 300000)
      })
    }
    else {
      warningMessage("Você não alterou as informações desta nota!", 300000)
    }
  }

  prepareDelete = (buttonId) => {

    const noteId = parseInt(buttonId)

    this.service.remove(noteId).then(response => {
      successMessage("Nota removida com sucesso!", 300000)
    }).catch(error => {
      errMessage(error, 300000)
    })
    window.location.reload()
  }

  chargeNotes = () => {
    try {
      if (this.state.notes[0] == null) {
        this.service.view().then(response => {
          this.setState({
            notes: response.data
          })
        })
      }
    } catch (error) {
      errMessage(error, 300000)
    }
  }

  setVariables = (defaultValue, value) => {
    this.state.notes.map((note, index) => {
      if (note.titulo == defaultValue){
        this.setState({
          id: note.id,
          title : value,
          text : note.texto
        })
      }
      else if (note.texto == defaultValue){
        this.setState({
          id: note.id,
          title : note.titulo,
          text : value
        })
      }
    });
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
                    <Note htmlFor="idField">
                    <label className="form-label" htmlFor="noteIdLabel">Sequência</label>
                    <input className="form-control" id="inputId" type="text" defaultValue={note.id} disabled={true}>
                    </input>
                    </Note>
                    <Note htmlFor="inputTitle">
                    <label className="form-label" htmlFor="noteTitleLabel">Título</label>
                    <input type="title" 
                          className="form-control"
                          id="inputTitle"
                          name="title"
                          onChange={e => this.setVariables(e.target.defaultValue, e.target.value)}
                          defaultValue={note.titulo}
                          ref={(inputTitle) => {this.inputTitle = inputTitle}}>
                          </input>
                    </Note>
                    <Note htmlFor="inputText">
                    <label className="form-label" htmlFor="noteTextLabel">Texto</label>
                    <textarea type="text" 
                          className="form-control"
                          id="inputText"
                          name="text"
                          onChange={e => this.setVariables(e.target.defaultValue, e.target.value)}
                          defaultValue={note.texto}
                          ref={(inputText) => {this.inputText = inputText}}>
                          </textarea>
                    </Note>
                    <button id={note.id} onClick={e => this.prepareUpdate(e.target.id)} 
                      type="button" className="btn btn-primary">Salvar</button>
                    <button id={note.id} onClick={e => this.prepareDelete(e.target.id)} 
                      type="button" className="btn btn-danger">Excluir</button>
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