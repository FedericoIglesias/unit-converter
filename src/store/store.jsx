import { configureStore } from "@reduxjs/toolkit";
import saveReducer from "../features/save/saveSlice";

export let store = configureStore({
    reducer: {
        save: saveReducer
    }
})