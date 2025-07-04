import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers/contacts';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Tipagem para o estado global
export type AppDispatch = typeof store.dispatch; // Tipagem para o dispatch

export default store;