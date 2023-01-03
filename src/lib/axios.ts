import axios from 'axios'

export const user = axios.create({
  baseURL: 'https://api.github.com',
})

export const blog = axios.create({
  baseURL: 'https://api.github.com/search/issues',
})

export const post = axios.create({
  baseURL: 'https://api.github.com/repos/',
})
