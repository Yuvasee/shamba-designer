import { useContext } from "react";
import styled from "styled-components";

import { StateContext } from "../App";
import { MENU_ITEM_COLOR, FONT_FAMILY } from "../constants";
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

const ScaleItemDiv = styled.div`
    cursor: pointer;
    margin-left: -10px;
    margin-bottom: 3px;
    white-space: nowrap;

    &:nth-child(2n-1) {
        margin-bottom: 10px;
    }

    span {
        padding: 0 10px;
        border-radius: 8px;

        &:hover {
            background-color: #333;
        }
    }
`;

export const Scale = () => {
    const [, dispatch] = useContext(StateContext);

    const scalesList = Object.values(scales);

    return (
        <ScaleDiv>
            <PropertyHeader>Scale</PropertyHeader>

            {scalesList.map((scale) => (
                <ScaleItemDiv key={scale.id}>
                    <span onClick={() => dispatch({ type: "setScale", payload: scale.id })}>
                        {scale.title}
                    </span>
                </ScaleItemDiv>
            ))}
        </ScaleDiv>
    );
};
