import { useDispatch, useSelector } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import { selectAuthUser } from "../../redux/auth/selectors";
import css from "../AppBar/AppBar.module.css";

const UserMenu = () => {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(apiLogout());
  };

  return (
    <>
      <div className={css.greetingBlock}>
        <p>Hello, {user.name}!</p>
      </div>
      <button className={css.link} type="button" onClick={onLogout}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
