import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

//react-router-dom으로 라우터 만들기
//리액트 라우터는 모든 라우팅 주소에 매치하면 다 렌더링한다.
// /home/introduction 하면 /home에 있는 것도 렌더링하고 /home/introduction도 렌더링해서 2개의 컴포넌트를 갖게 된다
// 고치는 방법은 exact={true}를 넣음. 완전 똑같아야 렌더링해라는 뜻

// 추가로, 꼭 모든 컴포넌트를 Router안에 넣을 필요는 없다,
//단, Link를 사용하는 컴포넌트는 Router안에 있어야한다.

//HashRouter는 localhost:3001/#/about 이런식으로 #이 끼워짐. BrowserRouter는 안끼워짐
//근데 github pages에 올릴 땐 Hash가 설정하기 편하다고 그랬음.

//BrowserRouter는 동적인 페이지, HashRouter는 정적인 페이지에 적합하다.
//새로고침하면 경로를 찾지 못해서 에러가난다 / 새로고침해도 에러가 나지 않는다
//github pages에서 설정하기 복잡하다 / github pages에서 설정하기 간편하다.

// 라우팅할 때 /movie/:id라고 하면 임의 id로 라우팅이 가능하다.
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
