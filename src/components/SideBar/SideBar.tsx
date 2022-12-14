import React from 'react'
import AngleArrow from '../../assets/svg/AngleArrow.svg'
import { useAppSelector } from '../../redux/hook'
import './styles.scss'

const SideBar: React.FC = () => {
  const courseList = useAppSelector((state) => state.course.list)

  return (
    <aside className='sidebar-container'>
      <div className='sidebar-container__header'>
        <img src={AngleArrow} alt='' />
        <span>Мой курс приёма</span>
      </div>

      <div className='sidebar-container__list'>
        {courseList.map((item) => (
          <div key={item.Article}>
            <img src={item.Picture} alt='' />
            <span>{item.GoodsCommercialName}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default SideBar
