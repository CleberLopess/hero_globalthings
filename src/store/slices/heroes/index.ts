import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IHeroes, IHeroesState } from "../../interfaces/IHeroes";

const INITIAL_STATE: IHeroesState = {
  isLoading: false,
  heroes: [
    {
      Active: false,
      Id: "",
      Name: "",
    },
  ],
};

export const slice = createSlice({
  name: "heros",
  initialState: INITIAL_STATE,
  reducers: {
    setHeroes(state, { payload }: PayloadAction<IHeroes[]>) {
      return { ...state, isLoading: false, heroes: payload };
    },
  },
});

export const { setHeroes } = slice.actions;

export const selectHeroes = (state: IHeroesState) => state;

export const heroesReducer = slice.reducer;
