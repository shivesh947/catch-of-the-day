import React, { Component } from 'react';

class AddFish extends Component {
    nameRef=React.createRef();
    priceRef=React.createRef();
    statusRef=React.createRef();
    descRef=React.createRef();
    imageRef=React.createRef();
    createFish=(event)=>{
        event.preventDefault();
        const fish={
            name:this.nameRef.current.value,
            price:this.priceRef.current.value,
            status:this.statusRef.current.value,
            desc:this.descRef.current.value,
            image:this.imageRef.current.value
        };
        this.props.addFish(fish);
        // console.log(fish);
        event.currentTarget.reset();// reset form
        
    }
    

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
               <input type="text" placeholder="Name" name="name" ref={this.nameRef}/>
               <input type="text" placeholder="Price" name="price" ref={this.priceRef} />
               <select placeholder="Status" ref={this.statusRef}>
                   <option value="available">Fresh!</option>
                   <option value="unavailable">Sold Out!</option>
               </select>
               <textarea name="desc" placeholder="Desc" ref={this.descRef}></textarea>
               <input type="text" placeholder="Image" name="image" ref={this.imageRef} />
               <input type="submit" value="+ Add Fish" />
            </form>
        );
    }
}

export default AddFish;