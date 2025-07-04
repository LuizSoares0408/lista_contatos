import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../../store/reducers/contacts';
import type { Contact } from '../../types';
import { FormContainer, Input, Button, ButtonGroup } from './styles';

interface ContactFormProps {
  editingContact: Contact | null;
  setEditingContact: (contact: Contact | null) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ editingContact, setEditingContact }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setEmail(editingContact.email);
      setPhone(editingContact.phone);
    } else {
      setName('');
      setEmail('');
      setPhone('');
    }
  }, [editingContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingContact) {
      dispatch(editContact({ id: editingContact.id, name, email, phone }));
      setEditingContact(null);
    } else {
      dispatch(addContact({ name, email, phone }));
    }
    setName('');
    setEmail('');
    setPhone('');
  };

  const handleCancel = () => {
    setEditingContact(null);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome Completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <ButtonGroup>
        <Button primary type="submit">
          {editingContact ? 'Salvar Edição' : 'Adicionar Contato'}
        </Button>
        {editingContact && (
          <Button type="button" onClick={handleCancel}>
            Cancelar
          </Button>
        )}
      </ButtonGroup>
    </FormContainer>
  );
};

export default ContactForm;