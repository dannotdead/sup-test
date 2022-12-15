import React, { useEffect } from 'react'
import { getSupplementsList } from './utils/axiosManager'
import { useAppDispatch } from './redux/hook'
import { addAllSupplements } from './redux/slices/supplementsSlice'
import { addError, resetError } from './redux/slices/errorsSlice'
import NavigationPanel from './components/NavigationPanel'
import SupplementsList from './components/SupplementsList'
import SideBar from './components/SideBar'

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    getSupplementsList()
      .then((data) => {
        dispatch(addAllSupplements(data.SupplementsList))
        dispatch(resetError())
      })
      .catch((error) =>
        dispatch(addError({ error: `Ошибка получения данных: ${error}` }))
      )
  }, [])

  return (
    <main>
      <NavigationPanel />
      <SupplementsList />
      <SideBar />
    </main>
  )
}

export default App
