import './Navigation.css';
import Logo from '../../resourse/logo.png';

const Navigation = () => {
    return(
        <div className='navi'>
            <div className='logo-box'>
                <img src={Logo} className="logo-image" alt="sdf"/>
                <p className="logo-text">Notitanic</p>
            </div> 
            <div className='nav-elements-box'>
                <p className ="nav-item">Home</p>
                <p className ="nav-item">About me</p>
                <p className ="nav-item">Portfolio</p>
                <p className ="nav-item">Contact</p>
            </div>  
        </div>
    )
}

export default Navigation