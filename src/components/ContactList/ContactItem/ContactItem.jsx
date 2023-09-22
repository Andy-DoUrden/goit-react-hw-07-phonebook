import PropTypes from 'prop-types';
import { Contact, ContactValue, RemoveContact } from './ContactItem.styled';

const ContactItem = ({ name, phone, id, deleteContact }) => (
  <Contact>
    <ContactValue>{name}</ContactValue>

    <ContactValue>{phone}</ContactValue>

    <RemoveContact
      type="button"
      onClick={() => {
        deleteContact(id);
      }}
    >
      Delete
    </RemoveContact>
  </Contact>
);

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};
