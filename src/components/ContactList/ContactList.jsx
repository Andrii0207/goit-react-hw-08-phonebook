import {
  selectContacts,
  getFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { GrClose } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

import css from './ContactList.module.css';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from '../../service/operations';
import { Loader } from 'components/Loader/Loader';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(getFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

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
