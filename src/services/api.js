import axios from 'axios'

const api = axios.create({
  baseURL: ' http://www.mocky.io',
  responseType: 'json'
})

export default api