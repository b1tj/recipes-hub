import styles from './SettingOption.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function SettingOption({ children, name }) {
    return (
        <div>
            <h2 className={cx('title')}>{name}</h2>
            <div className={cx('options-container')}>{children}</div>
        </div>
    )
}

export default SettingOption
