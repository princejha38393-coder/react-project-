import { configureStore } from '@reduxjs/toolkit'
import xyz from './Myfunctions';

export const actionstore = configureStore({
  reducer: {
    counter:xyz,
  },
});