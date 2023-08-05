import classNames from 'classnames/bind'
import styles from './PreviousSearch.module.scss'

import { useRef, useState } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { getRecipesByQuery } from '../../api/getRecipes'

const cx = classNames.bind(styles)

function PreviousSearch(props) {
    const [search, setSearch] = useState('')
    const [previousSearches, setPreviousSearches] = useState(() => {
        const storedItems = localStorage.getItem('history')
        if (storedItems) {
            return JSON.parse(storedItems)
        } else {
            localStorage.setItem('history', [])
            return []
        }
    })
    const input = useRef()

    const handleSearch = () => {
        props.onSearch([])
        if (search !== '') {
            //call api to fetch search result, return parent component fetched data
            getRecipesByQuery(search, 6).then((res) => {
                props.onSearch(res)
            })
            //save recent search to localstorage
            localStorage.setItem('history', JSON.stringify(previousSearches))
            setPreviousSearches([...previousSearches, search])
            setSearch('')
        }
    }

    const handleSearchedItemClick = (e) => {
        getRecipesByQuery(e.target.textContent, 6).then((res) => {
            props.onSearch(res)
        })
    }

    const handleKeypress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <section className={cx('previous-search')}>
            <h2>Previous search</h2>
            <div className={cx('previous-search-container')}>
                {previousSearches.map((search, index) => {
                    return (
                        <div
                            key={index}
                            className={cx('searched-item')}
                            onClick={handleSearchedItemClick}
                            style={{ animationDelay: `${index * 0.06}s` }}
                        >
                            {search}
                        </div>
                    )
                })}
            </div>
            <div className={cx('search-box')}>
                <input
                    ref={input}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeypress}
                    placeholder="Search..."
                    className={cx('text')}
                />
                <button onClick={handleSearch} className={cx('search-btn')}>
                    <AiOutlineSearch />
                </button>
            </div>
        </section>
    )
}

export default PreviousSearch
