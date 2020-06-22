import React, { Component } from 'react';
import './fish.css';
class Fish extends Component {
    handleClick=()=>{
        this.props.addToOrder(this.props.index)
    }
    render() {
        const image=this.props.fish.image;
        const name=this.props.fish.name;
        const description=this.props.fish.desc;
        const price=this.props.fish.price;
        const status=this.props.fish.status;
        const isAvailable=this.props.fish.status==="available";
        return (
            <div className="singlefish" style={{display:"flex"}}>
                <img src={image}  alt={name} />
                <div style={{position:"relative"}}>
                <h2>{name}</h2>
                <p>{description}</p>
                <button className={isAvailable?'Add' : 'Soldout'} disabled={!isAvailable} onClick={()=>this.handleClick()}>
                    {isAvailable?'Add to Cart' : 'Sold out!'}
                    </button>
                </div>
                <p>{price}</p>
            </div>
        );
    }
}

export default Fish;