import Form from '../Form'

import './styles.css'
const ContactUs= () =>{
    return(
        <div className="contactus-section" id="contactus">
            <div className='contact-us-text'>
                <h1 className='contact-us-heading'>Kick off your ACCA journey with IndigoLearn    
                </h1>
                <p className='contact-us-description'>Sign-in and get instant access to out FREE courses.</p>
                <button className='sign-in-button'>
                    Sign-In
                </button>
            </div>
            <Form/>
        </div>
    )
}

export default ContactUs