export const LoginForm = () => {
  return (
    <form>
      <label>
        <input type="email" name="email" />
      </label>
      <label>
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
