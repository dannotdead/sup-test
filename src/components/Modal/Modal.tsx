import React from 'react'
import { Supplement } from '../../redux/slices/supplementsSlice'
import Button from '../UI/Button'
import { useAppDispatch } from '../../redux/hook'
import { addSupplementToCourse } from '../../redux/slices/courseSlice'
import Select from '../UI/Select'
import XMarkIcon from '../../assets/svg/XMarkIcon.svg'
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
    <div className='modal' role='button' tabIndex={0} onClick={close}>
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
          <div className='modal-content__controls'>
            <label>
              <span>Как принимать?</span>

              <Select options={['Ежедневно', 'Раз в неделю']} />
            </label>

            <label>
              <span>Сколько раз в день</span>

              <Select options={['1', '2']} />
            </label>

            <label>
              <span>Время</span>

              <input className='modal-content__controls__input' />
            </label>

            <label>
              <span>Дозировка</span>

              <Select options={['1 таблетка', '2 таблетки']} />
            </label>

            <img
              src={XMarkIcon}
              alt=''
              className='modal-content__controls__del-button'
            />
          </div>
          <div className='modal-content__button'>
            <Button title='Добавить в курс' click={() => addToCourse()} />
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
