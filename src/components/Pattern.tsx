import { useContext } from "react";
import styled from "styled-components";

import { StateContext } from "../App";
import { PropertyHeader } from "../elements/PropertyHeader";

const PATTERN_SIZE_PX = 40;
const PATTERN_SIZE_XS_PX = 30;
const MARGIN_PX = 5;
const MARGIN_XS_PX = 3;

const PatternContainerDiv = styled.div`
    margin-bottom: 24px;
    max-width: ${PATTERN_SIZE_PX * 4 + MARGIN_PX * 8 + 1}px;

    @media screen and (max-height: 300px) {
        max-width: ${PATTERN_SIZE_XS_PX * 4 + MARGIN_XS_PX * 8 + 1}px;
        margin-bottom: 15px;
    }
`;

const PatternSelectorDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const PatternDiv = styled.div<{ fileName: string }>`
    width: ${PATTERN_SIZE_PX}px;
    height: ${PATTERN_SIZE_PX}px;
    background-image: url("/assets/i/patterns/${(p) => p.fileName}.png");
    background-size: cover;
    margin: ${MARGIN_PX}px;
    cursor: pointer;

    &:hover {
        background-image: url("/assets/i/patterns/${(p) => p.fileName}G.png");
    }

    @media (max-height: 300px) {
        width: ${PATTERN_SIZE_XS_PX}px;
        height: ${PATTERN_SIZE_XS_PX}px;
        margin: ${MARGIN_XS_PX}px;
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
                        />
                    );
                })}
            </PatternSelectorDiv>
        </PatternContainerDiv>
    );
};
