import { useContext, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

import { StateContext } from "../App";
import { FONT_FAMILY, MENU_ITEM_COLOR, MENU_ITEM_SELECTED_COLOR } from "../constants";
import { PropertyHeader } from "../elements/PropertyHeader";
import { drumColors } from "../state/data";

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

const ColorDiv = styled.div`
    color: ${MENU_ITEM_COLOR};
    font-size: 15px;
    font-family: ${FONT_FAMILY};

    @media screen and (max-height: 18rem) {
        font-size: 11px;
    }
`;

type ColorItemDivProps = {
    selected?: boolean;
};
const ColorItemDiv = styled.div<ColorItemDivProps>`
    cursor: ${(p) => (p.selected ? "default" : "pointer")};
    margin-left: -10px;
    animation: ${initialAnimation} 1.5s ease;

    &:not(:last-child) {
        margin-bottom: 10px;

        @media screen and (max-height: 18rem) {
            margin-bottom: 5px;
        }
    }

    span {
        padding: 0 10px;
        border-radius: 8px;
        color: ${(p) => (p.selected ? MENU_ITEM_SELECTED_COLOR : "inherit")};
        text-shadow: ${(p) => (p.selected ? "0 0 5px #aaa" : "none")};

        &:hover {
            background-color: ${(p) => (p.selected ? "none" : "#333")};
        }
    }
`;

export const Color = () => {
    const [state, dispatch] = useContext(StateContext);
    const { color: selected } = state;

    const headerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!headerRef.current || state.colorHeaderRect) return;
        dispatch({
            type: "setColorHeaderRect",
            payload: headerRef.current.getBoundingClientRect(),
        });
    }, [dispatch, state.colorHeaderRect]);

    return (
        <ColorDiv>
            <PropertyHeader ref={headerRef}>Drum Color</PropertyHeader>

            {drumColors.map((color) => (
                <ColorItemDiv key={color} selected={color === selected}>
                    <span onClick={() => dispatch({ type: "setColor", payload: color })}>
                        {color}
                    </span>
                </ColorItemDiv>
            ))}
        </ColorDiv>
    );
};
