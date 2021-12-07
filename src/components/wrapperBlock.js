import React from "react";
import styled from 'styled-components';

const ListsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const WrapperBlock = ({left, right}) => {
    return (
        <ListsWrapper>
            {left}
            {right}                
        </ListsWrapper> 
    )
}

export default WrapperBlock;