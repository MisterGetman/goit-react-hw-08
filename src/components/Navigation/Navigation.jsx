import css from "../AppBar/AppBar.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Navigation = ({ children }) => {
  return (
    <nav className={css.nav}>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/"
      >
        Home
      </NavLink>
      {children}
    </nav>
  );
};

export default Navigation;
