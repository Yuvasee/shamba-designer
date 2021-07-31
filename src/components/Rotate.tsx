import styled from "styled-components";

const RotateDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`;

const RotateIconDiv = styled.div`
    width: 70px;
    height: 70px;
    background-image: url("/assets/i/rotate.png");
    background-size: 50px;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center center;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const Rotate = () => {
    return (
        <RotateDiv>
            <RotateIconDiv />
            Please, rotate the phone.
        </RotateDiv>
    );
};
