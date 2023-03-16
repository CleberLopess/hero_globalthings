import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICategory, ICategoryState } from "../../interfaces/ICategory";

const INITIAL_STATE: ICategoryState = {
  isLoading: false,
  category: [
    {
      Id: "",
      Name: "",
    },
  ],
};

export const slice = createSlice({
  name: "category",
  initialState: INITIAL_STATE,
  reducers: {
    setCategory(state, { payload }: PayloadAction<ICategory[]>) {
      return { ...state, isLoading: false, category: payload };
    },
  },
});

export const { setCategory } = slice.actions;

export const selectcategory = (state: ICategoryState) => state;

export const categoryReducer = slice.reducer;
