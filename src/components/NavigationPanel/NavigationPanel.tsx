import React, { useState } from 'react'
import clsx from 'clsx'
import {
  handleOnMouseEnter,
  handleOnMouseLeave,
} from '../../utils/mouseHandlers'
import LogoColored from '../../assets/svg/LogoColored.svg'
import LogIn from '../../assets/svg/LogIn.svg'
import MenuIcon from '../../assets/svg/MenuIcon.svg'
import AngleArrow from '../../assets/svg/AngleArrow.svg'
import './styles.scss'

const catalogList = [
  'Anti-age',
  'Антистресс',
  'Антиоксиданты',
  'Женское здоровье',
  'Здоровый сон',
  'Кожа, волосы, ногти',
  'Крепкий иммунитет',
  'Мужское здоровье',
  'Омега, жирные кислоты',
  'Память и внимание',
  'Похудение и стройность',
  'Спокойствие и фокус',
  'Суставы и связки',
]

type CollapseTooltip = { [name: string]: boolean }

const NavigationPanel: React.FC = () => {
  const [isShowCollapseTooltip, setIsShowCollapseTooltip] =
    useState<CollapseTooltip>({})

  const [isOpenPanel, setIsOpenPanel] = useState(true)
  const [activeCatalogItem, setActiveCatalogItem] = useState(0)

  const handleClickCatalogItem = (index: number) => {
    setActiveCatalogItem(index)
  }

  return (
    <nav>
      <div className='top-container'>
        <img className='top-container__logo' src={LogoColored} alt='' />
        <button
          className='top-container__button'
          name='collapse'
          onMouseEnter={(event) =>
            handleOnMouseEnter(event, setIsShowCollapseTooltip)
          }
          onMouseLeave={(event) =>
            handleOnMouseLeave(event, setIsShowCollapseTooltip)
          }
          onClick={() => setIsOpenPanel((prevState) => !prevState)}
        >
          <img src={MenuIcon} alt='' />
        </button>

        {isOpenPanel && isShowCollapseTooltip.collapse ? (
          <div className='top-container__tooltip'>Свернуть</div>
        ) : null}
      </div>

      <ul className='controls'>
        <li className='controls__list'>
          <article>Каталог</article>

          <ul>
            {catalogList.map((item, index) => (
              <div
                key={index}
                className={clsx({
                  'active-list-item': activeCatalogItem === index,
                })}
                tabIndex={0}
                role='button'
                onClick={() => handleClickCatalogItem(index)}
                onKeyDown={() => handleClickCatalogItem(index)}
              >
                {item}
              </div>
            ))}
          </ul>
        </li>

        <li className='controls__list'>
          <article>Нутрициологи</article>
        </li>

        <li className='controls__list'>
          <article>
            Документы <img src={AngleArrow} alt='' />
          </article>
        </li>
      </ul>

      <div className='bottom-container'>
        <button className='bottom-container__button'>
          <img src={LogIn} alt='' />
          <span>Войти</span>
        </button>
      </div>
    </nav>
  )
}

export default NavigationPanel
