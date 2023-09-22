import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilterValue } from 'redux/selectors';

import { List } from './ContactList.styled';

import ContactItem from './ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilterValue = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(({ id, name, phone }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            phone={phone}
            id={id}
            deleteContact={() => dispatch(deleteContact(id))}
          />
        );
      })}
    </List>
  );
};

export default ContactList;
