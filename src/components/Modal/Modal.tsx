import React from 'react'
import { Supplement } from '../../redux/slices/supplementsSlice'
import Button from '../UI/Button'
import { useAppDispatch } from '../../redux/hook'
import { addSupplementToCourse } from '../../redux/slices/courseSlice'
import './styles.scss'

type ModalProps = {
  show: boolean
  close: () => void
  supplement: Supplement
}

const Modal: React.FC<ModalProps> = ({ show, close, supplement }) => {
  const dispatch = useAppDispatch()

  const addToCourse = () => {
    dispatch(addSupplementToCourse(supplement))
  }

  return show ? (
    <div
      className='modal'
      role='button'
      tabIndex={0}
      onClick={close}
      onKeyDown={close}
    >
      <div
        className='modal-content'
        role='presentation'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal-content__header'>
          <img src={supplement.Picture} alt='' />
          <span className='modal-content__header__name'>
            {supplement.GoodsCommercialName}
          </span>
          <span className='modal-content__header__text'>
            1 приём: 11:00 1 шт
          </span>
        </div>

        <div className='modal-content__body'>
          <div className='modal-content__controls'>controls</div>
          <div className='modal-content__button'>
            <Button title='Добавить в курс' click={() => addToCourse()} />
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
