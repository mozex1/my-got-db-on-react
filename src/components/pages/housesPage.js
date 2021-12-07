import React, {Component} from "react";
import ItemList from "../itemList.js";
import ItemDetails, {Field} from "../itemDetails.js";
import GotService from "../../services/gotService";
import ErrorMessage from "../errorMessage/errorMessage.js";
import WrapperBlock from "../wrapperBlock.js";

export default class HousesPage extends Component {
    gotService = new GotService();
    state = {
        selectetItem: 1,
        error: false,
    }

    onItemSelected = (id) => {
        this.setState({
            selectetItem: id,
            error: false,
        })
    }

    componentDidCatch() {
        this.setState({
            error: true,
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={(item) => `${item.name}`}/>
        )
        const itemDetails = (
            <ItemDetails itemId={this.state.selectetItem} getData={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                {/* <Field field='overlord' label='Overlord'/> */}
                <Field field='ancestralWeapon' label='AncestralWeapon'/>
            </ItemDetails>
        )

        return (
            <WrapperBlock left={itemList} right={itemDetails}/>
        )
    }
}