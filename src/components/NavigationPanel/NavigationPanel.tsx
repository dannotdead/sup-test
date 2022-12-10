import React from 'react'
import LogoColored from '../../assets/svg/LogoColored.svg'
import './styles.scss'

const NavigationPanel: React.FC = () => {
  return (
    <nav>
      <div className='top-container'>
        <img className='logo' src={LogoColored} alt='' />
        <div className='top-container__collapse-btn'>
          <div className='top-container__collapse-btn__icon' />
        </div>
      </div>

      <ul>
        <li>
          Каталог
          <ul>
            <li>Anti-age</li>
            <li>Антистресс</li>
            <li>Антиоксиданты</li>
            <li>Женское здоровье</li>
            <li>Здоровый сон</li>
            <li>Кожа, волосы, ногти</li>
            <li>Крепкий иммунитет</li>
            <li>Мужское здоровье</li>
            <li>Омега, жирные кислоты</li>
            <li>Память и внимание</li>
            <li>Похудение и стройность</li>
            <li>Спокойствие и фокус</li>
            <li>Суставы и связки</li>
          </ul>
        </li>
        <li>Нутрициологи</li>
        <li>Документы</li>
      </ul>
    </nav>
  )
}

export default NavigationPanel
