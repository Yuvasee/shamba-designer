import { Reducer } from "react";
import { State, Action } from "./types";

export const initState: State = {
    scale: "akebonoC",
    drumColor: "gray",
    pattern: 0,
    patternColor: 0,
};

export const reducer: Reducer<State, Action> = (state, action) => {
    return state;
};
