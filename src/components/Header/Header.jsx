import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logoImg} src ='https://www.hicom.fr/wp-content/uploads/2017/09/Logo_TV_2015.png' />
        </header>
    )
}
export default Header