import React, { useEffect } from 'react'
import { getSupplementsList } from './utils/axiosManager'

const App = () => {
  useEffect(() => {
    getSupplementsList()
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <div>{process.env.REACT_APP_AUTH_PASSWORD}</div>
      <div>{process.env.REACT_APP_BASE_URL}</div>
    </>
  )
}

export default App
