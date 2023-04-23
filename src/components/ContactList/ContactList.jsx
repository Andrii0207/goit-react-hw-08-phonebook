import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import { Loader } from 'components/Loader/Loader';
import {
  selectIsLoading,
  selectFilteredContacts,
  selectSortedContacts,
  selectContacts,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from '../../service/operations';
import css from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const filterState = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  // const sortedContacts = useSelector(selectSortedContacts);

  console.log('contacts', contacts);
  // console.log('sortedContacts', sortedContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    if (!filterState) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterState.toLowerCase())
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
