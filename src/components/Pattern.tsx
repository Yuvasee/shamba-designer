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

    @media screen and (max-height: 18rem) {
        max-width: ${PATTERN_SIZE_XS_PX * 4 + MARGIN_XS_PX * 8 + 1}px;
        margin-bottom: 15px;
    }
`;

const PatternSelectorDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

type PatternDivProps = {
    fileName: string;
    selected?: boolean;
};

const PatternDiv = styled.div<PatternDivProps>`
    width: ${PATTERN_SIZE_PX}px;
    height: ${PATTERN_SIZE_PX}px;
    background-image: url("/assets/i/patterns/${(p) => p.fileName}.png");
    background-size: cover;
    margin: ${MARGIN_PX}px;
    cursor: pointer;
    position: relative;

    &:hover {
        background-image: url("/assets/i/patterns/${(p) =>
            p.fileName + (p.selected ? "" : "G")}.png");
    }

    @media screen and (max-height: 18rem) {
        width: ${PATTERN_SIZE_XS_PX}px;
        height: ${PATTERN_SIZE_XS_PX}px;
        margin: ${MARGIN_XS_PX}px;
    }

    &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 50%;
        box-shadow: ${(p) => (p.selected ? "0 0 10px #fff" : "none")};
    }
`;

export const Pattern = () => {
    const [state, dispatch] = useContext(StateContext);
    const { pattern } = state;

    return (
        <PatternContainerDiv>
            <PropertyHeader>Pattern</PropertyHeader>

            <PatternSelectorDiv>
                {Array.from({ length: 16 }).map((_, i) => {
                    const fileName = String(i + 1).padStart(2, "0");
                    const selected = pattern === i;

                    return (
                        <PatternDiv
                            key={i}
                            fileName={fileName}
                            onClick={() =>
                                dispatch({ type: "setPattern", payload: selected ? undefined : i })
                            }
                            selected={selected}
                        />
                    );
                })}
            </PatternSelectorDiv>
        </PatternContainerDiv>
    );
};
