import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://localhost:8080'
})

class ApiService {

  constructor(apiurl){
    this.apiurl = apiurl
  }

  post(url, object){
    const requestURL = `${this.apiurl}${url}`
    return httpClient.post(requestURL, object)
  }

  put(url, object){
    const requestURL = `${this.apiurl}${url}`
    return httpClient.put(requestURL, object)
  }

  delete(url, object){
    const requestURL = `${this.apiurl}${url}`
    return httpClient.delete(requestURL, object)
  }

  get(url){
    const requestURL = `${this.apiurl}${url}`
    return httpClient.get(requestURL)
  }
}

export default ApiService