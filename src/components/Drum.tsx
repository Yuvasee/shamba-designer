import { useContext } from "react";
import styled from "styled-components";

import { StateContext } from "../App";

type DrumDivProps = {
    sprite: string;
    bgShift: number;
    bgMultiply: number;
};

const DRUM_SIZE_PX = 204;

const DrumDiv = styled.div<DrumDivProps>`
    width: ${DRUM_SIZE_PX}px;
    height: ${DRUM_SIZE_PX}px;
    background-image: url("/assets/i/sprite/${(p) => p.sprite}.png");
    background-size: ${(p) => p.bgMultiply * DRUM_SIZE_PX}px;
    background-position-x: -${(p) => p.bgShift * DRUM_SIZE_PX}px;
    background-repeat: no-repeat;
    margin: 20px;
`;

export const Drum = () => {
    const [state] = useContext(StateContext);
    const { scale, pattern, color, patternColor } = state;

    const sprite = `${color}_${String(pattern + 1).padStart(2, "0")}`;

    return <DrumDiv sprite={sprite} bgShift={patternColor} bgMultiply={color === "Gray" ? 8 : 7} />;
};
