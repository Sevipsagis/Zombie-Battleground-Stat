import React, { Component } from 'react';
import './App.css';
import Header from '../Component/Header';
import CardTable from '../Component/Table/CardTable'
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get("https://api.loom.games/zb/v1/cards").then(res => {
            this.setState(res.data);
            console.log(this.state)
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <Header />
                <CardTable cardData={this.state.cards} />
            </div>
        );
    }
}

export default Home;