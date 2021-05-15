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
  
    //component life cycle functions
  //컴포넌트가 생성될 때, render 전에 실행되는 함수, render 후에 실행되는 함수, component가 update될 때 호출되는 함수도 있다.
  //Mounting: 태어나는 것 Updating: 업데이트 될 때 Unmounting: 죽을 때(페이지 바뀔 때 또는 component 삭제)

  /* Mounting - component가 mount될 때, screen에 표시될 때 constructor 호출*/
  constructor(props){ //constructor는 클래스 생성될 때 실행. render보다 먼저 실행
    super(props);
    console.log("constructor");
  }
  //componentDidMount() - 컴포넌트가 render되고 나서 실행됨. render되었음을 알리는 함수
  componentDidMount(){
    console.log("render done.");
  }

  /* Updating: add, minus 함수처럼 state를 변화시킬 때 수행되는 함수들 */
  //shouldComponentUpdate() - 업데이트 할지 말지 결정하는 함수
  //componentDidUpdate() - 업데이트 후(update된 컴포넌트 render 후) 실행되는 함수
  componentDidUpdate(){
    console.log("update done")
  }

  /* Unmounting - 컴포넌트 삭제 시 실행되는 함수들 다른 페이지로 이동할때도 실행 */
  componentWillUnmount(){
    console.log("Goodbye")
  }



  render(){ //react는 자동적으로 class component의 render method를 실행한다.
    console.log("render")
    return (<div>
      <h1>Im a class {this.state.count} component</h1>
      <button onClick={this.add}>plus</button>
      <button onClick={this.minus}>minus</button>
      </div>)
  }
}


export default App;