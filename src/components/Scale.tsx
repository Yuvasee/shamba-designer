import { useContext, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

import { StateContext } from "../App";
import { MENU_ITEM_COLOR, FONT_FAMILY, MENU_ITEM_SELECTED_COLOR } from "../constants";
import { PropertyHeader } from "../elements/PropertyHeader";
import { scales } from "../state/data";

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

const ScaleDiv = styled.div`
    color: ${MENU_ITEM_COLOR};
    font-size: 12px;
    font-family: ${FONT_FAMILY};
    margin-bottom: 30px;
    position: relative;
    z-index: 100;

    @media screen and (max-height: 18rem) {
        font-size: 11px;
        margin-bottom: 15px;
    }
`;

type ScaleItemDivProps = {
    selected?: boolean;
};
const ScaleItemDiv = styled.div<ScaleItemDivProps>`
    cursor: ${(p) => (p.selected ? "default" : "pointer")};
    margin-left: -10px;
    margin-bottom: 3px;
    white-space: nowrap;
    animation: ${initialAnimation} 1.5s ease;

    &:nth-child(2n-1) {
        margin-bottom: 10px;
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

export const Scale = () => {
    const [state, dispatch] = useContext(StateContext);
    const { scale: selected } = state;

    const scalesList = Object.values(scales);

    const headerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!headerRef.current || state.scaleHeaderRect) return;
        dispatch({
            type: "setScaleHeaderRect",
            payload: headerRef.current.getBoundingClientRect(),
        });
    }, [dispatch, state.scaleHeaderRect]);

    return (
        <ScaleDiv>
            <PropertyHeader ref={headerRef}>Scale</PropertyHeader>

            {scalesList.map((scale) => (
                <ScaleItemDiv key={scale.id} selected={scale.id === selected}>
                    <span onClick={() => dispatch({ type: "setScale", payload: scale.id })}>
                        {scale.title}
                    </span>
                </ScaleItemDiv>
            ))}
        </ScaleDiv>
    );
};
