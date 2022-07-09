import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/index';

export default function store(initialState) {
  return configureStore({ reducer, initialState });
}
