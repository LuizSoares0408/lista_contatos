import React, { useState } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import store from './store';
import GlobalStyle from './styles/GlobalStyle';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import type { Contact } from './types';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
`;

function App() {
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppContainer>
        <h1>Lista de Contatos</h1>
        <ContactForm editingContact={editingContact} setEditingContact={setEditingContact} />
        <ContactList setEditingContact={setEditingContact} />
      </AppContainer>
    </Provider>
  );
}

export default App;