import React from 'react'

export const ShortArrow = ({ filled, direction, scroll }) => {
  const right = direction === 'right'

  return (
    <svg
      onClick={scroll}
      width='61'
      height='61'
      viewBox='0 0 61 61'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      transform={`${right ? 'rotate(180)' : 'rotate(0)'}`}
    >
      <path
        d='M36.6533 53.6832L30.4455 59.8911L0.999952 30.4455L30.4455 1L36.6533 7.20784L17.8059 26.0553H59.891V34.8358H17.8059L36.6533 53.6832Z'
        stroke='#067462'
        strokeWidth='1.32331'
        fill={`${filled && 'var(--primary)'}`}
      />
    </svg>
  )
}
