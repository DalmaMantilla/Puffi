import React from 'react';
import { useState } from 'react';
import { Link } from "react-scroll";
import { useRef } from "react";

import styles from '../Header/Header.module.scss';

import { BiMenuAltRight} from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { BsChevronDown } from "react-icons/bs";

import { AiOutlineFire } from "react-icons/ai";
import { SlUmbrella } from "react-icons/sl";
import { HiOutlineShoppingBag }  from "react-icons/hi2";
import { IoNuclearOutline } from "react-icons/io5";
import { Body } from '../Body/Body';



export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    //const menuToggler = () => setMenuOpen((p) => !p)
    const menuToggler = () => {
        setMenuOpen(!menuOpen)
    }

    //-------------Nav Scroll-----------
    const div = useRef(null);
    const menu = useRef(null);
    //console.log('Hola soy el div', div.current)
    //console.log('Hola soy el menu', menu.current)

    let prevY = window.scrollY; 
    window.addEventListener('scroll', function( ){

        if( prevY > window.scrollY ){ 
            //console.log('Volviendo al Top')
            div.current.classList.remove(styles[`header__div--off`]);
            menu.current.classList.remove(styles[`header__menu--off`]);
            
        }else{
            //console.log('Bajando')
            div.current.classList.add(styles[`header__div--off`]);
            menu.current.classList.add(styles[`header__menu--off`]); 
        }
            
        if( window.scrollY > 60 ){
            div.current.classList.add(styles[`header__div--solid`]);
            menu.current.classList.add(styles[`header__menu--solid`]);
            
            
        }else{
            div.current.classList.remove(styles[`header__div--solid`]);
            menu.current.classList.remove(styles[`header__menu--solid`]);
        }

        prevY = window.scrollY; 
    
    })



    const linksNav = [
        {
            id:1,
            link:'pufi puff',
            icono: <AiOutlineFire/>
        },

        {
            id:2,
            link:'pufi rain',
            icono: <SlUmbrella/>
        },

        {
            id:3,
            link:'pufi cart',
            icono: <HiOutlineShoppingBag/>
        },

        {
            id:4,
            link:'pufi nap',
            icono: <IoNuclearOutline/>
        },
    ]

    
    return (    
        <header className={styles.header}>
            <div ref={div} className={styles.header__div}>
                <nav className={`${styles.header__nav} ${menuOpen ? styles[`header__nav--open`] : {}}`}>
                    <ul className={styles.header__ul}>
                        { linksNav.map(( {id, link, icono}) =>   
                            <li className={styles.header__li}
                                 key={id}>
                                <div 
                                    className={styles.header__a}
                                    key={id}
                                >
                                    <Link 
                                        className={styles.header__a}
                                        onClick={() => setMenuOpen(!menuOpen)}
                                        to={link} 
                                        smooth 
                                        duration={450}
                                    > 
                                        {icono}
                                    </Link>
                                    <Link 
                                        onClick={() => setMenuOpen(!menuOpen)}
                                        to={link} 
                                        smooth 
                                        duration={450}
                                    >
                                        {link}
                                    </Link>
                                </div>
                            </li>
                        )}
                    </ul>
                    <ul className={styles.header__nav__account}>
                        <li className={styles.header__li}>
                            <a href="#" className={styles.header__acc}>MI CUENTA <BsChevronDown/></a>
                        </li>
                        <li className={styles.header__li}>
                            <a href="#" className={styles.header__acc}>MI COMPRA</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div ref={menu} className={styles.header__menu}>
                <h1 className={styles.header__logo}>Pufi</h1>
                <div className={styles.header__account}>
                    <ul className={styles.header__ul}>
                            <li className={styles.header__li}>
                                <a href="#" className={styles.header__acc}>MI CUENTA<BsChevronDown/></a>
                            </li>
                            <li className={styles.header__li}>
                                <a href="#" className={styles.header__acc}>MI COMPRA</a>
                            </li>
                        </ul>
                    </div>
                    <button className={styles.header__toogler} onClick={menuToggler}>
                        { !menuOpen ? <BiMenuAltRight/> : <AiOutlineCloseSquare />}
                    </button>
                </div>

            <Body/>
        </header>
    
    );
};







