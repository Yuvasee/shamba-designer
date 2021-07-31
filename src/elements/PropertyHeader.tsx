import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import { FONT_FAMILY } from "../constants";

const PropertyHeaderDiv = styled.div`
    color: white;
    font-size: 15px;
    font-family: ${FONT_FAMILY};
    margin-bottom: 10px;
`;

export const PropertyHeader: FC<PropsWithChildren<{}>> = ({ children }) => {
    return <PropertyHeaderDiv>{children}</PropertyHeaderDiv>;
};
