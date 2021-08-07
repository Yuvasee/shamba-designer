import { FC, useMemo } from "react";
import { memo } from "react";
import { useContext, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { StateContext } from "../App";

const LINE_COLOR = "#333";

const anim = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`;

const LineSvg = styled.svg<{ pathLength?: number }>`
    position: absolute;
    z-index: 1;

    path {
        fill: none;
        stroke: ${LINE_COLOR};
        stroke-width: 1.5;
        stroke-dasharray: ${(p) => p.pathLength || 1000};
        stroke-dashoffset: ${(p) => p.pathLength || 1000};
        animation: ${anim} 6s linear forwards;
    }

    circle {
        fill: ${LINE_COLOR};
    }
`;

type Points = {
    p1: [number, number];
    p2: [number, number];
    p3: [number, number];
};

type LineProps = {
    points: Points;
};

export const Line: FC<LineProps> = memo(({ points: { p1, p2, p3 } }) => {
    const svgWidth = Math.abs(p1[0] - p3[0]) + 10;
    const svgHeight = Math.abs(p1[1] - p3[1]) + 10;
    const svgLeft = Math.min(p1[0], p3[0]) - 5;
    const svgTop = Math.min(p1[1], p3[1]) - 5;
    const p2x = Math.abs(p2[0] - p3[0]) + 5;

    const pathRef = useRef<SVGPathElement>(null);

    return (
        <LineSvg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            style={{
                left: svgLeft,
                top: svgTop,
                width: svgWidth,
                height: svgHeight,
            }}
            pathLength={pathRef.current?.getTotalLength()}
        >
            <path
                d={`
                M ${p1[0] >= p3[0] ? svgWidth - 5 : 5}, ${p1[1] >= p3[1] ? svgHeight - 5 : 5}
                L ${p1[0] >= p3[0] ? p2x : svgWidth - p2x}, ${p1[1] >= p3[1] ? 5 : svgHeight - 5}
                H ${p1[0] >= p3[0] ? 0 : svgWidth}
                `}
                ref={pathRef}
            />
            <circle
                cx={p1[0] >= p3[0] ? svgWidth - 5 : 5}
                cy={p1[1] >= p3[1] ? svgHeight - 5 : 5}
                r="4"
            />
        </LineSvg>
    );
});

export const Lines = () => {
    const [state] = useContext(StateContext);
    const {
        drumRect,
        fixedWrapperRect,
        scaleHeaderRect,
        colorHeaderRect,
        patternHeaderRect,
        patternColorHeaderRect,
    } = state;

    const headerMarginFix = scaleHeaderRect && scaleHeaderRect.height > 13 ? 5 : 3.5;

    const scaleLine: Points | null = useMemo(() => {
        if (!drumRect || !fixedWrapperRect || !scaleHeaderRect) return null;

        return {
            p1: [
                drumRect.left - fixedWrapperRect.left + drumRect.width / 5,
                drumRect.top + drumRect.height / 5,
            ],
            p2: [
                scaleHeaderRect.left - fixedWrapperRect.left + scaleHeaderRect.width,
                scaleHeaderRect.top + scaleHeaderRect.height + headerMarginFix,
            ],
            p3: [
                scaleHeaderRect.left - fixedWrapperRect.left,
                scaleHeaderRect.top + scaleHeaderRect.height + headerMarginFix,
            ],
        };
    }, [drumRect, fixedWrapperRect, headerMarginFix, scaleHeaderRect]);

    const colorLine: Points | null = useMemo(() => {
        if (!drumRect || !fixedWrapperRect || !colorHeaderRect) return null;

        return {
            p1: [
                drumRect.left - fixedWrapperRect.left + drumRect.width / 5,
                drumRect.top + (drumRect.height * 4) / 5,
            ],
            p2: [
                colorHeaderRect.left - fixedWrapperRect.left + colorHeaderRect.width,
                colorHeaderRect.top + colorHeaderRect.height + headerMarginFix,
            ],
            p3: [
                colorHeaderRect.left - fixedWrapperRect.left,
                colorHeaderRect.top + colorHeaderRect.height + headerMarginFix,
            ],
        };
    }, [colorHeaderRect, drumRect, fixedWrapperRect, headerMarginFix]);

    const patternLine: Points | null = useMemo(() => {
        if (!drumRect || !fixedWrapperRect || !patternHeaderRect) return null;

        return {
            p1: [
                drumRect.left - fixedWrapperRect.left + (drumRect.width * 4) / 5,
                drumRect.top + drumRect.height / 5,
            ],
            p2: [
                patternHeaderRect.left - fixedWrapperRect.left,
                patternHeaderRect.top + patternHeaderRect.height + headerMarginFix,
            ],
            p3: [
                patternHeaderRect.left - fixedWrapperRect.left + patternHeaderRect.width,
                patternHeaderRect.top + patternHeaderRect.height + headerMarginFix,
            ],
        };
    }, [drumRect, fixedWrapperRect, headerMarginFix, patternHeaderRect]);

    const patternColorLine: Points | null = useMemo(() => {
        if (!drumRect || !fixedWrapperRect || !patternColorHeaderRect) return null;

        return {
            p1: [
                drumRect.left - fixedWrapperRect.left + (drumRect.width * 4) / 5,
                drumRect.top + (drumRect.height * 4) / 5,
            ],
            p2: [
                patternColorHeaderRect.left - fixedWrapperRect.left,
                patternColorHeaderRect.top + patternColorHeaderRect.height + headerMarginFix,
            ],
            p3: [
                patternColorHeaderRect.left - fixedWrapperRect.left + patternColorHeaderRect.width,
                patternColorHeaderRect.top + patternColorHeaderRect.height + headerMarginFix,
            ],
        };
    }, [drumRect, fixedWrapperRect, headerMarginFix, patternColorHeaderRect]);

    return (
        <>
            {scaleLine && <Line points={scaleLine} />}
            {colorLine && <Line points={colorLine} />}
            {patternLine && <Line points={patternLine} />}
            {patternColorLine && <Line points={patternColorLine} />}
        </>
    );
};
