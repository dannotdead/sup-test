import React from 'react'
import { useAppSelector } from '../../redux/hook'
import SupplementsListItem from '../SupplementsListItem'
import TableIcon from '../../assets/svg/TableIcon.svg'
import Spinner from '../Spinner'
import './styles.scss'

const SupplementsList: React.FC = () => {
  const supplementsList = useAppSelector((state) => state.supplements.list)
  const error = useAppSelector((state) => state.errors.error)

  return (
    <section>
      {supplementsList.length && !error.length ? (
        <table className='list-container'>
          <thead>
            <tr>
              <th>
                <span>Биодобавка</span>
                <img src={TableIcon} alt='' />
              </th>
              <th>Описание</th>
              <th>
                Цена за шт., ₽ <img src={TableIcon} alt='' />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {supplementsList.map((supplement, index) => (
              <SupplementsListItem key={index} supplement={supplement} />
            ))}
          </tbody>
        </table>
      ) : error ? (
        <div className='error-container'>{error}</div>
      ) : (
        <Spinner />
      )}
    </section>
  )
}

export default SupplementsList
