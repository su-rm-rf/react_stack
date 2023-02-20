import axios from 'axios'

export const multiply = (a, b) => {
  return a * b
}

export const fetchData = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/123')
}