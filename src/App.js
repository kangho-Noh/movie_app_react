import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
/*
class와 className 리액트 내의 html은 html이 아니라 JSX다. 
결국 JS와 문법을 같이하는 것이므로, class, for 과 같이 속성이름과
자바스크립트의 문법과 같은 이름을 가진 것들을 구분하기 위해 JSX에는 class 대신 className을 사용한다.
*/
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }; //state에 사용할 변수를 미리 선언하지 않아도 된다. setState만 써도 됨.
  //하지만 이렇게 써놓는 것이 코드 읽기에 편하기 때문에 선언하는 습관을 들이는 것이 좋겠다.

  //함수 비동기화. axios가 데이터를 불러오기를 기다려준다.
  //async와 await은 한 세트
  getMovies = async () => {
    console.log("API 불러오기 시작");
    /*const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
  console.log(movies.data.data.movies);*/
    //위 방법은 .이 너무 많아서 ES6에서 다르게 표현 가능해졌다
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    //await 함수는 비동기적으로 동작함.

    //console.log(movies);

    //this.setState({movies:movies});//앞의 movies는 state의 movies, 뒤 movies는 axios로 가져온 movies
    this.setState({ movies, isLoading: false }); //ES6의 문법으로 그냥 movies만 써도 이해함
    return movies;
  };

  //componentDidMount에서 이론적으로 data를 fetch한다
  componentDidMount() {
    this.getMovies();
    console.log("API 불러오기 완료"); //getMovies와 비동기적으로 동작. 그러나 안에 있는 await가 붙은 함수만 동기적으로 동작.
  }

  render() {
    console.log("render start");
    /*this.state.isLoading 대신 그냥 isLoading 사용을 위한 전처리
    ES6 문법임. isLoading은 this.state에서 온거다.*/
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie //{return } 대신 () 사용해도 된다.
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
