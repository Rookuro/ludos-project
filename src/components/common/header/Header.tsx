import "./style.css"
import logoLudosPlugin from '../../../assets/logo/ludos-plugin-logo.png'

export default function Header() {
return(
    <>
        <header>
            <div className='header-container'>
                <div className='header-block-logo'>
                    <img src={logoLudosPlugin}/>
                </div>
                <div className='header-block-link'>
                    <ul className="header-block-ul-li">
                        <li>Archives</li>
                        <li>Commandes</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </header>
    </>
);
}