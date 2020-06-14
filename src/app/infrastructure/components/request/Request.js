import axios from 'axios'

export default class Request {
  static get (url, config = {}) {
    return axios.get(`${process.env.API}/${url}`, config)
  }

  static post (url, data = {}, config = {}) {
    return axios.post(`${process.env.API}/${url}`, data, config)
  }

  static put (url, data = {}, config = {}) {
    return axios.put(`${process.env.API}/${url}`, data, config)
  }

  static delete (url, data = {}, config = {}) {
    return axios.delete(`${process.env.API}/${url}`, data, config)
  }
}
