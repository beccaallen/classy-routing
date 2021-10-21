import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="pt-2">
        <div className="logo d-flex justify-content-center">
            <h1>Studio Ghibli <strong>Wiki</strong> </h1>
        </div>
      <div className="navpages d-flex flex-end justify-content-center pb-2">
          <NavLink
            className="mx-4 px-4 navStyle p-2"
            exact
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="mx-4 px-4 navStyle p-2"
            exact
            to="/films"
          >
            Films
          </NavLink>
          <NavLink
            className="mx-4 px-4 navStyle p-2"
            exact
            to="/people"
          >
            People
          </NavLink>
          <NavLink
            className="mx-4 px-4 navStyle p-2" exact to="/locations">
              Locations
          </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
