
import BecomeAcca from './Components/BecomeAcca'
import Navbar from './Components/Navbar'
import WhyChooseUs from './Components/WhyChooseUs'
import Placements from './Components/Placements'
import ContactUs from './Components/ContactUs'
import WhatWillYouLearn from './Components/WhatWillYouLearn'

const App = () =>{
    return(
        <div className='app-container'>
            <Navbar/>
            <BecomeAcca/>
            <WhyChooseUs/>
            <WhatWillYouLearn/>
            <Placements/>
            <ContactUs/>
        </div>
    )
}

export default App
