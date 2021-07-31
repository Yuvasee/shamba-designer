import { Reducer } from "react";
import { State, Action, ActionMap, Pattern, PatternColorId } from "./types";

export const initState: State = {
    mainState: "splash",
    scale: "akebonoC",
    color: "Gray",
    pattern: 0,
    patternColor: 0,
};

export const reducer: Reducer<State, Action> = (state, action) => {
    const actionMap: ActionMap = {
        setPattern: (state: State, payload: Pattern) => ({
            ...state,
            pattern: payload,
        }),

        setPatternColor: (state: State, payload: PatternColorId) => ({
            ...state,
            patternColor: payload,
        }),
    };

    return actionMap[action.type]?.(state, action.payload) || state;
};
