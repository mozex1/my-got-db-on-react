import React, { Component } from "react";
import GotService from "../services/gotService";
import styled from 'styled-components';
import CharacterPage from "./pages/characterPage.js";
import BooksPage from "./pages/booksPage.js";
import HousesPage from "./pages/housesPage.js";
import NavMenu from "./nav.js";
import RandomChar from "./randomChar";
import ErrorMessage from "./errorMessage/errorMessage.js";
import ErrorPage from "./pages/errorPage.js";
import BooksItem from "./pages/booksItem.js";
import { Routes, Route } from "react-router-dom";

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 1000px;
`;

const Button = styled.button`
    margin-top: 17px;
    padding: 10px;
    height: 50px;
    width: auto;
    margin-left: 20px;
    border: none;
    outline: none;
    border-radius: 3px;
    font-size: 15px;
    background-color: #df7c00;
    color: #fff;
`;


export default class App extends Component {
    gotService = new GotService();
    state = {
        visibleRandomChar: true,
        error: false,
    }

    componentDidCatch() {
        console.log('catch');
        this.setState({
            error: true,
        })
    }

    toggleRandomChar() {
        this.setState({ 
            visibleRandomChar: !this.state.visibleRandomChar,
        })
    }


    render() {
        const char = this.state.visibleRandomChar ? <RandomChar interval={100000}/> : null;
        if(this.state.error) {
            return <ErrorMessage/>
        }
        return (
                <div>
                <AppBlock>
                    <NavMenu/>
                    <Button onClick={() => this.toggleRandomChar()}>Toggle!</Button>
                    {char} 
                    <Routes>
                        <Route path="/" element={<h1>Got home</h1>} /> 
                        <Route path="/characters" element={<CharacterPage/>} /> 
                        <Route path="/houses" element={<HousesPage/>} /> 
                        <Route path="/books" element={<BooksPage/>} />
                        <Route path="/books/:booksid" element={<BooksItem />}/>
                        <Route path="*" element={<ErrorPage/>}/>       
                    </Routes>
                    
                </AppBlock>
                </div>

            )
    }
}

