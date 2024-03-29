import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";

import { StateContext } from "../App";
import { DRUM_SIZE_PX, DRUM_SIZE_XS_PX } from "../constants";
import { drumColors, scales } from "../state/data";
import { DrumColor } from "../state/types";

type DrumDivProps = {
    sprite: string;
    bgShift: number;
    bgMultiply: number;
};

const DrumDiv = styled.div<DrumDivProps>`
    width: ${DRUM_SIZE_PX}px;
    height: ${DRUM_SIZE_PX}px;
    background-image: url("/assets/i/sprite/${(p) => p.sprite}.png");
    background-size: ${(p) =>
        (drumColors.includes(p.sprite as DrumColor) ? 1 : p.bgMultiply) * DRUM_SIZE_PX}px;
    background-position-x: ${(p) =>
        (drumColors.includes(p.sprite as DrumColor) ? 0 : -p.bgShift) * DRUM_SIZE_PX}px;
    background-repeat: no-repeat;
    margin: 20px;

    svg {
        position: relative;
        z-index: 100;
    }

    path {
        cursor: pointer;
        opacity: 0;
    }

    @media screen and (max-height: 18rem) {
        width: ${DRUM_SIZE_XS_PX}px;
        height: ${DRUM_SIZE_XS_PX}px;
        background-size: ${(p) =>
            (drumColors.includes(p.sprite as DrumColor) ? 1 : p.bgMultiply) * DRUM_SIZE_XS_PX}px;
        background-position-x: ${(p) =>
            (drumColors.includes(p.sprite as DrumColor) ? 0 : -p.bgShift) * DRUM_SIZE_XS_PX}px;
        margin: 10px 15px;
    }
`;

