import axios from 'axios'

export const getSupplementsList = async (baseURL = '') => {
  const config = {
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_AUTH_PASSWORD,
    },
  }

  const response = await axios.get(
    process.env.REACT_APP_BASE_URL || baseURL,
    config
  )
  return response.data
}
