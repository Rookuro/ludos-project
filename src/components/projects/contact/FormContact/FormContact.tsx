import './style.css'

export default function FormContact() {
    return(
    <>
        <div className="formcontact-container">
            <div className="formcontact-block-form">
                <form>
                    <div className="formcontact-block-form-firstname-lastname">
                        <div className="formcontact-block-form-firstname">
                            <label>Nom</label>
                            <input type='text' placeholder=''/>
                        </div>
                        <div className="formcontact-block-form-lastname">
                            <label>Prénom</label>
                            <input type='text' placeholder=''/>
                        </div>
                    </div>
                    <div className="formcontact-block-form-email-subject">
                        <div className="formcontact-block-form-email">
                            <label>Email</label>
                            <input type='text' placeholder=''/>
                        </div>
                        <div className="formcontact-block-form-subject">
                            <label>Sujet</label>
                            <input type='text' placeholder=''/>
                        </div>
                    </div>
                    <div className="formcontact-block-form-message">
                        <label>Message</label>
                        <textarea placeholder=''/>
                    </div>
                    <div className="formcontact-block-form-send">
                        <button type='submit'>Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}