import styles from './Customimage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Customimage({ src, padTop, delayTime }) {
    return (
        <div className={cx('container')} style={{ paddingTop: padTop }}>
            <img
                src={src}
                alt="alt"
                style={{ animationDelay: `${delayTime}s` }}
            />
        </div>
    )
}

export default Customimage
