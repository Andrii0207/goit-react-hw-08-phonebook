import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { MainWrapper } from './PhoneBook.styled';

export const PhoneBook = () => {
  return (
    <MainWrapper>
      <br />
      <ContactForm />
      <br />
      <Filter />
      <br />
      <ContactList />
    </MainWrapper>
  );
};
