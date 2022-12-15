import React from 'react'

const Immunity = ({ color = 'black' }: { color?: string }) => {
  return (
    <svg
      width='22'
      height='24'
      viewBox='0 0 22 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.69565 0C3.69565 0 3.73616 0.420333 3.69565 0.922881C3.6564 1.40983 3.54108 1.97397 3.23913 2.3077C3.01457 2.5559 2.66996 2.69524 2.30011 2.76915C1.46449 2.93614 0.5 2.76915 0.5 2.76915V4.78734V10.1538C0.5 17.5385 6.43478 22.1539 11.4565 24C17.3913 22.1539 21.5 14.7693 21.5 10.1538V3.23078C21.5 3.23078 19.5519 3.12004 18.7609 2.3077C18.0873 1.61602 17.8478 0 17.8478 0H5.70063H3.69565ZM5.49099 2.21523C5.5118 2.14307 5.53063 2.07121 5.54767 2H16.3117C16.5071 2.52569 16.823 3.18443 17.328 3.70301C17.9785 4.37103 18.85 4.71655 19.5 4.90227V10.1538C19.5 11.9588 18.6584 14.5777 17.0396 17.0061C15.5719 19.208 13.6321 21.0033 11.4898 21.8664C7.01892 20.0177 2.5 16.0254 2.5 10.1538V4.765C2.67576 4.73659 2.85715 4.69846 3.0396 4.64758C3.53168 4.51035 4.19182 4.23574 4.72219 3.64954C5.15688 3.16911 5.37404 2.62076 5.49099 2.21523ZM9.89451 7.63623H12.105V10.3635H14.8682V12.5453H12.105V15.2726H9.89451V12.5453H7.13135V10.3635H9.89451V7.63623Z'
        fill={color}
        fillOpacity='0.87'
      />
    </svg>
  )
}

export default Immunity