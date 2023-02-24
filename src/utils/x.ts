// import axios from 'axios'
import _ from 'lodash'

export const multiply = (a, b) => {
  return a * b
}

export const fetchData = () => {
  // return axios.get('https://jsonplaceholder.typicode.com/todos/123')
  console.log('_ is ', _)
  return _.VERSION
}