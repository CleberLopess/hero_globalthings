import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";

//reducers
import { heroesReducer } from "./slices/heroes";
import { categoryReducer } from "./slices/category";

export const store = configureStore({
  reducer: {
    heroes: heroesReducer,
    category: categoryReducer,
  },
});

export const useSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useReduxSelector;
