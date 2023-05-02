import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={css.userMenuWrapper}>
      <p className={css.welcomeUser}>Welcome, user</p>
      <button>LogOut</button>
    </div>
  );
};
