import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";

//reducers
import { herosReducer } from "./slices/heros";
import { categoryReducer } from "./slices/category";

export const store = configureStore({
  reducer: {
    heros: herosReducer,
    category: categoryReducer,
  },
});

export const useSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useReduxSelector;
