import { NavLink } from "react-router-dom";
import Logo from "../../assets/Timeye-only-text.png";
import { StyledNav } from "./styles";


export function Navbar( { options }) {

  return (
      <StyledNav>
      <div className="nav-container">
          <div className="logo">
            <img src={Logo} alt="Timeye" />
          </div>

          <div className="options">
            { options.map(option => 
              <NavLink 
                to={option.goTo} 
                key={option.name}
                onClick={option.onclick ? option.onclick : false}
                >
                {option.name}
               </NavLink>) }
          </div>
      </div>
    </StyledNav>
  )
}