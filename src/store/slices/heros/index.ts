import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IHeroes, IHerosState } from "../../interfaces/IHeros";

const INITIAL_STATE: IHerosState = {
  isLoading: false,
  heros: {
    active: false,
    id: "",
    name: "",
  },
};

export const slice = createSlice({
  name: "heros",
  initialState: INITIAL_STATE,
  reducers: {
    setHerosSuccess(state, { payload }: PayloadAction<IHeroes>) {
      return { ...state, isLoading: false, events: payload };
    },
    // clearHeros(state) {
    //   return { ...state, isLoading: false };
    // },
  },
});

export const { setHerosSuccess } = slice.actions;

export const selectHeros = (state: IHerosState) => state;

export const herosReducer = slice.reducer;
