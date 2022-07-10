import './FirstMain.css'

import Navigation from '../Navigation/Navigation'
import HomePart from '../HomePart/HomePart'

const FirstMain = () => {
    return (
        <div className = "first-main-container">
            <Navigation/>
            <HomePart/>
        </div>
    )
}

export default FirstMain;