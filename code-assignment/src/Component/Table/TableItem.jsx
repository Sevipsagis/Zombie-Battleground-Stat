import React from 'react';

class TableItem extends React.Component {
    render() {
        const { name, health, cost, damage, image_url } = this.props.card;
        const index = this.props.index;
        return (
            <tr>
                <th scope="row">{index}</th>
                <td>{name}</td>
                <td>{health}</td>
                <td>{cost}</td>
                <td>{damage}</td>
            </tr>
        )
    }
}

export default TableItem;