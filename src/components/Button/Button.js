import styles from './Button.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Button({ children, btnType = 'a', width, height }) {
    const Tag = btnType
    return (
        <Tag
            href="#"
            className={cx('container', 'link')}
            styles={{ width: width, height: height }}
        >
            {children}
        </Tag>
    )
}

export default Button
