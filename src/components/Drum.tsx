import { FC } from "react";
import styled from "styled-components";
import { State } from "../state/types";

type DrumDivProps = {
    sprite: string;
    bgShift: number;
};

const DRUM_SIZE_PX = 203;

const DrumDiv = styled.div<DrumDivProps>`
    width: ${DRUM_SIZE_PX}px;
    height: ${DRUM_SIZE_PX}px;
    background-image: url("/assets/i/sprite/${(p) => p.sprite}.png");
    background-size: cover;
    background-position-x: -${(p) => p.bgShift * (DRUM_SIZE_PX + 0.7)}px;
    margin: 20px;
`;

export const Drum: FC<Omit<State, "mainState">> = ({ scale, pattern, color, patternColor }) => {
    const sprite = `${color}_${String(pattern + 1).padStart(2, "0")}`;
    return <DrumDiv sprite={sprite} bgShift={patternColor} />;
};
