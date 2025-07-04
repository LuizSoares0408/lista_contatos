import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import type { RootState } from '../../store';
import type { Contact } from '../../types';
import { ListContainer, Title, EmptyMessage } from './styles';

interface ContactListProps {
  setEditingContact: (contact: Contact | null) => void;
}

const ContactList: React.FC<ContactListProps> = ({ setEditingContact }) => {
  const contacts = useSelector((state: RootState) => state.contacts.items);

  return (
    <ListContainer>
      <Title>Meus Contatos</Title>
      {contacts.length === 0 ? (
        <EmptyMessage>Nenhum contato adicionado ainda.</EmptyMessage>
      ) : (
        contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} onEdit={setEditingContact} />
        ))
      )}
    </ListContainer>
  );
};

export default ContactList;