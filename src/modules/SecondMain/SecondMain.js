import './SecondMain.css';

import SkillsBox from '../SkillBoxes/SkillBoxes';
import AboutMe from '../AboutMe/AboutMe';

const SecondMain = () => {
    return(
        <div className='second-main-container'>
            <SkillsBox/>
            <AboutMe/>
        </div>
    )
}

export default SecondMain;