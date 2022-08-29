const { createSlice } = require('@reduxjs/toolkit');

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isSidebarOpen: false,
  },
  reducers: {
    openSidebar: (state, action) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state, action) => {
      state.isSidebarOpen = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
