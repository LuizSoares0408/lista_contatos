import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Contact, ContactsState } from '../../types'; // Importando as tipagens

const initialState: ContactsState = {
  items: [
    { id: '1', name: 'João Silva', email: 'joao.silva@example.com', phone: '11987654321' },
    { id: '2', name: 'Maria Souza', email: 'maria.souza@example.com', phone: '11998765432' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Omit<Contact, 'id'>>) => { // Omit 'id' pois será gerado
      const newContact: Contact = {
        id: String(Date.now()), // Gerando um ID simples, considere UUID para produção
        ...action.payload,
      };
      state.items.push(newContact);
    },
    removeContact: (state, action: PayloadAction<string>) => { // Payload é o ID do contato
      state.items = state.items.filter((contact) => contact.id !== action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => { // Payload é o contato completo
      const index = state.items.findIndex((contact) => contact.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload; // Substitui o contato existente
      }
    },
  },
});

export const { addContact, removeContact, editContact } = contactsSlice.actions;
export default contactsSlice.reducer;