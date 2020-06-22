import React, { Component } from 'react';
import './stylesheets/order.css'
class order extends Component {

    renderOrder=key=>{
        const fish=this.props.fishes[key];
        const count =this.props.order[key];
        const isAvailabe=fish && fish.status==='available';
        if(!fish)
        {
            return null;
        }
        if(!isAvailabe)
        {
            return <li key={key}>Sorry {fish ? fish.name:'fish'} is no longer available</li>
        }
    return <li key={key}>
        <div className="orderwrap__div">
            <span className='orderwrap__count'>{count} lbs</span>
              <span className='orderwrap__name'>{fish.name} </span>
             <span className='orderwrap__price'>{count*fish.price}</span>
        </div>
        
    </li>;
    }
    render() {
        const orderIds=Object.keys(this.props.order);
        const total=orderIds.reduce((prevTotal,key)=>{
            const fish=this.props.fishes[key];
            const count=this.props.order[key];
            const isAvailabe=fish && fish.status==='available';
            
            if(isAvailabe)
            {
                return prevTotal + (count*fish.price);
            }
            return prevTotal
        },0);
        return (
            <div className="orderwrap">
                <h2 className="orderwrap__heading">Order</h2>
                <ul className="orderwrap__list">
                {orderIds.map(this.renderOrder)}
                </ul>
                <div className="orderwrap__total">
                    Total : <h4>{total}</h4>
                </div>
            </div>
        );
    }
}

export default order;