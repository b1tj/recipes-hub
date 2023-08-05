import Button from '../Button/Button'
import styles from './Aboutsection.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import Customimage from '../Customimage/Customimage'
import { getRecipes } from '../../api/getRecipes'

const cx = classNames.bind(styles)

function Aboutsection() {
    const animationPattern = [1, 2, 3, 2, 3, 4, 3, 4, 5]

    const [images, setImages] = useState([])

    // Fetch random 9 recipes
    useEffect(() => {
        getRecipes(9).then((data) => {
            const images = data.map((item) => item.image)
            setImages(images)
        })
    }, [])

    const description =
        'RecipesHub is a place where you can please your soul and tummy with delicious food recipes of all cuisine. And our service is absolutely free. So start exploring now.'

    return (
        <section className={cx('about-section')}>
            <div className={cx('col')}>
                <header className={cx('about-header')}>
                    <p>what are we about</p>
                </header>
                <div className={cx('about-description')}>
                    <p>{description}</p>
                </div>
                <Button>explore now</Button>
            </div>
            <div className={cx('col', 'gallery')}>
                {images.map((image, index) => {
                    return (
                        <Customimage
                            key={index}
                            src={image}
                            padTop={'85%'}
                            delayTime={animationPattern[index] * 0.2}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Aboutsection
