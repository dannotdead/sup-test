import React from 'react'
import { useAppSelector } from '../redux/hook'

const SupplementsList = () => {
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
