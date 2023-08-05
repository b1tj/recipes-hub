import styles from './Footer.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Footer() {
    const currentYear = new Date().getFullYear()

    const about = {
        text: 'RecipesHub is a place where you can please your soul and tummy with delicious food recipes of all cuisine. And our service is absolutely free.',
        notice: `©${currentYear} | All Rights Reserved`,
    }

    const contact = {
        email: 'recipeshub@gmail.com',
        phone: '+342-624783999',
        address: '2923 Street NYC',
    }

    const socialLinks = {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
    }

    return (
        <footer className={cx('footer')}>
            <div className={cx('about')}>
                <h4 className={cx('link-title')}>RecipesHub.com</h4>
                <p className={cx('about-text')}>{about.text}</p>
                <p className={cx('copyright-notice')}>{about.notice}</p>
            </div>
            <div className={cx('contact')}>
                <h4 className={cx('title')}>Contact Us</h4>
                <p className={cx('email')}>{contact.email}</p>
                <p className={cx('phone')}>{contact.phone}</p>
                <p className={cx('address')}>{contact.address}</p>
            </div>
            <div className={cx('socials')}>
                <h4 className={cx('title')}>Socials</h4>
                <a
                    href={socialLinks.facebook}
                    target="_blank"
                    className={cx('facebook-link')}
                >
                    Facebook
                </a>
                <a
                    href={socialLinks.twitter}
                    target="_blank"
                    className={cx('twitter-link')}
                >
                    Twitter
                </a>
                <a
                    href={socialLinks.instagram}
                    target="_blank"
                    className={cx('instagram-link')}
                >
                    Instagram
                </a>
            </div>
        </footer>
    )
}

export default Footer
