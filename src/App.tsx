import { createContext, Dispatch, useReducer } from "react";
import styled from "styled-components";
import isMobile from "is-mobile";

import { Color } from "./components/Color";
import { Drum } from "./components/Drum";
import { initState, reducer } from "./state/reducer";
import { Pattern } from "./components/Pattern";
import { PatternColor } from "./components/PatternColor";
import { Preloader } from "./components/Preloader";
import { Scale } from "./components/Scale";
import { State, Action } from "./state/types";

const AppDiv = styled.div`
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AppInnerDiv = styled.div``;

export const StateContext = createContext<[State, Dispatch<Action>]>([] as any);

export const App = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <StateContext.Provider value={[state, dispatch]}>
            <Preloader />

            <AppDiv>
                <AppInnerDiv style={{ marginLeft: "20px" }}>
                    <Scale />
                    <Color />
                </AppInnerDiv>

                <AppInnerDiv style={{ alignSelf: "center" }}>
                    <Drum
                        scale={state.scale}
                        color={state.color}
                        pattern={state.pattern}
                        patternColor={state.patternColor}
                    />
                </AppInnerDiv>

                <AppInnerDiv>
                    <Pattern />
                    <PatternColor />
                </AppInnerDiv>
            </AppDiv>
        </StateContext.Provider>
    );
};

export default App;
