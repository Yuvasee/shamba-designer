import styled from "styled-components";
import { DrumColor } from "../state/types";

const PreloaderDiv = styled.div`
    position: absolute;
    visibility: hidden;
`;

export const Preloader = () => {
    const colors: DrumColor[] = ["gray", "white", "black"];
    const patterns = Array.from({ length: 16 });

    return (
        <PreloaderDiv>
            {patterns.map((_, i) =>
                colors.map((color) => (
                    <img
                        src={`/assets/i/sprite/${color}_${String(i + 1).padStart(2, "0")}.png`}
                        alt=""
                    />
                ))
            )}

            {patterns.map((_, i) => {
                const fileName = String(i + 1).padStart(2, "0");

                return (
                    <>
                        <img src={`/assets/i/patterns/${fileName}.png`} alt="" />
                        <img src={`/assets/i/patterns/${fileName}G.png`} alt="" />
                    </>
                );
            })}
        </PreloaderDiv>
    );
};
