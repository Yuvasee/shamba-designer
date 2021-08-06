import { useContext } from "react";
import styled from "styled-components";

import { StateContext } from "../App";
import { FONT_FAMILY, MENU_ITEM_COLOR, MENU_ITEM_SELECTED_COLOR } from "../constants";
import { PropertyHeader } from "../elements/PropertyHeader";
import { drumColors } from "../state/data";

const ColorDiv = styled.div`
    color: ${MENU_ITEM_COLOR};
    font-size: 15px;
    font-family: ${FONT_FAMILY};

    @media (max-height: 300px) {
        font-size: 11px;
    }
`;

type ColorItemDivProps = {
    selected?: boolean;
};
const ColorItemDiv = styled.div<ColorItemDivProps>`
    cursor: ${(p) => (p.selected ? "default" : "pointer")};
    margin-left: -10px;

    &:not(:last-child) {
        margin-bottom: 10px;

        @media (max-height: 300px) {
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

    return (
        <ColorDiv>
            <PropertyHeader>Drum Color</PropertyHeader>

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
