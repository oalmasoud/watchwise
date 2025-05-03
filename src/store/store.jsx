import {configureStore} from "@reduxjs/toolkit";
import { movieSlice } from "./movieSlice";
const store = configureStore({
    reducer: {
        movieData: movieSlice.reducer
    },
});

export const movieAction = movieSlice.actions;
export default store;