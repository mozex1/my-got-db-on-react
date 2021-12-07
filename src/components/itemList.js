import React, {useState, useEffect} from "react";
import Spinner from "./spinner/spinner.js";
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

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

export default function ItemList({getData, onItemSelected, renderItem, character}) {
    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData()
            .then((data) => {
                updateList(data);
                console.log(updateList(data));
            })
    }, [])

    

    function renderItems(arr) {
        return arr.map((item, i) => {
            const label = renderItem(item);
            
            let counterId = i + 1;
            if(character) { counterId = i + 61}
            return (
                <LiItem 
                key={i}
                onClick={() => onItemSelected(counterId)}
                >{label}
                </LiItem>
            )

            
        })
    }

    if (!itemList) {
        return <ListGroup><Spinner/></ListGroup>
    }

    const items = renderItems(itemList);

    return (
        <>
            <ListGroup>
                {items}
            </ListGroup>
        </>
    ) 
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
}




