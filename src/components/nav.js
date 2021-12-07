import React from "react";
import { Outlet, Link} from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

`;

const Title = styled.h2`
    display: inline;
    font-weight: bold;
    a {
        text-decoration: none;
        color: #fff;
    }
`

const Button = styled.button`
    height: 40px;
    width: 100px;
    margin-left: 20px;
    border: none;
    outline: none;
    border-radius: 3px;
    a {
        text-decoration: none;
        color: black;
    }
`;



const NavMenu = () => {
    return (    
        <>
            <Wrapper>
                <Title><Link to="/">Game of Thrones DB</Link></Title>
                <div>
                    <Button><Link to="/characters/">Characters</Link></Button>
                    <Button><Link to="/houses/">Houses</Link></Button>
                    <Button><Link to="/books/">Books</Link></Button>
                    <Outlet /> 
                </div>
            </Wrapper>
            <Outlet />  
              
        </>
        
    );
}

export default NavMenu;