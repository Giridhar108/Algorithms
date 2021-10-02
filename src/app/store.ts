import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bank from '../features/counter/bank';

export const store = configureStore({
  reducer: {
    bank,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
