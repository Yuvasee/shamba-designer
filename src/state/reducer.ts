import isMobile from "is-mobile";
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
    viewHeight: window.innerHeight,
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

        resize: (state: State) => ({
            ...state,
            verticalView: isMobile() && window.innerHeight > window.innerWidth,
            ...(state.viewHeight === window.innerHeight
                ? {}
                : {
                      viewHeight: window.innerHeight,
                      fixedWrapperRect: undefined,
                      drumRect: undefined,
                      scaleHeaderRect: undefined,
                      colorHeaderRect: undefined,
                      patternHeaderRect: undefined,
                      patternColorHeaderRect: undefined,
                  }),
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

        setFixedWrapperRect: (state: State, payload: DOMRect) => ({
            ...state,
            fixedWrapperRect: payload,
        }),

        setDrumRect: (state: State, payload: DOMRect) => ({
            ...state,
            drumRect: payload,
        }),

        setScaleHeaderRect: (state: State, payload: DOMRect) => ({
            ...state,
            scaleHeaderRect: payload,
        }),

        setColorHeaderRect: (state: State, payload: DOMRect) => ({
            ...state,
            colorHeaderRect: payload,
        }),

        setPatternHeaderRect: (state: State, payload: DOMRect) => ({
            ...state,
            patternHeaderRect: payload,
        }),

        setPatternColorHeaderRect: (state: State, payload: DOMRect) => ({
            ...state,
            patternColorHeaderRect: payload,
        }),
    };

    return actionMap[action.type]?.(state, action.payload) || state;
};
