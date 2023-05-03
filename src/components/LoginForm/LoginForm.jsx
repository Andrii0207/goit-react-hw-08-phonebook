import { useState } from 'react';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const initialState = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    setState(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const { email, password } = state;
    dispatch(logIn({ email, password }));
    console.log(state);
    form.reset();
  };

  return (
    <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
      <label className={css.label}>
        Email
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
