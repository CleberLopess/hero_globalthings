import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICategory, ICategoryState } from "../../interfaces/ICategory";

const INITIAL_STATE: ICategoryState = {
  isLoading: false,
  category: {
    id: "",
    name: "",
  },
};

export const slice = createSlice({
  name: "category",
  initialState: INITIAL_STATE,
  reducers: {
    setCategorySuccess(state, { payload }: PayloadAction<ICategory>) {
      return { ...state, isLoading: false, events: payload };
    },
    // clearHeros(state) {
    //   return { ...state, isLoading: false };
    // },
  },
});

export const { setCategorySuccess } = slice.actions;

export const selectcategory = (state: ICategoryState) => state;

export const categoryReducer = slice.reducer;
