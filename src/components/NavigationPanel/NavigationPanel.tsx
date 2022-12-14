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
import AntiAge from '../../assets/svg/components/AntiAge'
import Antioxidants from '../../assets/svg/components/Antioxidants'
import AntiStress from '../../assets/svg/components/AntiStress'
import WomenHealth from '../../assets/svg/components/WomenHealth'
import HealthySleep from '../../assets/svg/components/HealthySleep'
import Skin from '../../assets/svg/components/Skin'
import Immunity from '../../assets/svg/components/Immunity'
import MenHealth from '../../assets/svg/components/MenHealth'
import Omega from '../../assets/svg/components/Omega'
import Memory from '../../assets/svg/components/Memory'
import Harmony from '../../assets/svg/components/Harmony'
import Calmness from '../../assets/svg/components/Calmness'
import Joints from '../../assets/svg/components/Joints'
import './styles.scss'

const catalogList = [
  { title: 'Anti-age', icon: AntiAge },
  { title: 'Антистресс', icon: AntiStress },
  { title: 'Антиоксиданты', icon: Antioxidants },
  { title: 'Женское здоровье', icon: WomenHealth },
  { title: 'Здоровый сон', icon: HealthySleep },
  { title: 'Кожа, волосы, ногти', icon: Skin },
  { title: 'Крепкий иммунитет', icon: Immunity },
  { title: 'Мужское здоровье', icon: MenHealth },
  { title: 'Омега, жирные кислоты', icon: Omega },
  { title: 'Память и внимание', icon: Memory },
  { title: 'Похудение и стройность', icon: Harmony },
  { title: 'Спокойствие и фокус', icon: Calmness },
  { title: 'Суставы и связки', icon: Joints },
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
      <div
        className={clsx({
          'top-container': isOpenPanel,
          'top-container-minimized': !isOpenPanel,
        })}
      >
        {isOpenPanel ? (
          <img className='top-container__logo' src={LogoColored} alt='' />
        ) : null}
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

      <ul
        className={clsx({
          controls: isOpenPanel,
          'controls-minimized': !isOpenPanel,
        })}
      >
        <li className='controls__list'>
          {isOpenPanel ? <article>Каталог</article> : null}

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
                {isOpenPanel
                  ? item.title
                  : React.createElement(
                      item.icon,
                      {
                        color: activeCatalogItem === index ? 'white' : 'black',
                      },
                      null
                    )}
              </div>
            ))}
          </ul>
        </li>

        {isOpenPanel ? (
          <li className='controls__list'>
            <article>Нутрициологи</article>
          </li>
        ) : null}

        {isOpenPanel ? (
          <li className='controls__list'>
            <article>
              Документы <img src={AngleArrow} alt='' />
            </article>
          </li>
        ) : null}
      </ul>

      <div
        className={clsx({
          'bottom-container': isOpenPanel,
          'bottom-container-minimized': !isOpenPanel,
        })}
      >
        <button className='bottom-container__button'>
          <img src={LogIn} alt='' />
          {isOpenPanel ? <span>Войти</span> : null}
        </button>
      </div>
    </nav>
  )
}

export default NavigationPanel
