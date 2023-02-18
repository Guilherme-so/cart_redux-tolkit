import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { openModal } from "../modal/modalSlice";
// import CartItems from "../../../cartItems";

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("cart/getCartItems",
async (name,thunkAPI) => {
  try {
    const resp = await axios(url)   
    console.log(thunkAPI)
    // console.log(name)
    // thunkAPI.dispatch(openModal())
    // console.log(thunkAPI.getState())
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue("Opps Something Happend...")
  }
});

const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
  error: null
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id == payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id == payload);
      cartItem.amount = cartItem.amount - 1;
    },
    calculeTotals: (state, { payload }) => {
      let total = 0;
      let amount = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true
    },
    [getCartItems.fulfilled]: (state, action) => {
      // console.log(action)
      state.isLoading = false
      state.cartItems = action.payload
    },
    [getCartItems.rejected]: (state, action) => {
      console.log(action)
      state.isLoading = false
    }
  }
});

export const { clearCart, removeItem, increase, decrease, calculeTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
