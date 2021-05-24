import React from "react";
import "./About.css";

//props를 사용하면 클릭한번으로 정보를 보낼 수 있다.
function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.”
      </span>
      <span>− George Orwell, 1984</span>
    </div>
  );
}

export default About;
