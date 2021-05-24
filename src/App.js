import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

//react-router-dom으로 라우터 만들기
//리액트 라우터는 모든 라우팅 주소에 매치하면 다 렌더링한다.
// /home/introduction 하면 /home에 있는 것도 렌더링하고 /home/introduction도 렌더링해서 2개의 컴포넌트를 갖게 된다
// 고치는 방법은 exact={true}를 넣음. 완전 똑같아야 렌더링해라는 뜻

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
