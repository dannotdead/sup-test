import React from 'react'

const Calmness = ({ color = 'black' }: { color?: string }) => {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_603_1543)'>
        <path
          d='M12 21.0977C16.9706 21.0977 21 17.0682 21 12.0977C21 7.12709 16.9706 3.09766 12 3.09766C7.02944 3.09766 3 7.12709 3 12.0977C3 17.0682 7.02944 21.0977 12 21.0977Z'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 3.09766V7.09766'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 21.0977V18.0977'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M3 12.0977H7'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M21 12.0977H18'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 12.0977V12.1077'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_603_1543'>
          <rect
            width='24'
            height='24'
            fill='white'
            transform='translate(0 0.0976562)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Calmness
