import React, { useState, useEffect } from "react";

export default class search extends React.Component {
  constructor(props){
    super(props);

    this.state={
      query:'',
      showDropDown:false
    }
  }
  handleChange(term){
    console.log(term.target.value)
    this.setState({
      query:term.target.value,
      showDropDown:true
    })
  }
  handlerClick(){
    this.setState({
      showDropDown:false
    })
  }
  render(){
    return (
      <div>
        <input className="searchbar" type='text' value={this.state.query} placeholder='search me' onChange={this.handleChange.bind(this)} >

        </input>

        <button onClick={this.handlerClick.bind(this)}>Click Me</button>
        {this.state.showDropDown&&(
          <div>
            hi, i am drop down
          </div>
        )}
      </div>
    )
  }
}