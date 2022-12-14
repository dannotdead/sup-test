import React from 'react'
import './styles.scss'
import clsx from 'clsx'

type ButtonProps = {
  title: string
  classNames?: string
  click: () => void
}

const Button: React.FC<ButtonProps> = ({ title, classNames, click }) => {
  return (
    <button className={clsx('button', classNames)} onClick={click}>
      {title}
    </button>
  )
}

export default Button
