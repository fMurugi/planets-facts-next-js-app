import React from 'react'
import styles from '../styles/Image.module.css'
import Image from 'next/image'


function ImageCard({planet}) {
  const prefix = "/planets-facts-next-js-app"
  return (
    <div className={styles.planetImageDiv}>
        <Image  src={
          require(`../public/svg/${planet}.jpg`)
          }/>
    </div>
  )
}

export default ImageCard