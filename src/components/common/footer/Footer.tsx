import './style.css'
import logoLudosPlugin from '../../../assets/logo/ludos-plugin-logo.png'
import iconYoutube from '../../../assets/icon/icon-youtube.png'
import iconInstagram from '../../../assets/icon/icon-instagram.png'
import iconFacebook from '../../../assets/icon/icon-facebook.png'
import iconThreads from '../../../assets/icon/icon-thread.png'


export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-block-logo">
                        <img src={logoLudosPlugin} className="logo-ludos-plugin-img"/>
                    </div>
                    <div className="footer-block-navigation">
                        <ul className="footer-block-ul-nagivation">
                            <li><h1 id="footer-block-title">Nagivation</h1></li>
                            <li>Archives</li>
                            <li>Commande</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footer-block-joinus-support">
                        <div className="footer-block-joinus">
                            <h1 id="footer-block-title">Nous rejoindre</h1>
                            <div className="footer-block-list-img">
                                <img src={iconYoutube} alt='icon-youtube' className="icon-youtube-img"/>
                                <img src={iconInstagram} alt='icon-instagram' className="icon-instagram-img"/>
                                <img src={iconFacebook} alt='icon-facebook' className="icon-facebook-img"/>
                                <img src={iconThreads} alt='icon-threads' className='icon-threads-img'/>
                            </div>
                        </div>
                        <div className="footer-block-support">
                            <ul className="footer-block-ul-support">
                                <li><h1 id="footer-block-title">Support</h1></li>
                                <li>Assistance</li>
                                <li>Donner votre avis</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-block-newsletters">
                        <h1 id="footer-block-title">Newsletters</h1>
                        <p>Rester informer sur la sortie de nouveaux et de nouvelles version</p>
                        <form>
                            <div className="footer-block-form">
                                <label>Email</label>
                                <input type='email' placeholder=''/>
                                <button type='submit'>Valider</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer-block-legalinformation">
                        <ul className="footer-block-ul-legalinformation">
                            <li>Politique de confidentialité</li>
                            <li className="footer-padding-left">Mentions légal</li>
                            <li className="footer-padding-left">Cookies</li>
                            <li className="footer-padding-left">Conditions d'utilisation</li>
                        </ul>
                    </div>
            </footer>
        </>
    )
}