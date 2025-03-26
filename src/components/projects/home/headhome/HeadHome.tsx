import './style.css'

export default function HeadHome() {

    return(
    <>
        <div className="headhome-container">
            <div className="headhome-block-background">
                <div className='headhome-block-title'>
                    <h1>Ludos Plugin</h1>
                </div>
                <div className='headhome-block-paragraph'>
                    <p>Notre but est d'apporter une nouvelle expérience dans le<br/> monde du plugin</p>
                </div>
                <div className='headhome-block-button'>
                    <a>Découvrir notre plugin</a>
                </div>
            </div>
        </div>
    </>
    );

}