import React from 'react'
import { useAppSelector } from '../../redux/hook'
import SupplementsListItem from '../SupplementsListItem'
import './styles.scss'

const SupplementsList: React.FC = () => {
  const supplementsList = useAppSelector((state) => state.supplements.list)

  return (
    <section>
      <div className='list-container'>
        <table>
          <thead>
            <tr>
              <th>Биодобавка</th>
              <th>Описание</th>
              <th>Цена за шт., ₽</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {supplementsList.map((supplement, index) => (
              <SupplementsListItem key={index} supplement={supplement} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default SupplementsList