import { useContext } from "react";
import styled from "styled-components";

import { StateContext } from "../App";
import { PropertyHeader } from "../elements/PropertyHeader";

const PATTERN_SIZE_PX = 40;

const PatternContainerDiv = styled.div``;

const PatternSelectorDiv = styled.div`
    display: flex;
`;

const PatternDiv = styled.div<{ fileName: string }>`
    width: ${PATTERN_SIZE_PX}px;
    height: ${PATTERN_SIZE_PX}px;
    background-image: url("/assets/i/patterns/${(p) => p.fileName}.png");
    background-size: cover;
    margin: 5px;
    cursor: pointer;

    &:hover {
        background-image: url("/assets/i/patterns/${(p) => p.fileName}G.png");
    }
`;

export const Pattern = () => {
    const [, dispatch] = useContext(StateContext);

    return (
        <PatternContainerDiv>
            <PropertyHeader>Pattern</PropertyHeader>

            <PatternSelectorDiv>
                {Array.from({ length: 16 }).map((_, i) => {
                    const fileName = String(i + 1).padStart(2, "0");

                    return (
                        <PatternDiv
                            key={i}
                            fileName={fileName}
                            onClick={() => dispatch({ type: "setPattern", payload: i })}
                        ></PatternDiv>
                    );
                })}
            </PatternSelectorDiv>
        </PatternContainerDiv>
    );
};
