import { Reducer } from "react";

import { Sound } from "./sound";
import { State, Action, ActionMap, Pattern, PatternColorId, DrumColor, ScaleId } from "./types";

export const initState: State = {
    splashLoaded: false,
    loaded: false,
    verticalView: false,
    mainState: "splash",
    scale: "akebonoC",
    color: "gray",
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

        setLoaded: (state: State) => ({
            ...state,
            loaded: true,
        }),

        setSplashLoaded: (state: State) => ({
            ...state,
            splashLoaded: true,
            sound: new Sound(),
        }),
    };

    return actionMap[action.type]?.(state, action.payload) || state;
};
