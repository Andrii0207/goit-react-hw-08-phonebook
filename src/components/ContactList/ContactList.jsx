import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import { Loader } from 'components/Loader/Loader';
import {
  selectIsLoading,
  selectFilteredContacts,
  sortedContacts,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from '../../service/operations';
import css from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  // console.log('contacts', contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    if (!filter) {
      return sortedContacts;
    }
    return sortedContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={css.listContact}>
      {isLoading && <Loader />}
      {filteredContacts().length === 0 && <p>You haven't found any contacts</p>}
      {filteredContacts().map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contactWrapper}>
            <p className={css.contactData}>
              {name} : {number}
            </p>
            <button
              className={css.deleteContactBtn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              <GrClose style={{ width: '40px' }} />
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default ContactList;
