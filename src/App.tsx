import { createContext, Dispatch, useReducer } from "react";
import styled from "styled-components";

import { Drum } from "./components/Drum";
import { Pattern } from "./components/Pattern";
import { Preloader } from "./components/Preloader";
import { initState, reducer } from "./state/reducer";
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
        <AppDiv>
            <Preloader />

            <StateContext.Provider value={[state, dispatch]}>
                <Drum
                    scale={state.scale}
                    color={state.color}
                    pattern={state.pattern}
                    patternColor={state.patternColor}
                />
                <Pattern />
            </StateContext.Provider>
        </AppDiv>
    );
};

export default App;
