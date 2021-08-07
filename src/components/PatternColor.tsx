import { useContext, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { StateContext } from "../App";
import { PropertyHeader } from "../elements/PropertyHeader";
import { patternColors } from "../state/data";

type PatternColorDivProps = {
    color: string;
    border: boolean;
    selected?: boolean;
};

const PATTERN_COLOR_SIZE_PX = 24;

const PatternColorContainerDiv = styled.div`
    max-width: 140px;
`;

const PatternColorSelectorDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const initialAnimation = keyframes`
    0% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(100%);
        opacity: 1;
    }
`;

const PatternColorDiv = styled.div<PatternColorDivProps>`
    width: ${PATTERN_COLOR_SIZE_PX}px;
    height: ${PATTERN_COLOR_SIZE_PX}px;
    background-color: ${(p) => p.color};
    margin: 3px;
    cursor: ${(p) => (p.selected ? "default" : "pointer")};
    border: ${(p) => (p.border ? "thin solid white" : "none")};
    border-radius: 50%;
    position: relative;
    animation: ${initialAnimation} 1.5s ease;

    &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 50%;
        box-shadow: ${(p) => (p.selected ? "0 0 7px #fff" : "none")};
    }
`;

const CircleSvg = () => (
    <svg preserveAspectRatio="none" viewBox="0 0 25 25" stroke="#f00" strokeWidth="3px" fill="none">
        <ellipse cx="50%" cy="50%" rx="11" ry="11"></ellipse>
        <line x1="4" x2="21" y1="21" y2="4"></line>
    </svg>
);

export const PatternColor = () => {
    const [state, dispatch] = useContext(StateContext);

    const headerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!headerRef.current || state.patternColorHeaderRect) return;
        dispatch({
            type: "setPatternColorHeaderRect",
            payload: headerRef.current.getBoundingClientRect(),
        });
    }, [dispatch, state.patternColorHeaderRect]);

    return (
        <PatternColorContainerDiv>
            <PropertyHeader ref={headerRef} leftMargin>
                Pattern color
            </PropertyHeader>

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
                            selected={state.patternColor === i}
                        >
                            {disabled && <CircleSvg />}
                        </PatternColorDiv>
                    );
                })}
            </PatternColorSelectorDiv>
        </PatternColorContainerDiv>
    );
};
