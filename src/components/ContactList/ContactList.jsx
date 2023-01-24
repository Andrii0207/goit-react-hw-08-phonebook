import { getContacts, getFilterContacts } from 'components/redux/selectors';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/contactSlice';
// import Contact from '../Contact/Contact';
// import css from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);
  const filter = useSelector(getFilterContacts);

  console.log('ContactList contacts', contacts);

  return (
    <div>
      {contacts &&
        contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>Name: {name} </p>
              <p>Number: {number} </p>
              <button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          );
        })}
    </div>
  );
}

export default ContactList;
