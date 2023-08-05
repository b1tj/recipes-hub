import className from 'classnames/bind'
import styles from './Sidebar.module.scss'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const cx = className.bind(styles)

function Sidebar({ close, links }) {
    const location = useLocation()

    return (
        <div className={cx('container')} onClick={close}>
            <div className={cx('sidebar')}>
                <div className={cx('sidebar-links')}>
                    {links.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className={cx(
                                'link',
                                `${
                                    location.pathname === item.path
                                        ? 'active'
                                        : ''
                                }`
                            )}
                        >
                            <item.icon className={cx('icon')} />
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
