import React from "react";


class App extends React.Component{  
  state={
    isLoading: true,
    movies:[]
  }; //state에 사용할 변수를 미리 선언하지 않아도 된다. setState만 써도 됨.
  //하지만 이렇게 써놓는 것이 코드 읽기에 편하기 때문에 선언하는 습관을 들이는 것이 좋겠다.
  

  //componentDidMount에서 이론적으로 data를 fetch한다
  componentDidMount(){
    
    console.log("DidMount start");
    //6초 후에 익명함수 실행. setState 문법 
    setTimeout(() => {
      this.setState({isLoading : false});
    }, 6000);
    console.log("DidMount done"); //얘는 비동기식이라 setTimeout하는 동안 실행끝남.
  }

  render(){
    console.log("render start");
    /*this.state.isLoading 대신 그냥 isLoading 사용을 위한 전처리
    ES6 문법임. isLoading은 this.state에서 온거다.*/
    const{isLoading} = this.state; 

    return (<div>
      {isLoading ? "Loading...": "We are ready"}
    </div>);
  }
}


export default App;