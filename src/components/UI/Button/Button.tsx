import React from 'react'
import './styles.scss'

type ButtonProps = {
  title: string
  click: () => void
}

const Button: React.FC<ButtonProps> = ({ title, click }) => {
  return (
    <button className='button' onClick={click}>
      {title}
    </button>
  )
}

export default Button
