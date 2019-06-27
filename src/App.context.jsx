import React,{Component,createContext} from 'react';
import './App.css';

const BatteryContext = createContext();
const OnlineContext = createContext();

 class Leaf extends Component {
  render() {
    return (
      <BatteryContext.Consumer>
        {/* 不能直接渲染其他组件，需要声明一个函数，函数的唯一参数就是context的值 */}
        {
          battery => (
            <OnlineContext.Consumer>
              {
                online => <h1>Battery:{battery},Online:{String(online)}</h1>
              }
            </OnlineContext.Consumer>
          )
        }
      </BatteryContext.Consumer>
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
    online:false
  };

  render(){
    const {battery,online} = this.state
    return (
     <BatteryContext.Provider value={battery}>  
      <OnlineContext.Provider value={online}>  
        {/* Provider必须有初始值 */}
        <button type='button' onClick={()=>this.setState({battery:battery-1})}>电量控制</button>
        <button type='button' onClick={()=>this.setState({online:!online})}>联网控制</button>
        <Middle/>
      </OnlineContext.Provider>
     </BatteryContext.Provider>
    );
  }
  
}

export default App;
