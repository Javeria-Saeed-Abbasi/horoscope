import axios from 'axios'

export default axios.create({
  baseURL: 'https://aztro.sameerkumar.website?sign=<sign>&day=<day>',
})