import React from 'react'
import './styles.scss'

type SelectProps = {
  options: string[]
}

const Select: React.FC<SelectProps> = ({ options }) => {
  return (
    <select className='select'>
      {options.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  )
}

export default Select
