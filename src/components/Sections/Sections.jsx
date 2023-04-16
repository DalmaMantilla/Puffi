import React from 'react'

import styles from '../Sections/Sections.module.scss';
import { AiOutlineDown } from "react-icons/ai";

import  pufiPuff  from '../../images/pufiPuff.jpg';
import  pufiRain  from '../../images/pufiRain.jpg';
import  pufiCart  from '../../images/pufiCart.jpg';
import  pufiNap  from '../../images/pufiNap.jpg';



export const Sections = () => {
  return (
    
    <div className={styles.container}>
		{/* ----------------------------Section One------------------------------ */}
		<div name='pufi rain' style={{ backgroundImage:`url(${pufiRain})`}} className={styles.container__imgCard}>
			<button>SHOP</button>
		</div>

		<article className={styles.container__backCard}>
			<div className={styles.container__infoCard}>
				<img src="./img/pufiRainUmbrella.png" alt="image" />
				<h1>Pufi RAIN</h1>
				<li className={styles.container__infoCard__divider}></li>
				<p>
					Descripcion del producto. Este es un texto simulado
				</p>
				<a href="#"><AiOutlineDown/>VER MAS</a>
				<div className={styles.container__triangle}></div>	
			</div>
		</article>


		{/* ----------------------------Section Two------------------------------ */}
		<article  className={styles.container__infoCard}>
			<img src="./img/pufiPuffRosa.png" alt="image" />
			<h1>Pufi PUFF</h1>
			<li className={styles.container__infoCard__divider}></li>
			<p>
				Descripcion del producto. Este es un texto simulado
			</p>
			<a href="#"><AiOutlineDown/>VER MAS</a>
			<div className={styles.container__triangle2}></div>	
		</article>
	
		<div name='pufi puff' style={{ backgroundImage:`url(${pufiPuff})`}} className={styles.container__imgCard}></div>


		{/* ----------------------------Section Three------------------------------ */}
		<div name='pufi cart' style={{ backgroundImage:`url(${pufiCart})`}} className={styles.container__imgCard}></div>

		<article className={styles.container__backCard}>
			<div className={styles.container__infoCard}>
				<img src="./img/pufiCartCompras.png" alt="image" />
				<h1>Pufi CART</h1>
				<li className={styles.container__infoCard__divider}></li>
				<p>
					Descripcion del producto. Este es un texto simulado
				</p>
				<a href="#"><AiOutlineDown/>VER MAS</a>
				<div className={styles.container__triangle}></div>	
			</div>
		</article>


		{/* ----------------------------Section Four------------------------------ */}
		<article  className={styles.container__infoCard}>
			<img src="./img/pufiNapBlue.png" alt="image" />
			<h1>Pufi NAP</h1>
			<li className={styles.container__infoCard__divider}></li>
			<p>
				Descripcion del producto. Este es un texto simulado
			</p>
			<a href="#"><AiOutlineDown/>VER MAS</a>
			<div className={styles.container__triangle2}></div>	
		</article>
	
		<div name='pufi nap' style={{ backgroundImage:`url(${pufiNap})`}} className={styles.container__imgCard}></div>
	</div>

  )
}
