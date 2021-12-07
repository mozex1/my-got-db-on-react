import React from "react";
import ItemList from "../itemList.js";
import GotService from "../../services/gotService";
import { useNavigate } from 'react-router-dom';

// import ItemDetails, {Field} from "../itemDetails.js";
// import ErrorMessage from "../errorMessage/errorMessage.js";
// import WrapperBlock from "../wrapperBlock.js"


// class BookPage extends Component {
//     gotService = new GotService();
//     state = {
//         selectetItem: 1,
//         error: false,
//     }

//     onItemSelected = (id) => {
//         this.setState({
//             selectetItem: id,
//             error: false,
//         })
//     }

//     componentDidCatch() {
//         this.setState({
//             error: true,
//         })
//     }

//     render() {
//         if (this.state.error) {
//             return <ErrorMessage/>
//         }

//         const itemList = (
//             <ItemList
//                 onItemSelected={this.onItemSelected}
//                 getData={this.gotService.getAllBooks}
//                 renderItem={(item) => `${item.name}`}
//                 books/>
//         )
//         const itemDetails = (
//             <ItemDetails itemId={this.state.selectetItem} getData={this.gotService.getBook}>
//                 <Field field='authors' label='Authors'/>
//                 <Field field='numberOfPages' label='Number Of Pages'/>
//                 <Field field='released' label='Released'/>
//                 <Field field='country' label='Country'/>
//             </ItemDetails>
//         )

//         return (
//             <WrapperBlock left={itemList} right={itemDetails}/>
//         )
//     }
// }

export default function BooksPage() {
    let navigate = useNavigate();
    const gotService = new GotService();
    return (
        <ItemList
        onItemSelected={(itemId) => {
            navigate(`${itemId}`)
        }}
        getData={gotService.getAllBooks}
        renderItem={(item) => `${item.name}`}
        books/>
    )

}