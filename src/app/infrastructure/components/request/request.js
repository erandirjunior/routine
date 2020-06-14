import axios from 'axios'

const get = (url, config = {}) => axios.get(`${process.env.API}/${url}`, config)

const post = (url, data = {}, config = {}) => {
  return axios.post(`${process.env.API}/${url}`, data, config)
}

const put = (url, data = {}, config = {}) => {
  return axios.put(`${process.env.API}/${url}`, data, config)
}

const del = (url, data = {}, config = {}) => {
  return axios.delete(`${process.env.API}/${url}`, data, config)
}

export { get, post, put, del }
