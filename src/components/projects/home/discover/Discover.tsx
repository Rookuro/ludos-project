import './style.css'
import iconSword from '../../../../assets/icon/icon-sword.svg'
import iconHands from '../../../../assets/icon/icon-hands.svg'
import iconPencil from '../../../../assets/icon/icon-pencil.svg'
import iconSprout from '../../../../assets/icon/icon-sprout.svg'

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
                        <div className='discover-block-sword'>
                            <img className="img-class-sword-left" src={iconSword} alt="icon-hands"/>
                            <h2>Affrontez vos amis</h2>
                            <img className="img-class-sword-right"src={iconSword} alt="icon-hands"/>
                        </div>
                        <div className='discover-block-sword-paragraph'>
                            <p>Engagez-vous dans des combats épiques contre<br/> 
                            d'autres joueurs, testant vos compétences<br/>  
                            et stratégies dans des duels palpitants.</p>
                        </div>
                    </div>
                    <div className="discover-block-first-2">
                        <div className='discover-block-hands'>
                            <img className="img-class-hands-left" src={iconHands} alt="icon-hands"/>
                            <h2>Joignez vos forces</h2>
                            <img className="img-class-hands-right" src={iconHands} alt="icon-hadns"/>
                        </div>
                        <div className='discover-block-hands-paragraph'>
                            <p>Unissez-vous avec d'autres joueurs pour surmonter<br/> 
                            des défis complexes, construire des structures<br/>
                            imposantes et défendre vos territoires ensemble.</p>
                        </div>
                    </div>
                </div>
                <div className="discover-block-second">
                    <div className="discover-block-second-1">
                        <div className='discover-block-pencil'>
                            <img className="img-class-pencil-left" src={iconPencil} alt="icon-pencil"/>
                            <h2>Affrontez vos amis</h2>
                            <img className="img-class-pencil-right"src={iconPencil} alt="icon-pencil"/>
                        </div>
                        <div className='discover-block-pencil-paragraph'>
                            <p>Choisissez parmi une multitude de classes,<br/> 
                            chacune avec ses propres compétences et styles<br/> 
                            de jeu uniques, pour s'adapter à votre façon de<br/></p>
                        </div>
                    </div>
                    <div className="discover-block-second-2">
                        <div className='discover-block-sprout'>
                            <img className="img-class-sprout-left" src={iconSprout} alt="icon-sprout"/>
                            <h2>Joignez vos forces</h2>
                            <img className="img-class-sprout-right"src={iconSprout} alt="icon-sprout"/>
                        </div>
                        <div className='discover-block-sprout-paragraph'>
                            <p>Engagez-vous dans des combats épiques contre<br/> 
                            d'autres joueurs, testant vos compétences<br/>  
                            et stratégies dans des duels palpitants.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
    );
}