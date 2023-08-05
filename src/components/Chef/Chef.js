import classNames from 'classnames/bind'
import styles from './Chef.module.scss'
import {
    BiLogoFacebookCircle,
    BiLogoInstagram,
    BiLogoTwitter,
} from 'react-icons/bi'
import Customimage from '../Customimage/Customimage'

const cx = classNames.bind(styles)

function Chef({ img, name, recipes, cuisine }) {
    return (
        <section className={cx('container')}>
            <div className={cx('image')}>
                <Customimage src={img} padTop={'100%'} />
            </div>
            <div className={cx('description')}>
                <h3 className={cx('chef-name')}>{name}</h3>
                <p className={cx('recipes')}>
                    Recipes: <span className="bold-text">{recipes}</span>
                </p>
                <p className={cx('cuisine')}>
                    Cuisine: <span className="bold-text">{cuisine}</span>
                </p>
                <div className={cx('socials')}>
                    <a href="#" className={cx('facebook-link')}>
                        <BiLogoFacebookCircle />
                    </a>
                    <a href="#" className={cx('twitter-link')}>
                        <BiLogoTwitter />
                    </a>
                    <a href="#" className={cx('instagram-link')}>
                        <BiLogoInstagram />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Chef
