import { createContext, Dispatch, useReducer, useEffect, useRef } from "react";
import styled from "styled-components";
import debounce from "lodash/debounce";

import { Color } from "./components/Color";
import { Drum } from "./components/Drum";
import { initState, reducer } from "./state/reducer";
import { Pattern } from "./components/Pattern";
import { PatternColor } from "./components/PatternColor";
import { Preloader } from "./components/Preloader";
import { Scale } from "./components/Scale";
import { State, Action } from "./state/types";
import { Rotate } from "./components/Rotate";
import { CurrentScale } from "./components/CurrentScale";
import { Loader } from "./components/Loader";
import { Lines } from "./components/Lines";

const AppDiv = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 800px;
`;

const AppInnerDiv = styled.div``;

export const StateContext = createContext<[State, Dispatch<Action>]>([] as any);

export const App = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    useEffect(() => {
        const handleResize = debounce(() => {
            dispatch({ type: "resize" });
        });
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { loaded, verticalView } = state;

    const appDivRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!appDivRef.current || state.fixedWrapperRect) return;
        dispatch({
            type: "setFixedWrapperRect",
            payload: appDivRef.current.getBoundingClientRect(),
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appDivRef.current, state.fixedWrapperRect]);

    return (
        <StateContext.Provider value={[state, dispatch]}>
            <Preloader />

            {loaded ? (
                verticalView ? (
                    <Rotate />
                ) : (
                    <AppDiv ref={appDivRef}>
                        <Lines />

                        <AppInnerDiv style={{ marginLeft: "10px" }}>
                            <Scale />
                            <Color />
                        </AppInnerDiv>

                        <AppInnerDiv style={{ alignSelf: "center" }}>
                            <CurrentScale />
                            <Drum />
                        </AppInnerDiv>

                        <AppInnerDiv style={{ marginRight: "10px" }}>
                            <Pattern />
                            <PatternColor />
                        </AppInnerDiv>
                    </AppDiv>
                )
            ) : (
                <Loader />
            )}
        </StateContext.Provider>
    );
};

export default App;
