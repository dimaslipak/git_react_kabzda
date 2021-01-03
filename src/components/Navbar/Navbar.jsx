import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href='/Profile'>Profile </a>
            </div>
            <div className={s.item}>
                <a href='/Dialogs'>Messages</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                News
            </div>
            <div className={s.item}>
                Music
            </div>
            <div className={s.item}>
                Settings
            </div>
        </nav>
    )
}
export default Navbar