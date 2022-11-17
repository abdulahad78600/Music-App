import axios from 'axios'
export const BASE_URL = 'https://us-central1-alphaq1---izitgood.cloudfunctions.net/' 
axios.defaults.baseURL = BASE_URL

export const postAPI = async (url, body) => {
  try {
    const res = await axios.post(url, body)
    return res
  } catch (err) {
    return err.response.data
  }
}

export const getAPI = async (url) => {
  try {
    const res = await axios.get(url)
    return res
  } catch (err) {
    return err.response.data
  }
}