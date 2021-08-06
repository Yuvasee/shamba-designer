import { Reducer } from "react";

import sound from "./sound";
import { State, Action, ActionMap, Pattern, PatternColorId, DrumColor, ScaleId } from "./types";

export const initState: State = {
    verticalView: false,
    mainState: "splash",
    scale: "akebonoC",
    color: "gray",
    patternColor: 0,
    sound: sound,
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

        setColor: (state: State, payload: DrumColor) => ({
            ...state,
            color: payload,
            patternColor:
                payload === "white" && state.patternColor === 0
                    ? 7
                    : payload === "black" && state.patternColor === 7
                    ? 0
                    : state.patternColor,
        }),

        setScale: (state: State, payload: ScaleId) => ({
            ...state,
            scale: payload,
        }),

        verticalView: (state: State, payload: boolean) => ({
            ...state,
            verticalView: payload,
        }),
    };

    return actionMap[action.type]?.(state, action.payload) || state;
};
