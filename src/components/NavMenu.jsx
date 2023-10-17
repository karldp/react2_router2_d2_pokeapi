import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {MdCatchingPokemon} from "react-icons/md"

const NavMenu = () => {
  const activeClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
      <Navbar
        className="d-flex justify-content-between px-5 "
        variant="light"
        style={{ background: "#373738" }}
      > 

        <Navbar.Brand>
          <div>
          <MdCatchingPokemon className="nav-icon"/>
          </div>
        </Navbar.Brand>
        <div className="navbars">
          <NavLink
            className={activeClass + "m-3"}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={activeClass}
            to="/pokemons"
          >
            Pokemones
          </NavLink>
        </div>

      </Navbar>
  );
};
export default NavMenu;
