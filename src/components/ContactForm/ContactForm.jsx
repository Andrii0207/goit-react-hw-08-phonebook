import { nanoid } from 'nanoid';
import { useState } from 'react';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import {
  AddContactBtn,
  FormWrapper,
  InputData,
  InputDataWrapper,
  InputName,
  LabelName,
} from './ContactForm.styled';

const initialState = {
  name: '',
  number: '',
};
const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const contacts = useSelector(selectContacts);

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

    const newName = evt.target.elements.name.value;

    contacts.find(item => item.name.toLowerCase() === newName.toLowerCase())
      ? Notiflix.Notify.info(`${newName} is already in contacts`)
      : dispatch(addContact({ name, number })) &&
        Notiflix.Notify.success(`${newName} has added to your phonebook`);

    setState(initialState);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputDataWrapper>
        <LabelName htmlFor={contactId}>
          <InputName>Name</InputName>
          <InputData
            onChange={handleChange}
            value={state.name}
            type="text"
            name="name"
            id={contactId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelName>
        <LabelName htmlFor={contactId}>
          <InputName>Number</InputName>
          <InputData
            onChange={handleChange}
            value={state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelName>
      </InputDataWrapper>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </FormWrapper>
  );
};

export default ContactForm;
