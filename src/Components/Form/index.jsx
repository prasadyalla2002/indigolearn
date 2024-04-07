import { useState } from "react"

import './styles.css'

const Form = () =>{
    const [isRequestedCallBack, changeState] = useState(false)

    const onClickSubmit = () =>{
        changeState(true)
    }

    const renderForm=() =>{
        return(
        <form onSubmit={onClickSubmit} className="form-container">
            <input type="text" placeholder="Name" className="form-input"/>
            <input type="text" placeholder="Email" className="form-input"/>
            <input type="text" placeholder="Mobile no" className="form-input"/>
            <input type="text" placeholder="Occupation" className="form-input"/>
            <button type="submit" className="request-button">
                Request a call back
            </button>
        </form>
        )
    }

    return(
        <div className="contact-us-form-container">
           {isRequestedCallBack ? <p>Thank You</p> : renderForm()}
        </div>
    )
}

export default Form