import React from 'react';
import styles from '../Body/Body.module.scss';


export const Body = () => {

  return (
    <div className={styles.center} >
        <h1 className={styles.center__h1}>
            ESTAR COMODO, <br/> NUNCA FUE TAN FACIL.
        </h1>
        
        <button className={styles.center__button}>
            SHOP
        </button>
        
        <div className={styles.center__radiobutton}>
          <input type="radio" name="radio-button" defaultChecked />
          <input type="radio" name="radio-button" />
          <input type="radio" name="radio-button" />
        </div>

    </div>
  )
}
