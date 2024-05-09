import imgSrc from '../assets/investment-calculator-logo.png'
function Header () {

    return (
        <div id="header">
            <img src={imgSrc} id={"header"} alt={"image"}/>
            <h1 id={"header"}>Investment Calculator</h1>
        </div>
    )
}

export default Header;

