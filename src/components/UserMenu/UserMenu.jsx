import { useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import getAuthSelectors from 'redux/auth/selectors';

export const UserMenu = () => {
  const userName = useSelector(getAuthSelectors.selectUserName);

  return (
    <div className={css.userMenuWrapper}>
      <p className={css.welcomeUser}>Welcome, {userName}</p>
      <button>LogOut</button>
    </div>
  );
};
