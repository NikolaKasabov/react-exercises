import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    notification: null,
  },
  reducers: {
    addNotification(state, action) {
      // the notification should be like: {type: 'info' | 'warning', message: string}
      state.notification = action.payload;
    },
    removeNotification(state) {
      state.notification = null;
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
