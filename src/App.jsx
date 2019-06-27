import React,{Component} from 'react';
import './App.css';


class Foo extends Component {

  shouldComponentUpdate = (nextProps,nextstate) => {
    if(nextProps.name===this.props.name){
      return false
    }
    return true 
  }

  render() {
    console.log('Foo render')
    return (
      <div>
        
      </div>
    )
  }
}

class App extends Component {
  state ={
    count:0
  }
  render() {
    return (
      <div>
        <button type='button' onClick={()=>this.setState({count:this.state.count+1})}>add</button>
        <Foo name='Mike'></Foo>
      </div>
    )
  }
}

export default App

