import {
  AddContactWrapper,
  ContactsWrapper,
  HeaderApp,
  HeaderContacts,
} from '../../src/components/App.styled';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactsList/ContactList';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export default function Phonebook() {
  const [showModal, setShowModal] = useState(false);
  const [contactId, setContactId] = useState(null);

  const onShowModalClick = contactId => {
    setContactId(contactId);
    setShowModal(true);
  };
  const onBackdropClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <AddContactWrapper>
        <HeaderApp>Phonebook</HeaderApp>
        <ContactForm />
      </AddContactWrapper>
      <ContactsWrapper>
        <Filter />
        <HeaderContacts>Contacts</HeaderContacts>
        <ContactList onShowModalClick={onShowModalClick} />
      </ContactsWrapper>

      {showModal && (
        <Modal onBackdropClose={onBackdropClose} contactId={contactId} />
      )}
    </>
  );
}
