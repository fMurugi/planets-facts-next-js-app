import React from 'react'
import styles from '../styles/Menu.module.css'
import LongMenu from './LongMenu'

function Menu({ChosenClickHandler}) {
  return (
    <div className = {styles.menu}>
        <LongMenu ChosenClickHandler={ChosenClickHandler} />
        <h1 className={styles.title}>The Planets</h1>
    </div>
  )
}

export default Menu