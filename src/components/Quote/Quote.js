import styles from './Qoute.module.scss'
import classNames from 'classnames/bind'

import { BiSolidQuoteLeft } from 'react-icons/bi'

const cx = classNames.bind(styles)

function Quote() {
    return (
        <section className={cx('container')}>
            <p className={cx('text')}>
                <BiSolidQuoteLeft className={cx('icon')} />
                Food is everything we are. It's an extension of nationalist
                feeling, ethnic feeling, your personal history, your province,
                your region, your trible, your grandma. It's inseparable from
                those from the get-go.
            </p>
            <p className={cx('quote-author')}>~ Athony Bordain</p>
        </section>
    )
}

export default Quote
