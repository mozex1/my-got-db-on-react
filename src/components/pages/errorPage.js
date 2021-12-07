import React from "react";
import styled from 'styled-components';
import img from '../errorMessage/stop.jpg'

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        margin-top: 40px;
        height: 300px;
        width: 300px;
    }
    span {
        display: block;
        margin: 0 auto;
        margin-top: 40px;
        font-size: 70px;
        font-weight: bold;
        color: #fff;
    }
`;

const ErrorPage = () => {
    return (
        <ErrorWrapper>
            <span>Err! Page not found!</span>
            <img src={img}
            alt="error"></img>
        </ErrorWrapper>
    )
};

export default ErrorPage;