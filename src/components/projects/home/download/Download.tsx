import './style.css'
import curseforgeIcon from '../../../../assets/icon/icon-curseforge.png'
import githubIcon from '../../../../assets/icon/icon-github.png'

export default function Download() {
    return(
        <>
            <div className="download-container">
                <h1>Téléchargement</h1>
                <div className="download-block">
                    <div className='download-block-background'>
                        <table className="download-custom-table">
                            <thead>
                                <tr className="title-column">
                                    <th>Minecraft version</th>
                                    <th>Version</th>
                                    <th>Taille</th>
                                    <th>Date de sortie</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="data-column">
                                    <td>1.21</td>
                                    <td>1.0</td>
                                    <td>132 KO</td>
                                    <td>Mardi 1 Janvier 2025</td>
                                </tr>
                            </tbody>
                            </table>
                        <div className="download-block-button">
                            <a>Télécharger</a>
                        </div>
                    </div>
                </div>
                <div className="download-block-curseforge-github">
                    <div className="download-block-curseforge">
                        <a><img src={curseforgeIcon} alt='icon-curseforge' className="download-block-curseforge-img"/>Curseforge</a>
                    </div>
                    <div className="download-block-github">
                        <a><img src={githubIcon} alt='icon-github' className="download-block-github-img"/>GitHub</a>
                    </div>
                </div>
            </div>
        </>
    );
}