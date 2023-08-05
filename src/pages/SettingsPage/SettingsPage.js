import styles from './SettingsPage.module.scss'
import classNames from 'classnames/bind'

import SettingOption from '../../components/SettingOption/SettingOption'
import { useEffect, useState } from 'react'

import { FaCheck } from 'react-icons/fa'

const cx = classNames.bind(styles)

function SettingsPage() {
    const [theme, setTheme] = useState(() => {
        const storedItem = localStorage.getItem('theme')
        if (storedItem) {
            return storedItem
        } else {
            localStorage.setItem('theme', 'light')
            return 'light'
        }
    })
    const [primaryColor, setPrimaryColor] = useState(() => {
        const storedItem = localStorage.getItem('setting')
        if (storedItem) {
            return JSON.parse(storedItem)['--primary-color']
        } else {
            return '#ff0053'
        }
    })
    const [fontSize, setFontSize] = useState(() => {
        const storedItem = localStorage.getItem('setting')
        if (storedItem) {
            return JSON.parse(storedItem)['--font-size']
        } else {
            return '10px'
        }
    })
    const [animationSpeed, setAnimationSpeed] = useState(() => {
        const storedItem = localStorage.getItem('setting')
        if (storedItem) {
            return JSON.parse(storedItem)['--animation-speed']
        } else {
            return '1s'
        }
    })

    const [setting, setSetting] = useState(() => {
        const storedItems = localStorage.getItem('setting')
        if (storedItems) {
            return JSON.parse(storedItems)
        } else {
            localStorage.setItem('setting', {})
            //default setting
            return {
                '--background-color': '#fff',
                '--background-light': '#fff',
                '--shadow-color': 'rgba(0, 0, 0, 0.2)',
                '--primary-color': '#ff0053',
                '--text-color': '#0a0a0a',
                '--text-light': '#575757',
                '--font-size': '10px',
                '--animation-speed': '1s',
            }
        }
    })

    const themes = [
        {
            '--background-color': '#fff',
            '--background-light': '#fff',
            '--shadow-color': 'rgba(0, 0, 0, 0.2)',
            '--text-color': '#0a0a0a',
            '--text-light': '#575757',
        },
        {
            '--background-color': 'rgb(29, 29, 29)',
            '--background-light': 'rgb(77, 77, 77)',
            '--shadow-color': 'rgba(0, 0, 0, 0.2)',
            '--text-color': '#ffffff',
            '--text-light': '#eceaea',
        },
    ]

    const primaryColors = [
        'rgb(255,0,86)',
        'rgb(33,150,243)',
        'rgb(255,193,7)',
        'rgb(0,200,83)',
        'rgb(156,39,176)',
    ]

    const fontSizes = [
        {
            title: 'Small',
            value: '8px',
        },
        {
            title: 'Medium',
            value: '10px',
        },
        {
            title: 'Large',
            value: '12px',
        },
    ]

    const animationSpeeds = [
        {
            title: 'Slow',
            value: '2s',
        },
        {
            title: 'Medium',
            value: '1s',
        },
        {
            title: 'Fast',
            value: '0.5s',
        },
    ]

    const changeTheme = (i) => {
        const _theme = { ...themes[i] }
        setTheme(i === 0 ? 'light' : 'dark')

        const _setting = { ...setting }
        for (let key in _theme) {
            _setting[key] = _theme[key]
        }
        setSetting(_setting)
    }

    const changeColor = (i) => {
        setPrimaryColor(primaryColors[i])
        const _setting = { ...setting }
        _setting['--primary-color'] = primaryColors[i]
        setSetting(_setting)
    }

    const changeFontSize = (i) => {
        setFontSize(fontSizes[i].value)
        const _setting = { ...setting }
        _setting['--font-size'] = fontSizes[i].value
        setSetting(_setting)
    }

    const changeAnimationSpeed = (i) => {
        setAnimationSpeed(animationSpeeds[i].value)
        const _setting = { ...setting }
        _setting['--animation-speed'] = animationSpeeds[i].value
        setSetting(_setting)
    }

    useEffect(() => {
        const root = document.documentElement
        for (let key in setting) {
            root.style.setProperty(key, setting[key])
        }
        localStorage.setItem('setting', JSON.stringify(setting))
        localStorage.setItem('theme', theme)
    }, [setting, theme])

    return (
        <div className={cx('container')}>
            <SettingOption name={'Preferred theme'}>
                <div
                    className={cx('option', 'light')}
                    onClick={() => changeTheme(0)}
                >
                    {theme === 'light' && (
                        <div className={cx('check')}>
                            <FaCheck />
                        </div>
                    )}
                </div>
                <div
                    className={cx('option', 'dark')}
                    onClick={() => changeTheme(1)}
                >
                    {theme === 'dark' && (
                        <div className={cx('check')}>
                            <FaCheck />
                        </div>
                    )}
                </div>
            </SettingOption>

            <SettingOption name={'Primary color'}>
                {primaryColors.map((color, index) => {
                    return (
                        <div
                            key={index}
                            className={cx('option')}
                            onClick={() => changeColor(index)}
                            style={{ backgroundColor: color }}
                        >
                            {primaryColors[index] === primaryColor && (
                                <div className={cx('check')}>
                                    <FaCheck />
                                </div>
                            )}
                        </div>
                    )
                })}
            </SettingOption>

            <SettingOption name={'Font size'}>
                {fontSizes.map((size, index) => {
                    return (
                        <button
                            key={index}
                            className={cx('btn')}
                            onClick={() => changeFontSize(index)}
                        >
                            {size.title}
                            {fontSizes[index].value === fontSize && (
                                <span>
                                    <FaCheck />
                                </span>
                            )}
                        </button>
                    )
                })}
            </SettingOption>

            <SettingOption name={'Animation speed'}>
                {animationSpeeds.map((size, index) => {
                    return (
                        <button
                            key={index}
                            className={cx('btn')}
                            onClick={() => {
                                changeAnimationSpeed(index)
                            }}
                        >
                            {size.title}
                            {animationSpeeds[index].value ===
                                animationSpeed && (
                                <span>
                                    <FaCheck />
                                </span>
                            )}
                        </button>
                    )
                })}
            </SettingOption>
        </div>
    )
}

export default SettingsPage
