import { useContext } from "react";
import styled from "styled-components";

import { StateContext } from "../App";
import { MENU_ITEM_COLOR, FONT_FAMILY } from "../constants";
import { scales } from "../state/data";

const CurrentScaleDiv = styled.div`
    color: ${MENU_ITEM_COLOR};
    font-size: 14px;
    font-family: ${FONT_FAMILY};
    text-align: center;

    div:first-child {
        margin-bottom: 7px;
    }

    div:last-child {
        font-size: 80%;

        span {
            padding: 0 4px;
        }
    }

    @media screen and (max-height: 18rem) {
        font-size: 11px;
    }
`;

export const CurrentScale = () => {
    const [state] = useContext(StateContext);
    const { scale: selected } = state;

    const scale = scales[selected];

    return (
        <CurrentScaleDiv>
            <div>{scale.title}</div>
            <div>
                {scale.notes.map((note) => (
                    <span key={note}>{note}</span>
                ))}
            </div>
        </CurrentScaleDiv>
    );
};
