import React from 'react';
import TableItem from './TableItem';

class TableList extends React.Component {

    showList() {
        if (this.props.cardData) {
            return this.props.cardData.map((card, index) => (
                <TableItem key={card.id} index={index + 1} card={card} />
            ))
        }
    }

    render() {
        return (
            <tbody>
                {this.showList()}
            </tbody>
        )
    }
}

export default TableList;