import { useContext } from "react";
import styled from "styled-components";

import { StateContext } from "../App";
import { MENU_ITEM_COLOR, FONT_FAMILY, MENU_ITEM_SELECTED_COLOR } from "../constants";
import { PropertyHeader } from "../elements/PropertyHeader";
import { scales } from "../state/data";

const ScaleDiv = styled.div`
    color: ${MENU_ITEM_COLOR};
    font-size: 12px;
    font-family: ${FONT_FAMILY};
    margin-bottom: 30px;

    @media (max-height: 300px) {
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

    return (
        <ScaleDiv>
            <PropertyHeader>Scale</PropertyHeader>

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
