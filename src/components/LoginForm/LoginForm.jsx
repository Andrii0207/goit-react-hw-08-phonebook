export const LoginForm = () => {
  return (
    <form autoComplete="off">
      <label type="email" name="email">
        Email
      </label>
      <label type="password" name="password">
        Password
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
