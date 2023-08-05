import classNames from 'classnames/bind'
import styles from './Topchefs.module.scss'
import Chef from '../Chef/Chef'

const cx = classNames.bind(styles)

function Topchefs() {
    const chefs = [
        {
            name: 'Juan Carlos',
            recipes: 10,
            cuisine: 'Mexican',
        },
        {
            name: 'Shaw Mendes',
            recipes: 10,
            cuisine: 'Mexican',
        },
        {
            name: 'Chris Adam',
            recipes: 10,
            cuisine: 'Mexican',
        },
        {
            name: 'Daniel Shaw',
            recipes: 10,
            cuisine: 'Mexican',
        },
        {
            name: 'Luke Harrison',
            recipes: 10,
            cuisine: 'Mexican',
        },
        {
            name: 'Edward Harrison',
            recipes: 10,
            cuisine: 'Mexican',
        },
    ]

    return (
        <section className={cx('container')}>
            <h2 className={cx('header')}>Our top chefs</h2>
            <div className={cx('chef-grid')}>
                {chefs.map((item, index) => {
                    return (
                        <Chef
                            key={index}
                            img={`/img/topchefs/img_${index + 1}.jpg`}
                            name={item.name}
                            recipes={item.recipes}
                            cuisine={item.cuisine}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Topchefs
