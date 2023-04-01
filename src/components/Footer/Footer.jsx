import React from 'react'

import styles from '../Footer/Footer.module.scss'
import { BiShieldQuarter, BiQrScan } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { FcRating } from "react-icons/fc";



export const Footer = () => {

  return (
    <div className={styles.container}>
        <div className={styles.container__card}>
            <h1>Pufi</h1>
        </div>

        <div className={styles.container__card}>
            <div className={styles.container__text}>
                <a href="#"><p>PUFFI RAIN</p></a>
                <a href="#"><p>PUFI PUFF</p></a>
                <a href="#"><p>PUFI CART</p></a>
                <a href="#"><p>PUFI NAP</p></a>
            </div>
        </div>

        <div className={styles.container__card}>
            <div className={styles.container__text}>
                <a href="#"><p>CONTACTO</p></a>
                <a href="#"><p>AYUDA</p></a>
                <a href="#"><p>COMO COMPRAR</p></a>
                <a href="#"><p>TERMINOS & CONDICIONES</p></a>
            </div>
        </div>

        <div className={styles.container__card}>
            <div className={styles.container__text}>
                <p>COMPRA 100% SEGURA</p>
            </div>
            <div className={styles.container__buy}>
                <BiShieldQuarter/>
                <BiQrScan/>
                <p>COMPRA CON LA GARANTIA DE PUFFI</p>
            </div>
        </div>

        <div className={styles.container__card}>
            <div className={styles.container__text}>
                <div className={styles.container__rrss}>
                    <p href="#">SEGUINOS EN </p>
                    <a href="#"><GrFacebookOption/></a>
                    <a href="#"><IoLogoTwitter/></a>
                    <a href="#"><IoLogoInstagram /></a>
                </div>
            </div>
        </div>

        <div className={styles.container__copyright}>
            <p>PUFI Copyright 2017 - Todos los derechos reservados</p>
            <h1><FcRating/>BRAND<span>LIVE</span></h1>
        </div>
    </div>
  
  )
}
