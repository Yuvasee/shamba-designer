import { Fragment, useEffect, useState, useCallback, useContext } from "react";
import styled from "styled-components";

import { StateContext } from "../App";
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

    const SPLASH_COUNT = 3;
    const [nSplashLoaded, setNSplashLoaded] = useState(0);
    const isSplashLoaded = nSplashLoaded === SPLASH_COUNT;

    const IMG_COUNT = colors.length + patterns.length * colors.length + patterns.length * 2;
    const [nImgLoaded, setNImgLoaded] = useState(0);
    const isImgLoaded = nImgLoaded === IMG_COUNT;

    const [, dispatch] = useContext(StateContext);

    useEffect(() => {
        if (isSplashLoaded) {
            dispatch({ type: "setSplashLoaded" });
        }
    }, [dispatch, isSplashLoaded]);

    useEffect(() => {
        if (isImgLoaded) {
            dispatch({ type: "setLoaded" });
        }
    }, [dispatch, isImgLoaded]);

    const handleOneSplashLoaded = useCallback(() => setNSplashLoaded((n) => n + 1), []);
    const handleOneImgLoaded = useCallback(() => setNImgLoaded((n) => n + 1), []);

    return (
        <PreloaderDiv>
            <img src="/assets/i/loader/splash_top.png" onLoad={handleOneSplashLoaded} alt="" />
            <img src="/assets/i/loader/splash_mid.png" onLoad={handleOneSplashLoaded} alt="" />
            <img src="/assets/i/loader/splash_bottom.png" onLoad={handleOneSplashLoaded} alt="" />

            {isSplashLoaded && (
                <>
                    {colors.map((color) => (
                        <img
                            key={color}
                            src={`/assets/i/sprite/${color}.png`}
                            onLoad={handleOneImgLoaded}
                            alt=""
                        />
                    ))}

                    {patterns.map((_, i) =>
                        colors.map((color) => {
                            const num = String(i + 1).padStart(2, "0");
                            const src = `/assets/i/sprite/${color}_${num}.png`;
                            return (
                                <img key={i + color} src={src} onLoad={handleOneImgLoaded} alt="" />
                            );
                        })
                    )}

                    {patterns.map((_, i) => {
                        const fileName = String(i + 1).padStart(2, "0");

                        return (
                            <Fragment key={i}>
                                <img
                                    src={`/assets/i/patterns/${fileName}.png`}
                                    onLoad={handleOneImgLoaded}
                                    alt=""
                                />
                                <img
                                    src={`/assets/i/patterns/${fileName}G.png`}
                                    onLoad={handleOneImgLoaded}
                                    alt=""
                                />
                            </Fragment>
                        );
                    })}
                </>
            )}
        </PreloaderDiv>
    );
};
