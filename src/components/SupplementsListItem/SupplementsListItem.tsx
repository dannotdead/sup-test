import React, { useState } from 'react'
import { Supplement } from '../../redux/slices/supplementsSlice'
import Modal from '../Modal'
import './styles.scss'
import Button from '../UI/Button/Button'

interface SupplementProps {
  supplement: Supplement
}

const SupplementsListItem: React.FC<SupplementProps> = ({ supplement }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <>
      <tr className='list-item'>
        <td>
          <img src={supplement.Picture} alt='' className='list-item__logo' />
          <span>{supplement.GoodsCommercialName}</span>
        </td>
        <td>
          <span>{supplement.CommercialDescription}</span>
        </td>
        <td className='list-item__text-bold'>
          <span>{supplement.CurrentPrices} ₽</span>
        </td>
        <td>
          <Button title='Добавить' click={() => setIsOpenModal(true)} />
        </td>
      </tr>

      <Modal
        show={isOpenModal}
        close={() => setIsOpenModal(false)}
        supplement={supplement}
      />
    </>
  )
}

export default SupplementsListItem
