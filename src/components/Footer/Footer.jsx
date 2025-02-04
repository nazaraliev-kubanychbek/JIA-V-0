import emblem from '@img/header/emblem.svg';
import email from '@img/footer/email.svg';
import phone from '@img/footer/phone.svg';
import whatsapp from '@img/footer/logos_whatsapp-icon.svg';
import telegram from '@img/footer/logos_telegram.svg';
import facebook from '@img/footer/logo_faceBook.svg';
import insta from '@img/footer/logo_insta.svg';
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.emblem}>
                    <img src={emblem} alt="emblem" />  
                    <p>WaterMark "Made by Geeks Pro"</p>
                </div>

                <div className={styles.contact}>
                    <a href="https://www.instagram.com/bif.kg/">связаться с нами</a>
                    <p><img src={phone} alt="phone" />+996 555 895 362</p>
                    <p><img src={email} alt="email" /> E-mail</p>
                </div>

                <div className={styles.navigation}>
                    <h3>Навигация</h3>
                    <Link to={'/'}><p>О проекте</p></Link>
                    <Link to={'/funds'}><p>Инвесторы</p></Link>
                    <Link to={'/projects'}><p>Инвест.проекты</p></Link>
                    <Link to={'/exhibition'}><p>Выставка</p></Link>
                </div>

                <div className={styles.social_media}> 
                    <h3>Соц.сети</h3>
                    <div>
                        <img src={whatsapp} alt="whatsapp" />
                        <img src={facebook} alt="facebook" />
                        <img src={insta} alt="instagram" />
                        <img src={telegram} alt="telegram" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
