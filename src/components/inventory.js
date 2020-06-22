import React, { Component } from 'react';
import AddFish from './addFish';
import Editformfish from'./editformfish';
import './stylesheets/inventory.css';
class Inventory extends Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                <AddFish addFish={this.props.addFish}/>
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
                <h3>Data</h3>
                {Object.keys(this.props.fishes).map(fish=><Editformfish updateFish={this.props.updateFish}  fish={this.props.fishes[fish]} index={fish} key={fish}/>)}

            </div>
        );
    }
}

export default Inventory;