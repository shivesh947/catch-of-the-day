import React, { Component } from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';
import Fish from'./fish';
// import fishes from './samplefish';
import './App.css';
import base from '../base';
class App extends Component {
  state={
    fishes:{},
    order:{}
  };
  ref=''

  componentDidMount(){
    const {params}=this.props.match;
    const localStorageRef=localStorage.getItem(this.props.match.params.storeId);
    if(localStorageRef)
    {
      this.setState({order:JSON.parse(localStorageRef)});
    }
    this.ref=base.syncState(`${params.storeId}/fishes`,{
      context:this,
      state:'fishes'
    });
  }
  componentWillMount(){
    base.removeBinding(this.ref)
  }

  componentDidUpdate(){
    console.log(this.state.order);
    localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order));
    console.log("It updated!!")
  }
  addFish=fish=>{
    const fishes={...this.state.fishes};
    fishes[`fish${Date.now()}`]=fish;
    this.setState({
      fishes:fishes
    })
    console.log(this.state.fishes)
  }
  loadSampleFishes=()=>{
    alert('loding sample');
    // this.setState({ fishes: fishes})
  }

  addToOrder = (key)=>{
    const order={...this.state.order};
    order[key]=order[key] + 1 || 1;
    this.setState({order})
  }

  updateFish=(key,updateFish)=>{
    const fishes={...this.state.fishes};
    fishes[key]=updateFish;
    this.setState({fishes});
    // this.setState({fishes}); how work
  }
  render() {
    return (
      <div id="mainwrap">
        {/* {this.props.match.para ms.storeId} */}
        <div id="head">
        <Header title={this.props.match.params.storeId}/>
        <ul className="fishes">
        {Object.keys(this.state.fishes).map((key,index)=><Fish fish={this.state.fishes[key]} key={index} index={key} addToOrder={this.addToOrder}></Fish>)}
        </ul>
        </div>
        <div id="order">
          <Order fishes={this.state.fishes} order={this.state.order}/>
        </div>
        <div id="inventory">
          <Inventory updateFish={this.updateFish} addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} fishes={this.state.fishes}/>
        </div>
      </div>
    );
  }
}

export default App;