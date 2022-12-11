import React from 'react'
import AngleArrow from '../../assets/svg/AngleArrow.svg'
import './styles.scss'

const SideBar: React.FC = () => {
  return (
    <aside className='sidebar-container'>
      <div className='sidebar-container__header'>
        <img src={AngleArrow} alt='' />
        <span>Мой курс приёма</span>
      </div>

      <div className='sidebar-container__list'></div>
    </aside>
  )
}

export default SideBar
