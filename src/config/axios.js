import axios from 'axios'

const AxiosNaptilus = axios.create({
    // baseURL: `${process.env.REACT_APP_API_URL}`
    baseURL: "https://front-test-api.herokuapp.com/api"
})

export default AxiosNaptilus