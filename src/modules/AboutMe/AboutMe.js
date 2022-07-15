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
                    <div className='photo-box dude2'>
                        <div className='border-for-dude'>
                          <img src={Dude1} className="dude-second" alt = ""/>
                        </div>
                    </div>
                </div>
                <div className='second-part-about-me'>
                Hello again everyone! So, you already know that my name is Gleb. A little about myself: student, 18 y.o., athlete-football player, I love creativity since childhood, I live in Donetsk, Ukraine. Why programming? Everything is elementary - I like it, the profession of the future, thanks to which I can provide myself and fulfill my dream - travel, at the moment I specialize in web design, front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility and love, as I want to make a name for myself, exclude plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make an order as quickly and uniquely as possible, taking into account all the edits and wishes.
By trusting me, you will get the maximum return for your project, save your nerves and time.
If you are interested in me , you want to know something more or use my services, then I will provide all my contacts below.
                </div>
            </div>
         
            {/* <div className='about-me-info'>
                
            </div> */}
        </div>
    )
}

export default AboutMe;