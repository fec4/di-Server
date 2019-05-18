import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      listing: [1,2,3]
    }

  }
  render(){
    console.log(this.state.listing)
    return(
      <div>
        hihihihih
        <br></br>
        Hello world
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));