import React from "react";
import "./Detail.css";

//props를 사용하면 클릭한번으로 정보를 보낼 수 있다.
//함수형 컴포넌트에서는 argument로 props 가져오면 되고
//클래스형 컴포넌트에서는 this.props로 사용할 수 있다.
// 받아내는 변수를 {}로 감싸면 한 단계 안에 있는 변수 가져옴
// ex) {location} = this.props; => location에는 props.location이 들어감
class Detail extends React.Component {
  componentDidMount() {
    //location은 state를 가져와서 이전 페이지에서 받은 정보를 받기 위한 용도
    //history는 잘못된 접근을 막기 위해서 리다이렉션을 하기 위한 용도
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/"); //home으로 리다이렉션
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      //새로고침했을 때 state값이 없어져서 이렇게 예외처리필요
      return <span>{location.state.title}</span>;
    } else {
      // render함수가 componentDidMount보다 먼저 실행되어서 null 리턴하고 리다이렉팅 되도록 기다림
      return null;
    }
  }
}

export default Detail;
