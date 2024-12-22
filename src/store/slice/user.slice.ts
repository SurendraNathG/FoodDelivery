import {createSlice} from '@reduxjs/toolkit';
const initialState: UserSlice = {
  spinners: 0,
  userData: {},
  cartItems: [],
  isSave: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    addSpinner: state => {
      state.spinners = state.spinners + 1;
    },
    removeSpinner: state => {
      if (state.spinners < 1) {
        return;
      }
      state.spinners = state.spinners - 1;
    },
    addCardItems: (state, action) => {
      const newItem = action.payload;
      const existingIndex = state?.cartItems?.findIndex(
        item => item.id === newItem.id,
      );
      if (existingIndex !== -1) {
        if (newItem.count === 0) {
          state.cartItems.splice(existingIndex, 1);
        } else {
          state.cartItems[existingIndex] = newItem;
        }
      } else {
        if (newItem.count !== 0) {
          state.cartItems.push(newItem);
        }
      }
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    setIsSave: (state, action) => {
      state.isSave = action.payload;
    },
  },
});

export const {
  setUserData,
  addSpinner,
  removeSpinner,
  addCardItems,
  setCartItems,
  setIsSave,
} = userSlice.actions;
export default userSlice.reducer;
