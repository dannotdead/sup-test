import React from 'react'
import { useAppSelector } from '../redux/hook'

const SupplementsList: React.FC = () => {
  const supplementsList = useAppSelector((state) => state.supplements.list)

  return (
    <>
      {supplementsList.map((supplement, index) => (
        <div key={index}>{supplement.Article}</div>
      ))}
    </>
  )
}

export default SupplementsList
