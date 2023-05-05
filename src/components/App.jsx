// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Register } from 'pages/Register';
import { PhoneBook } from 'pages/PhoneBook';
import { HomePage } from 'pages/Home';
import { LoginForm } from './LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useEffect } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginForm />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <PhoneBook />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
// / ===================================

// /* <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </div> */

// ===================================
// const [contacts, setContacts] = useState(() => {
//   const contactsLocalStorage = JSON.parse(localStorage.getItem('contacts'));
//   return (
//     contactsLocalStorage ?? [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ]
//   );
// });

// const [filter, setFilter] = useState('');

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);

// const filterInputHandler = event => {
//   const { value } = event.currentTarget;

//   setFilter(value);
// };

// const filterContacts = () => {
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact => {
//     return contact.name.toLowerCase().includes(normalizedFilter);
//   });
// };

// const addContact = (name, number) => {
//   const newContact = {
//     id: nanoid(),
//     name,
//     number,
//   };
//   return contacts.find(contact => newContact.name.toLowerCase() === contact.name.toLowerCase())
//     ? alert(`${newContact} is already in contacts`)
//     : setContacts(() => [newContact, ...contacts]);
// };

// const deleteContact = id => setContacts(() => contacts.filter(contact => contact.id !== id));

// return (
//   <section>
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={addContact} />
//     </div>
//     <div>
//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={filterInputHandler} />
//       <ContactList contacts={filterContacts()} onDeleteContact={deleteContact} />
//     </div>
//   </section>
// );
