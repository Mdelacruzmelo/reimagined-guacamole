import axios from 'axios'

const AxiosNaptilus = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`
})

export default AxiosNaptilus
