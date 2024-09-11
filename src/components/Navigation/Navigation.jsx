import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import css from "../AppBar/AppBar.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Navigation = ({ children }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
      {children}
    </nav>
  );
};

export default Navigation;
