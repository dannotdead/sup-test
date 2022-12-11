import React, { MouseEvent } from 'react'

export const handleOnMouseEnter = (
  event: MouseEvent,
  setState: React.Dispatch<React.SetStateAction<{ [name: string]: boolean }>>
): void => {
  const name: string =
    (event.target as HTMLButtonElement).getAttribute('name') || 'name'
  setState({ [name]: true })
}

export const handleOnMouseLeave = (
  event: MouseEvent,
  setState: React.Dispatch<React.SetStateAction<{ [name: string]: boolean }>>
): void => {
  const name: string =
    (event.target as HTMLButtonElement).getAttribute('name') || 'name'
  setState({ [name]: false })
}
