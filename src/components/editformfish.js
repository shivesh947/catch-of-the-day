import React, { Component } from 'react';
import './stylesheets/editformfish.css';
class Editformfish extends Component {
    handleChange=(event)=>{
        const updatedFish={
            ...this.props.fish,
            [event.currentTarget.name]:event.currentTarget.value
        }
        console.log(updatedFish)
        this.props.updateFish(this.props.index,updatedFish);
    }
    render() {
        return (
            <div className="fish__edit">
               <input type="text" placeholder="Name" onChange={this.handleChange} name="name" defaultValue={this.props.fish.name}/>
               <input type="text" placeholder="Price" onChange={this.handleChange} name="price" defaultValue={this.props.fish.price}/>
               <select onChange={this.handleChange}  placeholder="Status" defaultValue={this.props.fish.status} name="status">
                   <option value="available">Fresh!</option>
                   <option value="unavailable">Sold Out!</option>
               </select>
               <textarea onChange={this.handleChange} name="desc" placeholder="Desc"  defaultValue={this.props.fish.desc}></textarea>
               <input type="text" placeholder="Image" onChange={this.handleChange} name="image"  defaultValue={this.props.fish.image}/>
                <hr/>
            </div>
        );
    }
}

export default Editformfish;