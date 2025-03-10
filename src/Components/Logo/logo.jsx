import logoImg from "../../assets/tours-logo.png";
import './logo.css';

function Logo() {
    return(
        <div className="logo">
            <img src={logoImg} alt="logo" />
            <h1>Zaph <span>Tours</span></h1>
        </div>
        
        
    )
}

export default Logo