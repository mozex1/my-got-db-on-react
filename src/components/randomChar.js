import React, {Component} from "react";
import GotService from "../services/gotService";
import Spinner from "./spinner/spinner.js";
import ErrorMessage from "./errorMessage/errorMessage";
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const ListGroup = styled.ul`
    overflow: hidden;
    margin-top: 30px;
    width: 400px;
    background-color: #fff;
    list-style: none;
    padding: 20px;
    height: auto;
    border-radius: 10px;
    span {
        font-weight: bold;
        float: left;
        color: black;
    }
    em {
        float: right;
        color: black;
    }
`

const LiItem = styled.li`
    overflow: hidden;
    padding: 10px 20px;
    font-size: 15px;
    border-bottom: 1px solid rgba(0,0,0, 10%);
    :last-child {
        border-bottom: none;
    }
    :first-child{
        border-bottom: 0;
        text-align: center;
        font-weight: bold;
        padding: 15px 0 10px 15px;
        margin-bottom: 10px;
        color: black;
        font-size: 28px;
    }
`

export default class RandomChar  extends Component {

    gotService = new GotService();
    state = {
        char: {},
        loading: true,
    }

    static defaultProps = {
        interval: 15000,
    }
    
    static propTypes = {
        interval: PropTypes.number,
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({ 
            char,
            loading: false,
            error: false,
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random()* 140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render(){
        const { char: { name, gender, born, died, culture }, loading, error } = this.state;
        
        if (error){
            return <ListGroup><ErrorMessage/></ListGroup>
        }

        if (loading){
            return <ListGroup><Spinner/></ListGroup>
        }

        return (
            <>
            <ListGroup>
                    <LiItem>Random character:<br></br>{name}</LiItem>
                    <LiItem><span>Gender</span><em>{gender}</em></LiItem>
                    <LiItem><span>Born</span><em>{born}</em></LiItem>
                    <LiItem><span>Died</span><em>{died}</em></LiItem>
                    <LiItem><span>Culture</span><em>{culture}</em></LiItem>
            </ListGroup>
            </>
        )
    }

}

