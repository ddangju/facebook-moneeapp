import { faCamera, faFlag, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Feedelements from "../../components/feed/Feedelements";
import "./Feed.scss";

export default class Feed extends Component {
  state = {
    data: [],
    feedData: [{ feedContent: "/images/feedImg.jpg" }],
  };

  handleClick = () => {
    this.setState({
      feedData: this.state.feedData.concat(this.state.data),
    });
  };
  handleChange = (e) => {
    this.setState({ data: { text: e.target.value } });
  };

  render() {
    const { handleChange, handleClick } = this;
    const { feedData } = this.state;
    return (
      <div className="feedContainer">
        <header className="headerContainer">
          <img className="headerCover" src="/images/cover.jpg" alt="coverImg" />
          <img className="headerImg" src="/images/profile.jpg" alt="profile" />
        </header>
        <section className="timeLineContainer">
          <article className="timeLineInput">
            <div className="inputContainer">
              <img
                className="inputProfile"
                src="/images/profile.jpg"
                alt="profileImg"
              />
              <input
                className="inputBox"
                placeholder="무슨 생각을 하고 게신가요?"
                type="text"
                onChange={(e) => handleChange(e)}
              />
              <button className="post" onClick={handleClick}>
                게시
              </button>
            </div>
            <div className="inputIconContainer">
              <div className="iconBox">
                <FontAwesomeIcon icon={faVideo} color="#F02849" />
                <p className="iconText">라이브 방송</p>
              </div>
              <div className="iconBox">
                <FontAwesomeIcon icon={faCamera} color="#4B8F5C" />
                <p className="iconText">사진/동영상</p>
              </div>
              <div className="iconBox">
                <FontAwesomeIcon icon={faFlag} color="#4CB5D7" />
                <p className="iconText">중요 이벤트</p>
              </div>
            </div>
          </article>
          <article className="timeLineList">
            {feedData.map((item, idx) => {
              return (
                <Feedelements
                  key={idx}
                  elements={item.text}
                  FeedImg={item.feedContent}
                />
              );
            })}
          </article>
        </section>
      </div>
    );
  }
}
