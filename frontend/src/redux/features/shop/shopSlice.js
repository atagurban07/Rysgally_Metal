import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  products: [],
  checked: [],
  radio: [],
  brandCheckboxes: {},
  checkedBrands: [],
  // currentPosts: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCategories: (state, action) => {

      state.categories = action.payload;
    },
    setProducts: (state, action) => {

      state.products = action.payload;
    },
    setChecked: (state, action) => {

      state.checked = action.payload;
    },
    // setCurrentPosts: (state, action) => {
    //   state.currentPosts = action.payload;
    // }
    // setRadio: (state, action) => {
    //   state.radio = action.payload;
    // },
    // setSelectedBrand: (state, action) => {
    //   state.selectedBrand = action.payload;
    // },
  },
});

export const {
  setCategories,
  setProducts,
  setChecked,
  // setCurrentPosts,
  // setRadio,
  // setSelectedBrand,
} = shopSlice.actions;

export default shopSlice.reducer;
