import styled from "styled-components";

import { FONT_FAMILY, MENU_ITEM_COLOR } from "../constants";
import { PropertyHeader } from "../elements/PropertyHeader";

import { drumColors } from "../state/data";

const ColorDiv = styled.div`
    color: ${MENU_ITEM_COLOR};
    font-size: 15px;
    font-family: ${FONT_FAMILY};
`;

const ColorItemDiv = styled.div`
    cursor: pointer;
    margin-left: -10px;

    &:not(:last-child) {
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

export const Color = () => {
    return (
        <ColorDiv>
            <PropertyHeader>Pattern</PropertyHeader>

            {drumColors.map((color) => (
                <ColorItemDiv>
                    <span>{color}</span>
                </ColorItemDiv>
            ))}
        </ColorDiv>
    );
};
