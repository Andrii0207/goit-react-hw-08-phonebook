import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.authNavWrapper}>
      <NavLink to="/register" className={css.authNavRegister}>
        Register
      </NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
