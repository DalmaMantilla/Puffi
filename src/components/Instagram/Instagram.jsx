import React from "react";

import styles from '../Instagram/Instagram.module.scss';
import { Login } from "../Login/Login";


export const Instagram = () => {
  return (
    <div>
      <div className={styles.container}>
          <div className={styles.container__instagram}>
            <h5>INSTAGRAM</h5>
            <h1>#ESPUFI</h1>
          </div>
          
          <div className={styles.container__containerCards}>
              <div className={styles.container__card}>
                  <img src="./img-grid/img1.jpg" alt="" />
                    <div className={styles.container__card__overlay}>
                      <h2>{`> Ver mas`}</h2>
                    </div>
              </div>
              <div className={styles.container__card}>
                  <img src="./img-grid/img2.jpg" alt=""/>
                  <div className={styles.container__card__overlay}>
                    <h2>{`> Ver mas`}</h2>
                  </div>
              </div>
              <div className={styles.container__card}>
                  <img src="./img-grid/img3.jpg" alt=""/>
                  <div className={styles.container__card__overlay}>
                    <h2>{`> Ver mas`}</h2>
                  </div>
              </div>
              <div className={styles.container__card}>
                  <img src="./img-grid/img4.jpg" alt=""/>
                  <div className={styles.container__card__overlay}>
                    <h2>{`> Ver mas`}</h2>
                  </div>
              </div>
              <div className={styles.container__card}>
                  <img src="./img-grid/img5.jpg" alt=""/>
                  <div className={styles.container__card__overlay}>
                    <h2>{`> Ver mas`}</h2>
                  </div>
              </div>
              <div className={styles.container__card}>
                  <img src="./img-grid/img6.jpg" alt=""/>
                  <div className={styles.container__card__overlay}>
                    <h2>{`> Ver mas`}</h2>
                  </div>
              </div>

              <div className={styles.container__containerCards__subscribe}>
                  <h5>NEWSLETTER</h5>
                  <h1>SUSCRIBITE</h1>
                  <p>Y enterate de todas las novedades</p>
              </div>
       
              <div className={styles.container__containerCards__form} type='text'>
                <Login/>
              </div>
             
          </div>  

      </div>
    </div>
    
  )
}
