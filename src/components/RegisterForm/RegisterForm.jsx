import { useState } from 'react';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
  };

  return (
    <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
      <label className={css.label}>
        Username
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
