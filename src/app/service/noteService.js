import ApiService from './apiservice'

class NoteService extends ApiService {

  constructor(){
    super('/api/notas')
  }

  save(note){
    return this.post('/salvar', note)
  }

  view(){
    return this.get('/visualizar')
  }

  update(note){
    return this.put('/editar', note)
  }

  remove(note){
    return this.delete('/deletar', note)
  }

}

export default NoteService