export const Drum = () => {
    const [state, dispatch] = useContext(StateContext);
    const { scale, pattern, color, patternColor, sound } = state;

    const sprite =
        pattern === undefined ? color : `${color}_${String(pattern + 1).padStart(2, "0")}`;

    const handleTapNote = (n: number) => {
        const note = scales[scale].notes[n];
        sound?.playNote(note);
    };

    const bgShift = color === "white" && patternColor === 7 ? 0 : patternColor;

    const drumRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!drumRef.current || state.drumRect) return;
        dispatch({
            type: "setDrumRect",
            payload: drumRef.current.getBoundingClientRect(),
        });
    }, [dispatch, state.drumRect]);

    return (
        <DrumDiv
            sprite={sprite}
            bgShift={bgShift}
            bgMultiply={color === "gray" ? 8 : 7}
            ref={drumRef}
        >
            <svg viewBox="0 0 250 250">
                <path
                    onClick={() => handleTapNote(4)}
                    d="m64.78215,29.18237c0,0 20.99565,19.24602 20.95011,19.05764c0.04555,0.18838 3.54482,9.18651 3.49928,8.99814c0.04555,0.18838 0.79539,7.93677 0.74984,7.7484c0.04555,0.18838 -2.20399,8.43667 -2.24953,8.24829c0.04555,0.18838 -7.20295,7.93677 -7.2485,7.7484c0.04555,0.18838 -11.20212,5.18734 -11.24767,4.99897c0.04555,0.18838 -14.45145,-1.06136 -14.497,-1.24974c0.04555,0.18838 -12.20192,-7.80997 -12.24746,-7.99834c0.04555,0.18838 -12.45187,-12.55899 -12.49741,-12.74736c0.04555,0.18838 34.78836,-34.80438 34.78836,-34.80438z"
                />
                <path
                    onClick={() => handleTapNote(0)}
                    d="m99.02506,25.1832c0,0 49.73971,-1.49969 49.73971,-1.49969c0,0 1.24974,53.98883 1.49969,54.23877c0.24995,0.24995 -7.7484,12.49741 -7.7484,12.49741c0,0 -9.24809,5.74881 -9.29364,5.56043c0.04555,0.18838 -7.4529,0.43832 -7.49845,0.24995c0.04555,0.18838 -10.20233,1.68807 -18.20067,-6.81017c-7.99834,-8.49824 -5.49886,-13.24726 -6.24871,-21.2456c-0.74984,-7.99834 -2.24953,-42.9911 -2.24953,-42.9911z"
                />
                <path
                    onClick={() => handleTapNote(5)}
                    d="m218.75028,59.17617l-32.53883,-33.18155l-21.7455,20.49576c0.04555,0.18838 -3.70367,6.68703 -3.20378,12.68579c0.4999,5.99876 1.99959,11.24767 7.2485,16.49659c5.24891,5.24891 7.7484,6.99855 18.49617,6.99855c10.74778,0 10.74778,-2.49948 10.74778,-2.74943c0,-0.24995 -1.24974,1.24974 20.99565,-20.74571z"
                />
                <path
                    onClick={() => handleTapNote(1)}
                    d="m212.75152,95.41867c0,0 0.4999,46.74033 0.45435,46.55195c0.04555,0.18838 -38.44648,0.18838 -38.49203,0c0.04555,0.18838 -14.2015,-1.31131 -19.70036,-9.55961c-5.49886,-8.24829 -3.49928,-13.49721 -3.49928,-16.49659c0,-2.99938 0.4999,-12.24747 11.99752,-18.49617c11.49762,-6.24871 25.24478,-2.99938 25.24478,-2.99938c0,0 23.99503,0.99979 23.99503,0.99979z"
                />
                <path
                    onClick={() => handleTapNote(7)}
                    d="m224.99899,180.15113l-31.03914,36.30407c0.04555,0.18838 -23.19964,-17.55795 -25.44917,-26.30614c-2.24953,-8.74819 -9.74798,-19.99586 9.74798,-35.24271c19.49596,-15.24684 30.74364,8.74819 46.74033,25.24478z"
                />
                <path
                    onClick={() => handleTapNote(3)}
                    d="m104.77387,213.39425l48.94431,0.56147l-0.24995,-50.48955c0.04555,0.18838 -2.20398,-9.55961 -11.95197,-16.55816c-9.74798,-6.99855 -22.74529,-1.24974 -24.24498,-0.4999c-1.49969,0.74984 -11.24767,7.49845 -11.74757,16.24664c-0.4999,8.74819 -0.4999,50.7395 -0.74984,50.7395z"
                />
                <path
                    onClick={() => handleTapNote(6)}
                    d="m62.03272,221.03552c0,0 -33.99296,-33.49307 -34.03851,-33.57432c0.04555,0.08126 32.78877,-30.91233 32.74322,-30.99358c0.04555,0.08126 13.29281,-1.66838 13.24726,-1.74964c0.04555,0.08126 12.04307,5.33017 11.99752,5.24891c0.04555,0.08126 5.79436,6.57991 5.74881,6.49865c0.04555,0.08126 3.29488,10.57908 3.29488,10.57908c0,0 -1.99959,9.99793 -2.04514,9.91667c0.04555,0.08126 -2.95383,5.58012 -2.99938,5.49886c0.04555,0.08126 -27.94866,28.57536 -27.94866,28.57536z"
                />
                <path
                    onClick={() => handleTapNote(2)}
                    d="m41.53696,146.55094c0,0 -1.49969,-47.74012 -1.49969,-47.74012c0,0 43.74095,-1.49969 43.6954,-1.58095c0.04555,0.08126 14.54255,8.32955 14.497,8.24829c0.04555,0.08126 5.29446,12.82862 5.24891,12.74736c0.04555,0.08126 -0.45435,10.07919 -0.4999,9.99793c0.04555,0.08126 -3.95362,7.5797 -3.99917,7.49845c0.04555,0.08126 -8.70264,7.5797 -8.74819,7.49845c0.04555,0.08126 -10.70223,3.33058 -10.74778,3.24933c0.04555,0.08126 -37.94659,0.08126 -37.94659,0.08126z"
                />
            </svg>
        </DrumDiv>
    );
};
