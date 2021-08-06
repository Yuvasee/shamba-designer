import { Fragment } from "react";
import styled from "styled-components";

import { DrumColor } from "../state/types";

const PreloaderDiv = styled.div`
    position: absolute;

    img {
        height: 10px;
        visibility: hidden;
    }
`;

export const Preloader = () => {
    const colors: DrumColor[] = ["gray", "white", "black"];
    const patterns = Array.from({ length: 16 });

    return (
        <PreloaderDiv>
            {colors.map((color) => (
                <img key={color} src={`/assets/i/sprite/${color}.png`} alt="" />
            ))}

            {patterns.map((_, i) =>
                colors.map((color) => (
                    <img
                        key={i + color}
                        src={`/assets/i/sprite/${color}_${String(i + 1).padStart(2, "0")}.png`}
                        alt=""
                    />
                ))
            )}

            {patterns.map((_, i) => {
                const fileName = String(i + 1).padStart(2, "0");

                return (
                    <Fragment key={i}>
                        <img src={`/assets/i/patterns/${fileName}.png`} alt="" />
                        <img src={`/assets/i/patterns/${fileName}G.png`} alt="" />
                    </Fragment>
                );
            })}
        </PreloaderDiv>
    );
};
