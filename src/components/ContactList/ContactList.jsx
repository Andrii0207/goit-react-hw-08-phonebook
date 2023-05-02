/* eslint-disable array-callback-return */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notiflix from 'notiflix';
import { GrClose } from 'react-icons/gr';
import { Loader } from 'components/Loader/Loader';

import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import css from './ContactList.module.css';
import {
  selectContacts,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';

function ContactList() {
  const dispatch = useDispatch();
  const filterState = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const filteredContacts = () => {
    if (!filterState) {
      return sortedContacts;
    }
    return sortedContacts.filter(contact =>
      contact.name.toLowerCase().includes(filterState.toLowerCase())
    );
  };

  return (
    <ul className={css.listContact}>
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
              onClick={() =>
                dispatch(deleteContact(id))
                  .unwrap()
                  .then(({ name, id }) => {
                    Notiflix.Notify.warning(
                      `${name} was deleted from contacts`
                    );
                  })
                  .catch(rejectedValueOrSerializedError => {
                    console.log(rejectedValueOrSerializedError);
                  })
              }
            >
              <GrClose style={{ width: '40px' }} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
