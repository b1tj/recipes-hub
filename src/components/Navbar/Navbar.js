import { useState } from 'react'
import styles from './Navbar.module.scss'
import classNames from 'classnames/bind'

import Sidebar from '../Sidebar/Sidebar'
import { Link, useLocation } from 'react-router-dom'

import { AiFillHome, AiTwotoneSetting } from 'react-icons/ai'
import { LiaBookSolid } from 'react-icons/lia'

const cx = classNames.bind(styles)

function NavBar() {
    const [showSideBar, setShowSideBar] = useState(false)

    const location = useLocation()

    const handleClose = () => {
        setShowSideBar(false)
    }

    const links = [
        { name: 'Home', path: '/', icon: AiFillHome },
        { name: 'Recipes', path: '/recipes', icon: LiaBookSolid },
        { name: 'Settings', path: '/settings', icon: AiTwotoneSetting },
    ]

    return (
        <>
            <header className={cx('navbar')}>
                <Link to={'/'} className={cx('logo')}>
                    Recipes <span>hub</span>
                </Link>
                <div className={cx('nav-links')}>
                    {links.map((item, index) => {
                        return (
                            <Link
                                to={item.path}
                                key={index}
                                className={cx(
                                    'link',
                                    `${
                                        location.pathname === item.path
                                            ? 'active'
                                            : ''
                                    }`
                                )}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </div>
                <div
                    className={cx(
                        'sidebar-btn',
                        `${showSideBar ? 'active' : ''}`
                    )}
                    onClick={() => setShowSideBar(true)}
                >
                    <div className={cx('line')}></div>
                    <div className={cx('line')}></div>
                    <div className={cx('line')}></div>
                </div>
            </header>
            {showSideBar && <Sidebar close={handleClose} links={links} />}
        </>
    )
}

export default NavBar
