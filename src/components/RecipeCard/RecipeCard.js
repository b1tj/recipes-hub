import className from 'classnames/bind'
import styles from './RecipeCard.module.scss'

import Customimage from '../Customimage/Customimage'

const cx = className.bind(styles)

function RecipeCard({ imgSrc, name }) {
    const authors = [
        './img/topchefs/img_1.jpg',
        './img/topchefs/img_2.jpg',
        './img/topchefs/img_3.jpg',
        './img/topchefs/img_4.jpg',
        './img/topchefs/img_5.jpg',
        './img/topchefs/img_6.jpg',
    ]
    return (
        <article className={cx('recipe-card')}>
            <Customimage padTop={'65%'} src={imgSrc} delayTime={0} />
            <div className={cx('description')}>
                <img
                    src={authors[Math.floor(Math.random() * authors.length)]}
                    alt="img"
                    className={cx('author-img')}
                />
                <h3 className={cx('recipe-name')}>{name}</h3>
                <p className={cx('recipe-details')}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iure, rerum?
                </p>
                <a href="#" className={cx('view-btn')}>
                    View Recipe
                </a>
            </div>
        </article>
    )
}

export default RecipeCard
