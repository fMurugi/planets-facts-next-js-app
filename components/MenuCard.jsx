import React from 'react'
import styles from '../styles/Menu.module.css'
import LongMenu from './LongMenu'

function Menu({ChosenClickHandler, selectedOption}) {
  return (
    <div className = {styles.menu}>
        <LongMenu selectedPlanet={selectedOption} ChosenClickHandler={ChosenClickHandler} />
        <h1 className={styles.title}>The Planets</h1>
    </div>
  )
}

export default Menu