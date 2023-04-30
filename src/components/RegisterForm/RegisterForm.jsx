export const RegisterForm = () => {
  return (
    <form>
      <label type="text" name="name" htmlFor="">
        User name
      </label>
      <label type="email" name="email" htmlFor="">
        Email
      </label>
      <label type="password" name="password" htmlFor="">
        Password
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
