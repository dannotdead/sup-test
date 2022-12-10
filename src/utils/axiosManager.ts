import axios from 'axios'
import { Supplement } from '../redux/slices/supplementsSlice'

type SupplementsResponse = {
  PartnerLogo: string
  SupplementsList: Supplement[]
}

export const getSupplementsList = async (
  baseURL = ''
): Promise<SupplementsResponse> => {
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
