import React from "react";
import styled from 'styled-components';
import img from './stop.jpg'

const ErrorWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    img {
        transform: scale(0.5)
    }
    span {
        display: block;
        margin: 0 auto;
        font-size: 27px;
    }
`;

const ErrorMessage = () => {
    return (
        <ErrorWrapper>
            <span>Something goes wrong</span>
            <img src={img}
            alt="error"></img>
        </ErrorWrapper>
    )
};

export default ErrorMessage;