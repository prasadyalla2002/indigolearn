import Form from '../Form'
import './styles.css'

const BecomeAcca= () =>{
    return(
        <div className="become-acca-section" id="becomeacca">
            <div className='become-acca-content-container'>
                <h2 className='become-acca-heading'>Become ACCA in 18 months</h2>
                <p className='become-acca-description'>Description about how you can able to become ACCA in 18 months with examples.</p>
                <ul className='become-acca-ul'>
                    <li className='become-acca-li'>admissions</li>
                    <li className='become-acca-li'>courses</li>
                    <li className='become-acca-li'>faculty</li>
                    <li className='become-acca-li'>opportunities</li>
                </ul>
                <div className='become-bcca-buttons-container'>
                    <button className='become-bcca-button'>Download</button>
                    <button className='become-bcca-button'>Browse Course</button>
                </div>
            </div>
            <Form/>
        </div>
    )
}

export default BecomeAcca