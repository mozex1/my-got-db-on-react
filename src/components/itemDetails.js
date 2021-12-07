import React, {Component} from "react";
import GotService from '../services/gotService.js'
import ErrorMessage from "./errorMessage/errorMessage";
import Spinner from "./spinner/spinner.js";
import styled from 'styled-components';


const ListGroup = styled.ul`
    overflow: hidden;
    margin-top: 30px;
    width: 400px;
    height: 300px;
    background-color: #fff;
    list-style: none;
    padding: 10px;
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
        margin-bottom: 10px;
        color: black;
        font-size: 28px;
    }
`

const Field = ({item, field, label}) => {
    return (<LiItem><span>{label}</span><em>{item[field]}</em></LiItem>)
}

export {Field};

export default class ItemDetails  extends Component {
    gotService = new GotService();

    state = {
        item: null,
        error: false,
    }

    onError = (err) => {
        this.setState({
            error: true,
        })
    }

    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId){
            this.updateItem();
        }
    }

    updateItem() {
        const {getData} = this.props;
        const {itemId} = this.props;
        if (!itemId){
            return
        }
        getData(itemId)
            .then((item) => {
                this.setState({item})
            })
            .catch(this.onError);

    }

    render(){
        if (!this.state.item) {
            return <ListGroup><Spinner/></ListGroup>
        }
        if (this.state.error) {
            return <ListGroup><ErrorMessage/></ListGroup>
        }

        const {item} = this.state;
        const {name} = item;

        return (
            <>
                <ListGroup>
                    <LiItem>{name}</LiItem>
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ListGroup>
            </>
        )
    }

}

    
        
    
