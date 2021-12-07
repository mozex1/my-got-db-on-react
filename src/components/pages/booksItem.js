import React from "react";
import GotService from "../../services/gotService.js";
import ItemDetails, {Field} from "../itemDetails.js";
import { useParams } from "react-router-dom";


export default function BooksItem() {
    let gotService = new GotService();
    let { booksid } = useParams();

    return (
        <ItemDetails itemId={booksid} getData={gotService.getBook}>
                <Field field='authors' label='Authors'/>
                <Field field='numberOfPages' label='Number Of Pages'/>
                <Field field='released' label='Released'/>
                <Field field='country' label='Country'/>
        </ItemDetails> 
        )
}