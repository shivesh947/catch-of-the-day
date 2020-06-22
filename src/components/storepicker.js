import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './storepicker.css';
// import {getFunName} from 'helper-js'

class Storepicker extends Component {
   
    myInput=React.createRef();

    goToStore=(event)=>{
        event.preventDefault();
        // console.log(this.myInput.current.value);
        const storeName=this.myInput.current.value;
        this.props.history.push(`./store/${storeName}`);
    }
    render() {
        return (
            <div className="storewrap">
                <form onSubmit={this.goToStore} className="storewrap__form">
                            <h2>PLEASE ENTER YOUR A STORE</h2>
                            <input 
                            type="text" 
                            required
                            value="defeated-worried-elves"
                            ref={this.myInput}
                            className="form__inputbox"
                             />
                             <button type="submit" className="form__button">
                                 Visit Store ->
                             </button>
                </form>
            </div>
        );
    }
}

export default Storepicker;