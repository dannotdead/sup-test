import React from 'react'
import { Supplement } from '../../redux/slices/supplementsSlice'
import './styles.scss'

interface SupplementProps {
  supplement: Supplement
}

const SupplementsListItem: React.FC<SupplementProps> = ({ supplement }) => {
  return (
    <tr className='list-item'>
      <td>
        <img src={supplement.Picture} alt='' className='list-item__logo' />
        <span>{supplement.GoodsCommercialName}</span>
      </td>
      <td>{supplement.CommercialDescription}</td>
      <td className='list-item__text-bold'>{supplement.CurrentPrices}</td>
      <td>
        <button className='list-item__button'>Добавить</button>
      </td>
    </tr>
  )
}

export default SupplementsListItem