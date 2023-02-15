import Phonebook from '../components/ContactForm/Phonebook';
import Filter from '../components/Filter/Filter';
import ContactsList from '../components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';
import { BoxContacts, TitleContacts } from './StylePages/Contacts.styled';


const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch])

    return (
      <BoxContacts>
        <TitleContacts>Phonebook</TitleContacts>
        <Phonebook/>
        <TitleContacts>Contacts</TitleContacts>
        <Filter/>
        <ContactsList/>
      </BoxContacts>
    )
};

export default Contacts;