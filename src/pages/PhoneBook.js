import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export const PhoneBook = () => {
  return (
    <div>
      <br />
      <ContactForm />
      <br />
      <Filter />
      <br />
      <ContactList />
    </div>
  );
};
