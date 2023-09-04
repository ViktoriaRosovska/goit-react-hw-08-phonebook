import { FormWrapper, FormInput, FormButton } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';

import * as services from '../../services/notify';

import { contactsSelector } from '../../redux/phonebook/selectors';
import { addContact } from '../../redux/phonebook/operations';

export function ContactForm() {
  const items = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const userName = e.currentTarget.elements.name.value.trim();
    const userNumber = e.currentTarget.elements.number.value.trim();

    if (
      items.find(user => user.name.toLowerCase() === userName.toLowerCase())
    ) {
      return services.Notify.warning(`${userName} is already in contacts`);
    }
    if (items.find(user => user.number === userNumber)) {
      return services.Notify.warning(
        `This number: ${userNumber} is already in contacts`
      );
    }
    const user = {
      name: userName,
      number: userNumber,
    };

    dispatch(addContact(user));
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <FormWrapper>
        <label htmlFor="formName">Name</label>
        <FormInput
          id="formName"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="phone">Number</label>
        <FormInput
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
        <FormButton type="submit">Add contact</FormButton>
      </FormWrapper>
    </form>
  );
}
