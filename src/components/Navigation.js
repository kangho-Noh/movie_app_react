import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

//a 태그로 html을 옮겨가면 리액트를 죽이고 페이지를 새로고침한다.
//그걸 원하지 않는다면 react-router-dom 에 있는 Link를 사용한다.

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
