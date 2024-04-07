import './styles.css'
const WhyChooseUs= () =>{
    return(
        <div className="whychooseus-section" id="whychooseus">
                <h1 className='why-choose-us-heading'>
                    Why Choose Us?
                </h1>
                <hr className='underline-hr'/>
                <div className='why-choose-us-reasons'>
                    <div className='why-choose-us-card'>
                        <h2 className='card-heading'>Export Faculty</h2>
                        <p className='card-description'>Some radom discription about the Faculty related text. Like how the Faculty in 
                            this course could teach you.
                        </p>
                    </div>
                    <div className='why-choose-us-card'>
                        <h2 className='card-heading'>Complete Success Package</h2>
                        <p className='card-description'>Some radom discription about the Faculty related text. Like how the Faculty in 
                            this course could teach you.
                        </p>
                    </div>
                    <div className='why-choose-us-card'>
                        <h2 className='card-heading'>Placements</h2>
                        <p className='card-description'>Some radom discription about the Faculty related text. Like how the Faculty in 
                            this course could teach you.
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default WhyChooseUs