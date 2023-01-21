import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
// import css from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} onDeleteContact={onDeleteContact} />
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
