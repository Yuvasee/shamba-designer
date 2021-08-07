import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { StateContext } from "../App";
import { DRUM_SIZE_PX, DRUM_SIZE_XS_PX } from "../constants";
import { DrumInitial } from "./DrumInitial";

const SIZE_MULTIPLIER = 0.8;

const loaderAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const LoaderOuterDiv = styled.div`
    position: fixed;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: ${DRUM_SIZE_PX * SIZE_MULTIPLIER}px;

    @media screen and (max-height: 18rem) {
        max-width: ${DRUM_SIZE_XS_PX * SIZE_MULTIPLIER}px;
    }
`;

const LoaderInnerDiv = styled.div`
    position: relative;
`;

const LoaderAnimation = styled.div`
    display: flex;
    flex-direction: column;
    animation: ${loaderAnimation} 30s linear infinite;
`;

const LoaderText = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: #fff;
    opacity: 0.8;
    left: 50%;
    top: 50%;
    z-index: 9999999;
    white-space: nowrap;
    line-height: 30px;
    padding: 0 20px 3px;
    border-radius: 15px;
`;

export const Loader = () => {
    const [state] = useContext(StateContext);
    const { splashLoaded } = state;

    return (
        <LoaderOuterDiv>
            <LoaderInnerDiv>
                <LoaderText>Shamba Designer is loading...</LoaderText>

                {splashLoaded && (
                    <LoaderAnimation>
                        <DrumInitial sizeMultiplier={SIZE_MULTIPLIER} />
                    </LoaderAnimation>
                )}
            </LoaderInnerDiv>
        </LoaderOuterDiv>
    );
};
