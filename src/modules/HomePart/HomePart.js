import './HomePart.css';
import DudeImage from '../../resourse/dude.png';

const HomePart = () => {
    return(
        <div className = "container-home-part">
            <div className="home-part-info">
                <div className = "hello-text">Hello</div>
                <div className = "my-name-text">I’m Kirel
                 Andrievskyy</div>
                 <div className = "about-text">I've been doing front-end and android developing for a year now. Do you need a mobile app, site layout, or maybe a turnkey website? Then contact me</div>
                 <div className = "profile-buttons">
                    <button className = "contact-button">Contact me</button>
                    <button className = "github-button">Github</button>
                 </div>
            </div>
            <img src = {DudeImage} className = "profile-image" alt = "dsf" />
        </div>
    )
}

export default HomePart;