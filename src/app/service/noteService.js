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

}

export default NoteService