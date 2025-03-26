import "./style.css"
import logoLudosPlugin from '../../../assets/logo/ludos-plugin-logo.png'
import iconBurgerMenu from '../../../assets/icon/burger-icon.png'

export default function Header() {


function onClickEvent(){

} 

return(
    <>
        <header>
            <div className='header-container'>
                <div className='header-block-logo'>
                    <img src={logoLudosPlugin} alt="logo-ludos-plugin"/>
                </div>
                <div className="header-block-link">
                    <ul className="header-block-ul-li">
                        <li>Archives</li>
                        <li>Commandes</li>
                        <li>Contact</li>
                    </ul>
                    <div className="header-block-burger-icon">
                        <img onClick={onClickEvent} src={iconBurgerMenu} alt="icon-burger-menu"/>
                    </div>
                </div>
            </div>
            {/* <div className="header-block-active-menu-burger">
                <ul className="header-block-hide">
                    <li>Archives</li>
                    <li>Commandes</li>
                    <li>Contact</li>
                </ul>
            </div> */}
        </header>
    </>
);
}