import React,{Component,createContext} from 'react';
import './App.css';

const BatteryContext = createContext();

 class Leaf extends Component {
  static contextType = BatteryContext;
  render() {
    const battery = this.context
    return (
      <h1>Battery:{battery}</h1>
      // <BatteryContext.Consumer>
      //   {/* 不能直接渲染其他组件，需要声明一个函数，函数的唯一参数就是context的值 */}
      //   {
      //     battery => (
      //        <h1>Battery:{battery}</h1>
      //     )
      //   }
      // </BatteryContext.Consumer>
    )
  }
}


class Middle extends Component {
  render () {
    return (
      <Leaf/>
    )
  }
}

class App extends Component {
  state = {
    battery:60,
  };

  render(){
    const {battery} = this.state
    return (
     <BatteryContext.Provider value={battery}>  
        {/* Provider必须有初始值 */}
        <button type='button' onClick={()=>this.setState({battery:battery-1})}>电量控制</button>
        <Middle/>
     </BatteryContext.Provider>
    );
  }
  
}

export default App;
