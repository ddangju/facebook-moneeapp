import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

export default class Login extends Component {
  state = {
    idCheck: "abcde",
    pwCheck: "123456",
    inputId: "",
    inputPw: "",
  };

  handleId = (e) => {
    this.setState({ inputId: e.target.value });
  };

  handlePw = (e) => {
    this.setState({ inputPw: e.target.value });
  };

  loginCheck = () => {
    if (
      this.state.inputId === this.state.idCheck &&
      this.state.inputPw === this.state.pwCheck
    ) {
      this.goToFeed();
    } else {
      alert("아이디와 비밀번호를 확인해주세요");
    }
  };

  goToFeed = () => {
    window.location.href = "/feed";
  };

  render() {
    return (
      <div className="totalContainer">
        <section className="logoContainer">
          <img alt="img" src="/images/faceBookLogo.png" className="logoImg" />
        </section>
        <div className="loginContainer">
          <section className="inputContainter">
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              onChange={this.handleId}
            ></input>
            <input
              type="password"
              placeholder="비번을 입력하세요"
              onChange={this.handlePw}
            ></input>
          </section>

          <button
            className={
              this.state.inputId.length > 4 && this.state.inputPw.length > 5
                ? "loginBtnOn"
                : "loginBtnOff"
            }
            onClick={this.loginCheck}
          >
            로그인
          </button>
        </div>
        <article className="signContainer">
          <p>Facebook 가입</p>
          <p>도움이 필요하세요?</p>
        </article>
      </div>
    );
  }
}
