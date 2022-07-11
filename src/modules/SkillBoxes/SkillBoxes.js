import './SkillBoxes.css';
import AndroidImg from '../../resourse/android.svg'

const SkillsBox = () => {

    const array = []

    for(let i = 0;i < 5;i++){
        array.push(Skill(AndroidImg,"asdasd"))
    }

    return(
        <div className='skill-box-container'>
            {array}
        </div>
    )
}

const Skill = (image,text) => {

    return(
        <div className='skill-box'>
            <img src = {image} alt = "sdf"/>
            <p className='skill-text'>{text}</p>
        </div>
    )

}

export default SkillsBox;