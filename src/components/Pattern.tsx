import { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../App";

const PATTERN_SIZE_PX = 40;

const PatternContainerDiv = styled.div``;

const PropertyHeaderDiv = styled.div``;

const PatternSelectorDiv = styled.div`
    display: flex;
`;

const PatternDiv = styled.div<{ pattern: number }>`
    width: ${PATTERN_SIZE_PX}px;
    height: ${PATTERN_SIZE_PX}px;
    background-image: url("/assets/i/patterns/${(p) => String(p.pattern).padStart(2, "0")}.png");
    background-size: cover;
    margin: 5px;
`;

export const Pattern = () => {
    const [, dispatch] = useContext(StateContext);

    return (
        <PatternContainerDiv>
            <PropertyHeaderDiv>Pattern</PropertyHeaderDiv>
            <PatternSelectorDiv>
                {Array.from({ length: 16 }).map((_, i) => (
                    <PatternDiv
                        key={i}
                        pattern={i + 1}
                        onClick={() => dispatch({ type: "setPattern", payload: i })}
                    ></PatternDiv>
                ))}
            </PatternSelectorDiv>
        </PatternContainerDiv>
    );
};
