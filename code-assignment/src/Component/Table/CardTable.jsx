import React from 'react';
import TableList from './TableList';
class CardTable extends React.Component {
    render(){
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Health</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Damage</th>
                    </tr>
                </thead>
                <TableList cardData={this.props.cardData}/>
            </table>
        )
    }
}

export default CardTable;