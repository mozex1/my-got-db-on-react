import React, {Component} from "react";
import ItemList from "../itemList.js";
import ItemDetails, {Field} from "../itemDetails.js";
import GotService from "../../services/gotService";
import ErrorMessage from "../errorMessage/errorMessage.js";
import WrapperBlock from "../wrapperBlock.js"

export default class CharacterPage extends Component {
    gotService = new GotService();
    state = {
        selectetItem: 61,
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
                getData={this.gotService.getAllCharacters}
                renderItem={(item) => `${item.name} (${item.gender})`}
                character/>
        )
        const itemDetails = (
            <ItemDetails itemId={this.state.selectetItem} getData={this.gotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )

        return (
            <WrapperBlock left={itemList} right={itemDetails}/>
        )
    }
}