import './AboutMe.css';
import Ellips from '../../resourse/Ellips.svg'
import Dude1 from '../../resourse/dude1.jpg'
import Dude2 from '../../resourse/dude2.jpg'

const AboutMe = () => {
    return(
        <div className='about-me-box'> 
            <p className='about-me-title'>ABOUT ME</p>
            <div className='ellips'>
                <div className='first-part-about-me'>
                    <div className='photo-box'>
                        <div className='border-for-dude'>
                          <img src={Dude2} className="dude-first" alt = ""/>
                        </div>
                    </div>
                    <div className='photo-box dude'>
                        <div className='border-for-dude'>
                          <img src={Dude1} className="dude-second" alt = ""/>
                        </div>
                    </div>
                </div>
            </div>
         
            {/* <div className='about-me-info'>
                
            </div> */}
        </div>
    )
}

export default AboutMe;