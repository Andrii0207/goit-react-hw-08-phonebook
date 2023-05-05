import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <ul className={css.navigationList}>
        <li className={css.navigationItem}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">PhoneBook</NavLink>
        </li>
      </ul>
    </nav>
  );
};
