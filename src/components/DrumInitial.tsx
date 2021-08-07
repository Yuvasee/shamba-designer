import { FC } from "react";
import styled from "styled-components";

import { DRUM_SIZE_PX, DRUM_SIZE_XS_PX } from "../constants";

type DrumInitialProps = {
    sizeMultiplier?: number;
};

const DrumInitialDiv = styled.div<DrumInitialProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${(p) => DRUM_SIZE_PX * (p.sizeMultiplier || 1)}px;

    @media screen and (max-height: 18rem) {
        width: ${(p) => DRUM_SIZE_XS_PX * (p.sizeMultiplier || 1)}px;
    }

    img {
        width: ${(p) => DRUM_SIZE_PX * (p.sizeMultiplier || 1)}px;

        @media screen and (max-height: 18rem) {
            width: ${(p) => DRUM_SIZE_XS_PX * (p.sizeMultiplier || 1)}px;
        }
    }
`;

export const DrumInitial: FC<DrumInitialProps> = (props) => {
    return (
        <DrumInitialDiv {...props}>
            <img src="/assets/i/loader/splash_top.png" alt="" />
            <img src="/assets/i/loader/splash_mid.png" alt="" />
            <img src="/assets/i/loader/splash_bottom.png" alt="" />
        </DrumInitialDiv>
    );
};
