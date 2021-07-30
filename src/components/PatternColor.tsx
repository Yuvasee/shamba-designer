import { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../App";
import { patternColors } from "../state/data";

type PatternColorDivProps = {
    color: string;
    border: boolean;
};

const PATTERN_COLOR_SIZE_PX = 24;

const PatternColorContainerDiv = styled.div``;

const PropertyHeaderDiv = styled.div``;

const PatternColorSelectorDiv = styled.div`
    display: flex;
`;

const PatternColorDiv = styled.div<PatternColorDivProps>`
    width: ${PATTERN_COLOR_SIZE_PX}px;
    height: ${PATTERN_COLOR_SIZE_PX}px;
    background-color: ${(p) => p.color};
    margin: 5px;
    cursor: pointer;
    border: ${(p) => (p.border ? "thin solid white" : "none")};
    border-radius: 50%;
`;

const CircleSvg = () => (
    <svg preserveAspectRatio="none" viewBox="0 0 25 25" stroke="#f00" strokeWidth="3px" fill="none">
        <ellipse cx="50%" cy="50%" rx="11" ry="11"></ellipse>
        <line x1="4" x2="21" y1="21" y2="4"></line>
    </svg>
);

export const PatternColor = () => {
    const [state, dispatch] = useContext(StateContext);

    return (
        <PatternColorContainerDiv>
            <PropertyHeaderDiv>Pattern color</PropertyHeaderDiv>

            <PatternColorSelectorDiv>
                {Array.from({ length: 8 }).map((_, i) => {
                    const disabled =
                        (state.color === "white" && i === 0) ||
                        (state.color === "black" && i === 7);

                    return (
                        <PatternColorDiv
                            key={i}
                            color={patternColors[i]}
                            border={i === patternColors.length - 1}
                            onClick={() =>
                                !disabled && dispatch({ type: "setPatternColor", payload: i })
                            }
                        >
                            {disabled && <CircleSvg />}
                        </PatternColorDiv>
                    );
                })}
            </PatternColorSelectorDiv>
        </PatternColorContainerDiv>
    );
};
