import classNames from 'classnames/bind'
import styles from './RecipesPage.module.scss'
import { useState } from 'react'

import PreviousSearch from '../../components/PreviousSearch/PreviousSearch'
import RecipeCard from '../../components/RecipeCard/RecipeCard'

const cx = classNames.bind(styles)

function RecipesPage() {
    const [result, setResult] = useState([])

    return (
        <div className={cx('recipes-container')}>
            <PreviousSearch onSearch={setResult} />
            <div className={cx('recipes-result-container')}>
                {result.map((item, index) => {
                    return (
                        <RecipeCard
                            key={index}
                            imgSrc={item.image}
                            name={item.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default RecipesPage
