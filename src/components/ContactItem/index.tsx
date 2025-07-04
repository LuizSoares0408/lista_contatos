import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../store/reducers/contacts';
import type { Contact } from '../../types';
import { ContactCard, ContactInfo, ContactName, ButtonGroup, ActionButton } from './styles';

interface ContactItemProps {
  contact: Contact;
  onEdit: (contact: Contact) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onEdit }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  return (
    <ContactCard>
      <ContactName>{contact.name}</ContactName>
      <ContactInfo>E-mail: {contact.email}</ContactInfo>
      <ContactInfo>Telefone: {contact.phone}</ContactInfo>
      <ButtonGroup>
        <ActionButton edit onClick={() => onEdit(contact)}>
          Editar
        </ActionButton>
        <ActionButton remove onClick={handleRemove}>
          Remover
        </ActionButton>
      </ButtonGroup>
    </ContactCard>
  );
};

export default ContactItem;