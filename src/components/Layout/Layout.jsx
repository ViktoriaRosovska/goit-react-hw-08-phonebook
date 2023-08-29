// import {
//   AddContactWrapper,
//   ContactsWrapper,
//   Container,
//   HeaderApp,
//   HeaderContacts,
// } from './App.styled';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactsList/ContactList';
// import { Modal } from 'components/Modal/Modal';
// import { useState } from 'react';

import { Suspense } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  //   const [showModal, setShowModal] = useState(false);
  //   const [contactId, setContactId] = useState(null);

  //   const onShowModalClick = contactId => {
  //     setContactId(contactId);
  //     setShowModal(true);
  //   };
  //   const onBackdropClose = () => {
  //     setShowModal(false);
  //   };
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink>Register</NavLink>
          </nav>
        </header>

        <Outlet />
      </Suspense>
      {/* <Container>
        <AddContactWrapper>
          <HeaderApp>Phonebook</HeaderApp>
          <ContactForm />
        </AddContactWrapper>
        <ContactsWrapper>
          <Filter />
          <HeaderContacts>Contacts</HeaderContacts>
          <ContactList onShowModalClick={onShowModalClick} />
        </ContactsWrapper>
      </Container>

      {showModal && (
        <Modal onBackdropClose={onBackdropClose} contactId={contactId} />
      )} */}
    </>
  );
};
