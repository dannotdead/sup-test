import React, { useEffect } from 'react'
import { getSupplementsList } from './utils/axiosManager'
import { useAppDispatch } from './redux/hook'
import { addAllSupplements } from './redux/slices/supplementsSlice'
import SupplementsList from './components/SupplementsList'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    getSupplementsList()
      .then((data) => dispatch(addAllSupplements(data.SupplementsList)))
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <div>{process.env.REACT_APP_AUTH_PASSWORD}</div>
      <div>{process.env.REACT_APP_BASE_URL}</div>
      <SupplementsList />
    </>
  )
}

export default App
