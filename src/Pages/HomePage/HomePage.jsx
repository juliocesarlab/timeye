
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/Timeye-only-logo.png";
import textLogo from "../../assets/Timeye-only-text.png";
import { Navbar } from "../../Compoents/Navbar/Navbar";
import { Writer } from "../../Compoents/Writer/Writer";
import { useAuth } from '../../Hooks/useAuth';
import { HomeView } from './styles.js';

export function HomePage() {

  const data = useAuth()
  console.log(data)

  return (
    <>
      <Navbar options={[{name: "What is Timeye ?", goTo: "/about"}, {name: "Login", goTo: "/login"}]}/>
      <div className="default-container">
        <HomeView>
          <div className="apresentation">
            <img src={textLogo} alt="Timeye" />
            <h1>Don't waste your 
              <span>
                <Writer phrasesArr={["time.", "money."]}/>
              </span>
            </h1>
            <NavLink to={'/login'}>
              <button>Improve my time</button>
            </NavLink>
          </div>
          <div className="floating-logo">
            <img src={logoImage} alt="Timeye" />
          </div>
        </HomeView>
      </div>
    </>
  )
}

