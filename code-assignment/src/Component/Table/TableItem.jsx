import React from 'react';
import { Link } from 'react-router-dom';
class TableItem extends React.Component {
    render() {
        const { name, health, cost, damage, image_url, id } = this.props.card;
        const index = this.props.index;
        const cardURL = "/card/" + id;
        return (
            <tr data-toggle="tooltip" title="<img src='image_url' />">
                <th scope="row">{index}</th>
                <Link to={cardURL}><td>{name}</td></Link>
                <td>{health}</td>
                <td>{cost}</td>
                <td>{damage}</td>
            </tr>
        )
    }
}

export default TableItem;