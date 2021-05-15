import React from "react";
import PropTypes from "prop-types";


class App extends React.Component{
  state={ //state는 변하는 data를 저장하는 class이다.
    count:0
  };
  add = () =>{
    //this.state.count+=1; 이렇게 해봤자 render()는 refresh하지 않아서 변하지않음
    //setState함수로 state객체의 값을 변경하고 render까지 가능하다

    //this.setState({count:this.state.count+1});
    //그러나 위코드도 좋은 코드는 아니다. state에 의존하게되면 몇가지 성능 문제 나중에 발생할 수 있다.
    
    this.setState(current=>({count: current.count+1}));
    //current로 함수형식으로 불러와서 외부 상태에 의존하지 않는 방법을 사용한다.
  };
  minus = () =>{
    this.setState(current=>({count: current.count-1}));
  };
  render(){ //react는 자동적으로 class component의 render method를 실행한다.
    return <div>
      <h1>Im a class {this.state.count} component</h1>
      <button onClick={this.add}>plus</button>
      <button onClick={this.minus}>minus</button>
      </div>
  }
}


export default App;