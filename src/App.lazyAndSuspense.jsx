import React,{Component,lazy,Suspense} from 'react';
import './App.css';

const About = lazy(()=>import('./About'))

class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>loading</div>}>
          <About></About>
        </Suspense>
      </div>
    )
  }
}


export default App;
