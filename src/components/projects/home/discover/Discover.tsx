import './style.css'
import iconFight from '../../../../assets/icon/icon-fight.jpg'
import iconJoin from '../../../../assets/icon/icon-join.jpg'

export default function Discover() {
    return(
    <>
        <div className="discover-container">
            <div className="discover-block">
                <div className="discover-block-title">
                    <h1>Découvrez <span id="color-ludos-plugin">Ludos Plugin</span><br/>la nouvelle expérience minecraft !</h1>
                </div>
                <div className="discover-block-paragraph">
                    <p>Plongez dans une expérience Minecraft inédite avec Ludos Plugin, qui transforme le jeu<br/>
                    avec des fonctionnalités excitantes et une profondeur de gameplay incroyable.</p>
                </div>
            </div>
            <div>
                <div className="discover-block-first">
                    <div className="discover-block-first-1">
                        <div className='discover-block-fight'>
                            <img className="img-class-fight-left" src={iconFight} alt="icon-fight"/>
                            <h2>Affrontez vos amis</h2>
                            <img className="img-class-fight-right"src={iconFight} alt="icon-fight"/>
                        </div>
                        <div className='discover-block-fight-paragraph'>
                            <p>Engagez-vous dans des combats épiques contre<br/> 
                            d'autres joueurs, testant vos compétences<br/>  
                            et stratégies dans des duels palpitants.</p>
                        </div>
                    </div>
                    <div className="discover-block-first-2">
                        <div className='discover-block-join'>
                            <img className="img-class-join-left" src={iconJoin} alt="icon-join"/>
                            <h2>Joignez vos forces</h2>
                            <img className="img-class-join-right" src={iconJoin} alt="icon-join"/>
                        </div>
                        <div className='discover-block-join-paragraph'>
                            <p>Unissez-vous avec d'autres joueurs pour<br/> 
                            surmonter des défis complexes, construire des<br/>
                            structures imposantes et défendre vos territoires ensemble.</p>
                        </div>
                    </div>
                </div>
                <div className="discover-block-second">
                    <div className="discover-block-second-1">

                    </div>
                    <div className="discover-block-second-2">

                    </div>
                </div>
            </div>
            
        </div>
    </>
    );
}