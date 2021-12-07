import React, {Component} from "react";
import Spinner from "./spinner/spinner.js";
import PropTypes from 'prop-types'; 
import styled from 'styled-components';
import GotService from '../services/gotService.js'

const ListGroup = styled.ul`
    overflow: hidden;
    margin-top: 30px;
    width: 400px;
    height: auto;
    background-color: #fff;
    list-style: none;
    padding: 20px;
    border-radius: 10px;
`

const LiItem = styled.li`
    overflow: hidden;
    padding: 10px 20px;
    font-size: 15px;
    border-bottom: 1px solid rgba(0,0,0, 10%);
    cursor: pointer;
    :last-child {
        border-bottom: none;
    }
`

class ItemList  extends Component {

    renderItems(arr) {
        const {character} = this.props;
        return arr.map((item, i) => {
            
            const label = this.props.renderItem(item);
            let counterId = i + 1;
            if(character) { counterId = 61 + i }
                return (
                    <LiItem 
                    key={i}
                    onClick={() => this.props.onItemSelected(counterId)}
                    >{label}
                    </LiItem>
                )

            
        })
    }

    render() {
        const {data} = this.props;
        const items = this.renderItems(data);

        return (
            <>
                <ListGroup>
                    {items}
                </ListGroup>
            </>
        )
    }  
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
}

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
        }
    
        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({
                        data: data,
                    })
                })
        }
        render(){
            const {data} = this.state;

            if (!data) {
                return <ListGroup><Spinner/></ListGroup>
            }
            return <View {...this.props} data={data}/>
        }
    }
}

const {getAllCharacters} = new GotService();
export default withData(ItemList, getAllCharacters);



