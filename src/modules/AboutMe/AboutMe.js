import './AboutMe.css';
import Ellips from '../../resourse/Ellips.svg'

const AboutMe = () => {
    return(
        <div className='about-me-box'> 
            <p className='about-me-title'>ABOUT ME</p>
            <img src={Ellips} className= "ellips"/>
            <div className='about-me-info'>
                
            </div>
        </div>
    )
}

export default AboutMe;