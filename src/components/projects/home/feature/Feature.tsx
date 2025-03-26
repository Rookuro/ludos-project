import './style.css'

import iconSword from '../../../../assets/icon/icon-sword-blue.png'
import iconPeople from '../../../../assets/icon/icon-people.png'
import iconController from '../../../../assets/icon/icon-controller.png'



export default function Feature() {
    return(
    <>
        <div className="feature-container">
            <h1>Fonctionnalitées de jeu</h1>
            <div className="feature-block">
                <div className="feature-first">
                    <img src={iconSword}/>
                    <p>Des classes différentes pour<br/>
                    une expérience diversifiée</p>
                </div>
                <div className="feature-second">
                    <img src={iconPeople}/>
                    <p>Un plugin coopératif<br/>
                    jouable à plusieurs</p>
                </div>
                <div className="feature-third">
                    <img src={iconController}/>
                    <p>Une multitude de mini-jeu<br/> 
                    compris dans un seul plugin</p>
                </div>
            </div>
        </div>
    </>
    );
}