import { getContacts, getFilteredContacts } from 'components/redux/selectors';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/contactSlice';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilteredContacts);

  console.log('ContactList contacts1', contacts);

  return (
    <div>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>id: {id} </p>
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
