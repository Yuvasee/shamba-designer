import { createContext, Dispatch, useReducer } from "react";
import styled from "styled-components";

import { Color } from "./components/Color";
import { Drum } from "./components/Drum";
import { initState, reducer } from "./state/reducer";
import { Pattern } from "./components/Pattern";
import { PatternColor } from "./components/PatternColor";
import { Preloader } from "./components/Preloader";
import { Scale } from "./components/Scale";
import { State, Action } from "./state/types";

const AppDiv = styled.div`
    display: inline-block;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: visible;
`;

export const StateContext = createContext<[State, Dispatch<Action>]>([] as any);

export const App = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <StateContext.Provider value={[state, dispatch]}>
            <Preloader />

            <AppDiv>
                <Drum
                    scale={state.scale}
                    color={state.color}
                    pattern={state.pattern}
                    patternColor={state.patternColor}
                />

                <Pattern />

                <PatternColor />

                <Color />

                <Scale />
            </AppDiv>
        </StateContext.Provider>
    );
};

export default App;
