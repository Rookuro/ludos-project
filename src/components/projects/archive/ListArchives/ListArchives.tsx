import './style.css'

export default function ListArchives() {
    return(
    <>
            <div className="listarchives-container">
                <div className="listarchives-block">
                    <div className='listarchives-block-background'>
                        <table className="listarchives-custom-table">
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
                        <div className="listarchives-block-button">
                            <a>Télécharger</a>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}