// import { getContacts } from 'components/redux/selectors';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';

const initialState = {
  name: '',
  number: '',
};
const ContactForm = () => {
  const [state, setState] = useState(initialState);

  const contactId = nanoid();
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    setState(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const { name, number } = state;
    dispatch(addContact(name, number));
    setState(initialState);
  };

  return (
    <form className={css.contactFormWrapper} onSubmit={handleSubmit}>
      <div className={css.inputDataWrapper}>
        <label className={css.labelName} htmlFor={contactId}>
          <p className={css.inputName}>Name</p>
          <input
            onChange={handleChange}
            value={state.name}
            className={css.inputData}
            type="text"
            name="name"
            id={contactId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={contactId}>
          <p className={css.inputName}>Number</p>
          <input
            onChange={handleChange}
            value={state.number}
            className={css.inputData}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button className={css.addContactBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
