import styles from './Skills.module.scss'
import classNames from 'classnames/bind'

import Button from '../Button/Button'
import Customimage from '../Customimage/Customimage'

import { getRecipes } from '../../api/getRecipes'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

function Skills() {
    const [image, setImage] = useState('')

    const skills = [
        'Learn new recipes',
        'Experiment with food',
        'Write your own recipes',
        'Know nutrioun facts',
        'Get cooking tips',
        'Get ranked',
    ]
    useEffect(() => {
        getRecipes(1).then((res) => {
            setImage(res[0].image)
        })
    }, [])

    return (
        <section className={cx('container')}>
            <div className={cx('col', 'image')}>
                <Customimage src={image} padTop={'90%'} delayTime={0.5} />
            </div>
            <div className={cx('col')}>
                <header className={cx('header')}>
                    <p>improve your cilinary skills</p>
                </header>
                <div className={cx('skills')}>
                    {skills.map((skill, index) => {
                        return (
                            <p key={index} className={cx('skill')}>
                                {skill}
                            </p>
                        )
                    })}
                </div>
                <Button>signup now</Button>
            </div>
        </section>
    )
}

export default Skills
