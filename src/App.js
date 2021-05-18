import React from "react";
import axios from "axios";

class App extends React.Component{  
  state={
    isLoading: true,
    movies:[]
  }; //state에 사용할 변수를 미리 선언하지 않아도 된다. setState만 써도 됨.
  //하지만 이렇게 써놓는 것이 코드 읽기에 편하기 때문에 선언하는 습관을 들이는 것이 좋겠다.
  
//함수 비동기화. axios가 데이터를 불러오기를 기다려준다. async와 await은 한 세트
getMovies = async ()=>{
  const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
  return movies;
}

  //componentDidMount에서 이론적으로 data를 fetch한다
  componentDidMount(){
     /*
    axios = fetch 위에 있는 작은 layer
    npm install axios

    YTS의 API를 사용할 것이다. yts.mx/api접속
    YTS는 불법적으로 영화 올리는 곳임. 그래서 매번 URL이 바뀌어서 API도 바뀐다.
    그래서 니콜라스가 YTS Proxy라는 것을 만들어서 사용하면 매번 바뀌는 URL에 대응할 수 있다
    https://yts-proxy.nomadcoders1.now.sh/list_movies.json
    */
   /* 동기화
   axios는 느리기 때문에 동기화가 필요하다.
   방법 1. componentDidMount() 앞에 async 를 붙여 함수 자체를 비동기식 함수로 바꾼다
   방법 2. getMovies라는 async함수를 만들어서 그 안에서 axios를 await으로 실행한다.
   여기서는 방법 2로 구현해볼 것임.
   */
    this.getMovies();
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