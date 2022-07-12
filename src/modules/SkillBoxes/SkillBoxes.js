import './SkillBoxes.css';
import AndroidImg from '../../resourse/android.svg'
import Frontend from '../../resourse/frontend.svg'
import Ios from '../../resourse/apple.svg'
import React from '../../resourse/react.svg'
import Code from '../../resourse/code.svg'
import Jetpack from '../../resourse/compose.svg'

const Until = [
    {
        image: AndroidImg,
        text: "Android"
    },
    {
        image: Frontend,
        text: "Frontend"
    },

    {
        image: Ios,
        text: "IOS"
    },
    {
        image: React,
        text: "React"
    },
    {
        image: Code,
        text: "Clean architecture"
    },
    {
        image: Jetpack,
        text: "Jetpack compose"
    },
]

const SkillsBox = () => {

    const array = []

    for(let i = 0;i < 6;i++){
        array.push(Skill(AndroidImg,"asdasd"))
    }

    return(
        <div className='skill-box-container'>
            {
                Until.map(({image,text}) => Skill(image,text))
            }
        </div>
    )
}

const Skill = (image,text) => {

    return(
        <div className='skill-box'>
            <img src = {image} className = 'image-skill' alt = "sdf"/>
            <p className='skill-text'>{text}</p>
        </div>
    )

}

export default SkillsBox;