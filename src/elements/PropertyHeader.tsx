import { forwardRef, PropsWithChildren } from "react";
import styled from "styled-components";

import { FONT_FAMILY, PATTERN_MARGIN_PX, PATTERN_MARGIN_XS_PX } from "../constants";

type PropertyHeaderProps = {
    leftMargin?: boolean;
};

const PropertyHeaderDiv = styled.div<PropertyHeaderProps>`
    color: white;
    font-size: 15px;
    font-family: ${FONT_FAMILY};
    margin-bottom: 10px;
    margin-left: ${(p) => (p.leftMargin ? `${PATTERN_MARGIN_PX}px` : 0)};

    @media screen and (max-height: 18rem) {
        font-size: 13px;
        margin-bottom: 7px;
        margin-left: ${(p) => (p.leftMargin ? `${PATTERN_MARGIN_XS_PX}px` : 0)};
    }
`;

export const PropertyHeader = forwardRef<HTMLDivElement, PropsWithChildren<PropertyHeaderProps>>(
    (props, ref) => {
        return (
            <PropertyHeaderDiv ref={ref} leftMargin={props.leftMargin}>
                {props.children}
            </PropertyHeaderDiv>
        );
    }
);
