import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import getAuthSelectors from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const userName = useSelector(getAuthSelectors.selectUserName);
  const dispatch = useDispatch();

  return (
    <div className={css.userMenuWrapper}>
      <p className={css.welcomeUser}>Welcome, {userName}</p>
      <button onClick={() => dispatch(logOut())}>LogOut</button>
    </div>
  );
};
