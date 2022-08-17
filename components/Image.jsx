import React from 'react'

function Image() {
  return (
    <div>
        <img src={
        new URL(
          `../public/svg/${planet}.svg`)}></img>
    </div>
  )
}

export default Image